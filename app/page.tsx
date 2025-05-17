import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

export default function HeroSection() {
  return (
    <main className="bg-background min-h-screen w-full relative overflow-hidden">
      {/* Grille de fond subtile */}
      <div
        className="
          mx-auto max-w-4xl absolute inset-0 pointer-events-none
          bg-[linear-gradient(to_right,rgba(60,60,60,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(60,60,60,0.08)_1px,transparent_1px)]
          bg-[size:24px_24px]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
        "
      >
        {/* Effet de blur vers le bas */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background/80 via-background/40 to-transparent blur-md pointer-events-none" />
        {/* Flou sur les côtés */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background/60 via-background/40 to-transparent blur-md pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background/60 via-background/40 to-transparent blur-md pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 lg:py-40 relative z-10">
        {/* Badge disponibilité */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm border-primary/30 bg-background">
            <span className="size-2 rounded-full bg-green-500 mr-2"></span>
            <span className="font-medium">Available for New Projects</span>
          </div>
        </div>

        {/* Titre principal avec effet d'encadrement */}
        <div className="text-center">
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-tight leading-[1.1] mb-8">
            <div className="block mb-1">SHOWCASE YOUR</div>
            <div className="relative inline-block">
              <div className="relative z-10 px-4">TECH STACK</div>
              <div className="absolute inset-0 border-2 border-primary/40 rounded-lg -z-0 scale-110"></div>
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-2xl mx-auto">
            We don't just display technologies, we solve your developer branding
            challenges.
          </p>

          {/* Bouton principal centré et large */}
          <div className="flex justify-center mb-32">
            <Link
              href="/auth/signup"
              className="flex items-center font-medium bg-green-500 hover:bg-green-600 text-white rounded-lg px-8 py-3 text-lg shadow-lg shadow-blue-500/20 transition-all duration-200"
            >
              <span>Get Started</span>
              <RiArrowRightLine className="ml-2" size={20} />
              <span className="ml-2 text-xs opacity-70 px-1.5 py-0.5 bg-green-700  rounded">
                G
              </span>
            </Link>
          </div>
        </div>

        {/* Image de présentation */}
        <div className="max-w-4xl mx-auto relative rounded-xl overflow-hidden shadow-2xl border border-primary/20">
          <Image
            className="w-full hidden dark:block"
            src="/uploads/darkPresentation.png"
            alt="ShowStack App Demonstration"
            width={2700}
            height={1440}
            priority
          />
          <Image
            className="w-full dark:hidden"
            src="/uploads/lightPresentation.png"
            alt="ShowStack App Demonstration"
            width={2700}
            height={1440}
            priority
          />
        </div>
        {/* Statistiques */}
        <div className="grid grid-cols-3 max-w-3xl mx-auto mt-24 mb-12">
          <div className="text-center">
            <p className="text-5xl font-bold mb-1">500+</p>
            <p className="text-muted-foreground">Tech stacks</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-1">150+</p>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-1">1000+</p>
            <p className="text-muted-foreground">Developers</p>
          </div>
        </div>

        {/* Appel à l'action final */}
        <div className="text-center mt-32 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            If you scrolled this far, it's time to LEVEL UP
          </h2>
          <p className="text-muted-foreground mb-8">
            Join the developer community that showcases their skills
          </p>
          <Link
            href="/auth/signup"
            className="flex items-center max-w-2xl mx-auto justify-center font-medium bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/15 text-black dark:text-white rounded-lg px-6 py-2 border border-slate-300/50 dark:border-slate-700/50 shadow-lg shadow-slate-200/10 dark:shadow-slate-900/20 transition-all duration-200"
          >
            <span>Join the Elite Club</span>
            <span className="ml-2 text-xs opacity-50 px-1.5 py-0.5 bg-slate-300/40 dark:bg-slate-700/40 rounded">
              J
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
