import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), checker({ typescript: true })],
  envPrefix: 'REACT_APP_',
  build: {
    chunkSizeWarningLimit: 4096,
  },
});
