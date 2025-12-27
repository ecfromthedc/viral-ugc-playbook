import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper to get asset path with basePath for GitHub Pages deployment.
 *
 * This function ensures that static assets (images, fonts, etc.) are correctly
 * prefixed with the repository basePath when deployed to GitHub Pages.
 *
 * In development (localhost), returns the path as-is.
 * In production (GitHub Pages), prepends '/viral-ugc-playbook' to the path.
 *
 * @param path - The asset path starting with '/' (e.g., '/images/logo.jpg')
 * @returns The full path with basePath prefix in production, or original path in dev
 *
 * @example
 * ```tsx
 * <img src={getAssetPath('/images/photo.jpg')} alt="Photo" />
 * // Dev:  /images/photo.jpg
 * // Prod: /viral-ugc-playbook/images/photo.jpg
 * ```
 */
export const getAssetPath = (path: string): string => {
  // Validate path format
  if (!path.startsWith('/')) {
    console.warn(`getAssetPath: path should start with '/'. Received: ${path}`);
  }

  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/viral-ugc-playbook' : '';

  return `${basePath}${path}`;
};
