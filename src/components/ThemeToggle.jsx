import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const getInitialTheme = () =>
  typeof document !== "undefined"
    ? document.documentElement.classList.contains("dark")
    : true;

export const ThemeToggle = ({ className = "" }) => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.add("theme-transition");
    const next = !isDark;
    html.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
    window.setTimeout(() => html.classList.remove("theme-transition"), 400);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 ${className}`}
    >
      {isDark ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
    </button>
  );
};
