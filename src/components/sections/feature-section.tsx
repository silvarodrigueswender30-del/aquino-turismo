import React from "react";
import { ArrowUpRight } from "lucide-react";

const CARDS = [
  {
    image: "/images/banners/passeios-main.avif",
    alt: "Banner da Aquino Tour: Descubra Paraty pelo mar, com passeios de lancha e escuna.",
    title: "Paraty pelo mar",
    support: "Passeios de escuna pela Baía de Paraty e praias da região",
  },
  {
    image: "/images/banners/passeios-small.avif",
    alt: "Banner da Aquino Tour: Descubra Paraty por terra, passeios de Jeep e cachoeiras.",
    title: "Paraty por terra",
    support: "Cachoeiras, alambiques e cultura local",
  },
];

export function FeatureSection() {
  return (
    <section id="experiencias" className="w-full bg-shell-white py-20 md:py-28 overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* ✈️✈️ Abertura editorial ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️ */}
        <div className="mb-14 md:mb-16 max-w-2xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            PASSEIOS AQUINO TOUR
          </p>
          <h2 className="font-heading font-light tracking-[-0.02em] leading-[1.1] text-ocean-navy text-3xl md:text-4xl lg:text-5xl">
            Descubra Paraty por terra e pelo mar
          </h2>
          <p className="mt-4 text-slate-blue font-sans text-base md:text-lg leading-relaxed max-w-xl">
            A Aquino Tour ajuda você a encontrar o passeio mais adequado para o seu perfil, seja uma experiência de jipe pela região de cachoeiras e alambiques, um passeio de escuna pela baía ou uma saída de lancha para conhecer praias e ilhas.
          </p>
        </div>

        {/* ✈️✈️ Grid assimétrico: card grande + card menor + texto ✈️ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">

          {/* Card 1 — Protagonista 2/3 */}
          <div className="
            group relative md:col-span-2 rounded-[20px] overflow-hidden
            aspect-[1.79] w-full
            transition-transform duration-500 ease-out
            hover:-translate-y-[2px]
          ">
            {/* Imagem limpa sem overlays agressivos para preservar a arte da campanha */}
            <img
              src={CARDS[0].image}
              alt={CARDS[0].alt}
              className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
            {/* Acessibilidade: Conteúdo textual semanticamente preservado para leitores de tela */}
            <div className="sr-only">
              <h3>{CARDS[0].title}</h3>
              <p>{CARDS[0].support}</p>
            </div>
          </div>

          {/* Coluna direita: Card 2 + bloco de texto + CTA */}
          <div className="md:col-span-1 flex flex-col gap-5">

            {/* Card 2 — menor, hierarquia secundária */}
            <div className="
              group relative rounded-[20px] overflow-hidden 
              aspect-[1.79] w-full
              transition-transform duration-500 ease-out
              hover:-translate-y-[2px]
            ">
              <img
                src={CARDS[1].image}
                alt={CARDS[1].alt}
                className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
              <div className="sr-only">
                <h3>{CARDS[1].title}</h3>
                <p>{CARDS[1].support}</p>
              </div>
            </div>

            {/* Categoria editorial — Grupos & Experiências */}
            <div className="
              rounded-[20px] border border-ocean-navy/8 bg-warm-sand/50
              px-6 py-7 flex flex-col justify-between gap-6
            ">
              <div>
                <p className="font-heading font-normal text-ocean-navy text-lg md:text-xl leading-snug tracking-[-0.01em]">
                  Passeios para cada perfil
                </p>
                <p className="mt-2 text-slate-blue font-sans text-sm leading-relaxed">
                  Atendimento local para turistas, famílias, grupos e agências.
                </p>
              </div>
              {/* CTA */}
              <a
                href="/#passeios"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex items-center gap-2 text-turquoise-sea hover:text-tropical-lagoon transition-colors duration-200 font-sans font-medium text-sm"
                aria-label="Conhecer passeios em Paraty"
              >
                Conhecer passeios em Paraty
                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
