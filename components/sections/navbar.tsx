"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, CalendarClock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { nav, hero } from "@/config/content";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-scrolled";

export function Navbar() {
  const scrolled = useScrolled(12);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/75 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container flex h-18 items-center justify-between py-3" aria-label="Primary">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-base font-semibold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-accent-400 dark:bg-accent-400 dark:text-navy-950">
            <CalendarClock className="h-4 w-4" />
          </span>
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild size="sm" variant="accent">
            <a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="container flex flex-col gap-1 pb-6 pt-2">
              {nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild variant="accent" className="mt-2">
                <a href={hero.primaryCta.href} onClick={() => setOpen(false)}>
                  {hero.primaryCta.label}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
