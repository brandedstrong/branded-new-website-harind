import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    watch: {
      usePolling: true,
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
