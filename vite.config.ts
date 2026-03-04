import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const __filename_config = fileURLToPath(import.meta.url);
const __dirname_config = path.dirname(__filename_config);

export default defineConfig(async ({ mode }) => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
  ];

  if (mode !== "production" && process.env.REPL_ID !== undefined) {
    try {
      const cartographer = await import("@replit/vite-plugin-cartographer");
      const devBanner = await import("@replit/vite-plugin-dev-banner");
      plugins.push(cartographer.cartographer());
      plugins.push(devBanner.devBanner());
    } catch (e) {
      console.warn("Replit plugins failed to load:", e);
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname_config, "client", "src"),
        "@shared": path.resolve(__dirname_config, "shared"),
        "@assets": path.resolve(__dirname_config, "attached_assets"),
      },
    },
    root: path.resolve(__dirname_config, "client"),
    build: {
      outDir: path.resolve(__dirname_config, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
