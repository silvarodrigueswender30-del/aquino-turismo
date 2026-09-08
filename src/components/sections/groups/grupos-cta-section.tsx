import React from "react"
import { FaInstagram } from "react-icons/fa"

export function GruposCtaSection() {
  return (
    <section className="w-full bg-ocean-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase">
            PLANEJE SEU GRUPO
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-shell-white leading-[1.1] tracking-[-0.02em]">
            Está trazendo um grupo para Paraty?
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-shell-white/75 max-w-lg">
            Data da viagem, quantidade aproximada de pessoas e perfil do grupo são as primeiras informações para começar o planejamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href="https://www.instagram.com/aquinotourparaty/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-[10px] bg-turquoise-sea text-white font-semibold text-sm transition-[background-color,transform] duration-150 hover:bg-tropical-lagoon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy"
              aria-label="Falar pelo Instagram da AquinoTour"
            >
              <FaInstagram size={18} aria-hidden />
              Falar pelo Instagram
            </a>
            <a
              href="https://pousadaaquinomarparaty.com.br/grupos-e-caravanas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 rounded-[10px] border border-shell-white/24 bg-shell-white/5 text-shell-white/90 font-medium text-sm transition-[background-color,color,border-color] duration-150 hover:border-shell-white/50 hover:bg-shell-white hover:text-ocean-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy"
            >
              Hospedagem para grupos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
