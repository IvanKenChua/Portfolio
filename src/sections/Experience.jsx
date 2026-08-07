const experiences = [
  {
    period: "May 2026 — Present",
    role: "Media and Creatives Volunteer",
    company: "DEVCON Legazpi Chapter",
    description:
      "Designed promotional materials, social media graphics, certificates, and merchandise for the Heroes of Innovation Challenge 2026: Ibalong Festival Hackathon, resulting in visually consistent and professional event branding.",
    technologies: ["Canva"],
    current: false,
  },
  {
    period: "Feb 2026 — May 2026",
    role: "Multimedia Intern",
    company: "DWCL Office of External Relations",
    description:
      "Designed promotional materials, roll-up banners, brochures, tarpaulins, presentation slides, certificates, and social media graphics that supported the college's admissions campaigns, institutional branding, and official events.",
    technologies: ["Canva", "Capcut", "Adobe Photoshop"],
    current: false,
  },
  {
    period: "Aug 2025 — Present",
    role: "Creative Designer",
    company: "Freelance",
    description:
      "Designed promotional content for clients, ensuring visually appealing and brand-consistent.",
    technologies: ["Canva", "Capcut", "PixelLab", "Adobe Indesign", "Adobe Photoshop"],
    current: false,
  },
  {
    period: "Aug 2025 — Jun 2026",
    role: "Senior Graphic Artist",
    company: "The Channel Publication",
    description:
      "Led the design and layout of magazines, literary folios, newsletters, and publication materials while maintaining visual consistency and supporting campus-wide communication through creative design.",
    technologies: ["Adobe Indesign", "Adobe Photoshop", "Canva"],
    current: false,
  },
  {
    period: "Nov 2025 — Jun 2026",
    role: "Secretary",
    company: "Senior Student Council",
    description:
      "Prepared meeting documentation, organized official records, and designed presentation slides and publication materials for student activities, university events, and the 58th DWCL Commencement Exercises.",
    technologies: ["Microsoft Office", "Canva", "Google Slides"],
    current: false,
  },
  {
    period: "Jan 2024 — Jun 2025",
    role: "Chief Photojournalist",
    company: "The Channel Publication",
    description:
      "Covered university events through photography while producing visual content that strengthened storytelling across magazines, newsletters, and campus publications.",
    technologies: ["Canon", "Lightroom"],
    current: false,
  },
  {
    period: "Aug 2023 — Jun 2025",
    role: "Creatives and Technical Committee",
    company: "Computer Science and Information Technology Society",
    description:
      "Designed promotional materials for student activities and events.",
    technologies: ["Canva", "PixelLab"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="section-eyebrow animate-fade-in">
            Career Journey
          </span>
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

        {/* Timeline */}
        <div className="relative">
          <div
            className="timeline-glow absolute left-[1.375rem] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"
            aria-hidden="true"
          />

          {/* Experience Items */}
          <div className="space-y-12 lg:space-y-14">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[1.375rem] md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span
                      className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-12 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
