"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { INSTAGRAM_URL } from "@/lib/site"
import { getWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contato" className="w-full bg-ocean-navy text-shell-white border-t border-golden-sand/20 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-12 md:pt-20 md:pb-14">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 md:pb-16 border-b border-white/10">
          {/* COLUNA 1 — MARCA & NAP */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <Image
              src="/images/brand/aquinotour-logo.png"
              alt="Aquino Tour Paraty"
              width={180}
              height={100}
              className="h-14 md:h-16 w-auto object-contain mb-4"
            />
            <p className="font-sans text-sm md:text-base text-shell-white/80 max-w-sm leading-relaxed mb-4">
              Passeios e turismo receptivo em Paraty.
            </p>
            <div className="space-y-2 font-sans text-xs text-shell-white/75">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-golden-sand mt-0.5" />
                <span>R. Guapuruvu, 371 - Caborê, Paraty - RJ, 23970-000</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-golden-sand" />
                <a 
                  href={getWhatsappUrl(WHATSAPP_MESSAGES.home)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-shell-white transition-colors"
                >
                  +55 (24) 99909-6384
                </a>
              </p>
            </div>
          </div>

          {/* COLUNA 2 — NAVEGAÇÃO */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-golden-sand uppercase mb-2">
              Navegação
            </h3>
            <ul className="font-sans text-sm text-shell-white/70 space-y-2.5">
              <li>
                <Link href="/#passeios" className="hover:text-shell-white transition-colors duration-200">
                  Passeios
                </Link>
              </li>
              <li>
                <Link href="/#planejamento" className="hover:text-shell-white transition-colors duration-200">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="/grupos-e-caravanas" className="hover:text-shell-white transition-colors duration-200">
                  Grupos &amp; Excursões
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-shell-white transition-colors duration-200">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3 — EXPERIÊNCIAS & REDES */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-golden-sand uppercase mb-2">
              Experiências
            </h3>
            <ul className="font-sans text-sm text-shell-white/70 space-y-2 mb-4">
              <li><Link href="/passeio-de-jipe-em-paraty" className="hover:text-shell-white transition-colors duration-200">Passeio de Jipe</Link></li>
              <li><Link href="/passeio-de-escuna-em-paraty" className="hover:text-shell-white transition-colors duration-200">Passeio de Escuna</Link></li>
              <li><Link href="/passeio-de-lancha-em-paraty" className="hover:text-shell-white transition-colors duration-200">Passeio de Lancha</Link></li>
              <li><Link href="/grupos-e-caravanas" className="hover:text-shell-white transition-colors duration-200">Grupos & Excursões</Link></li>
            </ul>

            <div className="pt-2">
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-golden-sand uppercase mb-2">
                Redes Sociais
              </h4>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-shell-white/70 hover:text-shell-white transition-colors duration-200"
                aria-label="Instagram da Aquino Tour Paraty"
              >
                <FaInstagram size={18} className="text-golden-sand" />
                <span>@aquinotourparaty</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-shell-white/50">
          <p className="text-center sm:text-left">
            © {currentYear} Aquino Tour Paraty. Todos os direitos reservados.
            <span className="hidden md:inline mx-1.5">·</span>
            <span className="block md:inline mt-1 md:mt-0">
              Desenvolvido por{" "}
              <a 
                href="https://www.offdata.digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-golden-sand transition-colors duration-200"
              >
                Off-Data
              </a>
            </span>
          </p>
          <p className="text-center sm:text-right">
            R. Guapuruvu, 371 - Caborê, Paraty - RJ
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
