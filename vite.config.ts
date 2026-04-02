import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  root: 'client', // Points Vite to your index.html location
  base: './',     // Ensures all your images/links work on GitHub
  build: {
    outDir: '../dist', // Puts the final website in a 'dist' folder in the root
    emptyOutDir: true,
  }
})
