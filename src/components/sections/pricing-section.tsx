import Image from "next/image";
import { getWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

function PricingSection() {
  return (
    <section id="planejamento" className="w-full bg-shell-white pt-20 pb-16 md:pt-32 md:pb-24 scroll-mt-24">
      {/* Content Layer */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Content & Steps */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase">
                PLANEJE SUA EXPERIÊNCIA
              </p>
              <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ocean-navy leading-[1.1] tracking-tight">
                Encontre o passeio ideal para sua viagem
              </h2>
              <p className="font-sans font-light text-base md:text-lg leading-relaxed text-slate-blue max-w-lg mt-2">
                Valores, horários e disponibilidade variam conforme o serviço, a data e o perfil da viagem. Pelo WhatsApp, a equipe ajuda você a consultar passeio de jipe, escuna, lancha ou atendimento para grupos e excursões.
              </p>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-8 mt-4">
              {/* Step 1 */}
              <div className="flex flex-col gap-1 border-l-2 border-golden-sand pl-5">
                <span className="font-sans text-sm font-semibold text-golden-sand tracking-widest mb-1">
                  01
                </span>
                <h3 className="font-heading font-medium text-ocean-navy text-xl">
                  Escolha o passeio
                </h3>
                <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed">
                  Passeio de jipe, passeio de escuna, passeio de lancha ou grupos e excursões.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-1 border-l-2 border-golden-sand/30 pl-5">
                <span className="font-sans text-sm font-semibold text-golden-sand/70 tracking-widest mb-1">
                  02
                </span>
                <h3 className="font-heading font-medium text-ocean-navy text-xl">
                  Informe o perfil da viagem
                </h3>
                <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed">
                  Turistas, famílias, pequenos grupos, excursões e agências têm necessidades diferentes.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-1 border-l-2 border-golden-sand/30 pl-5">
                <span className="font-sans text-sm font-semibold text-golden-sand/70 tracking-widest mb-1">
                  03
                </span>
                <h3 className="font-heading font-medium text-ocean-navy text-xl">
                  Consulte valores e horários
                </h3>
                <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed">
                  A equipe verifica disponibilidade e condições para a data escolhida.
                </p>
              </div>
            </div>
            <a
              href={getWhatsappUrl(WHATSAPP_MESSAGES.home)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-fit items-center justify-center rounded-[10px] bg-turquoise-sea px-7 font-sans text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-tropical-lagoon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2"
            >
              Consultar valores e horários
            </a>
          </div>
          
          {/* Right Column: Image Grid (Editorial Campaign Imagery) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-0">
            {/* Image 1 (Top Left Square) */}
            <div className="relative bg-deep-marine/5 rounded-[20px] aspect-square overflow-hidden group">
              <Image 
                src="/images/experience/experience-01.avif" 
                alt="Roteiro de experiência Aquino Tour em Paraty" 
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                className="object-cover object-center transition-transform duration-700 md:group-hover:scale-[1.01]" 
              />
            </div>

            {/* Image 2 (Right Tall Vertical - Hero Ticket) */}
            <div className="relative bg-deep-marine/5 rounded-[20px] row-span-2 overflow-hidden group min-h-[300px] md:min-h-0">
              <Image 
                src="/images/experience/experience-02.avif" 
                alt="Ticket editorial de passeio e experiência em Paraty" 
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                className="object-cover object-center transition-transform duration-700 md:group-hover:scale-[1.01]" 
              />
            </div>

            {/* Image 3 (Bottom Left Square) */}
            <div className="relative bg-deep-marine/5 rounded-[20px] aspect-square overflow-hidden group">
              <Image 
                src="/images/experience/experience-03.avif" 
                alt="Experiência turística receptiva em Paraty" 
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                className="object-cover object-center transition-transform duration-700 md:group-hover:scale-[1.01]" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export { PricingSection };
export default PricingSection;
