import { Reveal } from "@/components/shared/reveal";
import { values } from "@/config/content";

export function WhyWorkWithMe() {
  return (
    <section id="why-me" className="section-padding bg-secondary/40">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
              Why Work With Me
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              The traits that make delegation feel safe
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-300/60 hover:shadow-elevated">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors duration-300 group-hover:bg-accent-400 group-hover:text-navy-950">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{value.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
