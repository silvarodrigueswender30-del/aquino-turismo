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
      "Passeios de jipe, escuna e lancha em Paraty com atendimento local para turistas, famílias, grupos, excursões e agências.",
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
          text: "A Aquino Tour trabalha com opções de passeio de jipe, escuna e lancha, além de atendimento para grupos e excursões. A disponibilidade e as condições de cada experiência devem ser consultadas para a data da viagem.",
        },
      },
      {
        "@type": "Question",
        name: "O que inclui o passeio de jipe em Paraty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O passeio de jipe trabalha experiências pela região rural de Paraty, com atrações relacionadas a natureza, cachoeiras, alambiques e cultura local. Os pontos e condições do roteiro devem ser confirmados no atendimento.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo dura o passeio de escuna?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Os passeios de escuna comercializados pela Aquino Tour possuem opções com duração aproximada de cinco horas. Horários, embarcação, roteiro e paradas devem ser confirmados para a data escolhida.",
        },
      },
      {
        "@type": "Question",
        name: "A Aquino Tour oferece passeio de lancha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Há opções de lancha para conhecer praias e ilhas da região. Capacidade, duração, roteiro e disponibilidade dependem da embarcação escolhida.",
        },
      },
      {
        "@type": "Question",
        name: "A Aquino Tour atende grupos e excursões?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A Aquino Tour atende agências, guias, organizadores, caravanas, famílias e outros grupos que desejam incluir passeios em sua programação em Paraty.",
        },
      },
      {
        "@type": "Question",
        name: "É possível consultar hospedagem para grupos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Para grupos que também precisam de hospedagem, é possível consultar disponibilidade na Pousada Aquino Mar por meio da integração comercial entre as operações.",
        },
      },
      {
        "@type": "Question",
        name: "Como consultar valores e horários?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Informe pelo WhatsApp a data da viagem, a quantidade de pessoas e o passeio de interesse. A equipe verifica disponibilidade, horários e condições para o seu perfil.",
        },
      },
      {
        "@type": "Question",
        name: "A Aquino Tour é de Paraty?",
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
    "Passeios de jipe, escuna e lancha em Paraty com atendimento local. Consulte opções para turistas, famílias, grupos, excursões e agências.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Passeios em Paraty: Jipe, Escuna e Lancha | Aquino Tour",
    description:
      "Conheça opções de passeio de jipe, escuna e lancha em Paraty com atendimento local da Aquino Tour.",
    url: `${SITE_URL}/`,
    siteName: "Aquino Tour",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aquino Tour em Paraty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Passeios em Paraty: Jipe, Escuna e Lancha | Aquino Tour",
    description:
      "Passeios em Paraty para turistas, famílias, grupos, excursões e agências.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={homeJsonLd} />
      <HeroSection />
      <div
        className="relative -mt-px overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 82% 8%, rgba(95,197,199,.11), transparent 30%),
            radial-gradient(circle at 6% 78%, rgba(22,91,140,.055), transparent 34%),
            linear-gradient(180deg, #FAF8F2 0%, rgba(169,216,232,.16) 30%, rgba(250,248,242,.94) 52%, rgba(241,232,215,.26) 76%, #FAF8F2 100%)
          `,
        }}
      >
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

        <FaqSection />
      </div>
      <FooterSection />
    </div>
  );
}
