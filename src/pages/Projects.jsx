import {
  Calendar,
  ExternalLink,
  FolderOpen,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Button } from "@/components/Button";

const categories = [
  "All",
  "Posters",
  "Social Media Graphics",
  "Roll-up Banners",
  "Tarpaulins",
  "Prints",
  "Presentation Design",
  "Photography",
  "UI/UX",
];

const socialMediaProjects = [
  {
    id: "admission",
    title: "DWCL Admission",
    category: "Social Media Graphics",
    description: "A set of social media graphics promoting DWCL admissions with bold visuals and clear messaging across different departments.",
    year: "2026",
    cover: "/projects/socialmedia_graphics/admission/cover-admission.png",
    images: [
      "/projects/socialmedia_graphics/admission/cover-admission.png",
      "/projects/socialmedia_graphics/admission/admission-1.png",
      "/projects/socialmedia_graphics/admission/admission-son.png",
      "/projects/socialmedia_graphics/admission/admission-soecs.png",
      "/projects/socialmedia_graphics/admission/admission-shs.png",
      "/projects/socialmedia_graphics/admission/admission-shom.png",
      "/projects/socialmedia_graphics/admission/admission-seas.png",
      "/projects/socialmedia_graphics/admission/admission-sbma.png",
      "/projects/socialmedia_graphics/admission/admission-jhs.png",
      "/projects/socialmedia_graphics/admission/admission-gradeschool.png",
    ],
  },
  {
    id: "csits-1stGA",
    title: "CSIT-S 1st General Assembly",
    category: "Social Media Graphics",
    description: "A promotional graphic for the CSIT-S General Assembly event.",
    year: "2024",
    cover: "/projects/socialmedia_graphics/csits_1stGA/csits-1stGA-Cover.png",
    images: [
      "/projects/socialmedia_graphics/csits_1stGA/csits-1stGA-Cover.png",
      "/projects/socialmedia_graphics/csits_1stGA/csits-1stGA.png",
      "/projects/socialmedia_graphics/csits_1stGA/csits-1stGA1.png",
    ],
  },
  {
    id: "csits-2ndGA",
    title: "CSIT-S 2nd General Assembly",
    category: "Social Media Graphics",
    description: "A promotional graphic for the CSIT-S 2nd General Assembly event.",
    year: "2025",
    cover: "/projects/socialmedia_graphics/csits-2ndGA/csits-2ndGA.png",
    images: [
      "/projects/socialmedia_graphics/csits-2ndGA/csits-2ndGA.png",
    ],
  },
  {
    id: "csits-colloquium",
    title: "CSIT Colloquium",
    category: "Social Media Graphics",
    description: "A set of promotional graphics for the CSIT Colloquium event.",
    year: "2025",
    cover: "/projects/socialmedia_graphics/csits_colloquium/csits-colloquium-cover.png",
    images: [
      "/projects/socialmedia_graphics/csits_colloquium/csits-colloquium-cover.png",
      "/projects/socialmedia_graphics/csits_colloquium/csits-colloquium1.png",
      "/projects/socialmedia_graphics/csits_colloquium/csits-colloquium2.png",
    ],
  },
  {
    id: "csits-days2024",
    title: "CSIT Days 2024",
    category: "Social Media Graphics",
    description: "An event promotion highlighting the activities of CSIT Days 2024.",
    year: "2024",
    cover: "/projects/socialmedia_graphics/csits_days2024/csits-days2024-cover.png",
    images: [
      "/projects/socialmedia_graphics/csits_days2024/csits-days2024-cover.png",
      "/projects/socialmedia_graphics/csits_days2024/csits-days2024.png",
      "/projects/socialmedia_graphics/csits_days2024/csits-days2024-1.png",
      "/projects/socialmedia_graphics/csits_days2024/csits-days2024-2.png",
      "/projects/socialmedia_graphics/csits_days2024/csits-days2024-3.png",
    ],
  },
  {
    id: "csits-days2025",
    title: "CSIT Days 2025",
    category: "Social Media Graphics",
    description: "An event promotion for CSIT Days 2025.",
    year: "2025",
    cover: "/projects/socialmedia_graphics/csits_days2025/csits-days2025-cover.png",
    images: [
      "/projects/socialmedia_graphics/csits_days2025/csits-days2025-cover.png",
      "/projects/socialmedia_graphics/csits_days2025/csits-days2025-1.png",
    ],
  },
  {
    id: "csits-minecraft",
    title: "CSIT Minecraft Event",
    category: "Social Media Graphics",
    description: "A set of promotional graphics for the CSIT Minecraft event.",
    year: "2025",
    cover: "/projects/socialmedia_graphics/csits_minecraft/csits-minecraft-cover.png",
    images: [
      "/projects/socialmedia_graphics/csits_minecraft/csits-minecraft-cover.png",
      "/projects/socialmedia_graphics/csits_minecraft/csits-minecraft.png",
      "/projects/socialmedia_graphics/csits_minecraft/csits-minecraft1.png",
      "/projects/socialmedia_graphics/csits_minecraft/csits-minecraft2.png",
      "/projects/socialmedia_graphics/csits_minecraft/csits-minecraft3.png",
      "/projects/socialmedia_graphics/csits_minecraft/csits-minecraft4.png",
    ],
  },
  {
    id: "csits-uiux",
    title: "CSIT-S UI/UX Competition",
    category: "Social Media Graphics",
    description: "A promotional graphic for the CSIT-S UI/UX Competition.",
    year: "2025",
    cover: "/projects/socialmedia_graphics/csits_uiux/csits-uiux-cover.png",
    images: [
      "/projects/socialmedia_graphics/csits_uiux/csits-uiux-cover.png",
      "/projects/socialmedia_graphics/csits_uiux/csits-uiux.png",
      "/projects/socialmedia_graphics/csits_uiux/csits-uiux1.png",
      "/projects/socialmedia_graphics/csits_uiux/csits-uiux2.png",
      "/projects/socialmedia_graphics/csits_uiux/csits-uiux3.png",
    ],
  },
  {
    id: "devconlegazpi-hoi",
    title: "DEVCON Legazpi — Heroes of Innovation",
    category: "Social Media Graphics",
    description: "Designed promotional materials for the Heroes of Innovation Challenge 2026: Ibalong Festival Hackathon.",
    year: "2026",
    cover: "/projects/socialmedia_graphics/devconlegazpi_hoi/devconlegazpi-hoi-cover.png",
    images: [
      "/projects/socialmedia_graphics/devconlegazpi_hoi/devconlegazpi-hoi-cover.png",
      "/projects/socialmedia_graphics/devconlegazpi_hoi/devconlegazpi-hoi.png",
      "/projects/socialmedia_graphics/devconlegazpi_hoi/devconlegazpi-hoi1.png",
      "/projects/socialmedia_graphics/devconlegazpi_hoi/devconlegazpi-hoi2.png",
      "/projects/socialmedia_graphics/devconlegazpi_hoi/devconlegazpi-hoi3.png",
      "/projects/socialmedia_graphics/devconlegazpi_hoi/devconlegazpi-hoi4.png",
    ],
  },
  {
    id: "internship-pubmats",
    title: "DWCL Internship Pubmats",
    category: "Social Media Graphics",
    description: "Designed promotional materials, roll-up banners, brochures, and social media graphics for the DWCL Office of External Relations.",
    year: "2026",
    cover: "/projects/socialmedia_graphics/internship/internship-pubmats-cover.png",
    images: [
      "/projects/socialmedia_graphics/internship/internship-pubmats-cover.png",
      "/projects/socialmedia_graphics/internship/internship-pubmats1.png",
      "/projects/socialmedia_graphics/internship/internship-pubmats2.png",
      "/projects/socialmedia_graphics/internship/internship-pubmats3.png",
      "/projects/socialmedia_graphics/internship/internship-pubmats4.png",
      "/projects/socialmedia_graphics/internship/internship-pubmats5.png",
      "/projects/socialmedia_graphics/internship/internship-pubmats6.png",
      "/projects/socialmedia_graphics/internship/internship-pubmats7.png",
    ],
  },
  {
    id: "thechannel-application",
    title: "The Channel — Application",
    category: "Social Media Graphics",
    description: "A recruitment graphic inviting students to join The Channel's Editorial Board.",
    year: "2024",
    cover: "/projects/socialmedia_graphics/thechannel_application/thechannel-application-cover.png",
    images: [
      "/projects/socialmedia_graphics/thechannel_application/thechannel-application-cover.png",
      "/projects/socialmedia_graphics/thechannel_application/thechannel-application1.png",
      "/projects/socialmedia_graphics/thechannel_application/thechannel-application2.png",
      "/projects/socialmedia_graphics/thechannel_application/thechannel-application3.png",
      "/projects/socialmedia_graphics/thechannel_application/thechannel-application4.png",
    ],
  },
  {
    id: "thechannel-christmas",
    title: "The Channel — Christmas",
    category: "Social Media Graphics",
    description: "A Christmas countdown series for The Channel publication.",
    year: "2024",
    cover: "/projects/socialmedia_graphics/thechannel_christmas/thechannel-christmas-countdown-cover.png",
    images: [
      "/projects/socialmedia_graphics/thechannel_christmas/thechannel-christmas-countdown-cover.png",
      "/projects/socialmedia_graphics/thechannel_christmas/thechannel-christmas-countdown.png",
      "/projects/socialmedia_graphics/thechannel_christmas/thechannel-christmas-countdown1.png",
      "/projects/socialmedia_graphics/thechannel_christmas/thechannel-christmas-countdown3.png",
      "/projects/socialmedia_graphics/thechannel_christmas/thechannel-christmas-countdown4.png",
      "/projects/socialmedia_graphics/thechannel_christmas/thechannel-christmas-countdown5.png",
    ],
  },
  {
    id: "thechannel-newyear",
    title: "The Channel — New Year",
    category: "Social Media Graphics",
    description: "A New Year countdown series for The Channel publication.",
    year: "2025",
    cover: "/projects/socialmedia_graphics/thechannel_newyear/thechannel-nycountdown-cover.png",
    images: [
      "/projects/socialmedia_graphics/thechannel_newyear/thechannel-nycountdown-cover.png",
      "/projects/socialmedia_graphics/thechannel_newyear/thechannel-nycountdown.png",
      "/projects/socialmedia_graphics/thechannel_newyear/thechannel-nycountdown1.png",
      "/projects/socialmedia_graphics/thechannel_newyear/thechannel-nycountdown2.png",
      "/projects/socialmedia_graphics/thechannel_newyear/thechannel-nycountdown3.png",
      "/projects/socialmedia_graphics/thechannel_newyear/thechannel-nycountdown4.png",
      "/projects/socialmedia_graphics/thechannel_newyear/thechannel-nycountdown5.png",
    ],
  },
];

const posterProjects = [
  {
    id: "bbc-menu",
    title: "Better Batter Café Menu",
    category: "Posters",
    description: "A café menu designed with a clean, appetizing layout and consistent Better Batter Café branding.",
    year: "2026",
    software: ["Adobe Photoshop", "Canva"],
    cover: "/projects/posters/bbc_menu/bbc-menu-cover.png",
    images: [
      "/projects/posters/bbc_menu/bbc-menu-cover.png",
      "/projects/posters/bbc_menu/bbc_menu1.png",
      "/projects/posters/bbc_menu/bbc_menu2.png",
      "/projects/posters/bbc_menu/bbc_menu3.png",
      "/projects/posters/bbc_menu/bbc_menu4.png",
      "/projects/posters/bbc_menu/bbc_menu5.png",
      "/projects/posters/bbc_menu/bbc_menu6.png",
      "/projects/posters/bbc_menu/bbc_menu7.png",
      "/projects/posters/bbc_menu/bbc_menu8.png",
      "/projects/posters/bbc_menu/bbc_menu9.png",
      "/projects/posters/bbc_menu/bbc_menu10.png",
      "/projects/posters/bbc_menu/bbc_menu11.png",
      "/projects/posters/bbc_menu/bbc_menu12.png",
      "/projects/posters/bbc_menu/bbc_menu13.png",
      "/projects/posters/bbc_menu/bbc_menu14.png",
      "/projects/posters/bbc_menu/bbc_menu15.png",
      "/projects/posters/bbc_menu/bbc_menu16.png",
      "/projects/posters/bbc_menu/bbc_menu17.png",
    ],
  },
  {
    id: "bbc-menuboard",
    title: "Better Batter Café Menu Board",
    category: "Posters",
    description: "A menu board design created for Better Batter Café, featuring food and beverage selections with a clear and consistent visual presentation.",
    year: "2026",
    software: ["Adobe Photoshop", "Canva"],
    cover: "/projects/posters/bbc_menuboard/bbc-menuboard-cover.png",
    images: [
      "/projects/posters/bbc_menuboard/bbc-menuboard-cover.png",
      "/projects/posters/bbc_menuboard/bbc_menuboard_drinks.png",
      "/projects/posters/bbc_menuboard/bbc_menuboard_food.png",
    ],
  },
  {
    id: "bbc-windowposter",
    title: "Better Batter Café Window Posters",
    category: "Posters",
    description: "A collection of promotional window posters created for Better Batter Café, featuring baked goods, brownies, cookies, coffee, and featured café selections.",
    year: "2026",
    software: ["Adobe Photoshop", "Canva"],
    cover: "/projects/posters/bbc_windowposter/bbc-windowposter-cover.png",
    images: [
      "/projects/posters/bbc_windowposter/bbc-windowposter-cover.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_bakedbrownies.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_bakedgoods.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_brownies.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_cookies.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_favepicks.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_saigoncoffee.png",
      "/projects/posters/bbc_windowposter/bbc_windowposter_saigoncoffee2.png",
    ],
  },
];

const tarpProjects = [
  {
    id: "programs-tarpaulin",
    title: "Programs Offered per Department",
    category: "Tarpaulins",
    description: "A tarpaulin displaying the academic programs offered by each department.",
    year: "2026",
    software: ["Adobe InDesign", "Adobe Photoshop"],
    cover: "/projects/tarpaulin/programs_offered_tarp/dwcl-programstarpaulin-cover.png",
    images: [
      "/projects/tarpaulin/programs_offered_tarp/dwcl-programstarpaulin-cover.png",
      "/projects/tarpaulin/programs_offered_tarp/dwcl-programs1.png",
      "/projects/tarpaulin/programs_offered_tarp/dwcl-programs2.png",
      "/projects/tarpaulin/programs_offered_tarp/dwcl-programs3.png",
      "/projects/tarpaulin/programs_offered_tarp/dwcl-programs4.png",
      "/projects/tarpaulin/programs_offered_tarp/dwcl-programs5.png",
      "/projects/tarpaulin/programs_offered_tarp/dwcl-programs6.png",
      "/projects/tarpaulin/programs_offered_tarp/dwcl-programs7.png",
      "/projects/tarpaulin/programs_offered_tarp/dwcl-programs8.png",
      "/projects/tarpaulin/programs_offered_tarp/dwcl-programs9.png",
    ],
  },
];

const rollupProjects = [
  {
    id: "programs-rollup",
    title: "Programs Offered Roll-up Banner",
    category: "Roll-up Banners",
    description: "A roll-up banner showcasing the academic programs offered by DWCL.",
    year: "2026",
    software: ["Adobe InDesign", "Adobe Photoshop"],
    cover: "/projects/tarpaulin/rollup_tarp/dwcl-rolluptarp-cover.png",
    images: [
      "/projects/tarpaulin/rollup_tarp/dwcl-rolluptarp-cover.png",
      "/projects/tarpaulin/rollup_tarp/dwcl-rolluptarp1.png",
      "/projects/tarpaulin/rollup_tarp/dwcl-rolluptarp2.png",
    ],
  },
];

const printProjects = [
  {
    id: "dwcl-brochure",
    title: "DWCL Tri-fold Brochure",
    category: "Prints",
    description: "A tri-fold brochure introducing DWCL and its academic programs.",
    year: "2026",
    software: ["Adobe InDesign", "Adobe Photoshop"],
    cover: "/projects/prints/dwcl_trifold_brochure/dwcl-trifoldbrochure-cover.png",
    images: [
      "/projects/prints/dwcl_trifold_brochure/dwcl-trifoldbrochure-cover.png",
      "/projects/prints/dwcl_trifold_brochure/dwcl_trifold_brochure_front.png",
      "/projects/prints/dwcl_trifold_brochure/dwcl_trifold_brochure_back.png",
    ],
  },
];

const presentationProjects = [
  {
    id: "commencement-slides",
    title: "58th DWCL Commencement Exercises",
    category: "Presentation Design",
    description: "A presentation design for the 58th DWCL Commencement Exercises.",
    year: "2026",
    software: ["Microsoft PowerPoint", "Adobe Photoshop"],
    cover: "/projects/presentation/dwcl_58th_commencement_exercises/dwcl-58thcommencement-cover.png",
    images: [
      "/projects/presentation/dwcl_58th_commencement_exercises/dwcl-58thcommencement-cover.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/1.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/2.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/3.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/4.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/5.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/6.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/7.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/8.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/9.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/10.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/11.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/12.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/13.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/14.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/15.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/16.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/17.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/18.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/19.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/20.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/21.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/22.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/23.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/24.png",
      "/projects/presentation/dwcl_58th_commencement_exercises/25.png",
    ],
    link: "https://heyzine.com/flip-book/7b18cfc94f.html",
  },
  {
    id: "clinical-graduation",
    title: "3rd DWCL Clinical Graduation",
    category: "Presentation Design",
    description: "A presentation design created for the 3rd DWCL Clinical Graduation ceremony.",
    year: "2026",
    software: ["Microsoft PowerPoint", "Google Slides"],
    cover: "/projects/presentation/dwcl_3rd_clinical_graduation/dwcl-3rdclinicalgrad-cover.png",
    images: [
      "/projects/presentation/dwcl_3rd_clinical_graduation/dwcl-3rdclinicalgrad-cover.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/1.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/2.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/3.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/4.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/5.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/6.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/7.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/8.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/9.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/10.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/11.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/12.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/13.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/14.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/15.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/16.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/17.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/18.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/19.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/20.png",
      "/projects/presentation/dwcl_3rd_clinical_graduation/21.png",
    ],
    link: "https://heyzine.com/flip-book/46fdce2198.html",
  },
];

const otherProjects = [];

const projects = [...posterProjects, ...socialMediaProjects, ...tarpProjects, ...rollupProjects, ...printProjects, ...presentationProjects, ...otherProjects];

const hideBrokenImage = (e) => {
  e.currentTarget.remove();
};

const ProjectCard = ({ project, onOpen, isSocialMedia }) => (
  <article
    className="group glass rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(32,178,166,0.25)]"
    onClick={onOpen}
  >
    {isSocialMedia ? (
      <div className="relative aspect-square overflow-hidden bg-surface flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 via-surface to-transparent" aria-hidden="true">
          <FolderOpen className="w-10 h-10 text-muted-foreground/25" />
        </div>
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onError={hideBrokenImage}
          className="relative z-[1] w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" aria-hidden="true" />
        <span className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-medium text-primary z-10">
          {project.category}
        </span>
        <span className="absolute top-3 right-3 glass rounded-full px-2.5 py-1 text-xs font-medium text-highlight flex items-center gap-1 z-10">
          <Star className="w-3 h-3 fill-current" aria-hidden="true" />
          {project.images.length} designs
        </span>
      </div>
    ) : (
      <div className="relative h-44 sm:h-52 overflow-hidden bg-surface flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 via-surface to-transparent" aria-hidden="true">
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
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" aria-hidden="true" />
        <span className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-medium text-primary z-10">
          {project.category}
        </span>
        {project.featured && (
          <span className="absolute top-3 right-3 glass rounded-full px-2.5 py-1 text-xs font-medium text-highlight flex items-center gap-1 z-10">
            <Star className="w-3 h-3 fill-current" aria-hidden="true" />
            Featured
          </span>
        )}
      </div>
    )}

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
      {!isSocialMedia && project.software && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.software.map((tool) => (
            <span key={tool} className="px-2.5 py-1 rounded-full bg-surface border border-border/50 text-[11px] font-medium text-muted-foreground">
              {tool}
            </span>
          ))}
        </div>
      )}
      {isSocialMedia ? (
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(); }}
          className="self-start mt-1 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Gallery
        </button>
      ) : project.link ? (
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
          onClick={(e) => { e.stopPropagation(); onOpen(); }}
          className="self-start mt-1 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Gallery
        </button>
      )}
    </div>
  </article>
);

const ProjectModal = ({ project, onClose }) => (
  <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
    <div className="absolute inset-0 bg-background/85 backdrop-blur-sm animate-fade-in" onClick={onClose} aria-hidden="true" />
    <div className="relative min-h-full flex items-center justify-center p-4 sm:p-8">
      <div className="relative glass-strong rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto animate-filter-in">
        <button onClick={onClose} aria-label="Close project preview" className="sticky top-4 z-20 ml-auto mr-4 mt-4 block p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all">
          <X className="w-5 h-5" />
        </button>
        <div className="relative overflow-hidden aspect-video rounded-t-2xl bg-surface">
          <img src={project.thumbnail} alt={project.title} onError={hideBrokenImage} className="relative z-[1] w-full h-full object-cover" />
        </div>
        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="glass rounded-full px-3 py-1 text-xs font-medium text-primary">{project.category}</span>
            <span className="text-xs text-muted-foreground">{project.year}</span>
            {project.featured && <span className="flex items-center gap-1 text-xs text-highlight"><Star className="w-3.5 h-3.5 fill-current" />Featured</span>}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
          {project.designObjective && <p className="border-l-2 border-primary/40 pl-4 italic text-foreground/90">{project.designObjective}</p>}
          <p className="text-muted-foreground">{project.description}</p>
        </div>
      </div>
    </div>
  </div>
);

const SocialMediaModal = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRef = useRef(null);

  const galleryImages = useMemo(() => {
    return project.images.filter((img) => !img.toLowerCase().includes("cover"));
  }, [project.images]);

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  }, [galleryImages.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrev, handleNext]);

  useEffect(() => {
    if (thumbnailRef.current) {
      const activeThumb = thumbnailRef.current.children[activeIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm animate-fade-in" onClick={onClose} aria-hidden="true" />
      <div className="relative min-h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="relative glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-filter-in">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="sticky top-4 z-20 ml-auto mr-4 mt-4 block p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="px-6 sm:px-8 pt-2 pb-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="glass rounded-full px-3 py-1 text-xs font-medium text-primary">{project.category}</span>
              <span className="text-xs text-muted-foreground">{project.year}</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{galleryImages.length} designs</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
          </div>

          {/* Main Image */}
          <div className="relative px-6 sm:px-8">
            <div className="relative bg-surface rounded-xl overflow-hidden">
              <img
                src={galleryImages[activeIndex]}
                alt={`${project.title} — Design ${activeIndex + 1}`}
                onError={hideBrokenImage}
                className="w-full max-h-[50vh] sm:max-h-[55vh] object-contain"
              />

              {/* Navigation arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous design"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next design"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="absolute bottom-3 right-3 glass rounded-full px-3 py-1 text-xs font-medium">
                {activeIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          {galleryImages.length > 1 && (
            <div
              ref={thumbnailRef}
              className="flex gap-2 px-6 sm:px-8 mt-4 overflow-x-auto scrollbar-hide pb-1"
            >
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    idx === activeIndex
                      ? "border-primary shadow-[0_0_12px_rgba(32,178,166,0.4)]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View design ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    onError={hideBrokenImage}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="px-6 sm:px-8 py-5 sm:py-6">
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSocialProject, setSelectedSocialProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const list = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);
    return [...list].sort((a, b) => {
      const aGallery = socialMediaProjects.some((sp) => sp.id === a.id) || posterProjects.some((pp) => pp.id === a.id) || tarpProjects.some((tp) => tp.id === a.id) || rollupProjects.some((rp) => rp.id === a.id) || printProjects.some((pp) => pp.id === a.id) || presentationProjects.some((pp) => pp.id === a.id);
      const bGallery = socialMediaProjects.some((sp) => sp.id === b.id) || posterProjects.some((pp) => pp.id === b.id) || tarpProjects.some((tp) => tp.id === b.id) || rollupProjects.some((rp) => rp.id === b.id) || printProjects.some((pp) => pp.id === b.id) || presentationProjects.some((pp) => pp.id === b.id);
      if (aGallery && !bGallery) return -1;
      if (!aGallery && bGallery) return 1;
      return Number(b.featured || false) - Number(a.featured || false);
    });
  }, [activeCategory]);

  const isGalleryProject = useCallback((project) => {
    return socialMediaProjects.some((sp) => sp.id === project.id) || posterProjects.some((pp) => pp.id === project.id) || tarpProjects.some((tp) => tp.id === project.id) || rollupProjects.some((rp) => rp.id === project.id) || printProjects.some((pp) => pp.id === project.id) || presentationProjects.some((pp) => pp.id === project.id);
  }, []);

  const handleOpen = useCallback((project) => {
    if (isGalleryProject(project)) {
      setSelectedSocialProject(project);
    } else if (!project.link) {
      setSelectedProject(project);
    }
  }, [isGalleryProject]);

  return (
    <div className="min-h-screen">
      <section className="section-pad relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="section-container relative z-10">
          <div className="text-center mx-auto max-w-3xl mb-10 md:mb-12">
            <span className="section-eyebrow animate-fade-in">Featured Work</span>
            <h2 className="section-heading mt-4 mb-5 animate-fade-in animation-delay-100">
              Projects that <span className="font-serif italic font-normal text-foreground">make an impact.</span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A curated selection of design work across branding, publication, digital media, and beyond.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 md:mb-12 animate-fade-in animation-delay-200" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === activeCategory
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(32,178,166,0.4)]"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="glass rounded-2xl p-12 text-center animate-filter-in max-w-md mx-auto">
              <FolderOpen className="w-10 h-10 mx-auto text-muted-foreground/40 mb-4" aria-hidden="true" />
              <p className="text-muted-foreground">No projects in this category yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredProjects.map((project, idx) => (
                <div key={project.id} style={{ animationDelay: `${Math.min(idx * 60, 360)}ms` }}>
                  <ProjectCard
                    project={project}
                    onOpen={() => handleOpen(project)}
                    isSocialMedia={isGalleryProject(project)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        {selectedSocialProject && <SocialMediaModal project={selectedSocialProject} onClose={() => setSelectedSocialProject(null)} />}
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
          <span className="section-eyebrow animate-fade-in">Have a project in mind?</span>

          <h2 className="section-heading mt-4 mb-5 animate-fade-in animation-delay-100">
            Let's create something{" "}
            <span className="font-serif italic font-normal text-foreground">
              extraordinary.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200 mb-8">
            I'd love to hear about your vision. Let's turn your ideas into compelling visual experiences.
          </p>

          <div className="flex justify-center animate-fade-in animation-delay-300">
            <Button as="a" href="/contact" size="lg">
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
