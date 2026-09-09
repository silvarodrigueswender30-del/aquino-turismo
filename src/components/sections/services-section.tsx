"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { Anchor, Car, Ship, Waves } from "lucide-react";
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
    cta: "Consultar passeio de jipe",
    href: getWhatsappUrl(WHATSAPP_MESSAGES.jeep),
    external: true,
  },
  {
    number: "002",
    title: "Passeio de escuna em Paraty",
    description:
      "Navegue pela baía de Paraty em uma experiência com paradas em praias e ilhas para banho, contemplação e momentos em grupo.",
    icon: Ship,
    cta: "Consultar passeio de escuna",
    href: getWhatsappUrl(WHATSAPP_MESSAGES.escuna),
    external: true,
  },
  {
    number: "003",
    title: "Passeio de lancha em Paraty",
    description:
      "Explore praias e ilhas com mais privacidade e flexibilidade em uma opção indicada para famílias e pequenos grupos.",
    icon: Waves,
    cta: "Consultar passeio de lancha",
    href: getWhatsappUrl(WHATSAPP_MESSAGES.lancha),
    external: true,
  },
  {
    number: "004",
    title: "Passeios para grupos e excursões",
    description:
      "Atendimento receptivo para agências, guias, organizadores, caravanas e grupos que desejam conhecer Paraty.",
    icon: Anchor,
    cta: "Planejar excursão",
    href: "/grupos-e-caravanas",
  },
];

// --- Sub-component for individual cards ---
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] aspect-[4/5] max-h-[360px] md:aspect-[5/6] md:max-h-[460px] w-full p-6 md:p-8 transition-transform duration-500 ease-out md:hover:-translate-y-1 bg-deep-marine/5"
    >
      {/* Background Image (Provisional) */}
      <Image 
        src={`/images/services/${index + 1}.avif`} 
        alt={`Imagem ilustrativa de ${service.title}`} 
        fill
        sizes="(max-width: 768px) 85vw, 33vw"
        className="object-cover pointer-events-none select-none transition-transform duration-700 ease-out md:group-hover:scale-[1.02] z-0"
      />
      
      {/* Overlay gradient for readability */}
      <div 
        aria-hidden 
        className="absolute inset-0 z-10 bg-gradient-to-t from-ocean-navy/90 via-ocean-navy/50 to-transparent pointer-events-none"
      />

      {/* Top Content: Icon & Number */}
      <div className="z-20 flex justify-between w-full items-start">
        <service.icon className="h-6 w-6 text-shell-white drop-shadow-sm" strokeWidth={1.5} />
        <span className="text-xs font-sans tracking-widest text-shell-white/80 font-medium">
          {service.number}
        </span>
      </div>

      {/* Bottom Content: Info */}
      <div className="z-20 flex flex-col gap-2 mt-auto">
        <h3 className="text-2xl md:text-3xl font-heading font-light tracking-wide text-shell-white drop-shadow-sm">
          {service.title}
        </h3>
        <p className="text-sm md:text-base text-shell-white/90 leading-relaxed font-sans font-light drop-shadow-sm">
          {service.description}
        </p>
        {service.external ? (
          <a
            href={service.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-fit rounded-[10px] bg-shell-white/90 px-4 py-2 font-sans text-xs font-semibold text-ocean-navy transition hover:bg-shell-white"
          >
            {service.cta}
          </a>
        ) : (
          <Link
            href={service.href}
            className="mt-3 inline-flex w-fit rounded-[10px] bg-shell-white/90 px-4 py-2 font-sans text-xs font-semibold text-ocean-navy transition hover:bg-shell-white"
          >
            {service.cta}
          </Link>
        )}
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
    <section id="passeios" className="relative w-full bg-warm-sand py-16 md:py-24 scroll-mt-24">
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 overflow-hidden md:overflow-visible">
        
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
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 -ml-4 md:ml-0 gap-0 md:gap-8 w-full">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex-[0_0_82%] min-w-0 pl-4 md:pl-0 md:flex-none"
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
