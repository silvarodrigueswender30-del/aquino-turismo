"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";

export function LogoMarquee() {
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center px-5 sm:px-6">
      <div className="mr-6 hidden flex-shrink-0 border-r border-ocean-navy/12 pr-6 md:block">
        <p className="whitespace-nowrap font-sans text-xs font-semibold uppercase tracking-[0.22em] text-golden-sand">
          Atlantic Heritage
        </p>
      </div>
      <div className="flex-1 min-w-0">
        <Marquee className="[--duration:34s] [--gap:2.5rem] [contain:paint]" fade={true} fadeAmount={8}>
          <span className="mx-6 whitespace-nowrap font-heading text-base font-light text-ocean-navy/58 transition-colors hover:text-ocean-navy sm:text-lg">Paraty por quem vive Paraty</span>
          <span className="mx-6 whitespace-nowrap font-heading text-base font-light text-ocean-navy/58 transition-colors hover:text-ocean-navy sm:text-lg">Passeios com atendimento local</span>
          <span className="mx-6 whitespace-nowrap font-heading text-base font-light text-ocean-navy/58 transition-colors hover:text-ocean-navy sm:text-lg">Oceano, ilhas e Mata Atlântica</span>
          <span className="mx-6 whitespace-nowrap font-heading text-base font-light text-ocean-navy/58 transition-colors hover:text-ocean-navy sm:text-lg">Experiências náuticas em Paraty</span>
        </Marquee>
      </div>
    </div>
  );
}
