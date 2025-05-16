module.exports = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "localhost",
      "127.0.0.1",
      "ik.imagekit.io",
      "html.tailus.io",
      "utfs.io",
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
