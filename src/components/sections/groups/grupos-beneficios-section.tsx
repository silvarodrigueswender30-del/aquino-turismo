import React from "react"

const beneficios = [
  {
    title: "Contato Local",
    body: "Fale com uma equipe em Paraty.",
  },
  {
    title: "Planejamento Antecipado",
    body: "Alinhe as principais possibilidades antes da chegada.",
  },
  {
    title: "Diferentes Perfis de Grupo",
    body: "Excursões, caravanas, famílias e grupos privados possuem ritmos diferentes.",
  },
  {
    title: "Paraty como Destino",
    body: "Mar, natureza e cultura em uma única viagem.",
  },
]

export function GruposBeneficiosSection() {
  return (
    <section className="w-full bg-shell-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            PARA QUEM ORGANIZA
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] tracking-[-0.02em]">
            Menos pontos soltos.
            <br />Mais clareza antes da viagem.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((item, index) => (
            <div key={index} className="flex flex-col gap-3 border-t-2 border-golden-sand/30 pt-6">
              <h3 className="font-heading font-medium text-ocean-navy text-xl">
                {item.title}
              </h3>
              <p className="font-sans text-slate-blue text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
