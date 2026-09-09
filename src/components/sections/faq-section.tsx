"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "Quais passeios a Aquino Tour oferece em Paraty?",
    answer:
      "A Aquino Tour trabalha com opções de passeio de jipe, escuna e lancha, além de atendimento para grupos e excursões. A disponibilidade e as condições de cada experiência devem ser consultadas para a data da viagem.",
  },
  {
    question: "O que inclui o passeio de jipe em Paraty?",
    answer:
      "O passeio de jipe trabalha experiências pela região rural de Paraty, com atrações relacionadas a natureza, cachoeiras, alambiques e cultura local. Os pontos e condições do roteiro devem ser confirmados no atendimento.",
  },
  {
    question: "Quanto tempo dura o passeio de escuna?",
    answer:
      "Os passeios de escuna comercializados pela Aquino Tour possuem opções com duração aproximada de cinco horas. Horários, embarcação, roteiro e paradas devem ser confirmados para a data escolhida.",
  },
  {
    question: "A Aquino Tour oferece passeio de lancha?",
    answer:
      "Sim. Há opções de lancha para conhecer praias e ilhas da região. Capacidade, duração, roteiro e disponibilidade dependem da embarcação escolhida.",
  },
  {
    question: "A Aquino Tour atende grupos e excursões?",
    answer:
      "Sim. A Aquino Tour atende agências, guias, organizadores, caravanas, famílias e outros grupos que desejam incluir passeios em sua programação em Paraty.",
  },
  {
    question: "É possível consultar hospedagem para grupos?",
    answer:
      "Sim. Para grupos que também precisam de hospedagem, é possível consultar disponibilidade na Pousada Aquino Mar por meio da integração comercial entre as operações.",
  },
  {
    question: "Como consultar valores e horários?",
    answer:
      "Informe pelo WhatsApp a data da viagem, a quantidade de pessoas e o passeio de interesse. A equipe verifica disponibilidade, horários e condições para o seu perfil.",
  },
  {
    question: "A Aquino Tour é de Paraty?",
    answer:
      "Sim. A Aquino Tour atua com turismo, passeios e atendimento receptivo em Paraty, no Rio de Janeiro.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-b border-ocean-navy/15"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 md:py-8 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-navy/50 focus-visible:ring-offset-2 rounded-sm"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="flex-1 font-heading font-medium text-base md:text-lg text-ocean-navy transition-colors duration-200">
          {question}
        </span>
        <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-ocean-navy/15 text-ocean-navy group-hover:bg-ocean-navy group-hover:text-shell-white transition-all duration-200">
          {isOpen ? <X size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-slate-blue leading-relaxed pb-6 md:pb-8 text-sm md:text-base pr-4 md:pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-10%" });

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-shell-white pt-16 pb-20 md:pt-24 md:pb-32 scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
            DÚVIDAS FREQUENTES
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ocean-navy max-w-2xl">
            Antes de embarcar.
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-slate-blue mt-4 max-w-xl">
            Informações essenciais para planejar sua experiência em Paraty.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="border-t border-ocean-navy/15">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
