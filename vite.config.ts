import { defineConfig } from "vite";
import cssInjectedByJS from "vite-plugin-css-injected-by-js";
import fsPromises from "node:fs/promises";

// https://github.com/vitejs/vite/discussions/9217#discussioncomment-4188099
function myPlugin() {
  return {
    name: "my-plugin",
    async closeBundle() {
      // This is easier than trying to mess with server middleware.
      await fsPromises.copyFile("dist/index.min.js", "test/ezmd.min.js");
      console.debug("Copied to test/ezmd.min.js");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["iife"],
      name: "ezmd",
      fileName: () => "index.min.js",
    },
  },
  plugins: [cssInjectedByJS(), myPlugin()],
});
