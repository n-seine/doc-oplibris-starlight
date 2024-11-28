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
      editLink: {
        baseUrl: "https://github.com/n-seine/doc-oplibris-starlight/edit/main",
      }
      sidebar: [
        {
          label: "Prise en main",
          items: [
            {
              label: "Introduction",
              link: "/01-prise-en-mains/",
            },
            {
              label: "Découvrir OPlibris",
              autogenerate: {
                directory: "01-prise-en-mains/01-decouverte",
              },
            },
            {
              label: "Configurer OPlibris",
              autogenerate: {
                directory: "01-prise-en-mains/02-configuration",
              },
            },
          ],
        },
        {
          label: "Utiliser OPlibris au quotidien",
          items: [
            {
              label: "Introduction",
              link: "/02-guides/",
            },
            {
              label: "Guides pas à pas",
              autogenerate: {
                directory: "02-guides/00-utilisation",
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
