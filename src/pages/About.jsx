import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Github, Linkedin, Facebook, ExternalLink, X, MapPin, CalendarDays } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import FlipbookModal from "@/components/FlipbookModal";

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
    location: "Legazpi City, Albay",
    description:
      "Designed social media graphics, certificates, and merchandise for the Heroes of Innovation Challenge 2026: Ibalong Festival Hackathon.",
    technologies: ["Canva"],
    bullets: [
      "Designed social media graphics, certificates, and merchandise for the Heroes of Innovation Challenge 2026: Ibalong Festival Hackathon, ensuring all visual outputs were consistent, professional, and aligned with the event's branding.",
      "Supported the Documentation and Technical Teams by assisting in event coverage, content organization, and technical setup, contributing to smooth event operations and accurate documentation.",
    ],
  },
  {
    period: "Nov 2025 — Sep 2026",
    role: "Secretary",
    company: "Senior Student Council",
    location: "Divine Word College of Legazpi",
    description:
      "Managed official documentation, administrative records, and designed presentation slides and publication materials.",
    technologies: ["Microsoft Office", "Canva", "Google Slides"],
    bullets: [
      "Managed official documentation, administrative records, and minutes of the meeting using Microsoft Office, leading to organized and efficient council operations.",
      "Assisted the Student Affairs Office (SAO) in daily operations, ensuring smooth administrative processes and enhanced student services.",
      "Designed presentation slides for the 58th DWCL Commencement Exercises, elevating the professionalism and visual quality of the program.",
      "Represented the graduating class in the Senior Student Council, overseeing production of the Batch 2026 Graduates' Yearbook, including the 9x12-inch landscape cover layout designed using Adobe Photoshop.",
      "Coordinated and handled the Batch 2026 Legacy Project, improving student spaces and providing resources that benefit students and accredited student organizations at DWCL.",
    ],
  },
  {
    period: "Feb 2026 — May 2026",
    role: "Multimedia Intern",
    company: "DWCL Office of External Relations",
    location: "Divine Word College of Legazpi",
    description:
      "Supported institutional marketing and communication projects by producing promotional materials, social media assets, and event documentation.",
    technologies: ["Canva", "Capcut", "Adobe Photoshop"],
    bullets: [
      "Supported institutional marketing and communication projects by planning and producing promotional materials, social media assets, presentations, and event documentation, resulting in consistent and professional visual content.",
      "Coordinated visual deliverables with the marketing team to maintain quality, consistency, and strong alignment with institutional branding.",
      "Contributed photography and layout designs to the 65th DWCL Coffee Table Book and the 65th DWCL Foundation Anniversary Working Committee, supporting the documentation of institutional milestones.",
      "Managed assigned creative tasks and deadlines while collaborating with team members across digital and print outputs, ensuring timely and high-quality delivery.",
    ],
  },
  {
    period: "Aug 2025 — Present",
    role: "Creative Designer",
    company: "Freelance",
    location: "Legazpi City, Albay",
    description:
      "Designed promotional content for clients, ensuring visually appealing and brand-consistent designs.",
    technologies: ["Adobe Indesign", "Canva", "Adobe Photoshop"],
    bullets: [
      "Designed promotional content for clients, ensuring visually appealing and brand-consistent designs using Adobe InDesign, Canva, and Adobe Photoshop.",
      "Collaborated directly with clients to understand project requirements, revise designs based on feedback, and deliver high-quality creative solutions on time.",
      "Applied typography, visual hierarchy, and branding principles to improve readability and overall design quality.",
      "Managed multiple design projects while maintaining attention to detail and meeting deadlines.",
    ],
  },
  {
    period: "Aug 2025 — Jun 2026",
    role: "Senior Graphic Artist",
    company: "The Channel Publication",
    location: "Divine Word College of Legazpi",
    description:
      "Led visual content production for the publication's print and digital releases.",
    technologies: ["Adobe Indesign", "Adobe Photoshop", "Canva"],
    bullets: [
      "Served as Senior Graphic Artist, leading visual content production for the publication's print and digital releases.",
      "Designed publication layouts for magazines, literary folios, newsletters, and tabloids using Adobe InDesign, maintaining consistent quality and strong branding across all materials.",
      "Covered institutional events through photography for print and digital publications, producing high-quality visual content that strengthened news stories, feature articles, and social media coverage.",
      "Designed the Literary Folio (LitFol) layout, contributing to The Channel's success at the 23rd Regional Tertiary Schools Press Conference (RTSPC), winning 2nd Place in Best Visual Arts, Best Page Design, and Best Cover Design, and 5th Place in Best Concept.",
      "Served on the working committees for the 65th DWCL Foundation Anniversary and College Intramurals, documenting events through photography and assisting in publication production, resulting in accurate and timely event documentation and promotional materials.",
    ],
  },
  {
    period: "Jan 2024 — Jun 2025",
    role: "Chief Photojournalist",
    company: "The Channel Publication",
    location: "Divine Word College of Legazpi",
    description:
      "Led visual content production for the publication's print and digital releases.",
    technologies: ["Canon", "Lightroom"],
    bullets: [
      "Served as Chief Photojournalist, leading visual content production for the publication's print and digital releases.",
      "Designed publication layouts for magazines, literary folios, newsletters, and tabloids using Adobe InDesign, maintaining consistent quality and strong branding across all materials.",
      "Covered institutional events through photography for print and digital publications, producing high-quality visual content that strengthened news stories, feature articles, and social media coverage.",
      "Served on the working committees for the 64th DWCL Foundation Anniversary and College Intramurals, documenting events through photography and assisting in publication production, resulting in accurate and timely event documentation and promotional materials.",
    ],
  },
  {
    period: "Aug 2023 — Jun 2025",
    role: "Creatives and Technical Committee",
    company: "Computer Science and Information Technology Society",
    location: "Divine Word College of Legazpi",
    description:
      "Designed promotional materials for student activities and academic events.",
    technologies: ["Canva", "PixelLab"],
    bullets: [
      "Designed promotional materials for student activities and academic events, resulting in visually consistent and engaging event promotions.",
      "Assisted in event branding, multimedia content production, and technical support during events, strengthening the organization's visual identity and ensuring smooth event operations.",
      "Prepared digital presentations and visual materials for organizational programs while also serving as photographer, enhancing the professionalism and overall impact of CSIT-S activities.",
    ],
  },
];

const hideBrokenImage = (e) => {
  e.currentTarget.style.display = "none";
};

const PDFModal = ({ src, title, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm animate-fade-in" onClick={onClose} aria-hidden="true" />
      <div className="relative min-h-full flex items-center justify-center p-4 sm:p-8">
        <div className="relative glass-strong rounded-2xl w-full max-w-4xl h-[90vh] overflow-hidden animate-filter-in">
          <button
            onClick={onClose}
            aria-label={`Close ${title} preview`}
            className="sticky top-4 z-20 ml-auto mr-4 mt-4 block p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          <iframe
            src={src}
            title={title}
            className="w-full h-[calc(100%-60px)] rounded-b-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  const [showCV, setShowCV] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleCloseModal = useCallback(() => {
    setSelectedExperience(null);
  }, []);

  useEffect(() => {
    if (!selectedExperience) return;
    const handleKey = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedExperience, handleCloseModal]);

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

              <div className="flex flex-nowrap items-center gap-4 animate-fade-in animation-delay-300">
                <Button as="button" onClick={() => setShowCV(true)} size="lg">
                  <ExternalLink className="w-5 h-5" />
                  View CV
                </Button>
                <AnimatedBorderButton
                  as="button"
                  onClick={() => setShowPortfolio(true)}
                  size="lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  Portfolio
                </AnimatedBorderButton>
                <AnimatedBorderButton as="a" href="/skills" size="lg">
                  <ExternalLink className="w-5 h-5" />
                  Skills
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
                    src="/profile.png"
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
                  <button
                    onClick={() => setSelectedExperience(exp)}
                    className="glass flex-1 p-5 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 text-left cursor-pointer w-full"
                  >
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
                  </button>
                </div>
              ))}
            </div>
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
          <span className="section-eyebrow animate-fade-in">Like what you see?</span>

          <h2 className="section-heading mt-4 mb-5 animate-fade-in animation-delay-100">
            Let's work{" "}
            <span className="font-serif italic font-normal text-foreground">
              together.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200 mb-8">
            I'm always open to new opportunities, collaborations, and creative projects.
          </p>

          <div className="flex justify-center animate-fade-in animation-delay-300">
            <Button as="a" href="/contact" size="lg">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {showCV && (
        <PDFModal
          src="/(RESUME) CHUA, Ivan Ken Brazal.pdf"
          title="Resume Preview"
          onClose={() => setShowCV(false)}
        />
      )}
      {showPortfolio && (
        <FlipbookModal
          src="/portfolio.pdf"
          title="Portfolio"
          onClose={() => setShowPortfolio(false)}
        />
      )}

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm animate-fade-in" onClick={handleCloseModal} aria-hidden="true" />
          <div className="relative min-h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="relative glass-strong rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-filter-in">
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                aria-label="Close experience details"
                className="sticky top-4 z-20 ml-auto mr-4 mt-4 block p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="px-6 sm:px-8 pb-8 -mt-4">
                {/* Eyebrow */}
                <span className="section-eyebrow">Career Journey</span>

                {/* Position */}
                <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-1">
                  {selectedExperience.role}
                </h3>

                {/* Company */}
                <p className="text-lg font-medium text-primary mb-3">
                  {selectedExperience.company}
                </p>

                {/* Current badge */}
                {selectedExperience.period.includes("Present") && (
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-4">
                    Current
                  </span>
                )}

                {/* Duration & Location */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    {selectedExperience.period.replace(" — ", " – ")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" />
                    {selectedExperience.location}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-6" />

                {/* Responsibilities */}
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {selectedExperience.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px bg-border mt-6 mb-4" />

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech) => (
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
          </div>
        </div>
      )}
    </div>
  );
};