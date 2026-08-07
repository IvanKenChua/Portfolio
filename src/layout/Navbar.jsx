import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          IKBC<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-1.5 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" as="a" href="#contact">
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
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-3 px-3 rounded-xl hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-4 flex items-center gap-3">
              <Button
                className="flex-1"
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
