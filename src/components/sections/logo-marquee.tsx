"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";

export function LogoMarquee() {
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center px-5 sm:px-6">
      <div className="flex-1 min-w-0">
        <Marquee className="[--duration:34s] [--gap:2.5rem] [contain:paint]" fade={true} fadeAmount={8}>
          <span className="mx-6 whitespace-nowrap font-heading text-base font-light text-ocean-navy/58 transition-colors hover:text-ocean-navy sm:text-lg">Natureza, história e cultura de Paraty</span>
          <span className="mx-6 whitespace-nowrap font-heading text-base font-light text-ocean-navy/58 transition-colors hover:text-ocean-navy sm:text-lg">Passeios de barco, escuna e jeep</span>
          <span className="mx-6 whitespace-nowrap font-heading text-base font-light text-ocean-navy/58 transition-colors hover:text-ocean-navy sm:text-lg">Praias, ilhas e cachoeiras</span>
          <span className="mx-6 whitespace-nowrap font-heading text-base font-light text-ocean-navy/58 transition-colors hover:text-ocean-navy sm:text-lg">Visitas a alambiques e experiências gastronômicas</span>
          <span className="mx-6 whitespace-nowrap font-heading text-base font-light text-ocean-navy/58 transition-colors hover:text-ocean-navy sm:text-lg">Atendimento personalizado para famílias, grupos e excursões</span>
        </Marquee>
      </div>
    </div>
  );
}
