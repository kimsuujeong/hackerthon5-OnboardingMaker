import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(new URL(".", import.meta.url).pathname, "./src"), // '@'를 src 디렉토리로 설정
    },
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
