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
  "@id": `${SITE_URL}/#organization`,
  name: "Aquino Tour",
  url: SITE_URL,
  sameAs: [INSTAGRAM_URL],
  telephone: "+55 24 99909-6384",
  logo: `${SITE_URL}/images/brand/aquinotour-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Guapuruvu, 371",
    addressLocality: "Paraty",
    addressRegion: "RJ",
    postalCode: "23970-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.2163,
    longitude: -44.7214,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Paraty, Rio de Janeiro, Brasil",
  },
  description: "Agência de passeios e turismo receptivo em Paraty.",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "pt-BR",
};
