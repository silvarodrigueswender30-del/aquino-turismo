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

// --- Sub-component for individual cards ---
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] aspect-[4/5] max-h-[400px] md:aspect-[4/5] lg:aspect-[3/4] lg:max-h-[480px] w-full p-6 lg:p-6 xl:p-8 transition-transform duration-500 ease-out md:hover:-translate-y-1 bg-deep-marine/5"
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
      <div className="z-20 flex flex-col mt-auto">
        <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-heading font-light tracking-wide text-shell-white drop-shadow-sm mb-2">
          {service.title}
        </h3>
        <p className="text-sm md:text-base lg:text-sm xl:text-base text-shell-white/90 leading-relaxed font-sans font-light drop-shadow-sm mb-4">
          {service.description}
        </p>
        
        <div className="flex flex-col gap-2 mt-auto">
          {service.external ? (
            <a
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-[10px] bg-shell-white/90 px-4 py-2 font-sans text-xs font-semibold text-ocean-navy transition hover:bg-shell-white"
            >
              {service.cta}
            </a>
          ) : (
            <Link
              href={service.href}
              className="inline-flex w-fit rounded-[10px] bg-shell-white/90 px-4 py-2 font-sans text-xs font-semibold text-ocean-navy transition hover:bg-shell-white"
            >
              {service.cta}
            </Link>
          )}
          
          {/* Secondary WhatsApp link for tours */}
          {!service.external && service.href !== "/grupos-e-caravanas" && (
            <a
              href={
                service.href.includes('jipe') ? getWhatsappUrl(WHATSAPP_MESSAGES.jeep) :
                service.href.includes('escuna') ? getWhatsappUrl(WHATSAPP_MESSAGES.escuna) :
                getWhatsappUrl(WHATSAPP_MESSAGES.lancha)
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 font-sans text-[11px] font-medium text-shell-white/80 hover:text-shell-white transition-colors"
            >
              Consultar via WhatsApp
            </a>
          )}
        </div>
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
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
