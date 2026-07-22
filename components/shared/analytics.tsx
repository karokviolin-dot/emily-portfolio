import Script from "next/script";

import { siteConfig } from "@/config/site";

/**
 * Analytics loader. Each provider only renders once its ID is set in
 * config/site.ts (or the matching .env variable) — nothing loads until
 * you add real credentials.
 */
export function Analytics() {
  const { googleAnalyticsId, microsoftClarityId, metaPixelId } = siteConfig.analytics;

  return (
    <>
      {/* Google Analytics 4 — set NEXT_PUBLIC_GA_ID in .env to enable */}
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `}
          </Script>
        </>
      )}

      {/* Microsoft Clarity — set NEXT_PUBLIC_CLARITY_ID in .env to enable */}
      {microsoftClarityId && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${microsoftClarityId}");
          `}
        </Script>
      )}

      {/* Meta Pixel — set NEXT_PUBLIC_META_PIXEL_ID in .env to enable */}
      {metaPixelId && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
              t=b.createElement(e);t.async=!0;t.src=v;
              s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}

/*
 * Google Search Console verification is handled via metadata in
 * app/layout.tsx (metadata.verification.google) — set
 * NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in .env.
 */
