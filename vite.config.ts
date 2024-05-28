import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  console.log("evn", env);
  return {
    plugins: [react()],
    server: {
      port: 3030,
    },
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL),
      __APP_ENV__: JSON.stringify(env.VITE_API_KEY),
    },
  };
});
