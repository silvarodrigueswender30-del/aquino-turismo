import Image from "next/image"

const experiencias = [
  {
    image: "/images/hero-carousel/slide-1.avif",
    alt: "Passeio de escuna em Paraty",
    title: "Passeio de Escuna",
    body: "Uma das experiências divulgadas pela AquinoTour para conhecer Paraty pelo mar, entre ilhas, praias e paisagens da Mata Atlântica.",
  },
  {
    image: "/images/hero-carousel/slide-3.avif",
    alt: "Vista de Paraty",
    title: "Day Use",
    body: "Uma possibilidade para grupos que querem aproveitar o dia em Paraty dentro das opções divulgadas pela AquinoTour.",
  },
  {
    image: "/images/hero-carousel/slide-2.avif",
    alt: "Ilhas de Paraty",
    title: "Experiências em Paraty",
    body: "Mar, natureza, cultura e diferentes formas de viver o destino podem fazer parte da programação do grupo.",
  },
]

export function GruposExperienciasSection() {
  return (
    <section className="w-full bg-shell-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            EXPERIÊNCIAS PARA GRUPOS
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] tracking-[-0.02em]">
            Paraty tem mais de um jeito de ser descoberta.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiencias.map((exp, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-deep-marine/10">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-medium text-ocean-navy text-xl">
                  {exp.title}
                </h3>
                <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed">
                  {exp.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 font-sans text-xs text-slate-blue/50 text-center">
          Imagens meramente ilustrativas. Fotografias provisórias até a disponibilidade de acervo oficial AquinoTour.
        </p>
      </div>
    </section>
  )
}
