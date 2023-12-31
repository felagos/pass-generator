import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    testMatch: ['./src/**/*.spec.tsx'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    }
  },
});