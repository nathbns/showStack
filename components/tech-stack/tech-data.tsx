import * as React from "react";
import {
  TypeScript,
  Vue,
  NextJS,
  TailwindCSS,
  Node,
  Ionic,
  Kotlin,
  Swift,
  Expo,
  Firebase,
  JavaScript,
  Angular,
  Svelte,
  Nuxt,
  Redux,
  Expressjs,
  GraphQL,
} from "../logo-card";
import { type Tech } from "./tech-stack-grid";

// Simple Stripe Icon SVG component
const StripeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4764 7.45119C13.4764 6.54994 14.1659 6.12994 15.2364 6.12994C16.6114 6.12994 18.3889 6.63244 19.7239 7.49994V2.93744C18.2699 2.32494 16.8464 2.06244 15.2364 2.06244C11.3764 2.06244 8.77637 4.24494 8.77637 7.67994C8.77637 13.2349 16.2464 12.141 16.2464 14.8575C16.2464 15.9975 15.3539 16.4175 14.2464 16.4175C12.7414 16.4175 10.7764 15.7485 9.30137 14.7524V19.4324C10.9364 20.1675 12.5939 20.4999 14.2464 20.4999C18.1954 20.4999 20.9989 18.3749 20.9989 14.8575C20.9989 8.89119 13.4764 10.1625 13.4764 7.45119Z"
      fill="#635BFF"
    />
  </svg>
);

// Un objet qui contient des technologies organisées par catégorie
export const techsByCategory: Record<string, Tech[]> = {
  Frontend: [
    {
      id: "typescript",
      name: "TypeScript",
      color: "#3178C6",
      icon: <TypeScript />,
      category: "Frontend",
    },
    {
      id: "javascript",
      name: "JavaScript",
      color: "#F7DF1E",
      icon: <JavaScript />,
      category: "Frontend",
    },
    {
      id: "vue",
      name: "Vue.js",
      color: "#41B883",
      icon: <Vue />,
      category: "Frontend",
    },
    {
      id: "angular",
      name: "Angular",
      color: "#DD0031",
      icon: <Angular />,
      category: "Frontend",
    },
    {
      id: "svelte",
      name: "Svelte",
      color: "#FF3E00",
      icon: <Svelte />,
      category: "Frontend",
    },
    {
      id: "nextjs",
      name: "Next.js",
      color: "#191919",
      icon: <NextJS />,
      category: "Frontend",
    },
    {
      id: "nuxt",
      name: "Nuxt.js",
      color: "#00DC82",
      icon: <Nuxt />,
      category: "Frontend",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      color: "#38B2AC",
      icon: <TailwindCSS />,
      category: "Frontend",
    },
    {
      id: "styled",
      name: "Styled Components",
      color: "#DB7093",
      icon: <span className="text-xl">💅</span>,
      category: "Frontend",
    },
    {
      id: "redux",
      name: "Redux",
      color: "#764ABC",
      icon: <Redux />,
      category: "Frontend",
    },
  ],
  Backend: [
    {
      id: "nodejs",
      name: "Node.js",
      color: "#539E43",
      icon: <Node />,
      category: "Backend",
    },
    {
      id: "expressjs",
      name: "Express.js",
      color: "#000000",
      icon: <Expressjs />,
      category: "Backend",
    },
    {
      id: "nestjs",
      name: "NestJS",
      color: "#E0234E",
      icon: <span className="text-xl">N</span>,
      category: "Backend",
    },
    {
      id: "graphql",
      name: "GraphQL",
      color: "#E535AB",
      icon: <GraphQL />,
      category: "Backend",
    },
    {
      id: "prisma",
      name: "Prisma",
      color: "#2D3748",
      icon: <span className="text-xl">P</span>,
      category: "Backend",
    },
    {
      id: "django",
      name: "Django",
      color: "#092E20",
      icon: <span className="text-xl">D</span>,
      category: "Backend",
    },
    {
      id: "laravel",
      name: "Laravel",
      color: "#FF2D20",
      icon: <span className="text-xl">L</span>,
      category: "Backend",
    },
    {
      id: "spring",
      name: "Spring",
      color: "#6DB33F",
      icon: <span className="text-xl">S</span>,
      category: "Backend",
    },
    {
      id: "flask",
      name: "Flask",
      color: "#000000",
      icon: <span className="text-xl">F</span>,
      category: "Backend",
    },
    {
      id: "fastapi",
      name: "FastAPI",
      color: "#009688",
      icon: <span className="text-xl">F</span>,
      category: "Backend",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      color: "#47A248",
      icon: <span className="text-xl">M</span>,
      category: "Database",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      color: "#336791",
      icon: <span className="text-xl">P</span>,
      category: "Database",
    },
    {
      id: "mysql",
      name: "MySQL",
      color: "#4479A1",
      icon: <span className="text-xl">M</span>,
      category: "Database",
    },
    {
      id: "redis",
      name: "Redis",
      color: "#DC382D",
      icon: <span className="text-xl">R</span>,
      category: "Database",
    },
    {
      id: "firebase",
      name: "Firebase",
      color: "#FFCA28",
      icon: <Firebase />,
      category: "Database",
    },
    {
      id: "supabase",
      name: "Supabase",
      color: "#3ECF8E",
      icon: <span className="text-xl">S</span>,
      category: "Database",
    },
  ],
  Mobile: [
    {
      id: "flutter",
      name: "Flutter",
      color: "#02569B",
      icon: <Ionic />,
      category: "Mobile",
    },
    {
      id: "kotlin",
      name: "Kotlin",
      color: "#7F52FF",
      icon: <Kotlin />,
      category: "Mobile",
    },
    {
      id: "swift",
      name: "Swift",
      color: "#F05138",
      icon: <Swift />,
      category: "Mobile",
    },
    {
      id: "expo",
      name: "Expo",
      color: "#020240",
      icon: <Expo />,
      category: "Mobile",
    },
  ],
  Services: [
    {
      id: "stripe-mrr",
      name: "Stripe MRR",
      color: "#635BFF", // Stripe purple
      icon: <StripeIcon />,
      category: "Services",
    },
  ],
};

// Tableau de toutes les technologies (sans catégorie, mais avec catégorie assignée)
export const allTechnologies: Tech[] = Object.entries(techsByCategory).flatMap(
  ([category, techsInCat]) => techsInCat.map((tech) => ({ ...tech, category }))
);

// Les couleurs disponibles pour les technologies personnalisées
export const availableColors = [
  "#3178C6", // TypeScript blue
  "#61DAFB", // React blue
  "#41B883", // Vue green
  "#000000", // Next.js black
  "#38B2AC", // Tailwind teal
  "#539E43", // Node green
  "#FF3E00", // Svelte orange
  "#DD0031", // Angular red
  "#764ABC", // Redux purple
  "#F7DF1E", // JavaScript yellow
  "#E535AB", // GraphQL pink
  "#3ECF8E", // Supabase green
  "#2496ED", // Docker blue
  "#FF9900", // AWS orange
  "#4285F4", // Google Cloud blue
  "#00C7B7", // Netlify teal
];
