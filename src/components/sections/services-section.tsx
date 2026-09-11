"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { Anchor, Car, Ship, TreePalm, Waves } from "lucide-react";
import { getWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

// --- Service Types ---
export interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  cta: string;
  href: string;
  external?: boolean;
}

// --- Data ---
const services: Service[] = [
  {
    number: "001",
    title: "Passeio de jipe em Paraty",
    description:
      "Conheça experiências da região rural de Paraty em um roteiro que conecta natureza, cachoeiras, alambiques e cultura local.",
    icon: Car,
    cta: "Conhecer passeio de jipe",
    href: "/passeio-de-jipe-em-paraty",
    external: false,
  },
  {
    number: "002",
    title: "Passeio de escuna em Paraty",
    description:
      "Navegue pela baía de Paraty em uma experiência com paradas em praias e ilhas para banho, contemplação e momentos em grupo.",
    icon: Ship,
    cta: "Conhecer passeio de escuna",
    href: "/passeio-de-escuna-em-paraty",
    external: false,
  },
  {
    number: "003",
    title: "Passeio de lancha em Paraty",
    description:
      "Explore praias e ilhas com mais privacidade e flexibilidade em uma opção indicada para famílias e pequenos grupos.",
    icon: Waves,
    cta: "Conhecer passeio de lancha",
    href: "/passeio-de-lancha-em-paraty",
    external: false,
  },
  {
    number: "004",
    title: "Passeios para grupos e excursões",
    description:
      "Atendimento receptivo para agências, guias, organizadores, caravanas e grupos que desejam conhecer Paraty.",
    icon: Anchor,
    cta: "Planejar excursão",
    href: "/grupos-e-caravanas",
    external: false,
  },
];

function Barcode({ className }: { className?: string }) {
  const bars = [
    2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 3, 1, 2, 1, 1,
    3, 2, 1,
  ];

  return (
    <div className={`flex h-full items-stretch justify-center gap-[1.5px] ${className ?? ""}`}>
      {bars.map((barWidth, index) => (
        <span
          key={index}
          className="block h-full bg-current"
          style={{ width: `${barWidth}px` }}
        />
      ))}
    </div>
  );
}

function PlaneTrail({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15 78 C 35 78, 40 55, 55 50 C 70 45, 75 25, 95 15"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeDasharray="4 5"
        strokeLinecap="round"
        fill="none"
      />
      <g transform="translate(90,4) rotate(35)">
        <path
          d="M0 8 L22 8 L34 2 L38 4 L28 10 L38 12 L28 15 L34 18 L30 20 L18 14 L0 14 Z"
          fill="currentColor"
        />
      </g>
    </svg>
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
  const whatsappUrl = service.href.includes("jipe")
    ? getWhatsappUrl(WHATSAPP_MESSAGES.jeep)
    : service.href.includes("escuna")
      ? getWhatsappUrl(WHATSAPP_MESSAGES.escuna)
      : service.href.includes("lancha")
        ? getWhatsappUrl(WHATSAPP_MESSAGES.lancha)
        : null;

  return (
    <div className="group relative flex min-h-[22rem] w-full overflow-hidden rounded-2xl border-[1.5px] border-ocean-navy/80 bg-[#F7F1E1] shadow-[0_10px_30px_-14px_rgba(11,42,64,0.3)] transition-[transform,box-shadow] duration-300 md:min-h-[20rem] md:hover:-translate-y-1 md:hover:shadow-[0_18px_40px_-16px_rgba(11,42,64,0.4)] lg:min-h-[21rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(11,42,64,0.6) 0px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-between p-4 lg:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ocean-navy/5 text-ocean-navy">
            <Icon className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <span className="font-mono text-[11px] tracking-[0.2em] text-golden-sand">
            {service.number}
          </span>
        </div>

        <div className="mt-4 flex-1">
          <h3 className="font-heading text-lg font-light leading-snug text-ocean-navy lg:text-xl">
            {service.title}
          </h3>
          <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-slate-blue/90">
            {service.description}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          {service.external ? (
            <a
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center rounded-full bg-ocean-navy px-3.5 py-1.5 font-sans text-[11px] font-medium text-shell-white transition-colors hover:bg-ocean-navy/90"
            >
              {service.cta}
            </a>
          ) : (
            <Link
              href={service.href}
              className="inline-flex w-fit items-center rounded-full bg-ocean-navy px-3.5 py-1.5 font-sans text-[11px] font-medium text-shell-white transition-colors hover:bg-ocean-navy/90"
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
              WhatsApp
            </a>
          )}
        </div>

        <StampIcon className="pointer-events-none absolute -bottom-2 -left-2 h-14 w-14 text-golden-sand/25" />
        <PlaneTrail className="pointer-events-none absolute -top-1 right-1 h-10 w-16 text-ocean-navy" />
      </div>

      <div className="relative z-10 flex shrink-0 items-stretch">
        <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-warm-sand" />
        <div className="h-full w-px border-l-2 border-dashed border-ocean-navy/30" />
        <span className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-warm-sand" />
      </div>

      <div className="relative z-10 flex w-8 shrink-0 items-center justify-center py-4 lg:w-9">
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
    <section id="passeios" className="relative w-full overflow-hidden bg-warm-sand py-16 md:py-24 scroll-mt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-65 md:h-[520px]"
        style={{
          backgroundImage: "url('/images/services/fundo1.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-warm-sand/55 md:h-[440px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[260px] h-40 bg-gradient-to-b from-transparent via-warm-sand/70 to-warm-sand blur-2xl md:top-[340px] md:h-52"
      />
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[1320px] mx-auto px-6 md:px-12 lg:px-8 xl:px-12 overflow-hidden md:overflow-visible">
        
        {/* Header editorial */}
        <div className="flex flex-col items-center text-center w-full max-w-2xl mb-12 md:mb-16">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            PASSEIOS EM PARATY
          </p>
          <h2 className="font-heading font-light tracking-[-0.01em] text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1]">
            Escolha como você quer conhecer Paraty
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-slate-blue mt-4">
            Passeios de jipe, escuna e lancha, além de atendimento receptivo para grupos e excursões.
          </p>
        </div>

        {/* Grid / Carousel de Serviços */}
        <div className="w-full" ref={emblaRef}>
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 -ml-4 md:ml-0 gap-0 md:gap-6 xl:gap-8 w-full">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex-[0_0_82%] min-w-0 pl-4 md:pl-0 md:flex-none"
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
