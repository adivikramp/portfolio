import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Must mirror basePath in next.config.mjs. Plain <img> (e.g. Radix Avatar) is
// NOT auto-prefixed by Next, unlike next/image and next/link.
export const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function assetUrl(path?: string) {
  if (!path || /^(https?:)?\/\//.test(path) || path.startsWith("data:")) {
    return path;
  }
  return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function formatDate(date: string | Date) {
  // Use UTC to ensure consistent formatting between server and client
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
