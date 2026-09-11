"use client";

import { Marquee } from "@/components/ui/marquee";

const galleryItems = [
  {
    nome: "Rota 01 - Baía de Paraty",
    alt: "Roteiro de passeio Aquino Tour em Paraty - Rota 01",
    image: "/images/routes/route-01.avif",
  },
  {
    nome: "Rota 02 - Baía de Paraty",
    alt: "Roteiro de passeio Aquino Tour em Paraty - Rota 02",
    image: "/images/routes/route-02.avif",
  },
  {
    nome: "Rota 03 - Baía de Paraty",
    alt: "Roteiro de passeio Aquino Tour em Paraty - Rota 03",
    image: "/images/routes/route-03.avif",
  },
  {
    nome: "Rota 04 - Baía de Paraty",
    alt: "Roteiro de passeio Aquino Tour em Paraty - Rota 04",
    image: "/images/routes/route-04.avif",
  },
  {
    nome: "Rota 05 - Baía de Paraty",
    alt: "Roteiro de passeio Aquino Tour em Paraty - Rota 05",
    image: "/images/routes/route-05.avif",
  },
  {
    nome: "Rota 06 - Baía de Paraty",
    alt: "Roteiro de passeio Aquino Tour em Paraty - Rota 06",
    image: "/images/routes/route-06.avif",
  },
  {
    nome: "Rota 07 - Baía de Paraty",
    alt: "Roteiro de passeio Aquino Tour em Paraty - Rota 07",
    image: "/images/routes/route-07.avif",
  },
  {
    nome: "Rota 08 - Baía de Paraty",
    alt: "Roteiro de passeio Aquino Tour em Paraty - Rota 08",
    image: "/images/routes/route-08.avif",
  },
  {
    nome: "Rota 09 - Baía de Paraty",
    alt: "Roteiro de passeio Aquino Tour em Paraty - Rota 09",
    image: "/images/routes/route-09.avif",
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
            Praias e ilhas para descobrir em Paraty
          </h2>
          <p className="max-w-xl font-sans text-base md:text-lg leading-relaxed text-slate-blue mt-4">
            A baía de Paraty reúne diferentes paisagens e paradas que podem fazer parte das experiências marítimas disponíveis na região.
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
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </picture>
                  {/* Texto acessível apenas para leitor de tela pois a arte gráfica já traz a tipografia incorporada */}
                  <span className="sr-only">{ilha.nome}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
