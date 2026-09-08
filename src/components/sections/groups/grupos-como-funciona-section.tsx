import React from "react"

const steps = [
  {
    number: "01",
    title: "Conte sobre o grupo",
    body: "Data, quantidade aproximada de pessoas e perfil da viagem.",
  },
  {
    number: "02",
    title: "Defina o tipo de experiência",
    body: "Mar, natureza e outras possibilidades disponíveis em Paraty.",
  },
  {
    number: "03",
    title: "Alinhe as opções",
    body: "A equipe orienta sobre as experiências disponíveis para o período.",
  },
  {
    number: "04",
    title: "Chegue a Paraty",
    body: "Com as principais informações da experiência organizadas previamente.",
  },
]

export function GruposComoFuncionaSection() {
  return (
    <section className="w-full bg-warm-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            COMO FUNCIONA
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] tracking-[-0.02em]">
            Você conta como será a viagem.
            <br className="hidden sm:block" />A gente começa por aí.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3 border-t-2 border-golden-sand/30 pt-6">
              <span className="font-sans text-sm font-semibold text-golden-sand tracking-widest">
                {step.number}
              </span>
              <h3 className="font-heading font-medium text-ocean-navy text-xl">
                {step.title}
              </h3>
              <p className="font-sans text-slate-blue text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
