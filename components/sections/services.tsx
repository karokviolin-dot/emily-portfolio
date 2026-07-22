import { Check } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { services } from "@/config/content";

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
              Services
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to run on time, in one place
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Three focused services that cover the inbox, the calendar, and the systems that keep
              your business moving without you in the middle of every detail.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-50/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-accent-900/10"
                />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-accent-400 transition-transform duration-300 group-hover:scale-110 dark:bg-accent-400 dark:text-navy-950">
                  <service.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
