import React from "react"

export interface TourHighlightItem {
  icon: React.ElementType
  title: string
  description: string
}

interface TourHighlightsProps {
  eyebrow?: string
  title: string
  description?: string
  items: TourHighlightItem[]
}

export function TourHighlights({ eyebrow, title, description, items }: TourHighlightsProps) {
  return (
    <section className="w-full bg-shell-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 md:mb-16 max-w-2xl">
          {eyebrow && (
            <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] tracking-[-0.02em]">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-slate-blue font-sans text-base md:text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-deep-marine/5 text-ocean-navy">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-medium text-ocean-navy text-xl">
                {item.title}
              </h3>
              <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
