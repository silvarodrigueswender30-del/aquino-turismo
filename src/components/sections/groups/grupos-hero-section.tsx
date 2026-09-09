"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AquinoNavbar } from "@/components/sections/navbar"
import { AQUINO_MAR_GROUPS_URL } from "@/lib/site"
import { getWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

export function GruposHeroSection() {
  return (
    <>
      <AquinoNavbar />

      <main>
        <section className="relative flex min-h-[82vh] items-end overflow-hidden pb-16 sm:min-h-[86vh] sm:pb-20 md:pb-24">
          <Image
            src="/images/hero-carousel/slide-1.avif"
            alt="Passeio de escuna em Paraty"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,39,66,.92)_0%,rgba(13,39,66,.70)_40%,rgba(13,39,66,.30)_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,32,46,.08)_0%,rgba(17,32,46,.16)_50%,rgba(17,32,46,.55)_100%)]"
          />

          <div className="relative z-10 w-full px-5 pt-28 sm:px-6 md:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-[40rem] text-shell-white">
                <p className="mb-3.5 font-heading text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-golden-sand drop-shadow-sm sm:mb-4 sm:text-xs">
                  GRUPOS · EXCURSÕES · AGÊNCIAS
                </p>
                <h1 className="text-balance font-heading text-[2.6rem] font-normal leading-[1.03] tracking-[-0.025em] drop-shadow-lg sm:text-5xl md:text-[3.2rem] lg:text-[3.7rem]">
                  Turismo receptivo em Paraty para grupos e excursões
                </h1>
                <p className="mt-5 max-w-[30rem] text-base font-normal leading-7 text-shell-white/90 drop-shadow-md sm:mt-6 sm:text-lg">
                  Organize passeios de jipe, escuna, lancha e hospedagem para seu grupo com atendimento local e uma equipe preparada para auxiliar agências, guias e organizadores.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:mt-10">
                  <Button
                    asChild
                    className="h-12 rounded-[10px] border-none bg-turquoise-sea px-7 font-semibold text-white transition-[background-color,transform] duration-100 hover:bg-tropical-lagoon focus-visible:ring-2 focus-visible:ring-turquoise-sea"
                  >
                    <a
                      href={getWhatsappUrl(WHATSAPP_MESSAGES.grupos)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar proposta para grupo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    className="h-12 rounded-[10px] border border-shell-white/24 bg-shell-white/[0.02] px-7 font-medium text-shell-white/90 transition-[background-color,color,border-color] duration-100 hover:border-shell-white/50 hover:bg-shell-white hover:text-ocean-navy focus-visible:ring-2 focus-visible:ring-turquoise-sea"
                  >
                    <a
                      href={AQUINO_MAR_GROUPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar hospedagem
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
