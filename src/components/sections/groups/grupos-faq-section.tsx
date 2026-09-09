"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const gruposFaqs = [
  {
    question: "A Aquino Tour atende agências de outras cidades?",
    answer:
      "Sim. O atendimento receptivo é realizado em Paraty para agências, guias e grupos provenientes de diferentes cidades e estados.",
  },
  {
    question: "Vocês atendem excursões que chegam de ônibus?",
    answer:
      "Sim. A Aquino Tour atende grupos e excursões rodoviárias. Informações específicas sobre logística, embarque, desembarque e programação devem ser alinhadas de acordo com cada grupo.",
  },
  {
    question: "Vocês fornecem o ônibus da excursão?",
    answer:
      "O transporte rodoviário de origem normalmente é organizado pela agência ou pelo responsável pelo grupo. Consulte a equipe caso exista alguma necessidade específica.",
  },
  {
    question: "É possível organizar hospedagem e passeios?",
    answer:
      "Sim. A programação turística pode ser combinada com consulta de hospedagem na Pousada Aquino Mar, conforme disponibilidade.",
  },
  {
    question: "Quais passeios podem ser organizados para grupos?",
    answer:
      "Entre as opções trabalhadas estão passeio de jipe, passeio de escuna e passeio de lancha. A indicação depende do tamanho e do perfil do grupo.",
  },
  {
    question: "A escuna atende excursões?",
    answer:
      "Existem opções de embarcação adequadas para grupos, mas capacidade, disponibilidade, roteiro e condições precisam ser confirmados para cada data.",
  },
  {
    question: "Existe atendimento para guia ou agência de turismo?",
    answer:
      "Sim. A Aquino Tour trabalha com atendimento voltado a agências, guias e organizadores que precisam estruturar experiências para seus passageiros em Paraty.",
  },
  {
    question: "É possível montar uma programação personalizada?",
    answer:
      "A equipe pode auxiliar na composição de uma programação de acordo com o tempo disponível, perfil dos passageiros e serviços disponíveis.",
  },
  {
    question: "Como solicitar uma proposta?",
    answer:
      "Envie pelo WhatsApp as datas, a cidade de origem, a quantidade aproximada de passageiros e os serviços desejados.",
  },
];

function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);

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
            open ? "rotate-180" : "",
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
  );
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
              Dúvidas sobre grupos e excursões em Paraty.
            </h2>
          </div>
          <div className="lg:col-span-8">
            {gruposFaqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
