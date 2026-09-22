import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Configuración para que Vercel ejecute el código en tiempo real
export default defineConfig({
  output: 'server',
  adapter: vercel()
});