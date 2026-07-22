import { Linkedin, Mail, CalendarClock, MessageCircle } from "lucide-react";

import { footer } from "@/config/content";
import { siteConfig } from "@/config/site";
import { buildMailtoLink, buildWhatsAppLink } from "@/lib/utils";

export function Footer() {
  const whatsappHref = buildWhatsAppLink(siteConfig.contact.whatsapp);
  const mailHref = buildMailtoLink(siteConfig.contact.email, "Executive Assistant Inquiry");

  return (
    <footer className="border-t border-border">
      <div className="container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display text-base font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-accent-400 dark:bg-accent-400 dark:text-navy-950">
                <CalendarClock className="h-4 w-4" />
              </span>
              {siteConfig.name}
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={mailHref} className="inline-flex items-center gap-2 hover:text-foreground">
                  <Mail className="h-4 w-4" /> {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Book Time</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={siteConfig.contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <CalendarClock className="h-4 w-4" /> Calendly
                </a>
              </li>
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
