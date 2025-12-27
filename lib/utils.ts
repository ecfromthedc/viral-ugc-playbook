import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to get asset path with basePath for GitHub Pages
// This works for both dev (localhost) and production (GitHub Pages)
export const getAssetPath = (path: string) => {
  // Check if we're on GitHub Pages (not localhost)
  const isGitHubPages = typeof window !== 'undefined' &&
    window.location.hostname !== 'localhost' &&
    window.location.hostname !== '127.0.0.1';

  return isGitHubPages ? `/viral-ugc-playbook${path}` : path;
};
