import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}'s executive assistant services.`,
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container-narrow py-24 sm:py-28">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">Overview</h2>
          <p className="mt-2">
            This policy explains what information is collected when you visit this website or
            reach out to inquire about executive assistant services, and how that information is
            used and protected.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">
            Information Collected
          </h2>
          <p className="mt-2">
            When you book a discovery call, send an email, or message via WhatsApp, basic contact
            details (such as your name, email address, and phone number) are collected in order to
            respond to your inquiry. Standard website analytics may also be collected, including
            pages visited and general location, to understand how visitors use the site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">How Information Is Used</h2>
          <p className="mt-2">
            Contact information is used solely to communicate with you about potential or ongoing
            services. It is never sold or shared with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">Confidentiality</h2>
          <p className="mt-2">
            Any information shared as part of an active engagement, including access to email,
            calendar, or internal tools, is treated as strictly confidential. Non-disclosure
            agreements are available on request.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-accent-600 hover:underline dark:text-accent-400">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
