"use client";

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
    <section className="border-b border-dashed border-ocean-navy/15 bg-transparent py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 border-y border-dashed border-ocean-navy/20 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="relative flex min-h-[7.5rem] flex-col justify-center border-b border-dashed border-ocean-navy/20 px-3 py-5 text-center last:border-b-0 even:border-l even:border-dashed even:border-ocean-navy/20 md:min-h-36 md:border-b-0 md:px-8 md:py-7 md:text-left md:first:border-l-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-dashed md:[&:not(:first-child)]:border-ocean-navy/20"
            >
              {/* Notches de perfuração superior e inferior nos divisores verticais (Mobile & Desktop) */}
              {((index % 2 === 1) || index > 0) && (
                <>
                  <span className={`absolute -top-2.5 -left-2.5 h-5 w-5 rounded-full bg-coastal-mist z-10 ${index % 2 === 0 ? "hidden md:block" : "block"}`} />
                  <span className={`absolute -bottom-2.5 -left-2.5 h-5 w-5 rounded-full bg-coastal-mist z-10 ${index % 2 === 0 ? "hidden md:block" : "block"}`} />
                </>
              )}

              {/* Código de barras azul escuro no padrão de "Como Trabalhamos" (Mobile & Desktop) */}
              {((index % 2 === 1) || index > 0) && (
                <div className={`absolute left-1 top-1/2 h-[65%] w-3 -translate-y-1/2 items-center justify-center text-ocean-navy ${index % 2 === 0 ? "hidden md:flex" : "flex"}`}>
                  <Barcode className="h-full w-full text-ocean-navy" />
                </div>
              )}

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
          ))}
        </div>
      </div>
    </section>
  );
}

export { StatsCardSection };
