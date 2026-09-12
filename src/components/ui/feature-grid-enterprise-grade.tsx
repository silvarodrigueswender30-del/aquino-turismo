import React from 'react';
import Image from 'next/image';
import { Plane } from "lucide-react";
import { cn } from "@/lib/utils";
import { Barcode } from "@/components/ui/ticket-barcode";

export interface FeatureGridProps {
  className?: string;
}

const pillars = [
  {
    id: "local",
    title: "Atendimento local",
    body: "Orientação para escolher experiências de acordo com o perfil, o tempo disponível e o tamanho do grupo.",
  },
  {
    id: "experiencias",
    title: "Paraty por terra e pelo mar",
    body: "Passeios que conectam cachoeiras, alambiques, praias, ilhas e diferentes experiências da região.",
  },
  {
    id: "grupos",
    title: "Grupos e excursões",
    body: "Atendimento para famílias, excursões, guias, organizadores e agências de turismo.",
  },
];

const FeatureGrid: React.FC<FeatureGridProps> = ({ className }) => {
  return (
    <section
      id="pilares"
      className={cn("relative z-0 overflow-hidden bg-shell-white py-16 sm:py-24 scroll-mt-24", className)}
      role="region"
      aria-label="Pilares da Aquino Tour"
    >
      {/* Brand Watermark - Light Section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute right-[-100px] -bottom-16 z-[1] w-[280px] opacity-[0.035] sm:w-[400px] sm:opacity-[0.04] md:right-[-120px] md:-bottom-24 lg:w-[480px] lg:right-[-130px] lg:-bottom-28 lg:opacity-[0.045]"
      >
        <Image
          src="/images/brand/anchor-watermark.webp"
          alt=""
          width={800}
          height={800}
          className="h-auto w-full object-contain"
          priority={false}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-ocean-navy/80 bg-[#F7F1E1] shadow-[0_10px_30px_-14px_rgba(11,42,64,0.3)]">

          {/* FAIXA NAVY NO TOPO */}
          <div className="relative flex items-center justify-between bg-ocean-navy px-6 py-3.5 md:px-8 md:py-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-golden-sand">
              Como Trabalhamos
            </span>
            <Plane className="h-4 w-4 text-shell-white" strokeWidth={2} aria-hidden="true" />
          </div>

          {/* CORPO: colunas lado a lado — conteúdo principal + aba do barcode */}
          <div className="relative flex items-stretch">

            {/* coluna principal — H2 e grid de pilares */}
            <div className="flex-1 p-6 md:p-10 lg:p-12">
              <h2 className="mb-8 md:mb-12 font-heading text-3xl font-light leading-[1.15] tracking-[-0.02em] text-ocean-navy sm:text-4xl md:text-5xl">
                O jeito Aquino Tour de receber.
              </h2>

              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
                role="list"
              >
                {pillars.map((pillar) => (
                  <div
                    key={pillar.id}
                    role="listitem"
                    className="relative flex w-full flex-col gap-3 border-t border-ocean-navy/15 pt-6 first:border-t-0 first:pt-0 md:border-t-0 md:border-l md:pl-8 md:pt-0 md:first:border-l-0 md:first:pl-0 lg:pl-10"
                  >
                    <h3 className="font-heading font-normal text-ocean-navy text-xl md:text-2xl leading-snug tracking-[-0.01em]">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-slate-blue/90 break-words">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* divisor tracejado vertical + furos de perfuração */}
            <div className="relative flex flex-shrink-0 items-stretch">
              <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-shell-white" />
              <div className="h-full w-px border-l-2 border-dashed border-ocean-navy/30" />
              <span className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-shell-white" />
            </div>

            {/* aba do barcode lateral */}
            <div className="flex w-12 flex-shrink-0 items-center justify-center py-6 pl-4 pr-2 md:w-14 md:pl-5 lg:w-16 lg:pl-6">
              <Barcode className="h-[85%] w-full text-ocean-navy" />
            </div>
          </div>

          {/* FAIXA DIAGONAL LISTRADA NO RODAPÉ DO TICKET */}
          <div
            aria-hidden="true"
            className="h-3 w-full bg-ocean-navy md:h-3.5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(247,241,225,0.95) 0px, rgba(247,241,225,0.95) 3px, transparent 3px, transparent 7px)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
export { FeatureGrid };
