import React from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    initials: "SM",
    name: "Sara Helen Miranda",
    source: "Avaliação no Google",
    rating: 5,
    quote:
      "Minha experiência com a agência foi excelente! Fiquei encantada com a proatividade e a disponibilidade da equipe. Realizei dois passeios — o de Jeep e o de Escuna — e adorei ambos. Fui muito bem atendida, os preços foram justos, e o clima dos passeios foi animado e descontraído. Recomendo com certeza!",
  },
  {
    initials: "CN",
    name: "Claudia Naideg",
    source: "Avaliação no Google",
    rating: 5,
    quote:
      "Agência competente, bons profissionais, atenderam perfeitamente minha solicitação. Organizados e muito simpáticos. Recomendo.",
  },
]

export function GruposProvaSection() {
  return (
    <section className="w-full bg-warm-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            AVALIAÇÕES NO GOOGLE
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] tracking-[-0.01em]">
            Quem conhece, recomenda.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reviews.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between p-7 md:p-8 rounded-2xl bg-shell-white border border-ocean-navy/10"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1" aria-label={item.rating + " de 5 estrelas"}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-golden-sand text-golden-sand" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="font-sans text-xs font-medium text-slate-blue/60">
                    {item.source}
                  </span>
                </div>
                <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed mb-5">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-ocean-navy/10 mt-auto">
                <div className="w-10 h-10 rounded-full bg-ocean-navy/5 border border-ocean-navy/15 flex items-center justify-center font-heading font-semibold text-sm text-ocean-navy shrink-0">
                  {item.initials}
                </div>
                <h3 className="font-heading font-medium text-base text-ocean-navy leading-snug">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
