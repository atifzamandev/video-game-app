import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },
  define: {
    __API_URL__: JSON.stringify(process.env.VITE_API_URL),
    __API_KEY__: JSON.stringify(process.env.VITE_API_KEY),
  },
});
