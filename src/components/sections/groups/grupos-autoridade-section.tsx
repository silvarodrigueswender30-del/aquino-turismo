import React from "react"

const pilares = [
  {
    number: "01",
    title: "Atendimento para grupos",
    body: "Um ponto de contato para alinhar as informações principais da experiência em Paraty.",
  },
  {
    number: "02",
    title: "Experiências em Paraty",
    body: "Passeios de jipe, escuna e lancha para diferentes perfis de passageiros.",
  },
  {
    number: "03",
    title: "Organização local",
    body: "Apoio para reunir informações, disponibilidade e condições antes da chegada do grupo.",
  },
  {
    number: "04",
    title: "Integração com hospedagem",
    body: "Consulta de hospedagem na Pousada Aquino Mar quando isso fizer parte da necessidade da excursão.",
  },
]

export function GruposAutoridadeSection() {
  return (
    <section className="w-full bg-shell-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase">
              PARATY PARA GRUPOS
            </p>
            <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] tracking-[-0.02em]">
              Sua agência traz o grupo. Nós ajudamos a organizar a experiência em Paraty.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-slate-blue">
              Montar uma excursão exige fornecedores confiáveis, informações claras e planejamento. A Aquino Tour atende agências, guias e organizadores que desejam incluir experiências em Paraty na programação dos passageiros.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-ocean-navy/10">
            {pilares.map((pilar) => (
              <div key={pilar.number} className="flex gap-6 py-6 first:pt-0 last:pb-0">
                <span className="font-sans text-sm font-semibold text-golden-sand tracking-widest shrink-0 pt-0.5 w-8">
                  {pilar.number}
                </span>
                <div>
                  <h3 className="font-heading font-medium text-ocean-navy text-lg mb-1.5">
                    {pilar.title}
                  </h3>
                  <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed">
                    {pilar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
