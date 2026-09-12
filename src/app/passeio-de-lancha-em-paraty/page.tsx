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
import { Waves, Clock, Map, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Passeio de lancha em Paraty | Aquino Tour",
  description: "Explore praias e ilhas de forma mais reservada e flexível. Opção indicada para famílias e pequenos grupos que visitam Paraty.",
  alternates: {
    canonical: "/passeio-de-lancha-em-paraty",
  },
  openGraph: {
    title: "Passeio de lancha em Paraty | Aquino Tour",
    description: "Explore praias e ilhas de forma mais reservada e flexível. Opção indicada para famílias e pequenos grupos que visitam Paraty.",
    url: `${SITE_URL}/passeio-de-lancha-em-paraty`,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/destinations/hero-lancha.avif",
        width: 1200,
        height: 630,
        alt: "Passeio de lancha em Paraty",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Passeio de lancha em Paraty | Aquino Tour",
    description: "Explore praias e ilhas de forma mais reservada e flexível.",
    images: ["/images/destinations/hero-lancha.avif"],
  },
}

const faqs = [
  {
    question: "O roteiro do passeio de lancha é flexível?",
    answer: "A lancha oferece uma dinâmica mais personalizada, permitindo visitar pontos da baía de acordo com as preferências do grupo e a orientação do marinheiro, respeitando sempre as condições de navegação da data.",
  },
  {
    question: "Quantas pessoas cabem na lancha?",
    answer: "A Aquino Tour trabalha com opções variadas de embarcações, com diferentes capacidades de passageiros. Consulte a equipe informando o tamanho do seu grupo para verificar os modelos disponíveis.",
  },
  {
    question: "O passeio inclui alimentação?",
    answer: "O serviço de lancha geralmente não inclui alimentação ou bebidas a bordo, mas os passeios podem prever paradas em praias e ilhas que possuem estrutura de quiosques ou restaurantes locais.",
  },
  {
    question: "Qual o horário de saída?",
    answer: "As saídas costumam ser alinhadas previamente no momento da reserva, oferecendo flexibilidade dentro do período diurno para aproveitar o melhor das condições marítimas da baía de Paraty.",
  }
]

export default function PasseioLanchaPage() {
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
            "name": "Passeio de Lancha em Paraty",
            "item": `${SITE_URL}/passeio-de-lancha-em-paraty`
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Passeio de Lancha em Paraty",
        "provider": {
          "@id": `${SITE_URL}/#organization`
        },
        "description": "Serviço de passeio de lancha para explorar a baía de Paraty.",
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
        eyebrow="PASSEIO DE LANCHA"
        title="Explore a baía em uma experiência mais reservada"
        description="Navegue pelo mar de Paraty com mais flexibilidade. Uma opção excelente para famílias e pequenos grupos que desejam otimizar o tempo e personalizar seu roteiro pelas praias e ilhas."
        imageSrc="/images/destinations/hero-lancha.avif"
        imageAlt="Passeio de lancha em Paraty"
        primaryCta={{
          label: "Consultar lanchas via WhatsApp",
          href: getWhatsappUrl(WHATSAPP_MESSAGES.lancha),
          external: true
        }}
      />

      <div className="bg-shell-white border-b border-ocean-navy/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4">
          <nav aria-label="Breadcrumb" className="font-sans text-xs font-medium text-slate-blue">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-ocean-navy transition-colors">Início</Link></li>
              <li aria-hidden="true" className="text-slate-blue/50">&gt;</li>
              <li className="text-ocean-navy" aria-current="page">Passeio de Lancha em Paraty</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="w-full bg-shell-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="font-heading font-light text-2xl md:text-4xl text-ocean-navy mb-6">
              Descubra os cartões-postais da região no seu ritmo
            </h2>
            <p className="font-sans text-base md:text-lg text-slate-blue leading-relaxed mb-4">
              O passeio de lancha em Paraty oferece uma dinâmica diferente para conhecer o litoral. Com embarcações mais ágeis, é possível visitar uma quantidade maior de atrativos em menos tempo, aproveitando ao máximo o dia na baía.
            </p>
            <p className="font-sans text-base md:text-lg text-slate-blue leading-relaxed">
              Trata-se de uma experiência mais reservada, onde a atenção é voltada para o seu grupo. A equipe da Aquino Tour auxilia na organização, apresentando as embarcações adequadas ao tamanho da sua família e prestando o suporte necessário para que o passeio ocorra com tranquilidade e conforto.
            </p>
          </div>
        </div>
      </section>

      <TourHighlights
        eyebrow="O QUE ESPERAR"
        title="Destaques da experiência"
        items={[
          {
            icon: Waves,
            title: "Agilidade",
            description: "Deslocamentos mais rápidos entre os atrativos, permitindo explorar pontos mais distantes da baía."
          },
          {
            icon: Map,
            title: "Roteiro adaptável",
            description: "A organização das paradas pode ser flexibilizada conforme as preferências do grupo e indicação do marinheiro."
          },
          {
            icon: Clock,
            title: "Otimização de tempo",
            description: "Ideal para quem tem um roteiro mais enxuto em Paraty e quer aproveitar melhor cada local."
          },
          {
            icon: Shield,
            title: "Experiência reservada",
            description: "O ambiente da embarcação é focado no seu grupo, garantindo um passeio mais intimista."
          }
        ]}
      />

      <TourForWhom
        eyebrow="PERFIL DO PASSEIO"
        title="Para quem é o passeio de lancha?"
        description="Esta é a opção ideal para visitantes que priorizam conforto, dinâmica personalizada e otimização do tempo durante a visita às praias e ilhas."
        audiences={[
          "Famílias e pequenos grupos",
          "Visitantes buscando uma experiência mais reservada",
          "Casais procurando um roteiro especial",
          "Turistas que desejam flexibilidade nas paradas"
        ]}
      />

      <TourFaq
        eyebrow="TIRE SUAS DÚVIDAS"
        title="Perguntas frequentes sobre lanchas"
        faqs={faqs}
      />

      <TourRelated
        eyebrow="CONTINUE EXPLORANDO"
        title="Outras experiências em Paraty"
        items={[
          {
            title: "Passeio de Escuna",
            description: "Navegue pela baía em uma experiência com estrutura para grupos maiores.",
            imageSrc: "/images/destinations/hero03.avif",
            imageAlt: "Passeio de escuna",
            href: "/passeio-de-escuna-em-paraty"
          },
          {
            title: "Passeio de Jipe",
            description: "Conheça a região rural, cachoeiras e alambiques da cidade.",
            imageSrc: "/images/services/fundo1.avif",
            imageAlt: "Passeio de jipe",
            href: "/passeio-de-jipe-em-paraty"
          },
          {
            title: "Grupos e Excursões",
            description: "Atendimento receptivo especializado para agências e organizadores.",
            imageSrc: "/images/destinations/grupo.avif",
            imageAlt: "Grupos e excursões",
            href: "/grupos-e-caravanas"
          }
        ]}
      />

      <TourFinalCta
        eyebrow="RESERVE SEU PASSEIO"
        title="Fale com a equipe da Aquino Tour"
        body="Consulte embarcações disponíveis, valores e planeje o roteiro de lancha ideal para a sua data."
        ctaLabel="Consultar pelo WhatsApp"
        ctaHref={getWhatsappUrl(WHATSAPP_MESSAGES.lancha)}
      />

      <FooterSection />
    </>
  )
}
