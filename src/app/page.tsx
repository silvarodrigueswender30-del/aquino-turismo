import { HeroSection } from "@/components/sections/hero-section";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { FeatureSection } from "@/components/sections/feature-section";
import { IslandsSection } from "@/components/sections/islands-section";
import { Stats } from "@/components/ui/stats-section-with-text";
import { GallerySlider } from "@/components/sections/gallery-slider";
import { ServicesSection } from "@/components/sections/services-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import { FeatureGrid } from "@/components/ui/feature-grid-enterprise-grade";
import { ClientGallerySection } from "@/components/sections/client-gallery-section";
import { StatsCardSection } from "@/components/ui/stats-card-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { AnimatedTestimonialsBasic } from "@/components/ui/animated-testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <div
        className="relative -mt-px overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 82% 8%, rgba(95,197,199,.11), transparent 30%),
            radial-gradient(circle at 6% 78%, rgba(22,91,140,.055), transparent 34%),
            linear-gradient(180deg, #FAF8F2 0%, rgba(169,216,232,.16) 30%, rgba(250,248,242,.94) 52%, rgba(241,232,215,.26) 76%, #FAF8F2 100%)
          `,
        }}
      >
        <section className="relative flex w-full items-center overflow-hidden border-b border-ocean-navy/10 py-5 md:py-6">
          <div className="relative z-10 w-full">
            <LogoMarquee />
          </div>
        </section>
        <StatsCardSection />
        <Stats />
      </div>
      <div
        id="gradient-wrapper"
        className="bg-shell-white"
      >
        <GallerySlider />
        <FeatureSection />
        <FeatureGrid />
        <IslandsSection />
        <ServicesSection />
        <PricingSection />

        <ClientGallerySection />

        <AnimatedTestimonialsBasic />

        <FaqSection />
      </div>
      <FooterSection />
    </div>
  );
}
