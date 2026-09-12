"use client";

import React from "react";
import { Star } from "lucide-react";
import { Barcode } from "@/components/ui/ticket-barcode";

const stats = [
  {
    value: "5,0",
    label: "Avaliação no Google",
    detail: "Nota no Google",
    icon: true,
  },
  {
    value: "25+",
    label: "Avaliações públicas",
    detail: "Relatos de clientes",
  },
  {
    value: "PARATY",
    label: "Atendimento em Paraty",
    detail: "Equipe local",
  },
  {
    value: "GRUPOS",
    label: "Grupos e excursões",
    detail: "Receptivo",
  },
];

export default function StatsCardSection() {
  return (
    <section className="relative w-full border-b border-dashed border-ocean-navy/15 bg-transparent py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative flex flex-col border-y border-dashed border-ocean-navy/25 md:flex-row md:items-stretch">
          {stats.map((item, index) => (
            <React.Fragment key={item.label}>
              {index > 0 && (
                <div className="relative flex flex-shrink-0 items-stretch my-1 md:my-0">
                  {/* furo superior no divisor */}
                  <span className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-coastal-mist z-10" />
                  {/* divisor tracejado perfurado */}
                  <div className="h-full w-px border-l-2 border-dashed border-ocean-navy/30" />
                  {/* furo inferior no divisor */}
                  <span className="absolute -bottom-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-coastal-mist z-10" />
                </div>
              )}

              <div className="flex flex-1 items-center justify-between px-4 py-6 md:min-h-36 md:px-6 md:py-7">
                <div className="flex flex-col justify-center text-center md:text-left">
                  <div className="mb-2 flex items-center justify-center gap-1.5 md:mb-3 md:justify-start md:gap-2">
                    {item.icon ? (
                      <Star className="h-3 w-3 fill-golden-sand text-golden-sand md:h-4 md:w-4" strokeWidth={1.5} aria-hidden="true" />
                    ) : (
                      <span className="h-px w-6 bg-golden-sand md:w-8" aria-hidden="true" />
                    )}
                    <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-blue md:text-[0.72rem] md:tracking-[0.16em]">
                      {item.detail}
                    </span>
                  </div>
                  <div className="font-heading text-[clamp(1.5rem,6.5vw,2.55rem)] font-light leading-none tracking-normal text-ocean-navy md:text-[clamp(1.75rem,3.4vw,2.55rem)]">
                    {item.value}
                  </div>
                  <p className="mt-2 font-sans text-[0.72rem] font-medium leading-snug text-slate-blue md:mt-3 md:text-sm">
                    {item.label}
                  </p>
                </div>

                {/* Código de barras lateral ao lado da linha tracejada (idêntico a Passeios em Paraty) */}
                <div className="flex w-10 shrink-0 items-center justify-end py-2 pl-3 pr-1 md:w-12 md:py-3 lg:w-14 lg:pl-4">
                  <Barcode className="h-[92%] w-full text-ocean-navy md:h-[88%]" />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export { StatsCardSection };
