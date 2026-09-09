import React from "react"

const steps = [
  {
    number: "01",
    title: "Envie os dados da excursão",
    body: "Informe cidade de origem, datas, quantidade aproximada de passageiros e serviços desejados.",
  },
  {
    number: "02",
    title: "Analisamos as opções",
    body: "A equipe verifica disponibilidade de passeios e, quando solicitado, hospedagem.",
  },
  {
    number: "03",
    title: "Preparamos a proposta",
    body: "A proposta considera o tamanho, o perfil e a programação desejada para o grupo.",
  },
  {
    number: "04",
    title: "Alinhamos a operação",
    body: "Após a aprovação, são confirmados serviços, condições, horários e informações necessárias para a viagem.",
  },
  {
    number: "05",
    title: "O grupo chega a Paraty",
    body: "A equipe local orienta o responsável sobre os serviços contratados e a programação.",
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
            Como organizamos a experiência do seu grupo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-6">
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
