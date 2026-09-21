import { Badge } from "@/components/ui/badge";

export function Stats() {
  return (
    <div className="w-full bg-transparent py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col items-start gap-3 md:gap-4">
            <div>
              <Badge variant="outline" className="border-ocean-navy/15 text-ocean-navy">Sobre Nós</Badge>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="max-w-xl text-left font-heading text-3xl font-light leading-[1.08] tracking-normal text-ocean-navy md:text-5xl">
                Paraty é o nosso ponto de partida.
              </h2>
              <p className="max-w-lg text-left font-sans text-base font-normal leading-7 text-slate-blue sm:text-lg">
                Oferecemos experiências cuidadosamente selecionadas para apresentar a riqueza natural, histórica e cultural da região, com atendimento personalizado para turistas, famílias, grupos e agências.
              </p>
            </div>
          </div>

          <div className="grid gap-0 border-y border-ocean-navy/10 sm:grid-cols-2 sm:divide-x sm:divide-ocean-navy/10 lg:grid-cols-4">
            {[
              ["Por terra", "Caminhos que revelam a Mata Atlântica, cachoeiras, alambiques, cultura e os encantos da região rural de Paraty."],
              ["Pelo mar", "Navegue pela Baía de Paraty e descubra praias, ilhas, águas cristalinas e paisagens preservadas."],
              ["Experiências", "Passeios pensados para proporcionar momentos especiais, unindo natureza, história, cultura e hospitalidade."],
              ["Atendimento receptivo", "Orientação e atendimento personalizado para organizar sua experiência em Paraty, seja individualmente, em família ou em grupo."],
            ].map(([title, text]) => (
              <div key={title} className="border-b border-ocean-navy/10 py-5 sm:border-b-0 sm:px-6 sm:py-7">
                <span className="mb-4 block h-px w-8 bg-golden-sand sm:mb-5" aria-hidden="true" />
                <h3 className="font-heading text-xl font-light leading-tight text-deep-marine">
                  {title}
                </h3>
                <p className="mt-2.5 font-sans text-sm font-normal leading-6 text-slate-blue sm:mt-3">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
