// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://n-seine.github.io",
  base: "/docs-oplibris",
  integrations: [
    starlight({
      title: "Documentation d'OPlibris",
      customCss: [
        // Relative path to your custom CSS file
        "./src/style/custom.css",
      ],
      plugins: [starlightImageZoom()],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Prise en main",
          autogenerate: { directory: "Prise en main" },
        },
        {
          label: "Utilisation",
          autogenerate: { directory: "Guides pas à pas" },
        },
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "Français",
          lang: "fr",
          dir: "ltr",
        },
      },
    }),
  ],
});
