"use client";

import { Marquee } from "@/components/ui/marquee";

/**
 * IMAGENS PROVISÓRIAS
 * Fotografias sem marca RF/Ubatuba visível usadas como placeholders.
 * Aguardando acervo fotográfico oficial da AquinoTour — Paraty.
 */
const galleryItems = [
  {
    nome: "Baía de Paraty",
    alt: "Paisagem costeira usada como imagem provisória no site AquinoTour",
    image: "/images/galeria/ilhas/ilha-das-couves.webp",
  },
  {
    nome: "Ilhas de Paraty",
    alt: "Paisagem costeira usada como imagem provisória no site AquinoTour",
    image: "/images/galeria/ilhas/ilha-dos-porcos.avif",
  },
  {
    nome: "Praia da Lula",
    alt: "Paisagem costeira usada como imagem provisória no site AquinoTour",
    image: "/images/galeria/ilhas/ilha-do-prumirim.webp",
  },
  {
    nome: "Mata Atlântica",
    alt: "Paisagem costeira usada como imagem provisória no site AquinoTour",
    image: "/images/galeria/ilhas/ilha-rachada-rapada.avif",
  },
];


export function IslandsSection() {
  return (
    <section className="relative w-full bg-shell-white py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 mx-auto w-full">
        <div className="mx-auto mb-10 md:mb-14 flex max-w-7xl flex-col items-start px-6 md:px-12 lg:px-16 text-left">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            DESCUBRA PARATY
          </p>
          <h2 className="font-heading font-light tracking-[-0.01em] text-2xl sm:text-3xl md:text-4xl text-ocean-navy leading-[1.1] max-w-2xl">
            Entre o mar e a Mata Atlântica.
          </h2>
          <p className="max-w-xl font-sans text-base md:text-lg leading-relaxed text-slate-blue mt-4">
            Uma paisagem de ilhas, praias e águas protegidas pela natureza de Paraty.
          </p>
        </div>

        <div className="relative w-full pb-12 md:pb-16">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-8 md:w-16 bg-gradient-to-r from-shell-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-8 md:w-16 bg-gradient-to-l from-shell-white to-transparent" />

          <Marquee className="[--gap:1.25rem] md:[--gap:2rem] py-4" pauseOnHover duration={70}>
            {/* Duplicando o array de itens para garantir o scroll contínuo */}
            {[...galleryItems, ...galleryItems].map((ilha, index) => (
              <div
                className="group relative flex w-[76vw] max-w-[280px] md:max-w-none md:w-[300px] shrink-0 flex-col overflow-hidden rounded-[16px] shadow-none transition-transform duration-500 ease-out hover:-translate-y-1"
                key={index}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-deep-marine/5">
                  <picture className="block h-full w-full">
                    <img
                      src={ilha.image}
                      alt={ilha.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </picture>
                  {/* Minimal Overlay na base */}
                  <div
                    className="absolute inset-x-0 bottom-0 z-10 h-[45%] pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(13,39,66,0.65) 0%, transparent 100%)" }}
                    aria-hidden="true"
                  />
                  
                  {/* Texto */}
                  <div className="absolute bottom-0 left-0 z-20 w-full p-4 md:p-6">
                    <h3 className="font-heading font-light tracking-wide text-shell-white text-lg md:text-xl leading-snug drop-shadow-sm">
                      {ilha.nome}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
