import React from 'react';
import Image from 'next/image';
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
      className={cn("relative z-0 overflow-hidden bg-shell-white py-20 sm:py-32 scroll-mt-24", className)}
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header editorial */}
        <div className="mb-12 sm:mb-20 max-w-xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-4">
            COMO TRABALHAMOS
          </p>
          <h2 className="font-heading font-light tracking-[-0.02em] leading-[1.15] text-ocean-navy text-3xl sm:text-4xl md:text-5xl">
            O jeito Aquino Tour de receber.
          </h2>
        </div>

        {/* Pilares: CSS Grid real com 3 colunas independentes */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16"
          role="list"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              role="listitem"
              className="relative w-full flex flex-col gap-4 py-8 md:py-0 border-t border-ocean-navy/15 md:border-t-0 md:border-l md:pl-12 lg:pl-16 first:border-t-0 md:first:border-l-0 md:first:pl-0 max-w-xs"
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
    </section>
  );
};

export default FeatureGrid;
export { FeatureGrid };
