import { defineConfig } from "vite";
import plainText from "vite-plugin-plain-text";

const config = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["iife"],
      name: "@jcbhmr/md-html",
      fileName: "index",
    },
  },
  plugins: [plainText([/\.txt$/])],
});

export default config;
