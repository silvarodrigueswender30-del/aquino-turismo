"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "A AquinoTour atende grupos e excursões em Paraty?",
    answer:
      "Sim. A AquinoTour trabalha com turismo e receptivo para grupos e excursões em Paraty.",
  },
  {
    question: "A AquinoTour atende caravanas?",
    answer:
      "A AquinoTour possui atendimento voltado a grupos e excursões, e o ecossistema Aquino trabalha também com o público de caravanas em Paraty. Os detalhes da operação devem ser alinhados diretamente com a equipe.",
  },
  {
    question: "Que informações devo enviar para consultar uma experiência para meu grupo?",
    answer:
      "Data da viagem, quantidade aproximada de pessoas e perfil do grupo são um bom ponto de partida para o atendimento.",
  },
  {
    question: "É possível consultar passeio de escuna para grupos?",
    answer:
      "O passeio de escuna está entre as experiências divulgadas pela AquinoTour. Condições, disponibilidade e detalhes para grupos devem ser confirmados diretamente com a equipe.",
  },
  {
    question: "A AquinoTour atende agências e organizadores?",
    answer:
      "A operação trabalha com atendimento a grupos e receptivo local em Paraty, permitindo que o responsável pela viagem alinhe previamente as principais informações da experiência.",
  },
  {
    question: "Também existe hospedagem para grupos?",
    answer:
      "A Pousada Aquino Mar possui uma operação própria de hospedagem em Paraty voltada também a grupos, excursões e caravanas.",
  },
  {
    question: "Quanto custa uma experiência para grupo?",
    answer:
      "Os valores dependem da experiência, data, disponibilidade e características do grupo. A cotação deve ser confirmada diretamente com a equipe.",
  },
]

function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-ocean-navy/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 rounded-sm"
      >
        <span className="font-heading font-medium text-ocean-navy text-base md:text-lg leading-snug">
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            "shrink-0 mt-0.5 text-slate-blue/60 transition-transform duration-300",
            open ? "rotate-180" : ""
          )}
          size={20}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-sans text-slate-blue text-sm md:text-base leading-relaxed pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function GruposFaqSection() {
  return (
    <section className="w-full bg-shell-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
              PERGUNTAS FREQUENTES
            </p>
            <h2 className="font-heading font-light text-3xl sm:text-4xl text-ocean-navy leading-[1.1] tracking-[-0.02em]">
              Dúvidas sobre grupos em Paraty.
            </h2>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
