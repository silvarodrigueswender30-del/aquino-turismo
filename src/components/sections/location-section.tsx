"use client";

import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { getWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function LocationSection() {
  return (
    <section id="localizacao" className="w-full bg-shell-white py-16 md:py-24 scroll-mt-24 border-t border-ocean-navy/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Editorial Header */}
        <div className="mb-12 max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-golden-sand mb-3">
            COMO CHEGAR · LOCALIZAÇÃO
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl text-ocean-navy leading-[1.1] tracking-[-0.01em]">
            Nosso ponto de atendimento em Paraty
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-blue leading-relaxed mt-4">
            Estamos localizados no bairro Caborê, a poucos minutos do Centro Histórico e do cais de embarque dos passeios marítimos.
          </p>
        </div>

        {/* Main Grid: Content + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Card Info Left */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-ocean-navy/10 bg-[#F7F1E1] p-6 sm:p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ocean-navy text-golden-sand">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-ocean-navy">
                    Endereço de Atendimento
                  </h3>
                  <p className="font-sans text-sm text-slate-blue leading-relaxed mt-1">
                    Rua Guapuruvu, 371 — Caborê<br />
                    Paraty - RJ, CEP 23970-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-ocean-navy/10 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ocean-navy text-golden-sand">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-ocean-navy">
                    Horário de Atendimento
                  </h3>
                  <p className="font-sans text-sm text-slate-blue leading-relaxed mt-1">
                    Segunda a Domingo: 08:00 às 20:00<br />
                    Suporte e reservas via WhatsApp durante todo o dia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-ocean-navy/10 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ocean-navy text-golden-sand">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-ocean-navy">
                    Contato & WhatsApp
                  </h3>
                  <a
                    href={getWhatsappUrl(WHATSAPP_MESSAGES.home)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-turquoise-sea font-medium hover:underline leading-relaxed mt-1 inline-block"
                  >
                    +55 (24) 99909-6384
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-ocean-navy/10">
              <a
                href="https://maps.google.com/?q=R.+Guapuruvu,+371+-+Cabor%C3%AA,+Paraty+-+RJ,+23970-000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ocean-navy px-6 font-sans text-xs font-semibold uppercase tracking-wider text-shell-white transition-colors hover:bg-ocean-navy/90"
              >
                <Navigation className="h-4 w-4 text-golden-sand" />
                Abrir rota no Google Maps
              </a>
            </div>
          </div>

          {/* Map Container Right */}
          <div className="lg:col-span-7 min-h-[360px] lg:min-h-[460px] overflow-hidden rounded-2xl border border-golden-sand/40 shadow-sm bg-ocean-navy/5 relative">
            <iframe
              src="https://www.google.com/maps?q=R.+Guapuruvu,+371+-+Cabor%C3%AA,+Paraty+-+RJ,+23970-000&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(10%) brightness(0.98)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Aquino Tour Paraty — Caborê"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
