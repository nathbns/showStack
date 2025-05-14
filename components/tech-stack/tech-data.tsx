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
} from "../logo-card";
import { type Tech } from "./tech-stack-grid";

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
      icon: <span className="text-xl">S</span>,
      category: "Frontend",
    },
    {
      id: "nextjs",
      name: "Next.js",
      color: "#000000",
      icon: <NextJS />,
      category: "Frontend",
    },
    {
      id: "nuxt",
      name: "Nuxt.js",
      color: "#00DC82",
      icon: <span className="text-xl">N</span>,
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
      id: "sass",
      name: "Sass",
      color: "#CC6699",
      icon: <span className="text-xl">S</span>,
      category: "Frontend",
    },
    {
      id: "redux",
      name: "Redux",
      color: "#764ABC",
      icon: <span className="text-xl">R</span>,
      category: "Frontend",
    },
    {
      id: "recoil",
      name: "Recoil",
      color: "#3578E5",
      icon: <span className="text-xl">↺</span>,
      category: "Frontend",
    },
    {
      id: "zustand",
      name: "Zustand",
      color: "#764317",
      icon: <span className="text-xl">Z</span>,
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
      id: "express",
      name: "Express",
      color: "#000000",
      icon: <span className="text-xl">E</span>,
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
      icon: <span className="text-xl">G</span>,
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
      color: "#000020",
      icon: <Expo />,
      category: "Mobile",
    },
  ],
  "Base de données": [
    {
      id: "mongodb",
      name: "MongoDB",
      color: "#47A248",
      icon: <span className="text-xl">M</span>,
      category: "Base de données",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      color: "#336791",
      icon: <span className="text-xl">P</span>,
      category: "Base de données",
    },
    {
      id: "mysql",
      name: "MySQL",
      color: "#4479A1",
      icon: <span className="text-xl">M</span>,
      category: "Base de données",
    },
    {
      id: "redis",
      name: "Redis",
      color: "#DC382D",
      icon: <span className="text-xl">R</span>,
      category: "Base de données",
    },
    {
      id: "firebase",
      name: "Firebase",
      color: "#FFCA28",
      icon: <Firebase />,
      category: "Base de données",
    },
    {
      id: "supabase",
      name: "Supabase",
      color: "#3ECF8E",
      icon: <span className="text-xl">S</span>,
      category: "Base de données",
    },
    {
      id: "dynamodb",
      name: "DynamoDB",
      color: "#4053D6",
      icon: <span className="text-xl">D</span>,
      category: "Base de données",
    },
  ],
  "DevOps & Cloud": [
    {
      id: "docker",
      name: "Docker",
      color: "#2496ED",
      icon: <span className="text-xl">🐳</span>,
      category: "DevOps & Cloud",
    },
    {
      id: "kubernetes",
      name: "Kubernetes",
      color: "#326CE5",
      icon: <span className="text-xl">K</span>,
      category: "DevOps & Cloud",
    },
    {
      id: "aws",
      name: "AWS",
      color: "#FF9900",
      icon: <span className="text-xl">A</span>,
      category: "DevOps & Cloud",
    },
    {
      id: "gcp",
      name: "Google Cloud",
      color: "#4285F4",
      icon: <span className="text-xl">G</span>,
      category: "DevOps & Cloud",
    },
    {
      id: "azure",
      name: "Azure",
      color: "#0078D4",
      icon: <span className="text-xl">A</span>,
      category: "DevOps & Cloud",
    },
    {
      id: "vercel",
      name: "Vercel",
      color: "#000000",
      icon: <span className="text-xl">V</span>,
      category: "DevOps & Cloud",
    },
    {
      id: "netlify",
      name: "Netlify",
      color: "#00C7B7",
      icon: <span className="text-xl">N</span>,
      category: "DevOps & Cloud",
    },
    {
      id: "github",
      name: "GitHub Actions",
      color: "#2088FF",
      icon: <span className="text-xl">G</span>,
      category: "DevOps & Cloud",
    },
    {
      id: "gitlab",
      name: "GitLab CI",
      color: "#FC6D26",
      icon: <span className="text-xl">G</span>,
      category: "DevOps & Cloud",
    },
    {
      id: "terraform",
      name: "Terraform",
      color: "#7B42BC",
      icon: <span className="text-xl">T</span>,
      category: "DevOps & Cloud",
    },
  ],
  "Tests & Outils": [
    {
      id: "jest",
      name: "Jest",
      color: "#C21325",
      icon: <span className="text-xl">J</span>,
      category: "Tests & Outils",
    },
    {
      id: "cypress",
      name: "Cypress",
      color: "#17202C",
      icon: <span className="text-xl">C</span>,
      category: "Tests & Outils",
    },
    {
      id: "playwright",
      name: "Playwright",
      color: "#2EAD33",
      icon: <span className="text-xl">P</span>,
      category: "Tests & Outils",
    },
    {
      id: "storybook",
      name: "Storybook",
      color: "#FF4785",
      icon: <span className="text-xl">S</span>,
      category: "Tests & Outils",
    },
    {
      id: "webpack",
      name: "Webpack",
      color: "#8DD6F9",
      icon: <span className="text-xl">W</span>,
      category: "Tests & Outils",
    },
    {
      id: "vite",
      name: "Vite",
      color: "#646CFF",
      icon: <span className="text-xl">V</span>,
      category: "Tests & Outils",
    },
    {
      id: "eslint",
      name: "ESLint",
      color: "#4B32C3",
      icon: <span className="text-xl">E</span>,
      category: "Tests & Outils",
    },
    {
      id: "prettier",
      name: "Prettier",
      color: "#F7B93E",
      icon: <span className="text-xl">P</span>,
      category: "Tests & Outils",
    },
    {
      id: "git",
      name: "Git",
      color: "#F05032",
      icon: <span className="text-xl">G</span>,
      category: "Tests & Outils",
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
