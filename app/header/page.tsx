"use client";
import { ModeToggle } from "@/components/ui/mode-toggle";

import Link from "next/link";
import React from "react";
import { signOut, getSession } from "@/lib/auth-client";

export default function Header() {
  const [opacity, setOpacity] = React.useState(1);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const checkLogin = async () => {
      const loggedIn = await getSession();
      setIsLoggedIn(loggedIn.data?.user.id !== undefined);
    };
    checkLogin();
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      // On commence à faire disparaître la navbar après 20px de scroll, jusqu'à 120px (opacity 0)
      const scrollY = window.scrollY;
      const minScroll = 20;
      const maxScroll = 120;
      let newOpacity = 1;
      if (scrollY > minScroll) {
        newOpacity =
          1 - Math.min((scrollY - minScroll) / (maxScroll - minScroll), 1);
      }
      setOpacity(newOpacity);
      setShowScrollTop(newOpacity < 0.2 && scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSignOut = async () => {
    await signOut();
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      <div
        className="fixed top-3 left-0 w-full z-50 flex justify-center transition-opacity duration-300"
        style={{ opacity }}
      >
        <nav className="max-w-4xl w-full filter backdrop-blur-sm bg-background/80 rounded-lg border-2 border-[var(--sidebar-border)]">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold">
                SpreadStack
              </Link>
              <div className="flex items-center space-x-4">
                {isLoggedIn && (
                  <>
                    <Link href="/dashboard" className="hover:text-primary">
                      Dashboard
                    </Link>
                  </>
                )}
                <Link href="/explore" className="hover:text-primary">
                  Explorer
                </Link>
                {isLoggedIn ? (
                  <button
                    onClick={handleSignOut}
                    className="hover:text-primary font-semibold border border-primary rounded px-3 py-1 transition-colors hover:bg-primary hover:text-white"
                  >
                    Se déconnecter
                  </button>
                ) : (
                  <>
                    <Link
                      href="/auth/signin"
                      className="hover:text-primary font-semibold border border-primary rounded px-3 py-1 transition-colors hover:bg-primary hover:text-white"
                    >
                      Se connecter
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="hover:text-primary font-semibold border border-primary rounded px-3 py-1 transition-colors hover:bg-primary hover:text-white"
                    >
                      S'inscrire
                    </Link>
                  </>
                )}
                <ModeToggle />
              </div>
            </div>
          </div>
        </nav>
      </div>
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-50 bg-white/80 dark:bg-gray-800/80 border border-white/30 dark:border-gray-200/20 shadow-xl rounded-full p-3 hover:bg-white/90 dark:hover:bg-gray-700/90 transition-colors backdrop-blur-lg"
          aria-label="Remonter en haut"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-900 dark:text-gray-100"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </>
  );
}
