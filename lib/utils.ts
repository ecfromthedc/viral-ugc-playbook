import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to get asset path with basePath for GitHub Pages
// Uses the NEXT_PUBLIC_BASE_PATH env var set in next.config.ts
export const getAssetPath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};
