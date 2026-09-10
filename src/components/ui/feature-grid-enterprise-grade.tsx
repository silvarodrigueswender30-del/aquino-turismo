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
      className={cn("relative z-0 overflow-hidden py-20 sm:py-32 scroll-mt-24", className)}
      role="region"
      aria-label="Pilares da Aquino Tour"
    >
      {/* 
        Background: Full Bleed. 
        Using specific positions to avoid text collision with the ticket/Jeep.
        Desktop: shifted right (65% center). Mobile: shifted up (center 20%).
      */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-[url('/images/backgrounds/como-trabalhamos-mobile.avif')] md:bg-[url('/images/backgrounds/como-trabalhamos-bg.avif')] bg-[position:center_25%] md:bg-[position:65%_center]"
        aria-hidden="true" 
      />

      {/* 
        Editorial Veil - Desktop (Camada 1 - Fade Horizontal)
        Protects text on the left, reveals photo on the right.
      */}
      <div 
        className="absolute inset-0 z-[1] hidden md:block pointer-events-none"
        style={{ 
          background: "linear-gradient(90deg, rgba(249,247,240,0.72) 0%, rgba(249,247,240,0.60) 26%, rgba(249,247,240,0.43) 43%, rgba(249,247,240,0.22) 60%, rgba(249,247,240,0.06) 76%, rgba(249,247,240,0.00) 100%)" 
        }}
        aria-hidden="true"
      />

      {/* 
        Editorial Veil - Mobile (Camada 1 - Fade Vertical)
        Protects text at top/middle, reveals photo at the bottom.
      */}
      <div 
        className="absolute inset-0 z-[1] block md:hidden pointer-events-none"
        style={{ 
          background: "linear-gradient(180deg, rgba(249,247,240,0.72) 0%, rgba(249,247,240,0.58) 28%, rgba(249,247,240,0.42) 52%, rgba(249,247,240,0.24) 72%, rgba(249,247,240,0.08) 90%, rgba(249,247,240,0.00) 100%)" 
        }}
        aria-hidden="true"
      />

      {/* 
        Text Protection (Camada 2 - Estabiliza Contraste)
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div 
          className="absolute inset-0 z-[-1] pointer-events-none"
          style={{ 
            background: "linear-gradient(180deg, rgba(249,247,240,0.12) 0%, rgba(249,247,240,0.04) 35%, rgba(8,27,43,0.04) 75%, rgba(8,27,43,0.10) 100%)" 
          }}
          aria-hidden="true"
        />

        {/* Header editorial */}
        <div className="mb-12 sm:mb-20 max-w-xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-4">
            COMO TRABALHAMOS
          </p>
          <h2 className="font-heading font-light tracking-[-0.02em] leading-[1.15] text-ocean-navy text-3xl sm:text-4xl md:text-5xl">
            O jeito Aquino Tour de receber.
          </h2>
        </div>

        {/* Pilares */}
        <div
          className="flex flex-col md:grid md:grid-cols-3 md:gap-x-12 lg:gap-x-16"
          role="list"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              role="listitem"
              className="relative w-full flex flex-col gap-5 py-8 md:py-10 border-t border-ocean-navy/15 md:border-t-0 md:border-l md:pl-12 lg:pl-16 first:border-t-0 md:first:border-l-0 md:first:pl-0"
            >
              <h3 className="font-heading font-normal text-ocean-navy text-xl md:text-2xl leading-snug tracking-[-0.01em]">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed text-slate-blue/90">
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
