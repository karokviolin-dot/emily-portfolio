import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { finalCta } from "@/config/content";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/utils";

export function FinalCta() {
  const whatsappHref = buildWhatsAppLink(
    siteConfig.contact.whatsapp,
    "Hi! I'd like to book a discovery call.",
  );

  return (
    <section id="final-cta" className="px-6 py-24 sm:py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-16 text-center shadow-elevated sm:px-16 sm:py-24">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-[0.06] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black,transparent)]"
            />
            <div
              aria-hidden="true"
              className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-400/20 blur-[100px]"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {finalCta.headline}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-200">{finalCta.body}</p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" variant="accent">
                  <a href="#top">
                    {finalCta.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    {finalCta.secondaryCta.label}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
