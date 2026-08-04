/**
 * Lovable CDN assets are served from the relative path /__l5e/assets-v1/...
 * That path only exists on Lovable hosting. When the app is deployed elsewhere
 * (Vercel, Netlify, custom server), the relative path 404s and images/video
 * disappear. Resolving to the project's stable public Lovable origin keeps the
 * same assets working on every host.
 */
const CDN_ORIGIN = "https://project--03d3e4a2-a2d2-4348-8bba-4c33283c3c3b.lovable.app";

export function assetUrl(url: string): string {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/__l5e/")) return `${CDN_ORIGIN}${url}`;
  return url;
}
