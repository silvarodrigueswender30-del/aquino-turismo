"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AquinoNavbar } from "@/components/sections/navbar"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TourHeroProps {
  eyebrow: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imageClassName?: string
  primaryCta: {
    label: string
    href: string
    external?: boolean
  }
  secondaryCta?: {
    label: string
    href: string
    external?: boolean
  }
}

export function TourHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imageClassName,
  primaryCta,
  secondaryCta,
}: TourHeroProps) {
  return (
    <>
      <AquinoNavbar />
      <main>
        <section className="relative flex min-h-[86vh] items-center overflow-hidden sm:min-h-[88vh]">
          {/* Imagem de fundo responsiva com filtros da Home principal */}
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className={cn("object-cover object-center brightness-[1.02] contrast-[1.02] saturate-[1.03]", imageClassName)}
              sizes="100vw"
            />
          </div>

          {/* Overlays Mobile (idênticos à Home principal) */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(13,39,66,.86)_0%,rgba(13,39,66,.66)_34%,rgba(13,39,66,.26)_66%,rgba(13,39,66,.06)_100%)] md:hidden"
          />
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(17,32,46,.04)_0%,rgba(17,32,46,.12)_52%,rgba(17,32,46,.42)_100%)] md:hidden"
          />

          {/* Overlays Desktop (Gradientes exatos da Home principal) */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 hidden md:block"
            style={{
              background: `linear-gradient(
                90deg,
                rgba(8, 27, 43, 0.92) 0%,
                rgba(8, 27, 43, 0.82) 22%,
                rgba(8, 27, 43, 0.58) 36%,
                rgba(8, 27, 43, 0.28) 48%,
                rgba(8, 27, 43, 0.08) 60%,
                rgba(8, 27, 43, 0.00) 72%
              )`
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 z-0 hidden md:block"
            style={{
              background: `linear-gradient(
                180deg,
                transparent 58%,
                rgba(6, 21, 34, 0.10) 78%,
                rgba(6, 21, 34, 0.26) 100%
              )`
            }}
          />

          <div className="relative z-10 w-full px-5 pb-10 pt-26 sm:px-6 sm:pb-12 sm:pt-28 md:px-10 lg:pb-18 lg:pt-32">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-[40rem] text-shell-white">
                <p className="mb-3.5 font-heading text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-golden-sand [text-shadow:0_1px_2px_rgba(0,0,0,0.12)] sm:mb-4 sm:text-xs">
                  {eyebrow}
                </p>
                <h1 className="text-balance font-heading text-[2.7rem] font-normal leading-[1.03] tracking-[-0.025em] [text-shadow:0_1px_2px_rgba(0,0,0,0.12)] sm:text-5xl md:text-[3.4rem] lg:text-[3.95rem]">
                  {title}
                </h1>
                <p className="mt-5 max-w-[30rem] text-base font-normal leading-7 text-shell-white/92 [text-shadow:0_1px_2px_rgba(0,0,0,0.12)] sm:mt-6 sm:text-lg">
                  {description}
                </p>

                <div className="my-7 flex max-w-sm flex-col gap-3 sm:my-8 sm:flex-row lg:my-9 lg:ml-0 lg:mr-auto">
                  <Button
                    asChild
                    className="aquino-hero-control h-12 w-full rounded-[10px] border-none bg-turquoise-sea px-7 font-semibold text-white transition-[background-color,transform] duration-100 hover:bg-tropical-lagoon focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy sm:w-auto"
                  >
                    {primaryCta.external ? (
                      <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
                        <span>{primaryCta.label}</span>
                      </a>
                    ) : (
                      <Link href={primaryCta.href}>
                        <span>{primaryCta.label}</span>
                      </Link>
                    )}
                  </Button>
                  
                  {secondaryCta && (
                    <Button
                      asChild
                      variant="secondary"
                      className="aquino-hero-control h-12 w-full rounded-[10px] border border-shell-white/24 bg-shell-white/[0.02] px-7 font-medium text-shell-white/90 transition-[background-color,color,border-color,transform] duration-100 hover:border-shell-white/50 hover:bg-shell-white hover:text-ocean-navy focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy sm:w-auto"
                    >
                      {secondaryCta.external ? (
                        <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
                          <span>{secondaryCta.label}</span>
                        </a>
                      ) : (
                        <Link href={secondaryCta.href}>
                          <span>{secondaryCta.label}</span>
                        </Link>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
