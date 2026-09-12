"use client"

import React from "react"
import { motion } from "framer-motion"
import { Plane, Star, TreePalm } from "lucide-react"
import { Barcode } from "@/components/ui/ticket-barcode"

/**
 * ===========================================================================
 * TESTIMONIAL CARD — estilo ticket, barcode no RODAPÉ (horizontal)
 * ===========================================================================
 * Mesmo design system dos cards de "Passeios em Paraty":
 *  - borda navy visível
 *  - fundo cream (#F7F1E1)
 *  - divisor tracejado + furos de perfuração (HORIZONTAIS nas laterais)
 *  - faixa de código de barras compartilhada (rodapé, largura total do card)
 *  - avião + rastro (canto superior direito)
 *  - carimbo com palmeira (canto superior esquerdo)
 * ===========================================================================
 */

const NOTCH_BG_CLASS = "bg-[#FAF8F2]"

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

interface TestimonialCardProps {
  item: TestimonialItem
  index: number
}

export function TestimonialCard({ item, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-[1.5px] border-ocean-navy/80 bg-[#F7F1E1] shadow-[0_10px_30px_-14px_rgba(11,42,64,0.3)] transition-transform duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_18px_40px_-16px_rgba(11,42,64,0.4)]"
    >
      {/* textura sutil de papel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(11,42,64,0.6) 0px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* ===================== CORPO PRINCIPAL ===================== */}
      <div className="relative z-10 flex flex-1 flex-col justify-between p-6 md:p-7">
        <div>
          {/* topo: estrelas + origem */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5" aria-label={`${item.rating} de 5 estrelas`}>
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-golden-sand text-golden-sand" aria-hidden="true" />
              ))}
            </div>
            <span className="text-xs font-medium text-slate-blue/70">{item.source}</span>
          </div>

          {/* depoimento com line-clamp-4 para alinhar alturas */}
          <p className="mt-4 line-clamp-4 font-sans text-sm leading-relaxed text-slate-blue md:text-base">
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>

        {/* autor */}
        <div className="mt-4 flex items-center gap-3 border-t border-ocean-navy/10 pt-3.5">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-ocean-navy/15 bg-ocean-navy/5 font-heading text-sm font-semibold text-ocean-navy">
            {item.initials}
          </span>
          <h3 className="font-heading text-base font-medium text-ocean-navy">{item.name}</h3>
        </div>

        {/* avião + rastro no canto superior direito */}
        <PlaneTrail className="pointer-events-none absolute -top-1 right-4 h-10 w-16 text-ocean-navy" />

        {/* carimbo no canto superior esquerdo */}
        <StampIcon className="pointer-events-none absolute -left-2 -top-2 h-12 w-12 text-golden-sand/20" />
      </div>

      {/* ===================== DIVISOR PERFURADO (horizontal) ===================== */}
      <div className="relative z-10 flex flex-shrink-0 flex-col">
        {/* furo esquerdo */}
        <span
          className={`absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full ${NOTCH_BG_CLASS}`}
        />
        <div className="w-full border-t-2 border-dashed border-ocean-navy/30" />
        {/* furo direito */}
        <span
          className={`absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full ${NOTCH_BG_CLASS}`}
        />
      </div>

      {/* ===================== FAIXA DO CÓDIGO DE BARRAS (rodapé com respiro) ===================== */}
      <div className="relative z-10 flex h-10 w-full flex-shrink-0 items-center justify-center px-6 pt-2 pb-2 md:h-11">
        <Barcode orientation="horizontal" className="h-full w-full text-ocean-navy" />
      </div>
    </motion.div>
  )
}

export function AnimatedTestimonialsBasic() {
  return (
    <section className="relative w-full overflow-hidden border-t border-ocean-navy/10 bg-coastal-mist pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-golden-sand">
            AVALIAÇÕES NO GOOGLE
          </p>
          <h2 className="mb-4 font-heading text-3xl font-light leading-[1.1] tracking-[-0.01em] text-ocean-navy sm:text-4xl md:text-5xl">
            Quem conhece, recomenda.
          </h2>
          <p className="mx-auto max-w-xl font-sans text-base text-slate-blue md:text-lg">
            Experiências compartilhadas por quem já contou com a Aquino Tour em Paraty.
          </p>
        </div>

        {/* 3 Columns Ticket Layout */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
          {aquinoTestimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===========================================================================
 * SUBCOMPONENTES SVG
 * =========================================================================== */

function PlaneTrail({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 100 60" fill="none" className="absolute inset-0 h-full w-full">
        <path
          d="M4 54 C 16 58, 10 40, 20 37 C 30 34, 23 20, 34 16 C 44 12, 50 9, 62 5"
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeDasharray="4 5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <Plane className="absolute right-0 top-0 h-4 w-4 -translate-y-1 rotate-45" strokeWidth={2} />
    </div>
  )
}

function StampIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      </svg>
      <TreePalm
        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2"
        strokeWidth={1.25}
      />
    </div>
  )
}
