const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/oferta': { page: '/oferta' },
      '/realizacje': { page: '/realizacje' },
      '/kontakt': { page: '/kontakt' },
    }
  },
  env: {},
  images: {
    loader: "custom",
    domains:['images.ctfassets.net'],
  },
  
};

module.exports = withPlugins([
    withFonts,
    withImages,
  ],
  nextConfig,
);
