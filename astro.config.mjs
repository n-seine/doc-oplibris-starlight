// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://n-seine.github.io",
  base: "/docs-oplibris",
  integrations: [
    starlight({
      title: "Documentation d'OPlibris",
      social: {
        github: "https://github.com/withastro/starlight",
      },
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
