import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes conditionally, resolving conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a phone number into a WhatsApp-ready link (wa.me).
 */
export function buildWhatsAppLink(phone: string, message?: string): string {
  const sanitized = phone.replace(/[^\d]/g, "");
  const base = `https://wa.me/${sanitized}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Format a mailto link with optional subject line.
 */
export function buildMailtoLink(email: string, subject?: string): string {
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
}
