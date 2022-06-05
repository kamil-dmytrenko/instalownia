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
  env: {
    STATIC_FORMS_URL: "https://api.staticforms.xyz/submit",
    STATIC_FORMS_ACCESS_KEY: "9e972397-26d8-408d-a85b-287651d5402a",
    CONTENTFUL_SPACE_ID: "4xmsmjmdyvkq",
    CONTENTFUL_ACCESS_TOKEN: "6NRcPg3NLYwNxPZ3T46RMQEdVq1KuiHeHeXC0SOVcN4"
  },
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
