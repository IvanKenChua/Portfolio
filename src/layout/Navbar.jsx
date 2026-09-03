import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    const closeOnResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-2.5 sm:py-3" : "bg-transparent py-4 sm:py-5"
      } z-50`}
    >
      <nav
        className="section-container flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          IKBC<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav - All links on right */}
        <div className="hidden md:flex items-center gap-3">
          <div className="glass rounded-full px-1.5 py-1 flex items-center gap-1 h-10">
            <Link
              to="/"
              className={`inline-flex items-center justify-center h-full px-4 text-sm rounded-full transition-colors ${
                location.pathname === "/"
                  ? "text-foreground bg-surface"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.href}
                className={`inline-flex items-center justify-center h-full px-4 text-sm rounded-full transition-colors ${
                  location.pathname === link.href
                    ? "text-foreground bg-surface"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button size="sm" as={Link} to="/contact" className="h-10">
            Contact Me
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-strong animate-fade-in border-t border-border/50"
        >
          <div className="section-container py-6 flex flex-col gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg py-3 px-3 rounded-xl transition-colors ${
                location.pathname === "/"
                  ? "text-foreground bg-surface"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg py-3 px-3 rounded-xl transition-colors ${
                  location.pathname === link.href
                    ? "text-foreground bg-surface"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-3">
              <Button
                className="flex-1"
                as={Link}
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Me
              </Button>
              <ThemeToggle className="flex-shrink-0" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
