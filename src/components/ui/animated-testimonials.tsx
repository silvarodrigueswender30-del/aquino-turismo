"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export interface TestimonialItem {
  id: number
  initials: string
  name: string
  source: string
  rating: number
  quote: string
}

const aquinoTestimonials: TestimonialItem[] = [
  {
    id: 1,
    initials: "SM",
    name: "Sara Helen Miranda",
    source: "Avaliação no Google",
    rating: 5,
    quote:
      "Minha experiência com a agência foi excelente! Fiquei encantada com a proatividade e a disponibilidade da equipe. Realizei dois passeios — o de Jeep e o de Escuna — e adorei ambos. Fui muito bem atendida, os preços foram justos, e o clima dos passeios foi animado e descontraído. Recomendo com certeza!",
  },
  {
    id: 2,
    initials: "CN",
    name: "Claudia Naideg",
    source: "Avaliação no Google",
    rating: 5,
    quote:
      "Agência competente, bons profissionais, atenderam perfeitamente minha solicitação. Organizados e muito simpáticos. Recomendo.",
  },
  {
    id: 3,
    initials: "GM",
    name: "Giuliana Moraes",
    source: "Avaliação no Google",
    rating: 5,
    quote:
      "Super atenciosos desde o atendimento ao passeio. Amei! Muito obrigada, Thiago e Rosilene. Com certeza iremos mais vezes.",
  },
]

export function AnimatedTestimonialsBasic() {
  return (
    <section className="w-full bg-shell-white pt-16 pb-20 md:pt-24 md:pb-28 border-t border-ocean-navy/10 overflow-hidden relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            AVALIAÇÕES NO GOOGLE
          </p>
          <h2 className="font-heading font-light tracking-[-0.01em] text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] mb-4">
            Quem conhece, recomenda.
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-blue max-w-xl mx-auto">
            Experiências compartilhadas por quem já contou com a AquinoTour em Paraty.
          </p>
        </div>

        {/* 3 Columns Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch">
          {aquinoTestimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-between p-7 md:p-8 rounded-2xl bg-white/70 border border-ocean-navy/10 relative"
            >
              <div>
                {/* Header item: Stars + Google Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1" aria-label={`${item.rating} de 5 estrelas`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-golden-sand text-golden-sand"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="font-sans text-xs font-medium text-slate-blue/70">
                    {item.source}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-ocean-navy/10 mt-auto">
                <div className="w-10 h-10 rounded-full bg-ocean-navy/5 border border-ocean-navy/15 flex items-center justify-center font-heading font-semibold text-sm text-ocean-navy shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h3 className="font-heading font-medium text-base text-ocean-navy leading-snug">
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
