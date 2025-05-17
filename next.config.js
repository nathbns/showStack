const { hostname } = require("os");

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "localhost",
      },
      {
        hostname: "127.0.0.1",
      },
      {
        hostname: "ik.imagekit.io",
      },
      {
        hostname: "html.tailus.io",
      },
      {
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/profile_images/**",
      },
    ],
  },
  // Désactiver la vérification ESLint pendant le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Désactiver la vérification TypeScript pendant le build
  typescript: {
    ignoreBuildErrors: true,
  },
  // ... autres configurations existantes
};
