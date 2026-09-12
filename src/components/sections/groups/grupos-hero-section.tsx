"use client"

import { TourHero } from "@/components/sections/tours/tour-hero"
import { AQUINO_MAR_GROUPS_URL } from "@/lib/site"
import { getWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

export function GruposHeroSection() {
  return (
    <TourHero
      eyebrow="GRUPOS · EXCURSÕES · AGÊNCIAS"
      title="Turismo receptivo em Paraty para grupos e excursões"
      description="Organize passeios de jipe, escuna, lancha e hospedagem para seu grupo com atendimento local e uma equipe preparada para auxiliar agências, guias e organizadores."
      imageSrc="/images/destinations/grupo.avif"
      imageAlt="Turismo receptivo para grupos em Paraty"
      primaryCta={{
        label: "Solicitar proposta para grupo",
        href: getWhatsappUrl(WHATSAPP_MESSAGES.grupos),
        external: true,
      }}
      secondaryCta={{
        label: "Consultar hospedagem",
        href: AQUINO_MAR_GROUPS_URL,
        external: true,
      }}
    />
  )
}
