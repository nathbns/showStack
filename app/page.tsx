import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="bg-background min-h-screen w-full relative overflow-hidden">
      {/* Grille de fond subtile */}
      <div
        className="
          mx-auto max-w-[888px] absolute inset-0 pointer-events-none
          bg-[linear-gradient(to_right,rgba(60,60,60,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(60,60,60,0.08)_1px,transparent_1px)]
          bg-[size:24px_24px]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
           border-[rgba(60,60,60,0.08)] dark:border-[rgba(255,255,255,0.12)]
        "
      >
        {/* Effet de fondu sur les côtés */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

        {/* Effet de fondu vers le bas */}
        <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
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
              <div className="absolute inset-0 border-2 border-green-500 rounded-lg -z-0 scale-110"></div>
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-2xl mx-auto">
            We don't just display technologies, we solve your developer branding
            challenges.
          </p>
        </div>

        {/* Image de présentation */}
        <div className="max-w-4xl mx-auto relative rounded-xl overflow-hidden shadow-2xl border-2 border-primary/60 [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
          <Image
            className="w-full hidden dark:block"
            src="/darkPresentation.png"
            alt="ShowStack App Demonstration"
            width={2700}
            height={1440}
            priority
          />
          <Image
            className="w-full dark:hidden"
            src="/lightPresentation.png"
            alt="ShowStack App Demonstration"
            width={2700}
            height={1440}
            priority
          />
        </div>
      </div>
    </main>
  );
}
