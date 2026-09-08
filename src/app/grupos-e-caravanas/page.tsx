import type { Metadata } from "next";
import { GruposHeroSection } from "@/components/sections/groups/grupos-hero-section";
import { GruposAutoridadeSection } from "@/components/sections/groups/grupos-autoridade-section";
import { GruposComoFuncionaSection } from "@/components/sections/groups/grupos-como-funciona-section";
import { GruposExperienciasSection } from "@/components/sections/groups/grupos-experiencias-section";
import { GruposParaQuemSection } from "@/components/sections/groups/grupos-para-quem-section";
import { GruposAquinoMarSection } from "@/components/sections/groups/grupos-aquino-mar-section";
import { GruposBeneficiosSection } from "@/components/sections/groups/grupos-beneficios-section";
import { GruposProvaSection } from "@/components/sections/groups/grupos-prova-section";
import { GruposFaqSection } from "@/components/sections/groups/grupos-faq-section";
import { GruposCtaSection } from "@/components/sections/groups/grupos-cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Grupos, Excursões e Caravanas em Paraty | AquinoTour",
  description:
    "Planeje passeios e experiências para grupos, excursões e caravanas em Paraty com atendimento local da AquinoTour.",
};

export default function GruposECaravanasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GruposHeroSection />
      <GruposAutoridadeSection />
      <GruposComoFuncionaSection />
      <GruposExperienciasSection />
      <GruposParaQuemSection />
      <GruposAquinoMarSection />
      <GruposBeneficiosSection />
      <GruposProvaSection />
      <GruposFaqSection />
      <GruposCtaSection />
      <FooterSection />
    </div>
  );
}
