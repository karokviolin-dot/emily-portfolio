"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/utils";

/**
 * Persistent floating action button linking straight to WhatsApp,
 * pre-filled with an opening message.
 */
export function WhatsAppFloatButton() {
  const href = buildWhatsAppLink(
    siteConfig.contact.whatsapp,
    "Hi! I'd like to learn more about your executive assistant services.",
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
}
