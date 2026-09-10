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
      className={cn("py-16 sm:py-24 scroll-mt-24 bg-shell-white", className)}
      role="region"
      aria-label="Pilares da Aquino Tour"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Desktop: 12-col grid. Mobile/Tablet: flex col */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 lg:gap-y-16 items-start">
          
          {/* Header */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 flex flex-col justify-end pt-2 lg:pt-0">
            <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-4">
              COMO TRABALHAMOS
            </p>
            <h2 className="font-heading font-light tracking-[-0.02em] leading-[1.1] text-ocean-navy text-3xl sm:text-4xl">
              O jeito Aquino Tour de receber.
            </h2>
          </div>

          {/* Fotografia Editorial (Desktop = Right Col, Mobile/Tablet = Middle) */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 w-full flex items-center">
            <picture className="block w-full rounded-[20px] md:rounded-[24px] overflow-hidden">
              {/* Mobile = Vertical Banner (< 768px) */}
              <source media="(max-width: 767px)" srcSet="/images/backgrounds/como-trabalhamos-mobile.avif" />
              {/* Tablet & Desktop = Horizontal Cinematic Banner (>= 768px) */}
              <img 
                src="/images/backgrounds/como-trabalhamos-bg.avif" 
                alt="Jeep 4x4 da Aquino Tour em cenário de Mata Atlântica em Paraty"
                className="w-full h-auto object-contain block"
              />
            </picture>
          </div>

          {/* Pilares */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 flex flex-col" role="list">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                role="listitem"
                className="relative w-full flex flex-col gap-3 py-6 lg:py-8 border-b border-ocean-navy/10 first:border-t"
              >
                <span className="block h-[2px] w-8 bg-golden-sand mb-2" aria-hidden="true" />
                <h3 className="font-heading font-medium text-ocean-navy text-xl lg:text-2xl tracking-[-0.01em]">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm md:text-base leading-relaxed text-slate-blue max-w-sm">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
export { FeatureGrid };

