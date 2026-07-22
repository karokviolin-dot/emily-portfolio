"use client";

import { motion } from "framer-motion";
import { Mail, CheckCircle2, Bell, Clock3 } from "lucide-react";

const days = ["MON", "TUE", "WED", "THU", "FRI"];

// Each block: which day column, vertical offset, height (in the row grid),
// and a semantic label so it doesn't read as decorative noise.
const blocks: { day: number; top: number; height: number; tone: "accent" | "navy" | "muted"; label: string }[] = [
  { day: 0, top: 1, height: 2, tone: "navy", label: "Deep Work" },
  { day: 0, top: 4, height: 1, tone: "muted", label: "Standup" },
  { day: 1, top: 0, height: 1, tone: "accent", label: "Investor Call" },
  { day: 1, top: 2, height: 3, tone: "navy", label: "Deep Work" },
  { day: 2, top: 1, height: 1, tone: "muted", label: "1:1" },
  { day: 2, top: 3, height: 2, tone: "accent", label: "Client Call" },
  { day: 3, top: 0, height: 2, tone: "navy", label: "Deep Work" },
  { day: 3, top: 3, height: 1, tone: "muted", label: "Review" },
  { day: 4, top: 1, height: 1, tone: "accent", label: "Demo" },
  { day: 4, top: 3, height: 2, tone: "navy", label: "Strategy" },
];

const toneClasses: Record<string, string> = {
  accent: "bg-accent-400/90 dark:bg-accent-400/80",
  navy: "bg-navy-800 dark:bg-navy-200/90",
  muted: "bg-navy-200 dark:bg-navy-700",
};

/**
 * A live, animated week-view calendar — the page's signature visual.
 * It represents exactly what the service delivers: chaotic time turned
 * into a clean, time-blocked schedule. Fully vector / DOM based, no
 * photography, respects prefers-reduced-motion via Framer Motion defaults.
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-300/20 blur-3xl dark:bg-accent-500/10" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card/95 p-5 shadow-elevated backdrop-blur"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="font-display text-sm font-semibold">This Week</span>
          <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            <Clock3 className="h-3 w-3" />
            Optimized
          </span>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {days.map((day, dayIndex) => (
            <div key={day} className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                {day}
              </span>
              <div className="relative h-40 w-full rounded-lg bg-secondary/60">
                {blocks
                  .filter((b) => b.day === dayIndex)
                  .map((block, i) => (
                    <motion.div
                      key={`${block.label}-${i}`}
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      transition={{
                        delay: 0.6 + dayIndex * 0.08 + i * 0.05,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        top: `${block.top * 20}%`,
                        height: `${block.height * 20}%`,
                      }}
                      className={`absolute inset-x-0.5 origin-top rounded-md ${toneClasses[block.tone]}`}
                      title={block.label}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* floating status cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute -left-6 -top-6 flex animate-float items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 shadow-elevated sm:-left-10"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-4 w-4" />
        </span>
        <div className="leading-none">
          <p className="text-xs font-semibold">Inbox Zero</p>
          <p className="font-mono text-[10px] text-muted-foreground">08:41 AM</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{ animationDelay: "1.5s" }}
        className="absolute -bottom-5 -right-4 flex animate-float items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 shadow-elevated sm:-right-8"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
          <Mail className="h-4 w-4" />
        </span>
        <div className="leading-none">
          <p className="text-xs font-semibold">3 flagged for you</p>
          <p className="font-mono text-[10px] text-muted-foreground">Reviewed daily</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -right-3 top-1/3 hidden h-11 w-11 items-center justify-center rounded-full border border-border bg-card shadow-soft sm:flex"
      >
        <Bell className="h-4 w-4 text-accent-500" />
      </motion.div>
    </div>
  );
}
