import { HeroSection } from "@/components/home/hero-section";
import { ProvidersSection } from "@/components/home/providers-section";
import { FindInternetSection } from "@/components/home/find-internet-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { SupportChannelsSection } from "@/components/home/support-channels-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTABannerSection } from "@/components/home/cta-banner-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProvidersSection />
      <FindInternetSection />
      <WhyChooseUsSection />
      <SupportChannelsSection />
      <TestimonialsSection />
      <CTABannerSection />
    </>
  );
}
