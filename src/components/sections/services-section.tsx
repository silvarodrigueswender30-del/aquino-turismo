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
      <div className="z-20 flex flex-col flex-grow mt-4">
        <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-heading font-light tracking-wide text-shell-white drop-shadow-sm mb-2">
          {service.title}
        </h3>
        <p className="text-sm md:text-base lg:text-sm xl:text-base text-shell-white/90 leading-relaxed font-sans font-light drop-shadow-sm mb-4 flex-grow">
          {service.description}
        </p>
        
        <div className="mt-auto">
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
        </div>
          
        {/* Secondary WhatsApp link for tours */}
        <div className="mt-3 min-h-[20px] flex items-center">
          {!service.external && service.href !== "/grupos-e-caravanas" && (
            <a
              href={
                service.href.includes('jipe') ? getWhatsappUrl(WHATSAPP_MESSAGES.jeep) :
                service.href.includes('escuna') ? getWhatsappUrl(WHATSAPP_MESSAGES.escuna) :
                getWhatsappUrl(WHATSAPP_MESSAGES.lancha)
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Consultar ${service.title.toLowerCase()} no WhatsApp`}
              className="group/wa inline-flex w-fit items-center gap-[6px] font-sans text-[13px] font-medium text-shell-white/80 transition-colors hover:text-turquoise-sea"
            >
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span className="border-b border-transparent transition-colors group-hover/wa:border-turquoise-sea/30 pb-[1px]">
                Consultar no WhatsApp
              </span>
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
