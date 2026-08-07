import {
  siAndroidstudio,
  siClaude,
  siDart,
  siDeepseek,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGooglegemini,
  siGoogle,
  siJavascript,
} from "simple-icons";
import { Clapperboard } from "lucide-react";
import { legacyBrandIcons } from "@/data/legacyBrandIcons";

// GitHub's brand hex is near-black; use the theme foreground so it stays
// visible on both light and dark backgrounds.
const github = { ...siGithub, fill: "var(--color-foreground)" };

export const skillIcons = {
  // — provided by the current simple-icons package —
  figma: siFigma,
  google: siGoogle,
  dart: siDart,
  javascript: siJavascript,
  flutter: siFlutter,
  firebase: siFirebase,
  git: siGit,
  github,
  androidstudio: siAndroidstudio,
  claude: siClaude,
  googlegemini: siGooglegemini,
  deepseek: siDeepseek,
  // — bundled from older simple-icons versions (removed from the current package) —
  ...legacyBrandIcons,
  // — no official brand icon exists for CapCut, so use a neutral icon instead of a fake logo —
  capcut: { lucide: Clapperboard, fill: "var(--color-foreground)" },
};