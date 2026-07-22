import {
  Inbox,
  CalendarClock,
  Workflow,
  Focus,
  BatteryCharging,
  Clock,
  CalendarCheck2,
  MailCheck,
  TrendingUp,
  PhoneCall,
  SearchCheck,
  Rocket,
  LifeBuoy,
  ShieldCheck,
  ListChecks,
  Sparkles,
  Lock,
  Eye,
  MessageCircle,
  Globe2,
  Timer,
  Languages,
} from "lucide-react";

import type {
  BenefitItem,
  FaqItem,
  HeroIndicator,
  NavLink,
  ProcessStep,
  ServiceItem,
  TrustTool,
  ValueItem,
} from "@/types";

/**
 * config/content.ts
 * ------------------
 * Every editable string on the site lives here. Change copy, add a
 * service, or reorder a section without touching any component file.
 */

export const nav: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Me", href: "#why-me" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Executive Assistant · Remote & Worldwide",
  headline: "Executive Assistant for Busy Founders & CEOs",
  subheadline:
    "I help busy executives reclaim 10+ hours every week by organizing their inbox, managing their calendar, and creating productivity systems that actually work.",
  body: "Stop drowning in emails, missed meetings, and scheduling chaos. Focus on growing your business while I keep everything organized behind the scenes.",
  primaryCta: { label: "Chat on WhatsApp", href: "https://wa.me/573003977166" },
secondaryCta: { label: "Chat on WhatsApp", href: "https://wa.me/573003977166" },
  indicators: [
    { label: "Response within 24 hours", icon: Timer },
    { label: "Remote, worldwide", icon: Globe2 },
    { label: "English & Spanish", icon: Languages },
  ] satisfies HeroIndicator[],
};

export const trustBar = {
  eyebrow: "Tools I work in every day",
  tools: [
    { name: "Google Workspace", icon: "workspace" },
    { name: "Gmail", icon: "gmail" },
    { name: "Google Calendar", icon: "gcal" },
    { name: "Outlook", icon: "outlook" },
    { name: "Slack", icon: "slack" },
    { name: "Zoom", icon: "zoom" },
    { name: "Calendly", icon: "calendly" },
    { name: "Notion", icon: "notion" },
    { name: "ClickUp", icon: "clickup" },
    { name: "Trello", icon: "trello" },
    { name: "Asana", icon: "asana" },
    { name: "Microsoft 365", icon: "m365" },
  ] satisfies TrustTool[],
};

export const services: ServiceItem[] = [
  {
    id: "inbox-management",
    title: "Inbox Management",
description: "A calm, organized inbox where nothing important slips through and nothing urgent waits. Starting at $600/mo",    
icon: Inbox,
    features: [
      "Inbox Zero, maintained weekly",
      "Email organization & folder structure",
      "Custom labels & filters",
      "Priority management",
      "Spam & clutter cleanup",
      "Follow-up tracking",
    ],
  },
  {
    id: "calendar-management",
    title: "Calendar Management",
    description:
      "A calendar that protects your focus time and never double-books you again.Starting at $700/mo",
    icon: CalendarClock,
    features: [
      "Meeting scheduling & coordination",
      "Time blocking for deep work",
      "Conflict resolution",
      "Availability optimization",
      "Travel planning",
      "Reminders & prep notes",
    ],
  },
  {
    id: "productivity-systems",
    title: "Productivity Systems",
    description:
      "Systems and workflows that keep your business running smoothly without you managing every detail.Starting at $900/mo",
    icon: Workflow,
    features: [
      "Google Workspace setup",
      "Notion & ClickUp systems",
      "Task management",
      "Workflow optimization",
      "SOP creation & documentation",
      "Automation between tools",
    ],
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "More Focus",
    description: "Spend your energy on decisions only you can make.",
    icon: Focus,
  },
  {
    title: "Less Stress",
    description: "Wake up to an inbox and calendar that are already under control.",
    icon: BatteryCharging,
  },
  {
    title: "10+ Hours Saved Weekly",
    description: "Time back for strategy, clients, and the work that moves the needle.",
    icon: Clock,
  },
  {
    title: "Zero Missed Meetings",
    description: "Every meeting confirmed, prepped, and on your calendar — correctly.",
    icon: CalendarCheck2,
  },
  {
    title: "Organized Inbox",
    description: "A system that keeps working even on your busiest weeks.",
    icon: MailCheck,
  },
  {
    title: "Better Productivity",
    description: "Workflows built around how you actually work, not generic templates.",
    icon: TrendingUp,
  },
];

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We talk through how you currently manage your inbox, calendar, and daily workflow, and where it's breaking down.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "Workflow Analysis",
    description:
      "I map your tools, communication patterns, and priorities to design a system built specifically around you.",
    icon: SearchCheck,
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Inbox, calendar, and productivity systems get set up, tested, and refined until they run smoothly.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "I manage everything day to day and keep optimizing as your business and priorities evolve.",
    icon: LifeBuoy,
  },
];

export const values: ValueItem[] = [
  {
    title: "Reliable",
    description: "Consistent, dependable support you can build your week around.",
    icon: ShieldCheck,
  },
  {
    title: "Organized",
    description: "Systems-first thinking applied to every inbox and calendar I touch.",
    icon: ListChecks,
  },
  {
    title: "Proactive",
    description: "I flag problems and opportunities before you have to ask.",
    icon: Sparkles,
  },
  {
    title: "Confidential",
    description: "Your information is handled with strict discretion, always.",
    icon: Lock,
  },
  {
    title: "Detail-Oriented",
    description: "Nothing falls through the cracks, no matter how small.",
    icon: Eye,
  },
  {
    title: "Fast Communication",
    description: "Clear, timely updates so you're never left wondering.",
    icon: MessageCircle,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do you work with different time zones?",
    answer:
      "Yes. I work with founders and executives across the US, Canada, UK, and Australia, and structure our workflow around your working hours and time zone.",
  },
  {
    question: "Can you manage multiple calendars?",
    answer:
      "Yes. I regularly manage multiple calendars at once, including shared team calendars, and keep them synced so nothing conflicts.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. I'm happy to sign an NDA before we begin, and I treat every inbox, document, and conversation as strictly confidential.",
  },
  {
    question: "What email platforms do you support?",
    answer:
      "I work daily in Gmail, Google Workspace, and Outlook / Microsoft 365, including shared inboxes and delegated access.",
  },
  {
    question: "How do we communicate?",
    answer:
      "Most clients communicate with me through Slack, WhatsApp, or email, with a recurring call to review priorities and progress.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Day to day, I work in Google Workspace, Outlook, Slack, Zoom, Calendly, Notion, ClickUp, Trello, and Asana, adapting to whichever stack you already use.",
  },
];

export const finalCta = {
  headline: "Your Inbox Shouldn't Run Your Business.",
  body: "Let's build a workflow that gives you your time back.",
 primaryCta: { label: "Chat on WhatsApp", href: "https://wa.me/573003977166" },
secondaryCta: { label: "Chat on WhatsApp", href: "https://wa.me/573003977166" },
};

export const footer = {
  tagline:
    "Executive support for founders and executives who'd rather build their business than manage their inbox.",
  copyright: `© ${new Date().getFullYear()} — All rights reserved.`,
  links: [
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};
