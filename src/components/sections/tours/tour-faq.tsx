"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export interface TourFaqItemType {
  question: string
  answer: string
}

interface TourFaqProps {
  eyebrow?: string
  title: string
  faqs: TourFaqItemType[]
}

function TourFaqItem({ faq }: { faq: TourFaqItemType }) {
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
  )
}

export function TourFaq({ eyebrow, title, faqs }: TourFaqProps) {
  if (!faqs || faqs.length === 0) return null

  return (
    <section className="w-full bg-shell-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            {eyebrow && (
              <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="font-heading font-light text-3xl sm:text-4xl text-ocean-navy leading-[1.1] tracking-[-0.02em]">
              {title}
            </h2>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((faq, index) => (
              <TourFaqItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
