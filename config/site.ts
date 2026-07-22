/**
 * Global site configuration.
 * Update the values below (or the matching environment variables in .env)
 * to personalize the site without touching any component code.
 */

const domain = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_FULL_NAME ?? "Emily Campo",
  role: "Emily Campo | Email & Calendar Management Specialist",
  title: "Emily Campo— Executive Assistant for Busy Founders & CEOs",
  description:
    "I help busy executives reclaim 10+ hours every week by organizing their inbox, managing their calendar, and building productivity systems that actually work.",
  keywords: [
    "executive assistant",
    "virtual assistant for founders",
    "inbox management",
    "calendar management",
    "email management specialist",
    "remote executive assistant",
    "productivity systems for CEOs",
    "virtual assistant for entrepreneurs",
  ],
  url: domain,
  ogImage: `${domain}/og-image.png`,
  locale: "en_US",

  contact: {
    email: process.env.NEXT_PUBLIC_EMAIL ?? "emilyisabel21@outlook.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+573003977166",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/alexandrareyes/discovery-call",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/alexandrareyes",
  },

  links: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "",
  },

  // Analytics — paste your IDs here (or in .env) to activate each provider.
  // See lib/analytics.tsx for where each one is wired up.
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "", // e.g. G-XXXXXXXXXX
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    microsoftClarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "", // e.g. abcdef1234
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "", // e.g. 000000000000000
  },
} as const;

export type SiteConfig = typeof siteConfig;
