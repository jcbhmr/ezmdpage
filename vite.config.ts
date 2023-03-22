import { defineConfig } from "vite";

const config = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["iife"],
      name: "jcbhmr_md_html",
      fileName: "index",
    },
  },
});

export default config;
