import React from "react"

const perfis = [
  {
    title: "Agências de turismo",
    body: "Para agências que organizam excursões rodoviárias, viagens em grupo e roteiros para Paraty.",
  },
  {
    title: "Guias e organizadores",
    body: "Para profissionais e responsáveis que precisam montar a programação turística dos passageiros.",
  },
  {
    title: "Excursões e caravanas",
    body: "Atendimento para grupos que chegam a Paraty com programação organizada.",
  },
  {
    title: "Grupos religiosos",
    body: "Opções de passeios e consulta de hospedagem para caravanas e viagens comunitárias.",
  },
  {
    title: "Terceira idade",
    body: "Experiências planejadas considerando organização, horários e características do grupo.",
  },
  {
    title: "Empresas e equipes",
    body: "Atendimento para viagens corporativas, confraternizações e grupos profissionais.",
  },
  {
    title: "Famílias e amigos",
    body: "Experiências para pequenos e grandes grupos que desejam conhecer Paraty juntos.",
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
            Atendimento para diferentes perfis de grupo
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
