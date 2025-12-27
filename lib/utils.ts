import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to get asset path with basePath for GitHub Pages
// Hardcoded for production deployment to GitHub Pages
export const getAssetPath = (path: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/viral-ugc-playbook' : '';
  return `${basePath}${path}`;
};
