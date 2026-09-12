"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { Anchor, Car, Plane, Ship, TreePalm, Waves } from "lucide-react";
import { getWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

// --- Service Types ---
export interface Service {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  icon: React.ElementType;
  cta: string;
  href: string;
  whatsappMessage?: string;
  external?: boolean;
}

// --- Data ---
const services: Service[] = [
  {
    number: "001",
    eyebrow: "Terra, cachoeiras e cultura",
    title: "Passeio de jipe em Paraty",
    description:
      "Conheça experiências da região rural de Paraty em um roteiro que conecta natureza, cachoeiras, alambiques e cultura local.",
    detail: "Para quem quer viver Paraty além do centro histórico.",
    icon: Car,
    cta: "Conhecer passeio de jipe",
    href: "/passeio-de-jipe-em-paraty",
    whatsappMessage: WHATSAPP_MESSAGES.jeep,
    external: false,
  },
  {
    number: "002",
    eyebrow: "Baía, ilhas e praias",
    title: "Passeio de escuna em Paraty",
    description:
      "Navegue pela baía de Paraty em uma experiência com paradas em praias e ilhas para banho, contemplação e momentos em grupo.",
    detail: "Uma escolha clássica para famílias, casais e grupos.",
    icon: Ship,
    cta: "Conhecer passeio de escuna",
    href: "/passeio-de-escuna-em-paraty",
    whatsappMessage: WHATSAPP_MESSAGES.escuna,
    external: false,
  },
  {
    number: "003",
    eyebrow: "Mais liberdade no mar",
    title: "Passeio de lancha em Paraty",
    description:
      "Explore praias e ilhas com mais privacidade e flexibilidade em uma opção indicada para famílias e pequenos grupos.",
    detail: "Indicado para quem busca uma experiência mais reservada.",
    icon: Waves,
    cta: "Conhecer passeio de lancha",
    href: "/passeio-de-lancha-em-paraty",
    whatsappMessage: WHATSAPP_MESSAGES.lancha,
    external: false,
  },
  {
    number: "004",
    eyebrow: "Receptivo em Paraty",
    title: "Passeios para grupos e excursões",
    description:
      "Atendimento receptivo para agências, guias, organizadores, caravanas e grupos que desejam conhecer Paraty.",
    detail: "Apoio local para organizar a viagem com mais clareza.",
    icon: Anchor,
    cta: "Planejar excursão",
    href: "/grupos-e-caravanas",
    whatsappMessage: WHATSAPP_MESSAGES.grupos,
    external: false,
  },
];

function Barcode({ className }: { className?: string }) {
  const bars = [
    12, 3, 2, 6, 3, 10, 14, 4, 3, 16, 2, 2, 4, 13, 7, 3, 14, 8, 2, 3, 12, 4,
    2, 13, 5, 3, 15, 6, 2, 9, 3, 12,
  ];

  return (
    <div className={`flex h-full w-full flex-col justify-center gap-[4px] overflow-hidden ${className ?? ""}`}>
      {bars.map((barHeight, index) => (
        <span
          key={index}
          className="block w-full flex-none bg-current"
          style={{ height: `${barHeight}px` }}
        />
      ))}
    </div>
  );
}

function PlaneTrail({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 100 60" fill="none" className="absolute inset-0 h-full w-full">
        <path
          d="M4 54 C 16 58, 10 40, 20 37 C 30 34, 23 20, 34 16 C 44 12, 50 9, 62 5"
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeDasharray="4 5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <Plane
        className="absolute right-0 top-0 h-4 w-4 -translate-y-1 rotate-45"
        strokeWidth={2}
      />
    </div>
  );
}

function StampIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
      </svg>
      <TreePalm
        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2"
        strokeWidth={1.25}
      />
    </div>
  );
}

// --- Sub-component for individual cards ---
const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;
  const whatsappUrl = service.whatsappMessage
    ? getWhatsappUrl(service.whatsappMessage)
    : null;

  return (
    <div
      data-service-card
      className="group relative flex h-full min-h-0 w-full overflow-hidden rounded-2xl border-[1.5px] border-ocean-navy/80 bg-[#F7F1E1] shadow-[0_10px_30px_-14px_rgba(11,42,64,0.3)] transition-[transform,box-shadow] duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_18px_40px_-16px_rgba(11,42,64,0.4)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(11,42,64,0.6) 0px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative z-10 grid h-full min-w-0 flex-1 grid-rows-[1fr_auto] p-4 lg:p-5">
        <div className="min-h-0">
          <div className="flex items-center justify-between gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ocean-navy/5 text-ocean-navy">
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <span className="font-mono text-[11px] tracking-[0.2em] text-golden-sand">
              {service.number}
            </span>
          </div>

          <p className="mt-4 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-tropical-lagoon">
            {service.eyebrow}
          </p>
          <h3 className="mt-2 line-clamp-2 h-[2.65rem] overflow-hidden font-heading text-[1.22rem] font-light leading-[1.08] tracking-[-0.01em] text-ocean-navy lg:h-[2.85rem] lg:text-[1.32rem]">
            {service.title}
          </h3>
          <p className="mt-2.5 line-clamp-3 h-[3.75rem] overflow-hidden font-sans text-[12px] leading-relaxed text-slate-blue/90">
            {service.description}
          </p>
          <p className="mt-2.5 line-clamp-2 h-[2.25rem] overflow-hidden border-l border-golden-sand/60 pl-3 font-sans text-[11px] leading-relaxed text-ocean-navy/70">
            {service.detail}
          </p>
        </div>

        <div className="flex h-[4.25rem] flex-col items-start justify-end gap-2">
          {service.external ? (
            <a
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-full bg-ocean-navy px-2 font-sans text-[10px] font-medium text-shell-white transition-[background-color,transform] duration-150 hover:bg-ocean-navy/90 active:scale-[0.98] lg:text-[11px]"
            >
              {service.cta}
            </a>
          ) : (
            <Link
              href={service.href}
              className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-full bg-ocean-navy px-2 font-sans text-[10px] font-medium text-shell-white transition-[background-color,transform] duration-150 hover:bg-ocean-navy/90 active:scale-[0.98] lg:text-[11px]"
            >
              {service.cta}
            </Link>
          )}

          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Consultar ${service.title.toLowerCase()} no WhatsApp`}
              className="font-sans text-[11px] font-medium text-slate-blue/70 underline-offset-2 transition-colors hover:text-turquoise-sea hover:underline"
            >
              Tirar dúvidas pelo WhatsApp
            </a>
          )}
        </div>

        <StampIcon className="pointer-events-none absolute -bottom-2 -left-2 h-12 w-12 text-golden-sand/25" />
        <PlaneTrail className="pointer-events-none absolute -top-1 right-1 h-10 w-16 text-ocean-navy" />
      </div>

      <div className="relative z-10 flex shrink-0 items-stretch">
        <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-warm-sand" />
        <div className="h-full w-px border-l-2 border-dashed border-ocean-navy/30" />
        <span className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-warm-sand" />
      </div>

      <div className="relative z-10 flex w-12 shrink-0 items-center justify-end py-4 pl-4 pr-1 lg:w-14 lg:pl-5">
        <Barcode className="h-[88%] w-full text-ocean-navy" />
      </div>
    </div>
  );
};

// --- Main Section Component ---
export function ServicesSection() {
  const [emblaRef] = useEmblaCarousel({ 
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    breakpoints: {
      '(min-width: 768px)': { active: false }
    }
  });

  return (
    <section id="passeios" className="relative w-full overflow-hidden bg-warm-sand py-14 md:py-20 scroll-mt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[335px] md:h-[336px]"
        style={{
          backgroundImage: "url('/images/services/fundo1.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[335px] bg-ocean-navy/62 md:h-[336px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 74%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 74%, transparent 100%)",
        }}
      />
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[1320px] mx-auto px-6 md:px-12 lg:px-8 xl:px-12 overflow-hidden md:overflow-visible">
        
        {/* Header editorial */}
        <div className="flex flex-col items-center text-center w-full max-w-2xl mb-10 md:mb-12">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            PASSEIOS EM PARATY
          </p>
          <h2 className="font-heading font-light tracking-[-0.01em] text-3xl sm:text-4xl md:text-5xl text-shell-white leading-[1.1]">
            Escolha como você quer conhecer Paraty
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-shell-white/88 mt-4">
            Passeios de jipe, escuna e lancha, além de atendimento receptivo para grupos e excursões.
          </p>
          <p className="mt-4 rounded-full border border-ocean-navy/10 bg-shell-white/45 px-4 py-2 font-sans text-[11px] font-medium text-ocean-navy/70 md:hidden">
            Deslize para ver todas as opções
          </p>
        </div>

        {/* Grid / Carousel de Serviços */}
        <div className="w-full" ref={emblaRef}>
          <div data-services-track className="flex items-stretch md:grid md:grid-cols-2 lg:grid-cols-4 -ml-4 md:ml-0 gap-0 md:gap-6 xl:gap-8 w-full md:items-stretch">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="h-[420px] flex-[0_0_82%] min-w-0 pl-4 md:h-[420px] md:flex-none md:pl-0"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
