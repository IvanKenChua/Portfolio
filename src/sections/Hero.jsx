import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Facebook,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useMemo } from "react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/BanDapol",
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

export const Hero = () => {
  const dots = useMemo(() => {
    const rand = seededRandom(42);
    return [...Array(26)].map((_, i) => ({
      id: i,
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      duration: `${15 + rand() * 20}s`,
      delay: `${rand() * 5}s`,
    }));
  }, []);

  return (
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

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="section-container pt-28 sm:pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Creative Designer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.1] tracking-tight animate-fade-in animation-delay-100">
                Designing{" "}
                <span className="text-primary glow-text">visual</span> solutions
                with{" "}
                <span className="font-serif italic font-normal text-foreground">
                  purpose.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm <span className="text-foreground font-medium">Ivan Ken Chua</span>, a Creative Designer specializing in
                branding, publication design, social media graphics, presentation
                design, and photography. I create clean, modern, and strategic
                visuals that help brands communicate with clarity and confidence.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button as="a" href="#contact" size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton
                as="a"
                href="/%28RESUME%29%20CHUA%2C%20Ivan%20Ken%20B.pdf"
                download="(RESUME) CHUA, Ivan Ken B.pdf"
                size="lg"
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 animate-fade-in animation-delay-400">
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
          <div className="animate-fade-in animation-delay-300 lg:-mt-10">
            <div className="relative max-w-xs sm:max-w-sm mx-auto">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                aria-hidden="true"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                {/* Fallback placeholder if image is missing */}
                <img
                  src="/profile-photo.png"
                  alt="Ivan Ken Chua"
                  onError={hideBrokenImage}
                  className="relative w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-3 sm:-right-4 glass rounded-xl px-3.5 sm:px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium whitespace-nowrap">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-3 sm:-left-4 glass rounded-xl px-3.5 sm:px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground whitespace-nowrap">
                    Years Exp.
                  </div>
                </div>
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
  );
};
