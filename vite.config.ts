/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({

  plugins: [react(), tailwindcss()],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true, // permite usar describe, it, test sin importar vitest explícitamente
    environment: "jsdom", // emular DOM para React
    setupFiles: "./src/setupTests.ts", // archivo de configuración global
    css: true, // habilitar importar CSS en tests
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
