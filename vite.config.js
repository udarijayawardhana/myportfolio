import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: "/myportfolio/",
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
