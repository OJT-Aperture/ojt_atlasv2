import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig, PluginOption } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()] as PluginOption[];

  if (mode === "development") {
    plugins.push(screenGraphPlugin() as PluginOption);
  }

  return {
    plugins,
    publicDir: "./static",
    base: "./",
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
  };
});
