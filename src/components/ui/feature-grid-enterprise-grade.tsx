import React from 'react';
import { cn } from "@/lib/utils";

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
      className={cn("relative z-0 overflow-hidden py-16 sm:py-24 scroll-mt-24", className)}
      role="region"
      aria-label="Pilares da Aquino Tour"
    >
      {/* Responsive Photo Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[url('/images/backgrounds/como-trabalhamos-mobile.avif')] md:bg-[url('/images/backgrounds/como-trabalhamos-bg.avif')]"
        aria-hidden="true" 
      />

      {/* Continuous Editorial Veil (Mobile vs Desktop) */}
      <div 
        className="absolute inset-0 z-[1] block md:hidden pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(250,248,242,0.34) 0%, rgba(250,248,242,0.26) 45%, rgba(250,248,242,0.16) 75%, rgba(250,248,242,0.08) 100%)" }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 z-[1] hidden md:block pointer-events-none"
        style={{ background: "linear-gradient(90deg, rgba(250,248,242,0.28) 0%, rgba(250,248,242,0.20) 35%, rgba(250,248,242,0.12) 65%, rgba(250,248,242,0.06) 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Text Protection Layer (Larga e Suave, sem bordas ou cards) */}
        <div 
          className="absolute -inset-x-4 -inset-y-8 md:-inset-x-12 md:-inset-y-12 z-[-1] pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(250,248,242,0.58) 0%, rgba(250,248,242,0.42) 35%, rgba(250,248,242,0.18) 75%, transparent 100%)" }}
          aria-hidden="true"
        />

        {/* ✈️ Header editorial ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️ */}
        <div className="mb-8 sm:mb-16 max-w-xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            COMO TRABALHAMOS
          </p>
          <h2 className="font-heading font-light tracking-[-0.02em] leading-[1.1] text-ocean-navy text-2xl sm:text-3xl md:text-4xl">
            O jeito Aquino Tour de receber.
          </h2>
        </div>

        {/* ✈️ Pilares ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️ */}
        {/* Mobile: empilhado verticalmente  |  Desktop: grid 3 colunas */}
        <div
          className="flex flex-col border-y border-ocean-navy/20 divide-y divide-ocean-navy/20 md:grid md:grid-cols-3 md:divide-y-0 md:divide-x"
          role="list"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              role="listitem"
              className="relative w-full flex flex-col gap-4 md:gap-5 py-8 md:py-10 md:px-10 md:first:pl-0 md:last:pr-0"
            >
              {/* Golden Sand microdetail */}
              <span className="block h-px w-8 bg-golden-sand" aria-hidden="true" />

              <h3 className="font-heading font-normal text-ocean-navy text-xl md:text-2xl leading-snug tracking-[-0.01em]">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed text-slate-blue">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;
export { FeatureGrid };

