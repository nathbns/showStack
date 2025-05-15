import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, LayoutGrid, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden mx-auto max-w-7xl">
      {/* Fond abstrait avec animation légère */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30"></div>
        <div className="absolute inset-0 opacity-50 mix-blend-overlay ">
          <svg className="h-full w-full">
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M.5 60V.5H60"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeDasharray="1 0"
                ></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"></rect>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-sm font-medium text-gray-300 backdrop-blur mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
            <span>Version 1.0 disponible maintenant</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            <span className="block">Votre Stack</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Technologique
            </span>
          </h1>

          <p className="max-w-2xl text-xl text-gray-300 mb-8">
            Explorez, organisez et partagez toutes vos technologies préférées.
            Créez une vitrine personnalisée de votre stack technique et partagez
            votre expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-xl text-lg font-medium">
                Commencer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="bg-gray-800/50 text-white border-gray-700 hover:border-gray-500 hover:bg-gray-800 px-6 py-6 rounded-xl text-lg font-medium"
            >
              En savoir plus
            </Button>
          </div>
        </div>

        {/* Points forts */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/70 p-8 backdrop-blur-sm">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Zap size={18} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Présentation visuelle
            </h3>
            <p className="text-gray-400">
              Créez une vitrine interactive et visuelle pour toutes vos
              technologies préférées.
            </p>
          </div>

          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/70 p-8 backdrop-blur-sm">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
              <LayoutGrid size={18} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Organisation flexible
            </h3>
            <p className="text-gray-400">
              Organisez votre stack selon vos préférences avec une disposition
              personnalisable.
            </p>
          </div>

          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/70 p-8 backdrop-blur-sm">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
              <Code2 size={18} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Pour les développeurs
            </h3>
            <p className="text-gray-400">
              Conçu par des développeurs pour des développeurs, avec une
              attention aux détails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
