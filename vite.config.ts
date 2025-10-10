import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      webp: { quality: 75 },
      svgo: false,
      // Remove filter since we've already deleted the problematic large file
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // 👈 makes it accessible from container/host
    port: 3000, // 👈 run directly on port 3000
    watch: {
      usePolling: true, // for Docker
      interval: 100,
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
  preview: {
    port: 3000,
  },
});
