import React from "react"

export function GruposAquinoMarSection() {
  return (
    <section className="w-full bg-warm-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase">
              TURISMO + HOSPEDAGEM
            </p>
            <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] tracking-[-0.02em]">
              Duas operações locais.
              <br />Uma mesma conexão com Paraty.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-slate-blue">
              Enquanto a AquinoTour atua com turismo, experiências e receptivo, a Pousada Aquino Mar possui uma operação voltada também à hospedagem de grupos, excursões e caravanas em Paraty.
            </p>
            <a
              href="https://pousadaaquinomarparaty.com.br/grupos-e-caravanas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-ocean-navy border-b-2 border-golden-sand pb-0.5 w-fit transition-colors duration-200 hover:text-turquoise-sea hover:border-turquoise-sea"
              aria-label="Conhecer hospedagem para grupos na Pousada Aquino Mar"
            >
              Conhecer hospedagem para grupos
              <span aria-hidden>&rarr;</span>
            </a>
          </div>

          <div className="bg-shell-white rounded-2xl border border-ocean-navy/10 p-8 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-xs font-semibold tracking-[0.18em] text-golden-sand uppercase">
                AQUINOTOUR
              </span>
              <h3 className="font-heading font-medium text-ocean-navy text-xl">
                Turismo, passeios e receptivo
              </h3>
              <p className="font-sans text-slate-blue text-sm leading-relaxed">
                Experiências no mar, atendimento local e receptivo para grupos em Paraty.
              </p>
            </div>
            <div className="border-t border-ocean-navy/10 pt-6 flex flex-col gap-1">
              <span className="font-sans text-xs font-semibold tracking-[0.18em] text-golden-sand uppercase">
                POUSADA AQUINO MAR
              </span>
              <h3 className="font-heading font-medium text-ocean-navy text-xl">
                Hospedagem para grupos
              </h3>
              <p className="font-sans text-slate-blue text-sm leading-relaxed">
                Estrutura de hospedagem para excursões, caravanas e grupos em Paraty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
