import {Palette, BookOpen, MonitorSmartphone, Camera,} from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creating clean, engaging, and impactful visuals that communicate ideas effectively.",
  },
  {
    icon: BookOpen,
    title: "Publication Design",
    description:
      "Designing magazines, literary folios, brochures, newsletters, and other print materials.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Content",
    description:
      "Producing social media graphics, presentation slides, and branding materials across digital platforms.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capturing compelling visuals that enhance storytelling and strengthen brand identity.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="section-eyebrow">About Me</span>
            </div>

            <h2 className="section-heading animate-fade-in animation-delay-100">
              Creating visual stories,{" "}
              <span className="font-serif italic font-normal text-foreground">
                one design at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a <span className="text-foreground font-medium">Graphic Designer</span>{" "}
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

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My main goal is to create thoughtful designs that not only look good but also communicate clearly,
                inspire audiences, and make a lasting impact."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
