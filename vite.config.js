import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Per-Connect/', // Ajusta según el nombre de tu repositorio
  build: {
    outDir: 'docs', // Usa 'docs' para GitHub Pages
  },
});