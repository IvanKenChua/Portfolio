import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderOpen,
  Images,
  PenTool,
  Star,
  Target,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const categories = [
  "All",
  "Publication Design",
  "Social Media Graphics",
  "Roll-up Banners",
  "Tarpaulins",
  "Brochures",
  "Presentation Design",
  "Branding",
  "Photography",
  "UI/UX",
  "Mobile Application",
  "Print Design",
  "Lanyard",
];

const GAP = 20;
const AUTOPLAY_MS = 4500;
const DRAG_THRESHOLD = 60;
const SLIDE_MS = 700;

const projects = [
  // — Publication Design —
{
  id: "better-batter-menu",
  title: "Better Batter Café Menu",
  category: "Publication Design",
  description:
    "A 17-page café menu designed with clear layouts and consistent branding.",
  designObjective:
    "Create a menu that's easy to read and visually appealing.",
  year: "2026",
  software: ["Adobe InDesign", "Canva"],
  thumbnail: "/projects/better-batter-menu.png",
  images: ["/projects/better-batter-menu.png"],
  link: "https://heyzine.com/flip-book/2fa2486789.html",
  featured: true,
},
{
  id: "channel-literary-folio",
  title: "The Channel's Literary Folio",
  category: "Publication Design",
  description:
    "A literary folio featuring clean layouts, expressive typography, and creative editorial design.",
  designObjective:
    "Present student works in a clean and engaging way.",
  year: "2026",
  software: ["Adobe InDesign", "Adobe Photoshop", "Canva"],
  thumbnail: "/projects/channel-literary-folio.png",
  images: ["/projects/channel-literary-folio.png"],
  link: "https://heyzine.com/flip-book/8f717f287d.html",
  featured: true,
},
{
  id: "newsletter-layout",
  title: "The Channel's Newsletter",
  category: "Publication Design",
  description:
    "A newsletter layout with organized content and a consistent editorial style.",
  designObjective:
    "Make every issue clear, organized, and easy to read.",
  year: "2025",
  software: ["Adobe InDesign", "Adobe Photoshop", "Canva"],
  thumbnail: "/projects/newsletter-layout.png",
  images: ["/projects/newsletter-layout.png"],
  featured: false,
},

// — Social Media Graphics —
{
  id: "dwcl-oer-social",
  title: "DWCL Admission",
  category: "Social Media Graphics",
  description:
    "A social media graphic promoting DWCL admissions with bold visuals and clear messaging.",
  designObjective:
    "Attract prospective students while maintaining the school's branding.",
  year: "2026",
  software: ["Canva"],
  thumbnail: "/projects/dwcl-oer-social.png",
  images: ["/projects/dwcl-oer-social.png"],
  link: "https://www.facebook.com/share/p/1EWhjMMo3k/",
  featured: false,
},
{
  id: "dwcl-oer-social2",
  title: "EDSA People Power Revolution",
  category: "Social Media Graphics",
  description:
    "A commemorative social media graphic honoring the EDSA People Power Revolution.",
  designObjective:
    "Create a respectful design while following the school's visual identity.",
  year: "2026",
  software: ["Canva"],
  thumbnail: "/projects/dwcl-oer-social2.png",
  images: ["/projects/dwcl-oer-social2.png"],
  link: "https://www.facebook.com/share/p/1NortX2o41/",
  featured: false,
},
{
  id: "dwcl-oer-social3",
  title: "Regional PRISAA 2026",
  category: "Social Media Graphics",
  description:
    "A recognition graphic celebrating DWCL athletes' achievements at the Regional PRISAA Games.",
  designObjective:
    "Highlight the athletes' success through clear and engaging visuals.",
  year: "2026",
  software: ["Canva"],
  thumbnail: "/projects/dwcl-oer-social3.png",
  images: ["/projects/dwcl-oer-social3.png"],
  link: "https://www.facebook.com/share/p/1D2c4wSynp/",
  featured: false,
},
{
  id: "channel-social",
  title: "The Channel's Screening",
  category: "Social Media Graphics",
  description:
    "A recruitment graphic inviting students to join The Channel's Editorial Board.",
  designObjective:
    "Encourage students to become part of the campus publication.",
  year: "2024",
  software: ["Adobe Photoshop", "Canva"],
  thumbnail: "/projects/channel-social.png",
  images: ["/projects/channel-social.png"],
  link: "https://www.facebook.com/share/1HH2HHsevT/",
  featured: false,
},
{
  id: "channel-social2",
  title: "Long Weekend",
  category: "Social Media Graphics",
  description:
    "A social media announcement informing the community about the long weekend.",
  designObjective:
    "Share important information in a simple and engaging way.",
  year: "2024",
  software: ["Adobe Photoshop", "Canva"],
  thumbnail: "/projects/channel-social2.png",
  images: ["/projects/channel-social2.png"],
  link: "https://www.facebook.com/share/p/1EqNfRXUyk/",
  featured: false,
},
{
  id: "csits-social",
  title: "CSIT-S 1st General Assembly",
  category: "Social Media Graphics",
  description:
    "A promotional graphic for the CSIT-S General Assembly event.",
  designObjective:
    "Encourage students to attend and participate.",
  year: "2024",
  software: ["Canva", "Adobe Photoshop"],
  thumbnail: "/projects/csits-social.png",
  images: ["/projects/csits-social.png"],
  link: "https://www.facebook.com/share/p/1FACfJBinh/",
  featured: false,
},
{
  id: "csits-social2",
  title: "CSIT Days 2024",
  category: "Social Media Graphics",
  description:
    "An event promotion highlighting the activities of CSIT Days 2024.",
  designObjective:
    "Create excitement and increase student participation.",
  year: "2024",
  software: ["Canva", "Adobe Photoshop"],
  thumbnail: "/projects/csits-social2.png",
  images: ["/projects/csits-social2.png"],
  link: "https://www.facebook.com/share/p/1RZtZoLvvr/",
  featured: false,
},
{
  id: "csits-social3",
  title: "CSIT-S UI/UX Competition",
  category: "Social Media Graphics",
  description:
    "A promotional graphic for the CSIT-S UI/UX Competition.",
  designObjective:
    "Capture students' attention and encourage participation.",
  year: "2025",
  software: ["Canva", "Adobe Photoshop"],
  thumbnail: "/projects/csits-social3.png",
  images: ["/projects/csits-social3.png"],
  link: "https://www.facebook.com/share/p/1J71qpduzv/",
  featured: false,
},

// — Roll-up Banners —
{
  id: "dwcl-admissions-rollup",
  title: "DWCL Admissions Roll-up Banner",
  category: "Roll-up Banners",
  description:
    "A roll-up banner promoting DWCL admissions with clear and readable information.",
  designObjective:
    "Present key admission details in a visually appealing format.",
  year: "2026",
  software: ["Adobe InDesign", "Adobe Photoshop"],
  thumbnail: "/projects/dwcl-admissions-rollup.png",
  images: ["/projects/dwcl-admissions-rollup.png"],
  featured: true,
},
{
  id: "programs-rollup",
  title: "Programs Offered Roll-up Banner",
  category: "Roll-up Banners",
  description:
    "A roll-up banner showcasing the academic programs offered by DWCL.",
  designObjective:
    "Present all programs in a clean and organized layout.",
  year: "2026",
  software: ["Adobe InDesign", "Adobe Photoshop"],
  thumbnail: "/projects/programs-rollup.png",
  images: ["/projects/programs-rollup.png"],
  featured: false,
},

// — Tarpaulins —
{
  id: "admission-tarpaulin",
  title: "Admission is Now Open",
  category: "Tarpaulins",
  description:
    "A promotional tarpaulin announcing that DWCL admissions are now open.",
  designObjective:
    "Catch attention and encourage prospective students to apply.",
  year: "2026",
  software: ["Adobe Photoshop", "Canva"],
  thumbnail: "/projects/admission-tarpaulin.png",
  images: ["/projects/admission-tarpaulin.png"],
  featured: false,
},
{
  id: "programs-tarpaulin",
  title: "Programs Offered per Department",
  category: "Tarpaulins",
  description:
    "A tarpaulin displaying the academic programs offered by each department.",
  designObjective:
    "Present department information in a clear and consistent layout.",
  year: "2026",
  software: ["Adobe InDesign", "Adobe Photoshop"],
  thumbnail: "/projects/programs-tarpaulin.png",
  images: ["/projects/programs-tarpaulin.png"],
  featured: false,
},

// — Brochures —
{
  id: "dwcl-brochure",
  title: "DWCL Tri-fold Brochure",
  category: "Brochures",
  description:
    "A tri-fold brochure introducing DWCL and its academic programs.",
  designObjective:
    "Provide important school information in a compact format.",
  year: "2026",
  software: ["Adobe InDesign", "Adobe Photoshop"],
  thumbnail: "/projects/dwcl-brochure.png",
  images: ["/projects/dwcl-brochure.png"],
  featured: false,
},

// — Presentation Design —
{
  id: "commencement-slides",
  title: "58th DWCL Commencement Exercises",
  category: "Presentation Design",
  description:
    "A presentation design for the 58th DWCL Commencement Exercises.",
  designObjective:
    "Deliver a professional and consistent visual experience during the ceremony.",
  year: "2026",
  software: ["Microsoft PowerPoint", "Adobe Photoshop"],
  thumbnail: "/projects/commencement-slides.png",
  images: ["/projects/commencement-slides.png"],
  link: "https://heyzine.com/flip-book/7b18cfc94f.html",
  featured: true,
},
{
  id: "clinical-graduation",
  title: "3rd DWCL Clinical Graduation",
  category: "Presentation Design",
  description:
    "A presentation design created for the 3rd DWCL Clinical Graduation ceremony.",
  designObjective:
    "Support the event with clean, organized, and professional presentation slides.",
  year: "2026",
  software: ["Microsoft PowerPoint", "Google Slides"],
  thumbnail: "/projects/clinical-graduation.png",
  images: ["/projects/clinical-graduation.png"],
  link: "https://heyzine.com/flip-book/46fdce2198.html",
  featured: false,
},
{
  id: "college-intramurals2025",
  title: "2025 DWCL College Intramurals",
  category: "Presentation Design",
  description:
    "A presentation design created for the 2025 DWCL College Intramurals closing ceremony.",
  designObjective:
    "Support the event with clean, organized, and professional presentation slides.",
  year: "2025",
  software: ["Microsoft PowerPoint", "Google Slides"],
  thumbnail: "/projects/college-intramurals2025.png",
  images: ["/projects/college-intramurals2025.png"],
  link: "https://heyzine.com/flip-book/1b22808bdb.html",
  featured: false,
},
{
    id: "2dibaynigator",
    title: "2DibayNigator",
    category: "Mobile Application",
    description:
      "A mobile navigation application concept with a clean, intuitive interface.",
    designObjective:
      "Make campus navigation feel effortless with a clear, touch-first interface.",
    year: "2025",
    software: ["Figma", "Adobe Photoshop"],
    thumbnail: "/projects/2dibaynigator-usermanual.png",
    images: ["/projects/2dibaynigator-usermanual.png"],
    link: "https://heyzine.com/flip-book/edcf3cfb3a.html",
    featured: true,
  },
  // — Lanyard —
{
  id: "channel-lanyard",
  title: "The Channel Lanyard",
  category: "Lanyard",
  description:
    "A lanyard design for The Channel, the official student publication of Divine Word College of Legazpi.",
  designObjective:
    "Create a professional and recognizable lanyard that represents the publication's identity.",
  year: "2026",
  software: ["Adobe Photoshop", "Adobe Illustrator"],
  thumbnail: "/projects/lanyard/the_channel/the_channel_lanyard-cover.png",
  images: [
    "/projects/lanyard/the_channel/the_channel_lanyard-cover.png",
    "/projects/lanyard/the_channel/the_channel_lanyard.png",
  ],
  featured: true,
},
{
  id: "machighian-lanyard",
  title: "The Machighian Lanyard",
  category: "Lanyard",
  description:
    "A lanyard design for The Machighian, the official school-community publication of Macalaya National High School.",
  designObjective:
    "Design a lanyard that reflects the school-community publication's identity and mission.",
  year: "2026",
  software: ["Adobe Photoshop", "Adobe Illustrator"],
  thumbnail: "/projects/lanyard/the_machighian/the_machighian_lanyard-cover.png",
  images: [
    "/projects/lanyard/the_machighian/the_machighian_lanyard-cover.png",
    "/projects/lanyard/the_machighian/the_machighian_lanyard.png",
  ],
  featured: true,
},

// — Branding —
  /*{
    id: "better-batter-branding",
    title: "Better Batter Café Designs",
    category: "Branding",
    description:
      "A brand identity system for Better Batter Café — logo usage, color palette, and supporting collateral.",
    designObjective:
      "Craft a warm, memorable identity that carries the café from menu to storefront.",
    year: "2025",
    software: ["Adobe Illustrator", "Adobe Photoshop"],
    thumbnail: "/projects/better-batter-branding.png",
    images: ["/projects/better-batter-branding.png"],
    featured: true,
  },
  {
    id: "event-branding",
    title: "Event Branding Materials",
    category: "Branding",
    description:
      "Cohesive branding materials for campus events, from tickets to signage.",
    designObjective:
      "Unite every touchpoint of an event under one consistent, festive identity.",
    year: "2024",
    software: ["Adobe Photoshop", "Canva"],
    thumbnail: "/projects/event-branding.png",
    images: ["/projects/event-branding.png"],
    featured: false,
  },
  // — Photography —
  {
    id: "event-photography",
    title: "Event Photography",
    category: "Photography",
    description:
      "Documentary-style coverage of school events, edited for a warm, consistent tone.",
    designObjective:
      "Capture genuine moments with an editing style that stays consistent across every album.",
    year: "2024",
    software: ["Adobe Lightroom", "Adobe Photoshop"],
    thumbnail: "/projects/event-photography.png",
    images: ["/projects/event-photography.png"],
    featured: true,
  },
  {
    id: "campus-coverage",
    title: "Campus Coverage",
    category: "Photography",
    description:
      "Photographic coverage of campus life, people, and spaces throughout the school year.",
    designObjective:
      "Document the everyday life of the school in a warm, editorial visual language.",
    year: "2024",
    software: ["Adobe Lightroom"],
    thumbnail: "/projects/campus-coverage.png",
    images: ["/projects/campus-coverage.png"],
    featured: false,
  },
  // — Mobile Application —
  {
    id: "2dibaynigator",
    title: "2DibayNigator",
    category: "Mobile Application",
    description:
      "UI design for 2DibayNigator, a mobile navigation application concept with a clean, intuitive interface.",
    designObjective:
      "Make campus navigation feel effortless with a clear, touch-first interface.",
    year: "2024",
    software: ["Figma", "Adobe Photoshop"],
    thumbnail: "/projects/2dibaynigator.png",
    images: [
      "/projects/2dibaynigator.png",
      "/projects/2dibaynigator-2.png",
      "/projects/2dibaynigator-3.png",
    ],
    featured: true,
  },
  // — Print Design —
  {
    id: "certificates",
    title: "Certificates",
    category: "Print Design",
    description:
      "Elegant certificate designs for academic achievements and event recognitions.",
    designObjective:
      "Design certificates that feel like a genuine honor to receive and display.",
    year: "2024",
    software: ["Adobe InDesign", "Adobe Photoshop"],
    thumbnail: "/projects/certificates.png",
    images: ["/projects/certificates.png"],
    featured: false,
  },
  {
    id: "flyers",
    title: "Flyers",
    category: "Print Design",
    description:
      "A collection of flyers for campus events, promotions, and announcements.",
    designObjective:
      "Pack essential details into small formats without losing visual punch.",
    year: "2024",
    software: ["Adobe InDesign", "Adobe Photoshop"],
    thumbnail: "/projects/flyers.png",
    images: ["/projects/flyers.png"],
    featured: false,
  },
  {
    id: "posters",
    title: "Posters",
    category: "Print Design",
    description:
      "A poster series with bold typography and strong visual hierarchy for various campaigns.",
    designObjective:
      "Command attention from across a hallway with bold type and fearless contrast.",
    year: "2023",
    software: ["Adobe Photoshop", "Adobe InDesign"],
    thumbnail: "/projects/posters.png",
    images: ["/projects/posters.png"],
    featured: false,
  },*/
];

const hideBrokenImage = (e) => {
  e.currentTarget.remove();
};

/* Static per-slot transform — anchored by grid column, never by activeIndex */
const getSlotStyle = (colIndex, total) => {
  const centerIndex = Math.floor((total - 1) / 2);
  const offset = colIndex - centerIndex;

  if (offset === 0) {
    return { transform: "perspective(1200px) scale(1.04)", opacity: 1, zIndex: 20 };
  }

  const direction = offset < 0 ? -1 : 1;
  return {
    transform: `perspective(1200px) scale(${total === 2 ? 0.9 : 0.86}) rotateY(${
      direction * 8
    }deg)`,
    opacity: 0.55,
    zIndex: 20 - Math.abs(offset),
  };
};

const isIncomingCard = (enteringSide, colIndex, total) => {
  if (enteringSide === "next") return colIndex === total - 1;
  if (enteringSide === "prev") return colIndex === 0;
  return false;
};

const entranceClass = (enteringSide, total) => {
  if (enteringSide === "prev" && total === 2) return "cover-in-from-right";
  return enteringSide === "next" ? "cover-in-from-right" : "cover-in-from-left";
};

const ProjectCard = ({ project, onOpen }) => (
  <article
    className="group glass rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(32,178,166,0.25)]"
    onClick={onOpen}
  >
    {/* Thumbnail */}
    <div className="relative h-44 sm:h-52 overflow-hidden bg-surface flex-shrink-0">
      <div
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 via-surface to-transparent"
        aria-hidden="true"
      >
        <FolderOpen className="w-10 h-10 text-muted-foreground/25" />
      </div>

      <img
        src={project.thumbnail}
        alt={project.title}
        loading="lazy"
        decoding="async"
        onError={hideBrokenImage}
        className="relative z-[1] w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent"
        aria-hidden="true"
      />

      {/* Category badge */}
      <span className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-medium text-primary z-10">
        {project.category}
      </span>

      {/* Featured badge */}
      {project.featured && (
        <span className="absolute top-3 right-3 glass rounded-full px-2.5 py-1 text-xs font-medium text-highlight flex items-center gap-1 z-10">
          <Star className="w-3 h-3 fill-current" aria-hidden="true" />
          Featured
        </span>
      )}
    </div>

    {/* Content */}
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

      <p className="text-sm text-muted-foreground flex-1 line-clamp-3 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.software.map((tool) => (
          <span
            key={tool}
            className="px-2.5 py-1 rounded-full bg-surface border border-border/50 text-[11px] font-medium text-muted-foreground"
          >
            {tool}
          </span>
        ))}
      </div>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="self-start mt-1 inline-flex items-center gap-1.5 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Project
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          className="self-start mt-1 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Project
        </button>
      )}
    </div>
  </article>
);

const ProjectModal = ({ project, onClose, closeButtonRef }) => (
  <div
    className="fixed inset-0 z-[100] overflow-y-auto"
    role="dialog"
    aria-modal="true"
    aria-labelledby="project-modal-title"
  >
    <div
      className="absolute inset-0 bg-background/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      aria-hidden="true"
    />

    <div className="relative min-h-full flex items-center justify-center p-4 sm:p-8">
      <div className="relative glass-strong rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto animate-filter-in">
        {/* Close */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close project preview"
          className="sticky top-4 z-20 ml-auto mr-4 mt-4 block p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large preview */}
        <div className="relative overflow-hidden aspect-video rounded-t-2xl bg-surface">
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 via-surface to-transparent"
            aria-hidden="true"
          >
            <FolderOpen className="w-14 h-14 text-muted-foreground/25" />
          </div>
          <img
            src={project.thumbnail}
            alt={project.title}
            onError={hideBrokenImage}
            className="relative z-[1] w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="glass rounded-full px-3 py-1 text-xs font-medium text-primary">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {project.year}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 text-xs text-highlight">
                <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                Featured
              </span>
            )}
          </div>

          <h3
            id="project-modal-title"
            className="text-xl sm:text-2xl font-bold"
          >
            {project.title}
          </h3>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              <Target className="w-4 h-4" aria-hidden="true" />
              Design Objective
            </h4>
            <p className="border-l-2 border-primary/40 pl-4 italic text-foreground/90 leading-relaxed">
              {project.designObjective}
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              <PenTool className="w-4 h-4" aria-hidden="true" />
              Software Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.software.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-full bg-surface border border-border/50 text-xs font-medium text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {project.images?.length > 1 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                <Images className="w-4 h-4" aria-hidden="true" />
                Gallery
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.images.slice(1).map((src, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-xl aspect-video bg-surface"
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 via-surface to-transparent"
                      aria-hidden="true"
                    >
                      <FolderOpen className="w-6 h-6 text-muted-foreground/25" />
                    </div>
                    <img
                      src={src}
                      alt={`${project.title} preview ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      onError={hideBrokenImage}
                      className="relative z-[1] w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const [enteringSide, setEnteringSide] = useState(null);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, lastDelta: 0 });
  const slideTimerRef = useRef(null);
  const enteringTimerRef = useRef(null);
  const nextRef = useRef(null);

  const filteredProjects = useMemo(() => {
    const list =
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);
    return [...list].sort(
      (a, b) => Number(b.featured) - Number(a.featured)
    );
  }, [activeCategory]);

  const count = filteredProjects.length;

  /* Stage geometry — must be declared before any effect deps reference it */
  const gridCols = Math.max(1, Math.min(cardsPerView, count));
  const stageCap = gridCols === 1 ? 576 : gridCols === 2 ? 960 : Infinity;
  const stageWidth =
    containerWidth > 0 ? Math.min(containerWidth, stageCap) : 0;
  const step = stageWidth > 0 ? (stageWidth + GAP) / gridCols : 0;

  /* Windowed slots — which project renders in each fixed column */
  const columns = useMemo(() => {
    if (count === 1) return [filteredProjects[0]];
    if (count === 2) {
      return [
        filteredProjects[activeIndex % 2],
        filteredProjects[(activeIndex + 1) % 2],
      ];
    }
    const windowed = [
      filteredProjects[(activeIndex - 1 + count) % count],
      filteredProjects[activeIndex],
      filteredProjects[(activeIndex + 1) % count],
    ];
    if (gridCols === 3) return windowed;
    if (gridCols === 2) return windowed.slice(1);
    return [windowed[1]];
  }, [filteredProjects, activeIndex, count, gridCols]);

  /* Responsive cards per view */
  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setCardsPerView(3);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* Track container width */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Reset position when filter changes */
  const handleCategoryChange = (category) => {
    clearTimeout(slideTimerRef.current);
    clearTimeout(enteringTimerRef.current);
    setActiveCategory(category);
    setActiveIndex(0);
    setSlideOffset(0);
    setEnteringSide(null);
    setIsAnimating(false);
    setIsSnapping(false);
    setDragDelta(0);
  };

  /* Auto-slide */
  useEffect(() => {
    if (count <= 1 || isHovered || isDragging || isAnimating) return;
    const timer = setInterval(() => nextRef.current(), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [count, isHovered, isDragging, isAnimating, step]);

  /* Modal behavior */
  useEffect(() => {
    if (!selectedProject) return;
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
      previouslyFocused?.focus();
    };
  }, [selectedProject]);

  /* Cover-flow navigation: slide the stage one column, then swap content at snap */
  const beginSlide = (dir) => {
    if (isAnimating || count <= 1 || step <= 0) return;
    setSlideOffset(dir === "next" ? -step : step);
    setIsAnimating(true);
    slideTimerRef.current = setTimeout(() => completeSlide(dir), SLIDE_MS);
  };

  const completeSlide = (dir) => {
    setActiveIndex((i) =>
      dir === "next" ? (i + 1) % count : (i - 1 + count) % count
    );
    setEnteringSide(dir);
    setSlideOffset(0);
    setIsAnimating(false);
    setIsSnapping(true);
    requestAnimationFrame(() => setIsSnapping(false));
    clearTimeout(enteringTimerRef.current);
    enteringTimerRef.current = setTimeout(() => setEnteringSide(null), 600);
  };

  const next = () => beginSlide("next");
  const prev = () => beginSlide("prev");

  useEffect(() => {
    nextRef.current = next;
  });

  /* Keyboard navigation (when focus is inside the section) */
  useEffect(() => {
    const handleKey = (e) => {
      if (count <= 1) return;
      const active = document.activeElement;
      if (!active || !sectionRef.current?.contains(active)) return;
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  /* Cleanup slide timers */
  useEffect(
    () => () => {
      clearTimeout(slideTimerRef.current);
      clearTimeout(enteringTimerRef.current);
    },
    []
  );

  const openProject = (project) => {
    if (Math.abs(dragRef.current.lastDelta) > 10) return;
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
      return;
    }
    setSelectedProject(project);
  };

  /* Drag / swipe */
  const handlePointerDown = (e) => {
    if (isAnimating) return;
    const isInteractive = e.target.closest("a, button");
    dragRef.current = { active: true, startX: e.clientX, lastDelta: 0 };
    setIsDragging(true);
    if (!isInteractive) e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.active) return;
    const delta = e.clientX - dragRef.current.startX;
    dragRef.current.lastDelta = delta;
    setDragDelta(delta);
  };

  const endDrag = () => {
    if (!dragRef.current.active) return;
    const delta = dragRef.current.lastDelta;
    dragRef.current.active = false;
    setIsDragging(false);
    setDragDelta(0);
    if (delta < -DRAG_THRESHOLD) next();
    else if (delta > DRAG_THRESHOLD) prev();
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
    >
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
        <div className="text-center mx-auto max-w-3xl mb-10 md:mb-12">
          <span className="section-eyebrow animate-fade-in">
            Featured Work
          </span>

          <h2 className="section-heading mt-4 mb-5 animate-fade-in animation-delay-100">
            Projects that{" "}
            <span className="font-serif italic font-normal text-foreground">
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A curated selection of design work across branding, publication,
            digital media, and beyond.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 md:mb-12 animate-fade-in animation-delay-200"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(32,178,166,0.4)]"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        {count === 0 ? (
          <div className="glass rounded-2xl p-12 text-center animate-filter-in max-w-md mx-auto">
            <FolderOpen
              className="w-10 h-10 mx-auto text-muted-foreground/40 mb-4"
              aria-hidden="true"
            />
            <p className="text-muted-foreground">
              No projects in this category yet — check back soon.
            </p>
          </div>
        ) : (
          <div
            className="relative"
            role="region"
            aria-label="Project gallery carousel"
          >
            {/* Previous */}
            <button
              onClick={prev}
              disabled={count <= 1}
              aria-label="Previous projects"
              className="absolute left-1 sm:left-2 top-[30%] z-30 p-2.5 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Track — fixed grid columns; only content changes on navigation */}
            <div ref={containerRef} className="overflow-hidden px-2 py-10 -my-6">
              {containerWidth > 0 && (
                <div
                  className="grid touch-pan-y select-none will-change-transform cursor-grab active:cursor-grabbing"
                  style={{
                    gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                    gap: `${GAP}px`,
                    maxWidth: stageCap === Infinity ? undefined : `${stageCap}px`,
                    marginInline: "auto",
                    transform: `translate3d(${slideOffset + dragDelta}px, 0, 0)`,
                    transition: isDragging || isSnapping
                      ? "none"
                      : `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
                  }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={endDrag}
                  onPointerCancel={endDrag}
                  onPointerLeave={endDrag}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  aria-live="polite"
                >
                  {columns.map((project, colIndex) => {
                    const slot = getSlotStyle(colIndex, columns.length);
                    const incoming = isIncomingCard(
                      enteringSide,
                      colIndex,
                      columns.length
                    );
                    const entrance = incoming
                      ? entranceClass(enteringSide, columns.length)
                      : "animate-filter-in";

                    return (
                      <div
                        key={`${activeCategory}-${project.id}`}
                        className={`min-w-0 ${entrance}`}
                        style={{
                          animationDelay: incoming
                            ? "0ms"
                            : `${Math.min(colIndex * 60, 180)}ms`,
                        }}
                      >
                        <div
                          className="h-full transition-all duration-700"
                          style={{
                            transform: slot.transform,
                            opacity: slot.opacity,
                            zIndex: slot.zIndex,
                            position: "relative",
                          }}
                        >
                          <ProjectCard
                            project={project}
                            onOpen={() => openProject(project)}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Next */}
            <button
              onClick={next}
              disabled={count <= 1}
              aria-label="Next projects"
              className="absolute right-1 sm:right-2 top-[30%] z-30 p-2.5 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Position indicator */}
            <div className="flex justify-center mt-2 text-sm text-muted-foreground">
              <span className="text-primary font-semibold">
                {activeIndex + 1}
              </span>
              <span className="mx-1.5">/</span>
              <span>{count}</span>
            </div>
          </div>
        )}
      </div>

      {/* Project Lightbox */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          closeButtonRef={closeButtonRef}
        />
      )}
    </section>
  );
};
