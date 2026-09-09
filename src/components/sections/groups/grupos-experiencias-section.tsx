import Image from "next/image"

const experiencias = [
  {
    image: "/images/hero-carousel/slide-1.avif",
    alt: "Passeio de escuna na baía de Paraty",
    title: "Passeio de Jipe",
    body: "Uma experiência pela região rural de Paraty que combina natureza, cachoeiras, alambiques e cultura local.",
  },
  {
    image: "/images/hero-carousel/slide-3.avif",
    alt: "Embarcação em passeio marítimo em Paraty",
    title: "Passeio de Escuna",
    body: "Uma opção coletiva para navegar pela baía de Paraty e conhecer praias e ilhas da região.",
  },
  {
    image: "/images/hero-carousel/slide-2.avif",
    alt: "Ilhas de Paraty",
    title: "Passeio de Lancha",
    body: "Alternativa para famílias e grupos menores que procuram uma experiência mais reservada e flexível.",
  },
  {
    image: "/images/galeria/passeio-1.webp",
    alt: "Hospedagem integrada para grupos em Paraty",
    title: "Hospedagem",
    body: "Consulta de hospedagem na Pousada Aquino Mar para excursões e grupos, conforme disponibilidade.",
  },
  {
    image: "/images/galeria/passeio-2.webp",
    alt: "Grupo planejando experiências em Paraty",
    title: "Roteiro integrado",
    body: "Combine diferentes experiências de acordo com o tempo disponível e o perfil dos passageiros.",
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
            Experiências que podem entrar na programação do grupo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
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

      </div>
    </section>
  )
}
