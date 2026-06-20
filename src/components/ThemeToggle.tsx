"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-border hover:bg-card-bg transition-colors duration-200 text-sm font-mono flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      id="theme-toggle-btn"
    >
      {theme === "light" ? (
        <>
          <span className="text-amber-500">☀️</span>
          <span className="hidden sm:inline text-xs text-muted">Light</span>
        </>
      ) : (
        <>
          <span className="text-blue-400">🌙</span>
          <span className="hidden sm:inline text-xs text-muted">Dark</span>
        </>
      )}
    </button>
  );
}
