import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const lang = navigator.language || 'en-US';
  return date.toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
