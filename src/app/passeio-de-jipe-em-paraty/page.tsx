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
import { Map, Camera, MapPin, Coffee } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Passeio de jipe em Paraty | Aquino Tour",
  description: "Conheça cachoeiras, alambiques e a natureza da Mata Atlântica em um roteiro rural com a Aquino Tour Paraty.",
  alternates: {
    canonical: "/passeio-de-jipe-em-paraty",
  },
  openGraph: {
    title: "Passeio de jipe em Paraty | Aquino Tour",
    description: "Conheça cachoeiras, alambiques e a natureza da Mata Atlântica em um roteiro rural com a Aquino Tour Paraty.",
    url: `${SITE_URL}/passeio-de-jipe-em-paraty`,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/services/fundo1.avif",
        width: 1200,
        height: 630,
        alt: "Passeio de jipe em Paraty",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Passeio de jipe em Paraty | Aquino Tour",
    description: "Conheça cachoeiras, alambiques e a natureza da Mata Atlântica.",
    images: ["/images/services/fundo1.avif"],
  },
}

const faqs = [
  {
    question: "O que esperar do roteiro do passeio de jipe?",
    answer: "O passeio de jipe tradicionalmente percorre a região rural de Paraty, incluindo paradas em cachoeiras e alambiques. Consulte a equipe para confirmar o que está incluído na opção disponível para sua data.",
  },
  {
    question: "O passeio de jipe inclui alimentação?",
    answer: "Consulte a equipe para confirmar o que está incluído na opção disponível para sua data.",
  },
  {
    question: "Crianças podem fazer o passeio de jipe?",
    answer: "O passeio é procurado por famílias, mas recomendamos informar a idade das crianças no momento da consulta para que a equipe oriente sobre as condições do roteiro.",
  },
  {
    question: "O passeio acontece com chuva?",
    answer: "A realização do passeio está sujeita às condições climáticas e de segurança nas vias de acesso às cachoeiras. Em caso de necessidade, a agência orientará sobre opções.",
  }
]

export default function PasseioJipePage() {
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
            "name": "Passeio de Jipe em Paraty",
            "item": `${SITE_URL}/passeio-de-jipe-em-paraty`
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Passeio de Jipe em Paraty",
        "provider": {
          "@id": `${SITE_URL}/#organization`
        },
        "description": "Passeio turístico de jipe pelas cachoeiras, alambiques e Mata Atlântica de Paraty.",
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
        eyebrow="PASSEIO DE JIPE"
        title="Paraty por terra: natureza, cachoeiras e cultura local"
        description="Uma imersão na região rural de Paraty. Conheça as principais cachoeiras, visite alambiques tradicionais e viva uma experiência em contato com a Mata Atlântica."
        imageSrc="/images/services/fundo1.avif"
        imageAlt="Praia e vegetação da Mata Atlântica em Paraty"
        primaryCta={{
          label: "Consultar passeio via WhatsApp",
          href: getWhatsappUrl(WHATSAPP_MESSAGES.jeep),
          external: true
        }}
      />

      {/* Breadcrumb Visual - Simple Implementation */}
      <div className="bg-shell-white border-b border-ocean-navy/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4">
          <nav aria-label="Breadcrumb" className="font-sans text-xs font-medium text-slate-blue">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-ocean-navy transition-colors">Início</Link></li>
              <li aria-hidden="true" className="text-slate-blue/50">&gt;</li>
              <li className="text-ocean-navy" aria-current="page">Passeio de Jipe em Paraty</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="w-full bg-shell-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="font-heading font-light text-2xl md:text-4xl text-ocean-navy mb-6">
              Descubra os encantos do interior de Paraty
            </h2>
            <p className="font-sans text-base md:text-lg text-slate-blue leading-relaxed mb-4">
              O passeio de jipe é a escolha ideal para quem quer explorar Paraty além do mar. A região é famosa por sua área preservada de Mata Atlântica, abrigando diversas quedas d&apos;água, piscinas naturais e uma rica herança cultural.
            </p>
            <p className="font-sans text-base md:text-lg text-slate-blue leading-relaxed">
              Durante o trajeto, você terá a oportunidade de visitar os tradicionais alambiques de cachaça artesanal de Paraty, conhecendo o processo de produção e a história da bebida que é patrimônio da cidade. Consulte nossa equipe para verificar os roteiros disponíveis.
            </p>
          </div>
        </div>
      </section>

      <TourHighlights
        eyebrow="O QUE ESPERAR"
        title="Destaques da experiência"
        items={[
          {
            icon: Map,
            title: "Região Rural",
            description: "Acesso por estradas rurais, percorrendo trilhas cercadas pela vegetação exuberante da Mata Atlântica."
          },
          {
            icon: Camera,
            title: "Cachoeiras",
            description: "Paradas para conhecer quedas d'água e piscinas naturais que compõem o cenário da serra de Paraty."
          },
          {
            icon: Coffee,
            title: "Alambiques",
            description: "Visita a produtores locais para descobrir o processo artesanal de produção da tradicional cachaça."
          },
          {
            icon: MapPin,
            title: "Parada em restaurante",
            description: "O roteiro prevê uma pausa. Consulte a equipe para confirmar a disponibilidade e o que está incluído no roteiro da sua data."
          }
        ]}
      />

      <TourForWhom
        eyebrow="PERFIL DO PASSEIO"
        title="Para quem é o passeio de jipe?"
        description="Esta experiência é procurada por visitantes que desejam conhecer a parte histórica e natural do interior da cidade, combinando ecoturismo com cultura."
        audiences={[
          "Casais e grupos de amigos",
          "Famílias que buscam atividades na natureza",
          "Apreciadores de cultura local e alambiques",
          "Turistas interessados em ecoturismo"
        ]}
      />

      <TourFaq
        eyebrow="TIRE SUAS DÚVIDAS"
        title="Perguntas frequentes sobre o passeio de jipe"
        faqs={faqs}
      />

      <TourRelated
        eyebrow="CONTINUE EXPLORANDO"
        title="Outras experiências em Paraty"
        items={[
          {
            title: "Passeio de Escuna",
            description: "Navegue pela baía de Paraty em uma experiência com paradas em praias e ilhas.",
            imageSrc: "/images/destinations/hero03.avif",
            imageAlt: "Passeio de escuna",
            href: "/passeio-de-escuna-em-paraty"
          },
          {
            title: "Passeio de Lancha",
            description: "Explore a região costeira de forma mais reservada e flexível.",
            imageSrc: "/images/destinations/hero-lancha.avif",
            imageAlt: "Passeio de lancha",
            href: "/passeio-de-lancha-em-paraty"
          },
          {
            title: "Grupos e Excursões",
            description: "Atendimento receptivo especializado para agências e organizadores.",
            imageSrc: "/images/services/fundo1.avif",
            imageAlt: "Grupos e excursões",
            href: "/grupos-e-caravanas"
          }
        ]}
      />

      <TourFinalCta
        eyebrow="RESERVE SEU PASSEIO"
        title="Fale com a equipe da Aquino Tour"
        body="Consulte valores, horários e disponibilidade do passeio de jipe para a data da sua viagem."
        ctaLabel="Consultar pelo WhatsApp"
        ctaHref={getWhatsappUrl(WHATSAPP_MESSAGES.jeep)}
      />

      <FooterSection />
    </>
  )
}
