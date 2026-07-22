"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroIllustration } from "@/components/shared/hero-illustration";
import { hero } from "@/config/content";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const whatsappHref = buildWhatsAppLink(
    siteConfig.contact.whatsapp,
    "Hi! I'd like to book a discovery call.",
  );

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-accent-300/25 blur-[120px] dark:bg-accent-500/10"
      />

      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="accent">{hero.eyebrow}</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {hero.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-xl leading-relaxed text-muted-foreground"
          >
            {hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" variant="accent">
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                {hero.secondaryCta.label}
              </a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {hero.indicators.map((indicator) => (
              <li
                key={indicator.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <indicator.icon className="h-4 w-4 text-accent-500" />
                {indicator.label}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
