import { FaWhatsapp } from "react-icons/fa"

interface TourFinalCtaProps {
  eyebrow?: string
  title: string
  body: string
  ctaLabel: string
  ctaHref: string
}

export function TourFinalCta({ eyebrow, title, body, ctaLabel, ctaHref }: TourFinalCtaProps) {
  return (
    <section className="w-full bg-ocean-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          {eyebrow && (
            <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-shell-white leading-[1.1] tracking-[-0.02em]">
            {title}
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-shell-white/75 max-w-lg">
            {body}
          </p>
          <div className="mt-4">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-[10px] bg-turquoise-sea text-white font-semibold text-sm transition-[background-color,transform] duration-150 hover:bg-tropical-lagoon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy"
            >
              <FaWhatsapp size={18} aria-hidden />
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
