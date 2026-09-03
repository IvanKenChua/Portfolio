import { Palette, BookOpen, MonitorSmartphone, Camera, ArrowRight, Github, Linkedin, Facebook, Download } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

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

const experiences = [
  {
    period: "May 2026 — Present",
    role: "Media and Creatives Volunteer",
    company: "DEVCON Legazpi Chapter",
    description:
      "Designed promotional materials, social media graphics, certificates, and merchandise for the Heroes of Innovation Challenge 2026: Ibalong Festival Hackathon, resulting in visually consistent and professional event branding.",
    technologies: ["Canva"],
  },
  {
    period: "Feb 2026 — May 2026",
    role: "Multimedia Intern",
    company: "DWCL Office of External Relations",
    description:
      "Designed promotional materials, roll-up banners, brochures, tarpaulins, presentation slides, certificates, and social media graphics that supported the college's admissions campaigns, institutional branding, and official events.",
    technologies: ["Canva", "Capcut", "Adobe Photoshop"],
  },
  {
    period: "Aug 2025 — Present",
    role: "Creative Designer",
    company: "Freelance",
    description:
      "Designed promotional content for clients, ensuring visually appealing and brand-consistent.",
    technologies: ["Canva", "Capcut", "PixelLab", "Adobe Indesign", "Adobe Photoshop"],
  },
  {
    period: "Aug 2025 — Jun 2026",
    role: "Senior Graphic Artist",
    company: "The Channel Publication",
    description:
      "Led the design and layout of magazines, literary folios, newsletters, and publication materials while maintaining visual consistency and supporting campus-wide communication through creative design.",
    technologies: ["Adobe Indesign", "Adobe Photoshop", "Canva"],
  },
  {
    period: "Nov 2025 — Jun 2026",
    role: "Secretary",
    company: "Senior Student Council",
    description:
      "Prepared meeting documentation, organized official records, and designed presentation slides and publication materials for student activities, university events, and the 58th DWCL Commencement Exercises.",
    technologies: ["Microsoft Office", "Canva", "Google Slides"],
  },
  {
    period: "Jan 2024 — Jun 2025",
    role: "Chief Photojournalist",
    company: "The Channel Publication",
    description:
      "Covered university events through photography while producing visual content that strengthened storytelling across magazines, newsletters, and campus publications.",
    technologies: ["Canon", "Lightroom"],
  },
  {
    period: "Aug 2023 — Jun 2025",
    role: "Creatives and Technical Committee",
    company: "Computer Science and Information Technology Society",
    description:
      "Designed promotional materials for student activities and events.",
    technologies: ["Canva", "PixelLab"],
  },
];

const hideBrokenImage = (e) => {
  e.currentTarget.style.display = "none";
};

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="section-pad relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="section-eyebrow">About Me</span>
              </div>

              <h2 className="section-heading animate-fade-in animation-delay-100">
                <span className="font-serif italic font-normal text-foreground">
                  Hello, I'm{" "}
                </span>
                IVAN!
              </h2>

              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I'm a <span className="text-foreground font-medium">Creative Designer</span>{" "}
                  passionate about creating meaningful visual experiences. Through my internship at the <span className="text-foreground font-medium">DWCL Office of External Relations</span>{" "}
                  and leadership roles in student organizations, I've gained experience in publication design, 
                  branding, presentation design, social media graphics, and photography.
                </p>
                <p>
                  As a recent <span className="text-foreground font-medium">BS Information Technology</span>{" "}
                  graduate, I'm continuously improving my skills and creating clean,
                  purposeful designs that communicate ideas effectively and leave a lasting impression.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button as="a" href="/contact" size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedBorderButton
                  as="a"
                  href="/(RESUME) CHUA, Ivan Ken B.pdf"
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
            <div className="animate-fade-in animation-delay-300 lg:mt-16">
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
        </div>
      </section>

      {/* Values Section */}
      <section className="section-pad relative overflow-hidden bg-muted/30">
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <span className="section-eyebrow animate-fade-in">What I Value</span>

          <h2 className="section-heading mt-4 mb-5 animate-fade-in animation-delay-100">
            Design principles that{" "}
            <span className="font-serif italic font-normal text-foreground">
              guide my work.
            </span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Clarity", desc: "Clean, purposeful designs that communicate without confusion." },
              { title: "Impact", desc: "Visuals that resonate with audiences and drive meaningful action." },
              { title: "Craft", desc: "Attention to detail in every pixel, from concept to delivery." },
            ].map((value, idx) => (
              <div key={value.title} className="glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" aria-hidden="true" />

        <div className="section-container relative z-10">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="section-eyebrow animate-fade-in">Career Journey</span>
            <h2 className="section-heading mt-4 mb-5 animate-fade-in animation-delay-100">
              Experience that{" "}
              <span className="font-serif italic font-normal text-foreground">
                shaped my creativity.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A timeline of my creative journey, showcasing the experiences, leadership roles,
              and projects that have shaped my skills as a graphic designer.
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line - left aligned */}
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent shadow-[0_0_15px_rgba(32,178,166,0.5)]" aria-hidden="true" />

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative flex items-start gap-6 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  {/* Icon marker */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-background border border-primary/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(32,178,166,0.6)]" />
                  </div>

                  {/* Card */}
                  <div className="glass flex-1 p-5 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      {exp.period.includes("Present") && (
                        <span className="px-2.5 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary/80 text-sm font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-surface border border-border/50 text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};