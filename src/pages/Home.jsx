import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Facebook,
  Download,
  Star,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useMemo } from "react";

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

const featuredProjects = [
  {
    id: "bbc-menu",
    title: "Better Batter Café Menu",
    category: "Posters",
    description: "A café menu designed with a clean, appetizing layout and consistent branding.",
    year: "2026",
    thumbnail: "/projects/posters/bbc_menu/bbc-menu-cover.png",
  },
  {
    id: "bbc-menuboard",
    title: "Better Batter Café Menu Board",
    category: "Posters",
    description: "A menu board design featuring food and beverage selections with clear visual presentation.",
    year: "2026",
    thumbnail: "/projects/posters/bbc_menuboard/bbc-menuboard-cover.png",
  },
  {
    id: "bbc-windowposter",
    title: "Better Batter Café Window Posters",
    category: "Posters",
    description: "A collection of promotional window posters for Better Batter Café.",
    year: "2026",
    thumbnail: "/projects/posters/bbc_windowposter/bbc-windowposter-cover.png",
  },
];

const seededRandom = (seed) => {
  let state = seed;
  return () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
};

export const Home = () => {
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
                    src="/profile-photo.png"
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
              <a
                key={project.id}
                href={project.link || "/projects"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="group glass rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(32,178,166,0.25)] animate-fade-in"
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
                    View Project <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
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
    </div>
  );
};
