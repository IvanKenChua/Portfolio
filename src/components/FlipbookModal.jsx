import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

const FlipbookModal = ({ src, title, onClose }) => {
  const [pdf, setPdf] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);
  const [pdfAspectRatio, setPdfAspectRatio] = useState(0.707);

  const leftPageRef = useRef(null);
  const rightPageRef = useRef(null);
  const containerRef = useRef(null);
  const bookAreaRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const showTwoPages = !isMobile && !isFullscreen;
  const [, setTick] = useState(0);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      setTick((t) => t + 1);
    };
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Load PDF
  useEffect(() => {
    let cancelled = false;
    const loadPdf = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(src);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.arrayBuffer();
        if (cancelled) return;
        const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(data) });
        const pdfDoc = await loadingTask.promise;
        if (cancelled) return;
        setPdf(pdfDoc);
        setTotalPages(pdfDoc.numPages);
        setSpreadIndex(0);

        const page = await pdfDoc.getPage(1);
        const vp = page.getViewport({ scale: 1 });
        setPdfAspectRatio(vp.width / vp.height);
      } catch (err) {
        if (cancelled) return;
        console.error("PDF load error:", err);
        setError("Failed to load PDF. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    loadPdf();
    return () => { cancelled = true; };
  }, [src]);

  // Number of spreads: 1 (cover) + interior spreads
  const numSpreads = totalPages > 0
    ? 1 + Math.ceil((totalPages - 1) / 2)
    : 0;

  // Derive which PDF pages to show
  const isCover = spreadIndex === 0;
  let leftPageNum, rightPageNum;

  if (isCover) {
    leftPageNum = 1;
    rightPageNum = null;
  } else {
    leftPageNum = spreadIndex * 2;
    rightPageNum = spreadIndex * 2 + 1;
    if (rightPageNum > totalPages) rightPageNum = null;
  }

  const getContainerSize = useCallback(() => {
    const el = bookAreaRef.current;
    if (!el) return { w: window.innerWidth, h: window.innerHeight };
    const rect = el.getBoundingClientRect();
    return { w: rect.width, h: rect.height };
  }, []);

  const renderPage = useCallback(
    async (pageNum, canvas, targetW, targetH) => {
      if (!pdf || !canvas || pageNum < 1 || pageNum > totalPages) return;
      try {
        const page = await pdf.getPage(pageNum);
        const naturalW = targetH * pdfAspectRatio;
        const naturalH = targetH;
        const scale = naturalW / (page.getViewport({ scale: 1 }).width);
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${naturalW}px`;
        canvas.style.height = `${naturalH}px`;

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvasContext: ctx, viewport }).promise;
      } catch (err) {
        console.error(`Error rendering page ${pageNum}:`, err);
      }
    },
    [pdf, pdfAspectRatio, totalPages]
  );

  // Navigation
  const goNext = useCallback(() => {
    if (isFlipping) return;
    if (spreadIndex >= numSpreads - 1) return;
    setIsFlipping(true);
    setFlipDirection("next");
    setTimeout(() => {
      setSpreadIndex((s) => s + 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 350);
  }, [isFlipping, spreadIndex, numSpreads]);

  const goPrev = useCallback(() => {
    if (isFlipping) return;
    if (spreadIndex <= 0) return;
    setIsFlipping(true);
    setFlipDirection("prev");
    setTimeout(() => {
      setSpreadIndex((s) => s - 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 350);
  }, [isFlipping, spreadIndex]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Render visible pages
  useEffect(() => {
    if (!pdf || loading) return;

    let raf;
    const renderVisiblePages = async () => {
      const { w: containerW, h: containerH } = getContainerSize();
      const padding = isMobile ? 40 : 100;
      const availableW = containerW - padding;
      const availableH = containerH - padding;

      const useTwoPages = showTwoPages && !isCover;

      let pageH, pageW;
      if (useTwoPages) {
        const twoPageAspect = (pdfAspectRatio * 2) + 0.02;
        if (availableW / availableH > twoPageAspect) {
          pageH = availableH;
        } else {
          pageH = availableW / twoPageAspect;
        }
        pageW = pageH * pdfAspectRatio;
      } else {
        if (availableW / availableH > pdfAspectRatio) {
          pageH = availableH;
        } else {
          pageH = availableW / pdfAspectRatio;
        }
        pageW = pageH * pdfAspectRatio;
      }

      if (leftPageRef.current) {
        await renderPage(leftPageNum, leftPageRef.current, pageW, pageH);
      }
      if (useTwoPages && rightPageRef.current && rightPageNum) {
        await renderPage(rightPageNum, rightPageRef.current, pageW, pageH);
      }

      const canvases = bookAreaRef.current?.querySelectorAll("canvas");
      canvases?.forEach((c) => {
        c.parentElement.style.width = `${pageW}px`;
        c.parentElement.style.height = `${pageH}px`;
      });
    };

    raf = requestAnimationFrame(() => renderVisiblePages());
    return () => cancelAnimationFrame(raf);
  }, [pdf, spreadIndex, totalPages, loading, showTwoPages, isCover, leftPageNum, rightPageNum, renderPage, getContainerSize, pdfAspectRatio, isMobile]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev, toggleFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
  };

  const canGoPrev = spreadIndex > 0;
  const canGoNext = spreadIndex < numSpreads - 1;

  const useTwoPages = showTwoPages && !isCover;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] overflow-hidden"
      role="dialog"
      aria-modal="true"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/90 backdrop-blur-md animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label={`Close ${title}`}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 sm:p-2.5 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Fullscreen toggle */}
      <button
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        className="absolute top-3 right-14 sm:top-4 sm:right-16 z-30 p-2 sm:p-2.5 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300"
      >
        {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
      </button>

      {/* Title */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
        <h3 className="text-xs sm:text-sm font-medium text-foreground/80 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
          {title}
        </h3>
      </div>

      {/* Loading */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="glass-strong rounded-2xl p-8 text-center animate-filter-in">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading portfolio...</p>
          </div>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="glass-strong rounded-2xl p-8 text-center max-w-md animate-filter-in">
            <p className="text-foreground font-medium mb-2">Unable to load PDF</p>
            <p className="text-sm text-muted-foreground mb-4">{error}</p>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Flipbook */}
      {!loading && !error && pdf && (
        <div
          ref={bookAreaRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ padding: isMobile ? "48px 8px 48px" : "56px 56px 56px" }}
        >
          <div
            className={`relative flex items-center justify-center transition-transform duration-350 ease-in-out ${
              isFlipping
                ? flipDirection === "next"
                  ? "-translate-x-4 opacity-80"
                  : "translate-x-4 opacity-80"
                : "translate-x-0 opacity-100"
            }`}
          >
            {/* Prev */}
            <button
              onClick={goPrev}
              disabled={!canGoPrev || isFlipping}
              aria-label="Previous page"
              className="absolute -left-4 sm:-left-8 md:-left-10 z-20 p-2 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>

            {/* Left page */}
            <div
              className={`relative bg-white overflow-hidden flex-shrink-0 ${
                useTwoPages ? "rounded-l-lg sm:rounded-l-xl" : "rounded-lg sm:rounded-xl"
              }`}
              style={{
                boxShadow: useTwoPages
                  ? "4px 4px 24px rgba(0,0,0,0.35), -2px 0 10px rgba(0,0,0,0.1)"
                  : "0 4px 30px rgba(0,0,0,0.35)",
              }}
            >
              <canvas ref={leftPageRef} className="block" />
              {useTwoPages && (
                <div
                  className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-l from-black/10 to-transparent"
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Right page */}
            {useTwoPages && rightPageNum && (
              <div
                className="relative bg-white rounded-r-lg sm:rounded-r-xl overflow-hidden flex-shrink-0"
                style={{
                  boxShadow: "-4px 4px 24px rgba(0,0,0,0.35), 2px 0 10px rgba(0,0,0,0.1)",
                }}
              >
                <canvas ref={rightPageRef} className="block" />
                <div
                  className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-r from-black/10 to-transparent"
                  aria-hidden="true"
                />
              </div>
            )}

            {/* Next */}
            <button
              onClick={goNext}
              disabled={!canGoNext || isFlipping}
              aria-label="Next page"
              className="absolute -right-4 sm:-right-8 md:-right-10 z-20 p-2 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      )}

      {/* Page counter */}
      {!loading && !error && pdf && (
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 glass rounded-full px-4 py-2 flex items-center gap-2 text-sm">
          {isCover ? (
            <span className="text-primary font-semibold">1</span>
          ) : rightPageNum ? (
            <>
              <span className="text-primary font-semibold">{leftPageNum}</span>
              <span className="text-muted-foreground">-</span>
              <span className="text-primary font-semibold">{rightPageNum}</span>
            </>
          ) : (
            <span className="text-primary font-semibold">{leftPageNum}</span>
          )}
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">{totalPages}</span>
        </div>
      )}
    </div>
  );
};

export default FlipbookModal;
