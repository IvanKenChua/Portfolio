import { skillIcons } from "@/data/skillIcons";

export const BrandIcon = ({ slug, size = "h-6 w-6" }) => {
  const icon = skillIcons[slug];
  if (!icon) return null;

  if (icon.lucide) {
    const Icon = icon.lucide;
    return (
      <span
        className="inline-flex"
        style={{ color: icon.fill }}
        aria-hidden="true"
      >
        <Icon className={`${size} block`} strokeWidth={2} />
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className={`${size} block`}
      fill={icon.fill ?? `#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
};