import { Reveal } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { benefits } from "@/config/content";

export function Benefits() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
              What You&apos;ll Gain
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              The difference shows up in your first two weeks
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 dark:bg-accent-900/20 dark:text-accent-300">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">
                    {benefit.title === "10+ Hours Saved Weekly" ? (
                      <>
                        <AnimatedCounter value={10} suffix="+ Hours Saved Weekly" />
                      </>
                    ) : (
                      benefit.title
                    )}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
