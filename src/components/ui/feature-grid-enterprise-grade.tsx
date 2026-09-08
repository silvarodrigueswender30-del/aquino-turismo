import React from 'react';
import { cn } from "@/lib/utils";

export interface FeatureGridProps {
  className?: string;
}

const pillars = [
  {
    id: "local",
    title: "Atendimento Local",
    body: "Equipe em Paraty. Conhecemos o ritmo do mar, as melhores saídas e a forma certa de viver a cidade.",
  },
  {
    id: "experiencias",
    title: "Experiências no Mar",
    body: "Passeios e turismo náutico em Paraty para descobrir a baía por um ângulo diferente.",
  },
  {
    id: "grupos",
    title: "Grupos & Receptivo",
    body: "Atendimento para excursões, grupos e receptivo local. Organizamos a experiência do início ao fim, em Paraty.",
  },
];

const FeatureGrid: React.FC<FeatureGridProps> = ({ className }) => {
  return (
    <section
      id="pilares"
      className={cn("py-16 sm:py-24 bg-shell-white scroll-mt-24", className)}
      role="region"
      aria-label="Pilares da AquinoTour"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ── Header editorial ────────────────────────────── */}
        <div className="mb-8 sm:mb-16 max-w-xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            COMO TRABALHAMOS
          </p>
          <h2 className="font-heading font-light tracking-[-0.02em] leading-[1.1] text-ocean-navy text-2xl sm:text-3xl md:text-4xl">
            O jeito AquinoTour de receber.
          </h2>
        </div>

        {/* ── Pilares ─────────────────────────────────────── */}
        {/* Mobile: empilhado verticalmente  |  Desktop: grid 3 colunas */}
        <div
          className="flex flex-col border-y border-ocean-navy/10 divide-y divide-ocean-navy/10 md:grid md:grid-cols-3 md:divide-y-0 md:divide-x"
          role="list"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              role="listitem"
              className="w-full flex flex-col gap-4 md:gap-5 py-8 md:py-10 md:px-10 md:first:pl-0 md:last:pr-0"
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



