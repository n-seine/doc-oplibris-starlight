// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://n-seine.github.io",
  base: "doc-oplibris-starlight/",
  integrations: [
    starlight({
      title: "Documentation d'OPlibris",
      customCss: [
        // Relative path to your custom CSS file
        "./src/style/custom.css",
      ],
      logo: {
        src: "./src/assets/logo.png",
        alt: "OPlibris",
      },
      plugins: [starlightImageZoom()],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Prise en main",
          items: [
            {
              label: "Introduction",
              link: "/prise-en-main/",
            },
            {
              label: "Découvrir OPlibris",
              autogenerate: { directory: "Prise en main/Découverte" },
            },
            {
              label: "Configuration",
              autogenerate: {
                directory: "Prise en main/Installation et configuration",
              },
            },
          ],
        },
        {
          label: "Utiliser OPlibris au quotidien",
          items: [
            {
              label: "Introduction",
              link: "/guides-pas-à-pas/",
            },
            {
              label: "Guides pas à pas",
              autogenerate: {
                directory: "Guides pas à pas/Gestion quotidienne",
              },
            },
          ],
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
