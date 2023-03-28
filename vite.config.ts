import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/styles/main";` },
    },
  },
  test: {
    // silent: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: '/tests/setup-vitest.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', '/tests/setup-vitest.ts'],
    },
  },
});
