import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export interface TourRelatedItem {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  href: string
}

interface TourRelatedProps {
  eyebrow?: string
  title: string
  items: TourRelatedItem[]
}

export function TourRelated({ eyebrow, title, items }: TourRelatedProps) {
  return (
    <section className="w-full bg-shell-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 md:mb-16">
          {eyebrow && (
            <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3 text-center md:text-left">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading font-light text-3xl sm:text-4xl text-ocean-navy leading-[1.1] tracking-[-0.02em] text-center md:text-left">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="group flex flex-col gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 rounded-2xl"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-deep-marine/10">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-heading font-medium text-ocean-navy text-xl group-hover:text-turquoise-sea transition-colors duration-200">
                  {item.title}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
