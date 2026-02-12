import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer', 'process'],
    }),
  ],
  base: mode === 'production' ? '/gyuill-portfolio/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
}));
