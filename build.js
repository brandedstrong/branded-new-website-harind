import { build } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  plugins: [
    (await import("@vitejs/plugin-react")).default(),
    (await import("@tailwindcss/vite")).default(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "build",
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
  configFile: false, // This should prevent Vite from looking for config files
};

try {
  await build(config);
  console.log("Build completed successfully!");
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}
