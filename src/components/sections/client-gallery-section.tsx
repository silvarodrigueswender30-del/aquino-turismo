"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"

import {
  Autoplay,
  EffectCoverflow,
} from "swiper/modules"

const baseImages = [
  { src: "/images/galeria/clientes/cliente-1.avif", alt: "Família hospedada vivendo momentos especiais em Paraty" },
  { src: "/images/galeria/clientes/cliente-2.avif", alt: "Casal sorrindo durante viagem em Paraty" },
  { src: "/images/galeria/clientes/cliente-3.avif", alt: "Hóspedes aproveitando dias tranquilos em Paraty" },
  { src: "/images/galeria/clientes/cliente-4.avif", alt: "Grupo reunido em uma viagem para Paraty" },
  { src: "/images/galeria/clientes/cliente-5.avif", alt: "Momentos de lazer e relaxamento em Paraty" },
  { src: "/images/galeria/clientes/cliente-6.avif", alt: "Família explorando as belezas de Paraty" },
  { src: "/images/galeria/clientes/cliente-7.avif", alt: "Registros de viagem de nossos visitantes" },
  { src: "/images/galeria/clientes/cliente-8.avif", alt: "Momentos especiais vividos em Paraty" },
  { src: "/images/galeria/clientes/cliente-9.avif", alt: "Fim de tarde durante viagem em família" },
  { src: "/images/galeria/clientes/cliente-10.avif", alt: "Momentos de alegria em Paraty" },
  { src: "/images/galeria/clientes/cliente-11.avif", alt: "Aproveitando as experiências de Paraty" },
  { src: "/images/galeria/clientes/cliente-12.avif", alt: "Sorrisos de nossos clientes durante a viagem" },
]

// Array com as 12 fotos de clientes
const galleryImages = baseImages

export function ClientGallerySection() {
  const css = `
  .aquinotour-gallery {
    width: 100%;
    padding-bottom: 40px;
    padding-top: 12px;
  }

  .aquinotour-gallery .swiper-slide {
    width: 65vw;
    max-width: 250px;
    aspect-ratio: 4/5;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    background: rgba(17, 32, 46, 0.05); /* deep-marine/5 */
  }

  @media (min-width: 768px) {
    .aquinotour-gallery .swiper-slide {
      width: clamp(220px, 20vw, 280px);
      aspect-ratio: 4/5;
    }
  }
  `

  return (
    <section className="w-full bg-shell-white pt-10 pb-12 md:pt-16 md:pb-20 overflow-hidden relative">
      <style>{css}</style>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-8 md:mb-16 relative z-10 flex flex-col items-center text-center">
        <p className="font-sans text-xs font-semibold tracking-[0.22em] text-golden-sand uppercase mb-3">
          PARATY EM MOVIMENTO
        </p>
        <h2 className="font-heading font-light tracking-[-0.01em] text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] mb-4">
          Momentos que fazem parte da viagem.
        </h2>
        <p className="font-sans text-base md:text-lg text-slate-blue max-w-2xl mx-auto">
          Mar, natureza e encontros que ajudam a contar a experiência de estar em Paraty.
        </p>
      </div>

      <Swiper
        className="aquinotour-gallery"
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={4}
        slidesPerView="auto"
        spaceBetween={16}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 60,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 10,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            },
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 65vw, 25vw"
              className="object-cover pointer-events-none select-none transition-transform duration-700 md:hover:scale-[1.02]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

