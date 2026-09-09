import React from "react"
import { CheckCircle2 } from "lucide-react"

interface TourForWhomProps {
  eyebrow?: string
  title: string
  description?: string
  audiences: string[]
}

export function TourForWhom({ eyebrow, title, description, audiences }: TourForWhomProps) {
  return (
    <section className="w-full bg-warm-sand py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start md:items-center">
          <div>
            {eyebrow && (
              <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] tracking-[-0.02em]">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-slate-blue font-sans text-base md:text-lg leading-relaxed max-w-lg">
                {description}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((audience, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 bg-shell-white rounded-[14px] p-5 border border-ocean-navy/5 shadow-sm"
              >
                <CheckCircle2 className="text-golden-sand shrink-0" size={22} strokeWidth={2} />
                <span className="font-sans font-medium text-ocean-navy text-sm md:text-base">
                  {audience}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
