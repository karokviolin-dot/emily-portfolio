import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/reveal";
import { faqs } from "@/config/content";

export function Faq() {
  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
              FAQ
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Questions busy executives usually ask
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="container-narrow mt-12">
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-soft sm:px-8">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
