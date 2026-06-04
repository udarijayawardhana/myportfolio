import { defineConfig } from 'vite';

export default defineConfig({
  base: "/myportfolio/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});