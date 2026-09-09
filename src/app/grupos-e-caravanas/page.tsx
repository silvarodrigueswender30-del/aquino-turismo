import type { Metadata } from "next";
import { GruposHeroSection } from "@/components/sections/groups/grupos-hero-section";
import { GruposAutoridadeSection } from "@/components/sections/groups/grupos-autoridade-section";
import { GruposComoFuncionaSection } from "@/components/sections/groups/grupos-como-funciona-section";
import { GruposExperienciasSection } from "@/components/sections/groups/grupos-experiencias-section";
import { GruposParaQuemSection } from "@/components/sections/groups/grupos-para-quem-section";
import { GruposAquinoMarSection } from "@/components/sections/groups/grupos-aquino-mar-section";
import { GruposBeneficiosSection } from "@/components/sections/groups/grupos-beneficios-section";
import { GruposProvaSection } from "@/components/sections/groups/grupos-prova-section";
import { GruposFaqSection } from "@/components/sections/groups/grupos-faq-section";
import { GruposCtaSection } from "@/components/sections/groups/grupos-cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Turismo Receptivo para Grupos em Paraty",
  description:
    "Passeios e atendimento receptivo para grupos e excursões em Paraty. Consulte jipe, escuna, lancha e hospedagem para agências, guias e caravanas.",
  alternates: {
    canonical: `${SITE_URL}/grupos-e-caravanas`,
  },
  openGraph: {
    title: "Turismo Receptivo para Grupos em Paraty | Aquino Tour",
    description:
      "Atendimento para grupos, excursões, agências e guias que desejam organizar passeios em Paraty.",
    url: `${SITE_URL}/grupos-e-caravanas`,
    siteName: SITE_NAME,
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
    title: "Turismo Receptivo para Grupos em Paraty | Aquino Tour",
    description:
      "Passeios e atendimento receptivo para grupos e excursões em Paraty.",
    images: ["/og-image.jpg"],
  },
};

const groupsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Turismo receptivo para grupos em Paraty",
    provider: {
      "@id": `${SITE_URL}/#organization`
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Paraty, Rio de Janeiro, Brasil",
    },
    serviceType: "Turismo receptivo para grupos, excursões e agências",
    url: `${SITE_URL}/grupos-e-caravanas`,
    description:
      "Atendimento receptivo para grupos, excursões, agências, guias e organizadores que desejam consultar passeios de jipe, escuna, lancha e hospedagem em Paraty.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "A Aquino Tour atende agências de outras cidades?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O atendimento receptivo é realizado em Paraty para agências, guias e grupos provenientes de diferentes cidades e estados.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês atendem excursões que chegam de ônibus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A Aquino Tour atende grupos e excursões rodoviárias. Informações específicas sobre logística, embarque, desembarque e programação devem ser alinhadas de acordo com cada grupo.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês fornecem o ônibus da excursão?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O transporte rodoviário de origem normalmente é organizado pela agência ou pelo responsável pelo grupo. Consulte a equipe caso exista alguma necessidade específica.",
        },
      },
      {
        "@type": "Question",
        name: "É possível organizar hospedagem e passeios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A programação turística pode ser combinada com consulta de hospedagem na Pousada Aquino Mar, conforme disponibilidade.",
        },
      },
      {
        "@type": "Question",
        name: "Quais passeios podem ser organizados para grupos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre as opções trabalhadas estão passeio de jipe, passeio de escuna e passeio de lancha. A indicação depende do tamanho e do perfil do grupo.",
        },
      },
      {
        "@type": "Question",
        name: "A escuna atende excursões?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Existem opções de embarcação adequadas para grupos, mas capacidade, disponibilidade, roteiro e condições precisam ser confirmados para cada data.",
        },
      },
      {
        "@type": "Question",
        name: "Existe atendimento para guia ou agência de turismo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A Aquino Tour trabalha com atendimento voltado a agências, guias e organizadores que precisam estruturar experiências para seus passageiros em Paraty.",
        },
      },
      {
        "@type": "Question",
        name: "É possível montar uma programação personalizada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A equipe pode auxiliar na composição de uma programação de acordo com o tempo disponível, perfil dos passageiros e serviços disponíveis.",
        },
      },
      {
        "@type": "Question",
        name: "Como solicitar uma proposta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Envie pelo WhatsApp as datas, a cidade de origem, a quantidade aproximada de passageiros e os serviços desejados.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Grupos e Excursões",
        item: `${SITE_URL}/grupos-e-caravanas`,
      },
    ],
  },
];

export default function GruposECaravanasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={groupsJsonLd} />
      <GruposHeroSection />
      <GruposAutoridadeSection />
      <GruposComoFuncionaSection />
      <GruposExperienciasSection />
      <GruposParaQuemSection />
      <GruposAquinoMarSection />
      <GruposBeneficiosSection />
      <GruposProvaSection />
      <GruposFaqSection />
      <GruposCtaSection />
      <FooterSection />
    </div>
  );
}
