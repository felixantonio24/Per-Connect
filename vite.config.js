import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // 👈 esta línea es clave

export default defineConfig({
  plugins: [react()],
  base: '/Per-Connect/', // o './' si estás probando localmente
  build: {
    outDir: 'docs',
  },
});
