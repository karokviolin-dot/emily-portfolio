import { siteConfig } from "@/config/site";
import { faqs } from "@/config/content";

/**
 * Injects Schema.org JSON-LD for Person, ProfessionalService, WebSite,
 * BreadcrumbList and FAQPage so search engines can build rich results.
 */
export function StructuredData() {
  const person = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    sameAs: [siteConfig.contact.linkedin].filter(Boolean),
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: `${siteConfig.name} — Executive Assistant Services`,
    description: siteConfig.description,
    provider: { "@id": `${siteConfig.url}/#person` },
    areaServed: ["US", "CA", "GB", "AU"],
    url: siteConfig.url,
    email: siteConfig.contact.email,
    priceRange: "$$",
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#person` },
    inLanguage: "en-US",
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [person, professionalService, website, breadcrumbList, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
