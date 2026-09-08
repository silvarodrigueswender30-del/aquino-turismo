"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "O que a AquinoTour oferece em Paraty?",
    answer:
      "A AquinoTour atua com turismo e receptivo em Paraty, com passeio de escuna, atendimento a grupos e excursões e Day Use divulgado entre seus serviços.",
  },
  {
    question: "A AquinoTour oferece passeio de escuna?",
    answer:
      "Sim. O passeio de escuna é um dos serviços divulgados oficialmente pela AquinoTour em Paraty.",
  },
  {
    question: "Vocês atendem grupos e excursões?",
    answer:
      "Sim. A AquinoTour trabalha com atendimento e receptivo para grupos e excursões em Paraty, oferecendo apoio local.",
  },
  {
    question: "A AquinoTour oferece Day Use?",
    answer:
      "O Day Use aparece entre os serviços divulgados pela AquinoTour. Os detalhes da experiência devem ser confirmados diretamente com a equipe antes da reserva.",
  },
  {
    question: "Como consultar valores e horários?",
    answer:
      "Valores, horários, disponibilidade e detalhes operacionais podem variar e devem ser confirmados diretamente com a equipe AquinoTour antes da reserva.",
  },
  {
    question: "A AquinoTour é de Paraty?",
    answer:
      "Sim. A AquinoTour atua em Paraty, no Rio de Janeiro, com atendimento local voltado ao turismo e receptivo na região.",
  },
  {
    question: "Qual a relação entre AquinoTour e Aquino Mar?",
    answer:
      "AquinoTour e Pousada Aquino Mar fazem parte do mesmo universo familiar Aquino, com operações distintas de turismo e hospedagem em Paraty.",
  }
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
