import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { FeatureSection } from "@/components/sections/feature-section";
import { IslandsSection } from "@/components/sections/islands-section";
import { Stats } from "@/components/ui/stats-section-with-text";
import { GallerySlider } from "@/components/sections/gallery-slider";
import { ServicesSection } from "@/components/sections/services-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import { FeatureGrid } from "@/components/ui/feature-grid-enterprise-grade";
import { ClientGallerySection } from "@/components/sections/client-gallery-section";
import { StatsCardSection } from "@/components/ui/stats-card-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { AnimatedTestimonialsBasic } from "@/components/ui/animated-testimonials";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/site";
import { GroupsHomeSection } from "@/components/sections/groups-home-section";
import { LocationSection } from "@/components/sections/location-section";

const homeJsonLd = [
  organizationJsonLd,
  websiteJsonLd,
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Passeios em Paraty",
    provider: {
      "@id": `${SITE_URL}/#organization`
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Paraty, Rio de Janeiro, Brasil",
    },
    serviceType: "Passeios de jipe, escuna, lancha e turismo receptivo",
    url: `${SITE_URL}/`,
    description:
      "Passeios de jipe, escuna e lancha em Paraty com atendimento local para turistas, famÃ­lias, grupos, excursÃµes e agÃªncias.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quais passeios a Aquino Tour oferece em Paraty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Aquino Tour trabalha com opÃ§Ãµes de passeio de jipe, escuna e lancha, alÃ©m de atendimento para grupos e excursÃµes. A disponibilidade e as condiÃ§Ãµes de cada experiÃªncia devem ser consultadas para a data da viagem.",
        },
      },
      {
        "@type": "Question",
        name: "O que inclui o passeio de jipe em Paraty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O passeio de jipe trabalha experiÃªncias pela regiÃ£o rural de Paraty, com atraÃ§Ãµes relacionadas a natureza, cachoeiras, alambiques e cultura local. Os pontos e condiÃ§Ãµes do roteiro devem ser confirmados no atendimento.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo dura o passeio de escuna?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Os passeios de escuna comercializados pela Aquino Tour possuem opÃ§Ãµes com duraÃ§Ã£o aproximada de cinco horas. HorÃ¡rios, embarcaÃ§Ã£o, roteiro e paradas devem ser confirmados para a data escolhida.",
        },
      },
      {
        "@type": "Question",
        name: "A Aquino Tour oferece passeio de lancha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. HÃ¡ opÃ§Ãµes de lancha para conhecer praias e ilhas da regiÃ£o. Capacidade, duraÃ§Ã£o, roteiro e disponibilidade dependem da embarcaÃ§Ã£o escolhida.",
        },
      },
      {
        "@type": "Question",
        name: "A Aquino Tour atende grupos e excursÃµes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A Aquino Tour atende agÃªncias, guias, organizadores, caravanas, famÃ­lias e outros grupos que desejam incluir passeios em sua programaÃ§Ã£o em Paraty.",
        },
      },
      {
        "@type": "Question",
        name: "Ã‰ possÃ­vel consultar hospedagem para grupos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Para grupos que tambÃ©m precisam de hospedagem, Ã© possÃ­vel consultar disponibilidade na Pousada Aquino Mar por meio da integraÃ§Ã£o comercial entre as operaÃ§Ãµes.",
        },
      },
      {
        "@type": "Question",
        name: "Como consultar valores e horÃ¡rios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Informe pelo WhatsApp a data da viagem, a quantidade de pessoas e o passeio de interesse. A equipe verifica disponibilidade, horÃ¡rios e condiÃ§Ãµes para o seu perfil.",
        },
      },
      {
        "@type": "Question",
        name: "A Aquino Tour Ã© de Paraty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A Aquino Tour atua com turismo, passeios e atendimento receptivo em Paraty, no Rio de Janeiro.",
        },
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Passeios em Paraty: Jipe, Escuna e Lancha",
  description:
    "Passeios de jipe, escuna e lancha em Paraty com atendimento local. Consulte opÃ§Ãµes para turistas, famÃ­lias, grupos, excursÃµes e agÃªncias.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Passeios em Paraty: Jipe, Escuna e Lancha | Aquino Tour",
    description:
      "ConheÃ§a opÃ§Ãµes de passeio de jipe, escuna e lancha em Paraty com atendimento local da Aquino Tour.",
    url: `${SITE_URL}/`,
    siteName: "Aquino Tour",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/seo/aquino-tour-og.png",
        width: 1200,
        height: 630,
        alt: "Aquino Tour — Turismo em Paraty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Passeios em Paraty: Jipe, Escuna e Lancha | Aquino Tour",
    description:
      "Passeios em Paraty para turistas, famÃ­lias, grupos, excursÃµes e agÃªncias.",
    images: ["/images/seo/aquino-tour-og.png"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={homeJsonLd} />
      <HeroSection />
      <div className="relative -mt-px overflow-hidden bg-coastal-mist">
        <section className="relative flex w-full items-center overflow-hidden border-b border-ocean-navy/10 py-5 md:py-6">
          <div className="relative z-10 w-full">
            <LogoMarquee />
          </div>
        </section>
        <StatsCardSection />
        <Stats />
      </div>
      <div
        id="gradient-wrapper"
        className="bg-shell-white"
      >
        <GallerySlider />
        <FeatureSection />
        <FeatureGrid />
        <IslandsSection />
        <ServicesSection />
        <PricingSection />
        <GroupsHomeSection />

        <ClientGallerySection />

        <AnimatedTestimonialsBasic />

        <LocationSection />

        <FaqSection />
      </div>
      <FooterSection />
    </div>
  );
}


