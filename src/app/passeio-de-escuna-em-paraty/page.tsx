import { Metadata } from "next"
import { FooterSection } from "@/components/sections/footer-section"
import { TourHero } from "@/components/sections/tours/tour-hero"
import { TourHighlights } from "@/components/sections/tours/tour-highlights"
import { TourForWhom } from "@/components/sections/tours/tour-for-whom"
import { TourRelated } from "@/components/sections/tours/tour-related"
import { TourFaq } from "@/components/sections/tours/tour-faq"
import { TourFinalCta } from "@/components/sections/tours/tour-final-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { getWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp"
import { SITE_NAME, SITE_URL } from "@/lib/site"
import { Ship, Anchor, Users, Sun } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Passeio de escuna em Paraty | Aquino Tour",
  description: "Navegue pela baía de Paraty em uma experiência com paradas em praias e ilhas. Consulte horários e opções.",
  alternates: {
    canonical: "/passeio-de-escuna-em-paraty",
  },
  openGraph: {
    title: "Passeio de escuna em Paraty | Aquino Tour",
    description: "Navegue pela baía de Paraty em uma experiência com paradas em praias e ilhas. Consulte horários e opções.",
    url: `${SITE_URL}/passeio-de-escuna-em-paraty`,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/hero/escuna-home.webp",
        width: 1200,
        height: 630,
        alt: "Passeio de escuna em Paraty",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Passeio de escuna em Paraty | Aquino Tour",
    description: "Navegue pela baía de Paraty em uma experiência com paradas em praias e ilhas.",
    images: ["/images/hero/escuna-home.webp"],
  },
}

const faqs = [
  {
    question: "Quanto tempo dura o passeio de escuna?",
    answer: "Há opções comercializadas pela Aquino Tour com duração aproximada de cinco horas. Consulte a equipe para confirmar duração, horário e roteiro disponíveis para sua data.",
  },
  {
    question: "Quais são as paradas do passeio de escuna?",
    answer: "Os roteiros costumam incluir de três a quatro paradas ao longo da baía de Paraty para banho e contemplação. As praias e ilhas visitadas variam conforme as condições climáticas e a embarcação.",
  },
  {
    question: "O passeio inclui alimentação?",
    answer: "Consulte a equipe para confirmar o que está incluído na opção disponível para sua data.",
  },
  {
    question: "O passeio é indicado para crianças?",
    answer: "Sim, o passeio de escuna é uma das opções mais tradicionais para famílias em Paraty. Recomendamos confirmar com a equipe as comodidades oferecidas pela embarcação no momento da consulta.",
  }
]

export default function PasseioEscunaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": SITE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Passeio de Escuna em Paraty",
            "item": `${SITE_URL}/passeio-de-escuna-em-paraty`
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Passeio de Escuna em Paraty",
        "provider": {
          "@id": `${SITE_URL}/#organization`
        },
        "description": "Passeio de escuna pelas praias e ilhas da Baía de Paraty.",
        "areaServed": {
          "@type": "City",
          "name": "Paraty"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      
      <TourHero
        eyebrow="PASSEIO DE ESCUNA"
        title="Navegue pelas belezas da Baía de Paraty"
        description="Aproveite o mar calmo da região em um passeio coletivo com paradas para banho, contemplação e momentos de lazer em praias e ilhas paradisíacas."
        imageSrc="/images/hero/escuna-home.webp"
        imageAlt="Passeio de escuna na baía de Paraty"
        primaryCta={{
          label: "Consultar passeio via WhatsApp",
          href: getWhatsappUrl(WHATSAPP_MESSAGES.escuna),
          external: true
        }}
      />

      <div className="bg-shell-white border-b border-ocean-navy/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4">
          <nav aria-label="Breadcrumb" className="font-sans text-xs font-medium text-slate-blue">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-ocean-navy transition-colors">Início</Link></li>
              <li aria-hidden="true" className="text-slate-blue/50">&gt;</li>
              <li className="text-ocean-navy" aria-current="page">Passeio de Escuna em Paraty</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="w-full bg-shell-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="font-heading font-light text-2xl md:text-4xl text-ocean-navy mb-6">
              A experiência mais tradicional do litoral sul
            </h2>
            <p className="font-sans text-base md:text-lg text-slate-blue leading-relaxed mb-4">
              O passeio de escuna é uma das atividades mais procuradas por quem visita a região. Com águas tranquilas e protegidas, a baía de Paraty oferece as condições ideais para um roteiro marítimo seguro e agradável.
            </p>
            <p className="font-sans text-base md:text-lg text-slate-blue leading-relaxed">
              Durante o passeio, os passageiros podem desfrutar da estrutura da embarcação, apreciar a vista do Centro Histórico a partir do mar e mergulhar em pontos conhecidos pela beleza natural. A equipe da Aquino Tour orienta sobre as opções de saídas, horários e embarcações disponíveis de acordo com o tamanho do seu grupo.
            </p>
          </div>
        </div>
      </section>

      <TourHighlights
        eyebrow="O QUE ESPERAR"
        title="Destaques da experiência"
        items={[
          {
            icon: Anchor,
            title: "Paradas para banho",
            description: "O roteiro prevê pausas em praias e ilhas da região para que os passageiros aproveitem o mar de Paraty."
          },
          {
            icon: Ship,
            title: "Estrutura a bordo",
            description: "As embarcações costumam contar com banheiros, som e serviço de bar, garantindo conforto durante o percurso."
          },
          {
            icon: Users,
            title: "Passeio Coletivo",
            description: "Uma excelente oportunidade para conhecer outras pessoas em um ambiente descontraído e animado."
          },
          {
            icon: Sun,
            title: "Paisagens",
            description: "Contemple a Mata Atlântica encontrando o mar em um dos cenários mais bonitos da Costa Verde."
          }
        ]}
      />

      <TourForWhom
        eyebrow="PERFIL DO PASSEIO"
        title="Para quem é o passeio de escuna?"
        description="A escuna é uma opção versátil, oferecendo excelente custo-benefício para quem deseja conhecer as praias de Paraty em uma experiência estruturada e compartilhada."
        audiences={[
          "Turistas que visitam Paraty pela primeira vez",
          "Famílias com crianças e idosos",
          "Grupos e excursões procurando passeios integrados",
          "Visitantes buscando um passeio com estrutura de bar/restaurante"
        ]}
      />

      <TourFaq
        eyebrow="TIRE SUAS DÚVIDAS"
        title="Perguntas frequentes sobre o passeio de escuna"
        faqs={faqs}
      />

      <TourRelated
        eyebrow="CONTINUE EXPLORANDO"
        title="Outras experiências em Paraty"
        items={[
          {
            title: "Passeio de Lancha",
            description: "Explore a região costeira de forma mais reservada e flexível.",
            imageSrc: "/images/hero-carousel/slide-5.avif",
            imageAlt: "Passeio de lancha",
            href: "/passeio-de-lancha-em-paraty"
          },
          {
            title: "Passeio de Jipe",
            description: "Conheça a região rural, cachoeiras e alambiques da cidade.",
            imageSrc: "/images/imagem6.avif",
            imageAlt: "Passeio de jipe",
            href: "/passeio-de-jipe-em-paraty"
          },
          {
            title: "Grupos e Excursões",
            description: "Atendimento receptivo especializado para agências e organizadores.",
            imageSrc: "/images/galeria/passeio-1.webp",
            imageAlt: "Grupos e excursões",
            href: "/grupos-e-caravanas"
          }
        ]}
      />

      <TourFinalCta
        eyebrow="RESERVE SEU PASSEIO"
        title="Fale com a equipe da Aquino Tour"
        body="Consulte valores, horários e a programação das escunas disponíveis para a data da sua viagem."
        ctaLabel="Consultar pelo WhatsApp"
        ctaHref={getWhatsappUrl(WHATSAPP_MESSAGES.escuna)}
      />

      <FooterSection />
    </>
  )
}
