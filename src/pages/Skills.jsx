import { BrandIcon } from "@/components/BrandIcon";
import { skills } from "@/data/skills";

export const Skills = () => {
  return (
    <div className="min-h-screen">
      <section className="section-pad relative overflow-hidden">
        {/* Background Glows */}
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="section-container relative z-10">
          {/* Header */}
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <span className="section-eyebrow animate-fade-in">My Toolkit</span>

            <h2 className="section-heading mt-4 mb-5 animate-fade-in animation-delay-100">
              Tools I use to{" "}
              <span className="font-serif italic font-normal text-foreground">
                bring ideas to life.
              </span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              The design, productivity, and development tools I rely on every day
              to create, build, and collaborate.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {skills.map((skill, idx) => {
              const icons = skill.icons ?? [skill.icon];
              return (
                <article
                  key={skill.name}
                  className="group glass flex items-center gap-4 rounded-2xl border-border/50 p-4 sm:p-5 animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(32,178,166,0.2)]"
                  style={{ animationDelay: `${Math.min(idx * 60, 360)}ms` }}
                >
                  {/* Icon tile */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    {icons.length > 1 ? (
                      <div className="flex items-center gap-2">
                        {icons.map((slug) => (
                          <BrandIcon key={slug} slug={slug} size="h-5 w-5" />
                        ))}
                      </div>
                    ) : (
                      <BrandIcon slug={icons[0]} />
                    )}
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className="truncate text-[15px] leading-snug font-semibold text-foreground"
                      title={skill.name}
                    >
                      {skill.name}
                    </h3>
                    <p
                      className="truncate mt-0.5 text-sm text-muted-foreground"
                      title={skill.subtitle}
                    >
                      {skill.subtitle}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proficiency Section */}
      <section className="section-pad relative overflow-hidden bg-muted/30">
        <div className="section-container relative z-10">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <span className="section-eyebrow animate-fade-in">Proficiency Levels</span>

            <h2 className="section-heading mt-4 mb-5 animate-fade-in animation-delay-100">
              My expertise{" "}
              <span className="font-serif italic font-normal text-foreground">
                across key areas.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Publication Design", level: 90, desc: "InDesign, layouts, typography, print production" },
              { name: "Brand Identity", level: 85, desc: "Logo design, brand systems, visual guidelines" },
              { name: "Social Media Graphics", level: 90, desc: "Content creation, campaign visuals, platform optimization" },
              { name: "Presentation Design", level: 85, desc: "PowerPoint, Google Slides, visual storytelling" },
              { name: "Photography & Editing", level: 80, desc: "Event coverage, Lightroom, Photoshop retouching" },
              { name: "UI/UX Design", level: 75, desc: "Figma, wireframing, prototyping, user flows" },
            ].map((skill, idx) => (
              <div key={skill.name} className="glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};