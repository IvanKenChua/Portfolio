import { Github, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "https://github.com/IvanKenChua", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ivankenchua/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/IvanKenChua/", label: "Facebook" },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 sm:py-14 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              IKBC<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Ivan Ken Chua.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
