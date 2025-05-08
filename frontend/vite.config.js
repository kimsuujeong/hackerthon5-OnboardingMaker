import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
<<<<<<< HEAD
     "@": path.resolve(process.cwd(), "src"),
=======
      "@": path.resolve(process.cwd(), "src"), // 또는 ESM에서 __dirname 구해서
>>>>>>> 0a6c43f694fbe5eb745e078a79040b2fd085f818
    },
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
