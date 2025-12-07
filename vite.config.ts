import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Default to root path (for Vercel and local dev)
  // Only use base path when explicitly building for GitHub Pages
  const useGitHubPages = process.env.GITHUB_PAGES === "true";
  const base = useGitHubPages ? "/CBN-landing-page/" : "/";
  
  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
