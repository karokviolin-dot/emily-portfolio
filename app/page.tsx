import type { Metadata } from "next";
import ExecutiveDashboard from '@/components/ExecutiveDashboard';
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { Benefits } from "@/components/sections/benefits";
import { Process } from "@/components/sections/process";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
  <Hero />
  <TrustBar />
  <Services />
  <ExecutiveDashboard />
  <Benefits />
  <Process />
  <WhyWorkWithMe />
  <Faq />
  <FinalCta />
</main>
      <Footer />
    </>
  );
}
