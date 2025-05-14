"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Effet pour éviter les problèmes d'hydratation
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Fonction pour basculer entre les modes clair et sombre
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <div className="h-[1.2rem] w-[1.2rem]"></div>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden flex items-center justify-center"
    >
      <div className="relative h-[1.2rem] w-[1.2rem] flex items-center justify-center">
        {/* Icône pour le mode clair */}
        <Sun
          className={`absolute transition-all duration-300 ${
            theme === "dark"
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
          size={20}
          strokeWidth={1.5}
        />

        {/* Icône pour le mode sombre */}
        <Moon
          className={`absolute transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }`}
          size={20}
          strokeWidth={1.5}
        />
      </div>
      <span className="sr-only">Changer de thème</span>
    </Button>
  );
}
