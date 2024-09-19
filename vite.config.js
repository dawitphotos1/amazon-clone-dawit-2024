

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set the base path if deploying to a subdirectory, otherwise set to '/'
export default defineConfig({
  base: "/", // Change this if needed for subdirectory deployment
  plugins: [react()],
});
