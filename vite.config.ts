import { defineConfig } from "vite";
import cssInjectedByJS from "vite-plugin-css-injected-by-js";

const config = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["iife"],
      name: "jcbhmr_md_html",
      fileName: "index",
    },
  },
  plugins: [cssInjectedByJS()],
});

export default config;
