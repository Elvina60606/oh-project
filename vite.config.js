import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/oh-project/" : "/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // 把第三方 library 的警告隱藏
      },
    },
  },
});
