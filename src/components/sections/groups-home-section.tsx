import { AQUINO_MAR_GROUPS_URL } from "@/lib/site";
import { getWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function GroupsHomeSection() {
  return (
    <section className="w-full bg-ocean-navy py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-[1fr_0.85fr] lg:px-16">
        <div className="max-w-2xl">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-golden-sand">
            GRUPOS E EXCURSÕES
          </p>
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
            className="inline-flex h-12 items-center justify-center rounded-[10px] bg-turquoise-sea px-7 font-sans text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-tropical-lagoon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy"
          >
            Solicitar orçamento para grupo
          </a>
          <a
            href="/grupos-e-caravanas"
            className="inline-flex h-12 items-center justify-center rounded-[10px] border border-shell-white/24 bg-shell-white/5 px-7 font-sans text-sm font-medium text-shell-white/90 transition-[background-color,color,border-color] duration-150 hover:border-shell-white/50 hover:bg-shell-white hover:text-ocean-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy"
          >
            Conhecer atendimento para excursões
          </a>
          <a
            href={AQUINO_MAR_GROUPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit border-b border-golden-sand pb-0.5 font-sans text-sm font-medium text-shell-white/70 transition-colors hover:text-shell-white"
          >
            Consultar hospedagem para grupos
          </a>
        </div>
      </div>
    </section>
  );
}
