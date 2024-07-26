import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    assetsDir: 'assets', // This specifies the directory where assets are placed in the `dist` folder
    // rollupOptions: {
    //   input: {
    //     main: 'src/main.jsx', // Adjust based on your entry file
    //   }
    // }
  },
});


