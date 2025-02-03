import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    proxy: {
      '/api': {
        target: 'http://3.111.196.92:8020',
        changeOrigin: true,  // Adjusts the origin of the request
        secure: false,       // Disables SSL verification (not needed for HTTP)
      },
    },
  }
});
