import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AquinoNavbar } from "@/components/sections/navbar";
import { FooterSection } from "@/components/sections/footer-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada | Aquino Tour",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <AquinoNavbar />
      <main className="flex flex-col min-h-screen">
        <section className="relative flex flex-1 items-center justify-center pt-28 pb-20 px-6 sm:px-10 overflow-hidden bg-coastal-mist">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-6xl md:text-8xl text-ocean-navy mb-4">404</h1>
            <h2 className="font-heading text-2xl md:text-3xl text-slate-blue mb-6">Página não encontrada</h2>
            <p className="text-base md:text-lg text-slate-blue/80 mb-10 max-w-md mx-auto">
              Desculpe, a página que você está procurando não existe, foi removida ou o link está incorreto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="h-12 px-8 rounded-[10px] bg-turquoise-sea text-white hover:bg-tropical-lagoon border-none shadow-sm transition-colors">
                <Link href="/">Voltar para a Home</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 px-8 rounded-[10px] border-turquoise-sea/30 text-ocean-navy hover:bg-turquoise-sea/5 transition-colors">
                <Link href="/#passeios">Ver passeios</Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative background elements to match brand */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-turquoise-sea/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-deep-marine/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        </section>
      </main>
      <FooterSection />
    </>
  );
}
