import { Reveal } from "@/components/shared/reveal";
import { process } from "@/config/content";

export function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
              My Process
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A clear path from first call to full support
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-20">
          {/* vertical connector: left-aligned on mobile, centered on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-2 h-[calc(100%-2rem)] w-px bg-border lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="space-y-10 lg:space-y-16">
            {process.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal key={item.step} delay={index * 0.1}>
                  <div className="relative flex items-start gap-5 pl-[3.75rem] lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:pl-0">
                    <div
                      className={`absolute left-6 top-0 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-navy-900 text-accent-400 shadow-elevated dark:bg-accent-400 dark:text-navy-950 lg:relative lg:left-auto lg:top-auto lg:translate-x-0 ${
                        isEven ? "lg:order-2 lg:col-start-1 lg:justify-self-end" : "lg:order-1 lg:col-start-2 lg:justify-self-start"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                    </div>

                    <div
                      className={`rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-start-1 ${
                        isEven ? "lg:order-1 lg:text-right" : "lg:order-2 lg:col-start-2"
                      }`}
                    >
                      <span className="font-mono text-xs text-accent-600 dark:text-accent-400">
                        Step {item.step}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
