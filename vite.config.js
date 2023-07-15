import { defineConfig } from "vite";
import cssInjectedByJS from "vite-plugin-css-injected-by-js";
import { copyFile } from "node:fs/promises";

// https://github.com/vitejs/vite/discussions/9217#discussioncomment-4188099
function myPlugin() {
  return {
    name: "my-plugin",
    async closeBundle() {
      // This is easier than trying to mess with a testing server.
      await copyFile("dist/index.min.js", "test/ezmdpage.min.js");
      console.debug("Copied to test/ezmdpage.min.js");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      formats: ["iife"],
      name: "ezmdpage",
      fileName: () => "index.min.js",
    },
  },
  plugins: [cssInjectedByJS(), myPlugin()],
});
