import Image from "next/image";
import { cn } from "@/lib/utils";

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
                Seu passeio começa com uma boa escolha.
              </h2>
              <p className="font-sans font-light text-base md:text-lg leading-relaxed text-slate-blue max-w-lg mt-2">
                Cada visita a Paraty tem um ritmo diferente. A AquinoTour ajuda você a encontrar a experiência mais adequada para o seu dia, grupo ou excursão.
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
                  Escolha a experiência
                </h3>
                <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed">
                  Escuna, Day Use ou atendimento para grupos.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-1 border-l-2 border-golden-sand/30 pl-5">
                <span className="font-sans text-sm font-semibold text-golden-sand/70 tracking-widest mb-1">
                  02
                </span>
                <h3 className="font-heading font-medium text-ocean-navy text-xl">
                  Conte como você vem
                </h3>
                <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed">
                  Sozinho, em família, com amigos ou em excursão.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-1 border-l-2 border-golden-sand/30 pl-5">
                <span className="font-sans text-sm font-semibold text-golden-sand/70 tracking-widest mb-1">
                  03
                </span>
                <h3 className="font-heading font-medium text-ocean-navy text-xl">
                  Receba orientação local
                </h3>
                <p className="font-sans text-slate-blue text-sm md:text-base leading-relaxed">
                  A equipe local ajuda a organizar a opção mais adequada em Paraty.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Image Grid (Provisional Images) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-0">
            {/* Image 1 */}
            <div className="relative bg-deep-marine/5 rounded-[20px] aspect-square overflow-hidden group">
              <Image 
                src="/images/imagem5.avif" 
                alt="Turismo náutico em Paraty (imagem provisória)" 
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Image 2 (Central alta) */}
            <div className="relative bg-deep-marine/5 rounded-[20px] row-span-2 overflow-hidden group min-h-[300px] md:min-h-0">
              <Image 
                src="/images/hero-1.jpeg" 
                alt="Vista do mar em Paraty (imagem provisória)" 
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Image 3 */}
            <div className="relative bg-deep-marine/5 rounded-[20px] aspect-square overflow-hidden group">
              <Image 
                src="/images/imagem6.avif" 
                alt="Praia cristalina de Paraty (imagem provisória)" 
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
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
