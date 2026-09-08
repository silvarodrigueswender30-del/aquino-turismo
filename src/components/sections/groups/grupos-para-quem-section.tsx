import React from "react"

const perfis = [
  {
    title: "Excursões",
    body: "Para responsáveis por grupos que incluem Paraty em seu roteiro.",
  },
  {
    title: "Caravanas",
    body: "Para viagens coletivas que precisam alinhar a experiência antes da chegada.",
  },
  {
    title: "Agências de Turismo",
    body: "Um contato local para apoiar operações e experiências em Paraty.",
  },
  {
    title: "Guias e Organizadores",
    body: "Para quem precisa centralizar informações da experiência do grupo.",
  },
  {
    title: "Empresas e Grupos Privados",
    body: "Para equipes, famílias, associações e grupos de amigos viajando juntos.",
  },
]

export function GruposParaQuemSection() {
  return (
    <section className="w-full bg-ocean-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            PARA QUEM ORGANIZA
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-shell-white leading-[1.1] tracking-[-0.02em]">
            Um atendimento pensado para quem cuida da viagem de muita gente.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-shell-white/10">
          {perfis.map((perfil, index) => (
            <div
              key={index}
              className="flex flex-col gap-2.5 py-8 px-0 sm:px-6 border-b border-shell-white/10 sm:border-l sm:first:border-l-0 lg:[&:nth-child(3n+1)]:border-l-0"
            >
              <h3 className="font-heading font-medium text-shell-white text-xl">
                {perfil.title}
              </h3>
              <p className="font-sans text-shell-white/65 text-sm leading-relaxed">
                {perfil.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
