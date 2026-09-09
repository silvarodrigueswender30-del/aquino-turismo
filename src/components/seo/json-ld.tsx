import { INSTAGRAM_URL, SITE_NAME, SITE_URL } from "@/lib/site";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_NAME,
  url: SITE_URL,
  sameAs: [INSTAGRAM_URL],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Paraty, Rio de Janeiro, Brasil",
  },
  description:
    "Passeios e turismo receptivo em Paraty para turistas, famílias, grupos, excursões e agências.",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "pt-BR",
};
