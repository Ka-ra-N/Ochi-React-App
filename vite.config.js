// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for the production build
    assetsDir: 'assets', // Output assets directly in the root directory
    sourcemap: false, // Disable sourcemaps in production
  },
});
