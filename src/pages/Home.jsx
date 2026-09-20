import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Facebook,
  Star,
  ExternalLink,
  Calendar,
  X,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useMemo, useState, useCallback, useRef, useEffect } from "react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/IvanKenChua",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ivankenchua/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/IvanKenChua/",
    label: "Facebook",
  },
];

const hideBrokenImage = (e) => {
  e.currentTarget.style.display = "none";
};

const seededRandom = (seed) => {
  let state = seed;
  return () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
};

const featuredProjects = [
  {
    id: "batch-2026-yearbook",
    title: "Batch 2026 Yearbook",
    category: "Prints",
    description: "The Senior Student Council (SSC) Class of 2026 — Batch Per Aspera Ad Finem yearbook design for Divine Word College of Legazpi. Includes front cover, administrators message, back cover, and graduates page.",
    year: "2026",
    thumbnail: "/projects/prints/batch_2026_yearbook/batch2026_yearbook-cover.png",
    images: [
      "/projects/prints/batch_2026_yearbook/batch2026_yearbook-cover.png",
      "/projects/prints/batch_2026_yearbook/batch2026_yearbook1.png",
      "/projects/prints/batch_2026_yearbook/batch2026_yearbook2.png",
      "/projects/prints/batch_2026_yearbook/batch2026_yearbook3.png",
      "/projects/prints/batch_2026_yearbook/batch2026_yearbook4.png",
    ],
  },
  {
    id: "machighian-polo-shirt",
    title: "The Machighian Polo Shirt",
    category: "Sublimation",
    description: "A sublimation-printed polo shirt design for The Machighian, showcasing school identity through vibrant apparel graphics.",
    year: "2026",
    thumbnail: "/projects/sublimation/the_machighian_polo_shirt/the_machighian_poloshirt-cover.png",
    images: [
      "/projects/sublimation/the_machighian_polo_shirt/the_machighian_poloshirt-cover.png",
      "/projects/sublimation/the_machighian_polo_shirt/the_machighian_poloshirt1.png",
      "/projects/sublimation/the_machighian_polo_shirt/the_machighian_poloshirt2.png",
    ],
  },
  {
    id: "bbc-windowposter",
    title: "Better Batter Café Window Posters",
    category: "Posters",
    description: "A collection of promotional window posters created for Better Batter Café, featuring baked goods, brownies, cookies, coffee, and featured café selections.",
    year: "2026",
    thumbnail: "/projects/posters/bbc_windowposter/bbc-poster-cover.png",
    images: [
      "/projects/posters/bbc_windowposter/bbc-poster-cover.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_bakedbrownies.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_bakedgoods.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_brownies.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_cookies.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_favepicks.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_saigoncoffee.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_saigoncoffee2.png",
    ],
  },
];

export const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRef = useRef(null);

  const galleryImages = useMemo(() => {
    if (!selectedProject) return [];
    return selectedProject.images;
  }, [selectedProject]);

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  }, [galleryImages.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));
  }, [galleryImages.length]);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedProject, handleClose, handlePrev, handleNext]);

  useEffect(() => {
    if (thumbnailRef.current) {
      const activeThumb = thumbnailRef.current.children[activeIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeIndex]);
  const dots = useMemo(() => {
    const rand = seededRandom(42);
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      duration: `${15 + rand() * 20}s`,
      delay: `${rand() * 5}s`,
    }));
  }, []);

  return (
    <div className="min-h-screen relative">
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/hero-bg.jpg"
            alt=""
            onError={hideBrokenImage}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        {/* Decorative Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.04] blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-highlight), transparent 70%)" }}
          />
        </div>

        {/* Geometric Decorative Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-16 right-[15%] w-40 h-40 rounded-full border border-primary/[0.08] opacity-60" />
          <div className="absolute top-1/2 right-[8%] w-24 h-24 rounded-full border border-primary/[0.06] opacity-50" />
          <div className="absolute top-24 left-[12%] w-3 h-3 rounded-full bg-primary/20" />
          <div className="absolute bottom-32 right-[20%] flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/25" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/15" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/25" />
          </div>
          <div className="absolute top-20 left-[25%] w-16 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute top-[45%] right-[5%] w-px h-20 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
          <div className="absolute bottom-24 left-[8%]">
            <div className="w-8 h-px bg-primary/20" />
            <div className="w-px h-8 bg-primary/20 mt-[-8px] ml-[31px]" />
          </div>
        </div>

        {/* Floating Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="absolute w-1.5 h-1.5 rounded-full opacity-50"
              style={{
                backgroundColor: "var(--color-primary)",
                left: dot.left,
                top: dot.top,
                animation: `slow-drift ${dot.duration} ease-in-out infinite`,
                animationDelay: dot.delay,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="section-container pt-24 sm:pt-40 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-4 lg:pr-4">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Creative Designer
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight animate-fade-in animation-delay-100">
                  CREATIVE<br />
                  <span className="font-serif italic font-normal glow-text text-primary">Designer</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                  Designing visual solutions with purpose.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 animate-fade-in animation-delay-300">
                <span className="text-sm text-muted-foreground">Follow me:</span>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="animate-fade-in animation-delay-300 lg:-mt-10 relative">
              {/* Decorative elements around the profile area */}
              <div className="absolute -top-8 -left-4 w-20 h-20 rounded-full border border-primary/[0.06] pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-6 -right-2 w-14 h-14 rounded-full border border-primary/[0.08] pointer-events-none" aria-hidden="true" />
              <div className="absolute top-1/4 -right-6 w-2 h-2 rounded-full bg-primary/20 pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-1/3 -left-8 w-1.5 h-1.5 rounded-full bg-primary/25 pointer-events-none" aria-hidden="true" />

              <div className="relative max-w-xs sm:max-w-sm mx-auto">
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                  aria-hidden="true"
                />
                <div className="relative glass rounded-3xl p-2 glow-border">
                  <img
                    src="/profile.png"
                    alt="Ivan Ken Chua"
                    onError={hideBrokenImage}
                    className="relative w-full aspect-[4/5] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center animate-fade-in animation-delay-800">
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              aria-label="Scroll to About section"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-pad relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="section-eyebrow animate-fade-in">Featured Work</span>
            <h2 className="section-heading mt-4 mb-5 animate-fade-in animation-delay-100">
              Projects that{" "}
              <span className="font-serif italic font-normal text-foreground">
                make an impact.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A curated selection of design work across branding, publication, digital media, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => { setSelectedProject(project); setActiveIndex(0); }}
                className="group glass rounded-2xl overflow-hidden flex flex-col text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(32,178,166,0.25)] animate-fade-in cursor-pointer"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden bg-surface">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    onError={hideBrokenImage}
                    className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" aria-hidden="true" />
                  <span className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                  <span className="absolute top-3 right-3 glass rounded-full px-2.5 py-1 text-xs font-medium text-highlight flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                    Featured
                  </span>
                </div>

                <div className="p-5 space-y-3 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base lg:text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="flex-shrink-0 flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground flex-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="self-start inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
                    View Gallery <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 md:mt-14 text-center animate-fade-in animation-delay-500">
            <AnimatedBorderButton as="a" href="/projects" size="lg">
              View All Projects <ArrowRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-pad relative overflow-hidden">
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <span className="section-eyebrow animate-fade-in">Ready to start?</span>

          <h2 className="section-heading mt-4 mb-5 animate-fade-in animation-delay-100">
            Let's create something{" "}
            <span className="font-serif italic font-normal text-foreground">
              amazing together.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200 mb-8">
            Have a project, brand, or creative idea in mind? I'd love to hear about it.
          </p>

          <div className="flex justify-center animate-fade-in animation-delay-300">
            <Button as="a" href="/contact" size="lg">
              Let's Talk <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Project Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm animate-fade-in" onClick={handleClose} aria-hidden="true" />
          <div className="relative min-h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="relative glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-filter-in">
              {/* Close button */}
              <button
                onClick={handleClose}
                aria-label="Close gallery"
                className="sticky top-4 z-20 ml-auto mr-4 mt-4 block p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="px-6 sm:px-8 pt-2 pb-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="glass rounded-full px-3 py-1 text-xs font-medium text-primary">{selectedProject.category}</span>
                  <span className="text-xs text-muted-foreground">{selectedProject.year}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{galleryImages.length} designs</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{selectedProject.title}</h3>
              </div>

              {/* Main Image */}
              <div className="relative px-6 sm:px-8">
                <div className="relative bg-surface rounded-xl overflow-hidden">
                  <img
                    src={galleryImages[activeIndex]}
                    alt={`${selectedProject.title} — Design ${activeIndex + 1}`}
                    onError={hideBrokenImage}
                    className="w-full max-h-[50vh] sm:max-h-[55vh] object-contain"
                  />

                  {/* Navigation arrows */}
                  {galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        aria-label="Previous design"
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        aria-label="Next design"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Counter */}
                  <div className="absolute bottom-3 right-3 glass rounded-full px-3 py-1 text-xs font-medium">
                    {activeIndex + 1} / {galleryImages.length}
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div
                  ref={thumbnailRef}
                  className="flex gap-2 px-6 sm:px-8 mt-4 overflow-x-auto scrollbar-hide pb-1"
                >
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        idx === activeIndex
                          ? "border-primary shadow-[0_0_12px_rgba(32,178,166,0.4)]"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View design ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        onError={hideBrokenImage}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="px-6 sm:px-8 py-5 sm:py-6">
                <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
