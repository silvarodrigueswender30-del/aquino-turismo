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
      className={cn("relative py-16 sm:py-24 scroll-mt-24", className)}
      role="region"
      aria-label="Pilares da Aquino Tour"
    >
      {/* Responsive Photo Background */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-[url('/images/backgrounds/como-trabalhamos-mobile.avif')] md:bg-[url('/images/backgrounds/como-trabalhamos-bg.avif')]"
        aria-hidden="true" 
      />

      {/* Continuous Editorial Veil (Mobile vs Desktop) */}
      <div 
        className="absolute inset-0 -z-10 block md:hidden pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(250,248,242,0.85) 0%, rgba(250,248,242,0.72) 30%, rgba(250,248,242,0.50) 65%, rgba(250,248,242,0.25) 100%)" }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 -z-10 hidden md:block pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(250,248,242,0.80) 0%, rgba(250,248,242,0.65) 40%, rgba(250,248,242,0.40) 75%, rgba(250,248,242,0.15) 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

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

