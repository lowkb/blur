import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  base: '/',
  plugins: [preact()],
  resolve: {
    alias: {
      '@': '/src',
      '@style': '/src/assets/styles',
      '@pages': '/src/pages',
    }
  }
});
