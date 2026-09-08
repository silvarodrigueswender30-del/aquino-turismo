import React from "react";
import { ArrowUpRight } from "lucide-react";

/** ─────────────────────────────────────────────────────────────
 *  IMAGENS PROVISÓRIAS
 *  Fotografias genéricas de mar/barco sem identidade visual RF.
 *  Aguardando acervo fotográfico oficial da AquinoTour.
 * ───────────────────────────────────────────────────────────── */
const CARDS = [
  {
    image: "/images/imagem5.avif",
    alt: "Passeio de Escuna em Paraty — imagem provisória",
    title: "Passeio de Escuna",
    support: "Ilhas e praias de Paraty",
  },
  {
    image: "/images/imagem6.avif",
    alt: "Vista do mar em Paraty — imagem provisória",
    title: "Paraty pelo Mar",
    support: "Paisagens, praias e Mata Atlântica",
  },
];

export function FeatureSection() {
  return (
    <section id="experiencias" className="w-full bg-shell-white py-20 md:py-28 overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Abertura editorial ─────────────────────────────── */}
        <div className="mb-14 md:mb-16 max-w-2xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            PASSEIOS AQUINOTOUR
          </p>
          <h2 className="font-heading font-light tracking-[-0.02em] leading-[1.1] text-ocean-navy text-3xl md:text-4xl lg:text-5xl">
            Experiências no mar
          </h2>
          <p className="mt-4 text-slate-blue font-sans text-base md:text-lg leading-relaxed max-w-xl">
            Descubra Paraty pelo mar, entre ilhas, praias e paisagens da Mata Atlântica.
          </p>
        </div>

        {/* ── Grid assimétrico: card grande + card menor + texto ─ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">

          {/* Card 1 — Protagonista 2/3 */}
          <div className="
            group relative md:col-span-2 rounded-[20px] overflow-hidden
            min-h-[340px] md:min-h-[420px]
            transition-transform duration-500 ease-out
            hover:-translate-y-[3px]
          ">
            {/* Foto — imagem provisória aguardando acervo oficial */}
            <img
              src={CARDS[0].image}
              alt={CARDS[0].alt}
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
            {/* Overlay Navy apenas na base */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 z-10 h-[55%]"
              style={{ background: "linear-gradient(to top, rgba(13,39,66,0.82) 0%, transparent 100%)" }}
            />
            {/* Label */}
            <div className="absolute bottom-0 left-0 z-20 p-6 md:p-8">
              <p className="font-heading font-normal tracking-[-0.01em] text-shell-white text-xl md:text-2xl leading-tight">
                {CARDS[0].title}
              </p>
              <p className="mt-1 text-shell-white/70 font-sans text-sm tracking-wide">
                {CARDS[0].support}
              </p>
            </div>
          </div>

          {/* Coluna direita: Card 2 + bloco de texto + CTA */}
          <div className="md:col-span-1 flex flex-col gap-5">

            {/* Card 2 — menor, hierarquia secundária */}
            <div className="
              group relative rounded-[20px] overflow-hidden h-52 md:h-56
              transition-transform duration-500 ease-out
              hover:-translate-y-[3px]
            ">
              <img
                src={CARDS[1].image}
                alt={CARDS[1].alt}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 z-10 h-[60%]"
                style={{ background: "linear-gradient(to top, rgba(13,39,66,0.80) 0%, transparent 100%)" }}
              />
              <div className="absolute bottom-0 left-0 z-20 p-5">
                <p className="font-heading font-normal text-shell-white text-base leading-tight tracking-[-0.01em]">
                  {CARDS[1].title}
                </p>
                <p className="mt-0.5 text-shell-white/65 font-sans text-xs tracking-wide">
                  {CARDS[1].support}
                </p>
              </div>
            </div>

            {/* Categoria editorial — Grupos & Experiências */}
            <div className="
              rounded-[20px] border border-ocean-navy/8 bg-warm-sand/50
              px-6 py-7 flex flex-col justify-between gap-6
            ">
              <div>
                <p className="font-heading font-normal text-ocean-navy text-lg md:text-xl leading-snug tracking-[-0.01em]">
                  Grupos & Experiências
                </p>
                <p className="mt-2 text-slate-blue font-sans text-sm leading-relaxed">
                  Atendimento local em Paraty
                </p>
              </div>
              {/* CTA */}
              <a
                href={`https://wa.me/5524999096384?text=${encodeURIComponent("Olá! Vim pelo site da AquinoTour e gostaria de informações sobre passeios e experiências em Paraty.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex items-center gap-2 text-turquoise-sea hover:text-tropical-lagoon transition-colors duration-200 font-sans font-medium text-sm"
                aria-label="Falar com a AquinoTour pelo WhatsApp"
              >
                Falar com a AquinoTour
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

