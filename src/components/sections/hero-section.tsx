'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Marquee } from '@/components/ui/marquee'
import { AquinoNavbar } from '@/components/sections/navbar'
import { getWhatsappUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp'

const carouselCards = [
    { title: "Passeio de Escuna",     imageUrl: "/images/hero-carousel/slide-1.avif", alt: "Escuna navegando em águas cristalinas em Paraty" },
    { title: "Ilhas de Paraty",       imageUrl: "/images/hero-carousel/slide-2.avif", alt: "Enseada tropical com barcos ancorados em Paraty" },
    { title: "Praias Paradisíacas",   imageUrl: "/images/hero-carousel/slide-3.avif", alt: "Praia paradisíaca no pôr do sol em Paraty" },
    { title: "Mergulho e Natureza",   imageUrl: "/images/hero-carousel/slide-4.avif", alt: "Passageiros mergulhando em Paraty" },
    { title: "Passeio em Família",    imageUrl: "/images/hero-carousel/slide-5.avif", alt: "Passeio premium para casais e famílias em Paraty" },
]

export function HeroSection() {
    return (
        <>
            <AquinoNavbar />

            <main>
                <section className="relative flex min-h-[86vh] items-center overflow-hidden sm:min-h-[88vh]">
                    {/* Imagem de Fundo cobrindo toda a seção */}
                    <Image 
                        src="/images/hero/escuna-home.webp" 
                        alt="Passeio de escuna na baía de Paraty" 
                        fill
                        priority
                        sizes="100vw"
                        className="absolute inset-0 z-0 object-cover object-center"
                    />
                    {/* Overlay assimetrico para legibilidade sem apagar a fotografia. */}
                    <div
                        aria-hidden
                        className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(13,39,66,.86)_0%,rgba(13,39,66,.66)_34%,rgba(13,39,66,.26)_66%,rgba(13,39,66,.06)_100%)]"
                    />
                    <div
                        aria-hidden
                        className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(17,32,46,.04)_0%,rgba(17,32,46,.12)_52%,rgba(17,32,46,.42)_100%)]"
                    />

                    <div className="relative z-10 w-full px-5 pb-10 pt-26 sm:px-6 sm:pb-12 sm:pt-28 md:px-10 lg:pb-18 lg:pt-32">
                        <div className="mx-auto max-w-7xl lg:flex lg:items-end lg:justify-between lg:gap-16 xl:gap-20">
                            {/* Texto Principal à Esquerda */}
                            <div className="mx-auto max-w-[40rem] text-center text-shell-white lg:ml-0 lg:w-[56%] lg:text-left">
                                
                                <p className="mb-3.5 font-heading text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-golden-sand drop-shadow-sm sm:mb-4 sm:text-xs">AQUINO TOUR · PARATY</p>
                                
                                <h1 className="mx-auto max-w-[37rem] text-balance font-heading text-[2.7rem] font-normal leading-[1.03] tracking-[-0.025em] drop-shadow-lg sm:text-5xl md:text-[3.4rem] lg:mx-0 xl:text-[3.95rem]">
                                    Passeios em Paraty para viver o melhor da cidade
                                </h1>
                                <p className="mx-auto mt-5 max-w-[30rem] text-base font-normal leading-7 text-shell-white/92 drop-shadow-md sm:mt-6 sm:text-lg lg:mx-0">
                                    Conheça cachoeiras, alambiques, praias e ilhas com passeios de jipe, escuna e lancha e conte com atendimento local para escolher a experiência ideal.
                                </p>

                                <div>
                                    <div className="mx-auto my-7 flex max-w-sm flex-col justify-center gap-3 sm:my-8 sm:flex-row lg:my-9 lg:ml-0 lg:mr-auto lg:justify-start">
                                        <Button
                                            asChild
                                            className="aquino-hero-control h-12 w-full rounded-[10px] border-none bg-turquoise-sea px-7 font-semibold text-white transition-[background-color,transform] duration-100 hover:bg-tropical-lagoon focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy sm:w-auto"
                                        >
                                            <Link href="#passeios">
                                                <span>Ver passeios</span>
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            variant="secondary"
                                            className="aquino-hero-control h-12 w-full rounded-[10px] border border-shell-white/24 bg-shell-white/[0.02] px-7 font-medium text-shell-white/90 transition-[background-color,color,border-color,transform] duration-100 hover:border-shell-white/50 hover:bg-shell-white hover:text-ocean-navy focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy sm:w-auto"
                                        >
                                            <a href={getWhatsappUrl(WHATSAPP_MESSAGES.home)} target="_blank" rel="noopener noreferrer">
                                                <span>Falar com a Aquino Tour</span>
                                            </a>
                                        </Button>
                                    </div>

                                    <ul className="flex list-none flex-col items-center gap-2 text-sm font-normal leading-6 text-shell-white/78 lg:items-start">
                                        <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-golden-sand"></span> Atendimento para turistas e famílias</li>
                                        <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-golden-sand"></span> Grupos, excursões e agências</li>
                                        <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-golden-sand"></span> Experiências por terra e pelo mar</li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Carrossel de Cards à Direita */}
                            <div className="mt-10 flex min-w-0 max-w-full justify-end overflow-hidden sm:mt-12 lg:mt-0 lg:w-[44%]">
                                <div className="-mr-5 w-full min-w-0 max-w-full overflow-hidden lg:mr-0 lg:pl-5">
                                    <Marquee className="[--duration:44s] [--gap:1rem] [contain:paint]">
                                        {carouselCards.map((card, idx) => (
                                            <MarqueeCard key={idx} card={card} index={idx} />
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

function MarqueeCard({ card, index }: { card: { title: string, imageUrl: string, alt: string }, index: number }) {
    const [hasError, setHasError] = useState(false)
    const isLead = index % carouselCards.length === 0
    
    return (
        <div
            className={cn(
                "group relative h-52 w-40 flex-shrink-0 cursor-pointer overflow-hidden rounded-[14px] bg-deep-marine shadow-[0_18px_36px_rgba(17,32,46,0.22)] transition-[opacity,transform] duration-500 sm:h-64 sm:w-48 md:h-72 md:w-56",
                isLead ? "scale-100 opacity-100" : "scale-[.93] opacity-[.68]"
            )}
        >
            {hasError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-tropical-lagoon text-shell-white">
                    <span className="mt-2 text-sm text-shell-white/55">Imagem Indisponível</span>
                </div>
            ) : (
                <img 
                    src={card.imageUrl} 
                    alt={card.alt} 
                    onError={() => setHasError(true)}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
            )}
            {/* Gradiente base do card para texto */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(180deg,transparent_0%,rgba(13,39,66,.10)_36%,rgba(13,39,66,.78)_100%)]" />
            {/* Label do card */}
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 text-shell-white">
                <p className="font-heading text-sm font-normal leading-tight tracking-[-0.01em] drop-shadow-md transition-transform group-hover:translate-y-[-2px] sm:text-base md:text-lg">
                    {card.title}
                </p>
            </div>
        </div>
    )
}
