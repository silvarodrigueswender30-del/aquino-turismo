import Image from 'next/image';
import { Plane } from 'lucide-react';
import { Barcode } from "@/components/ui/ticket-barcode";
import { AQUINO_MAR_GROUPS_URL } from "@/lib/site";
import { getWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function GroupsHomeSection() {
  return (
    <section className="relative z-0 overflow-hidden w-full bg-ocean-navy py-16 md:py-24 scroll-mt-24">
      {/* Brand Watermark - Dark Section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute right-[-110px] -bottom-16 z-[1] w-[280px] opacity-[0.035] sm:w-[400px] sm:opacity-[0.04] md:right-[-130px] md:-bottom-24 lg:w-[500px] lg:right-[-140px] lg:-bottom-28 lg:opacity-[0.05]"
      >
        <Image
          src="/images/brand/anchor-watermark.webp"
          alt=""
          width={800}
          height={800}
          className="h-auto w-full object-contain brightness-125 contrast-125"
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-golden-sand/60 bg-ocean-navy/80 backdrop-blur-sm">
          
          {/* FAIXA CLARA NO TOPO — invertida (clara sobre navy) */}
          <div className="relative flex items-center justify-between bg-golden-sand px-6 py-3 md:px-8 md:py-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-navy font-sans">
              Grupos e Excursões
            </span>
            <Plane className="h-4 w-4 text-ocean-navy" strokeWidth={2} />
          </div>

          {/* CORPO: coluna de conteúdo (texto+CTAs já existentes) + aba do barcode */}
          <div className="relative flex items-stretch">

            {/* coluna principal */}
            <div className="flex-1 p-6 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
                <div className="max-w-2xl">
                  <h2 className="font-heading text-3xl font-light leading-[1.1] tracking-[-0.02em] text-shell-white sm:text-4xl md:text-5xl">
                    Está organizando uma excursão para Paraty?
                  </h2>
                  <p className="mt-5 font-sans text-base leading-relaxed text-shell-white/75 md:text-lg">
                    A Aquino Tour oferece atendimento receptivo para agências de turismo, guias, organizadores e grupos que desejam incluir passeios de jipe, escuna ou lancha em sua programação.
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-shell-white/65 md:text-base">
                    Para grupos que também precisam de hospedagem, a Aquino Tour trabalha em integração comercial com a Pousada Aquino Mar.
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:items-start">
                  <a
                    href={getWhatsappUrl(WHATSAPP_MESSAGES.grupos)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-[10px] bg-golden-sand px-7 font-sans text-sm font-semibold text-ocean-navy transition-[background-color,transform] duration-150 hover:bg-golden-sand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-sand focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy"
                  >
                    Solicitar orçamento para grupo
                  </a>
                  <a
                    href="/grupos-e-caravanas"
                    className="inline-flex h-12 items-center justify-center rounded-[10px] border border-golden-sand/40 bg-golden-sand/5 px-7 font-sans text-sm font-medium text-shell-white/90 transition-[background-color,color,border-color] duration-150 hover:border-golden-sand hover:bg-golden-sand/10 hover:text-shell-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-sand focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy"
                  >
                    Conhecer atendimento para excursões
                  </a>
                  <a
                    href={AQUINO_MAR_GROUPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex w-fit border-b border-golden-sand pb-0.5 font-sans text-sm font-medium text-golden-sand/90 transition-colors hover:text-golden-sand"
                  >
                    Consultar hospedagem para grupos
                  </a>
                </div>
              </div>
            </div>

            {/* divisor tracejado + furos */}
            <div className="relative flex flex-shrink-0 items-stretch">
              <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-ocean-navy" />
              <div className="h-full w-px border-l-2 border-dashed border-golden-sand/40" />
              <span className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-ocean-navy" />
            </div>

            {/* aba do barcode — barras CLARAS (text-shell-white), idêntico a Como Trabalhamos */}
            <div className="flex w-12 flex-shrink-0 items-center justify-center py-2 pl-4 pr-2 md:w-14 md:py-6 md:pl-5 lg:w-16 lg:pl-6">
              <Barcode className="h-[96%] w-full text-shell-white md:h-[88%]" />
            </div>
          </div>

          {/* FAIXA DIAGONAL NO RODAPÉ — clara com listras navy (invertida) */}
          <div
            aria-hidden="true"
            className="h-3 w-full bg-golden-sand md:h-3.5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(11,42,64,0.9) 0px, rgba(11,42,64,0.9) 3px, transparent 3px, transparent 7px)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
