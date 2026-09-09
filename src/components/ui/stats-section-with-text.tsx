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
                Passeios e turismo receptivo com orientação local para turistas, famílias, grupos e agências que querem viver Paraty com mais clareza.
              </p>
            </div>
          </div>

          <div className="grid gap-0 border-y border-ocean-navy/10 sm:grid-cols-3 sm:divide-x sm:divide-ocean-navy/10">
            {[
              ["Por terra", "experiências que conectam natureza, cultura local e região rural"],
              ["Pelo mar", "praias, ilhas e paisagens da baía de Paraty"],
              ["Receptivo", "atendimento próximo para planejar passeios individuais e em grupo"],
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
