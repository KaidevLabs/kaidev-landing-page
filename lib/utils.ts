import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string, locale?: string): string {
  const date = new Date(dateString);

  // fallback: use provided locale, or navigator if available, else 'en-US'
  const lang =
    locale ||
    (typeof navigator !== "undefined" ? navigator.language : "en-US");

  return date.toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
