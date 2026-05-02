import type { Metadata } from "next";
import { InternetHeroSection } from "@/components/internet/hero-section";
import { InternetIntroSection } from "@/components/internet/intro-section";
import { InternetFeaturesSection } from "@/components/internet/features-section";
import { InternetPlansSection } from "@/components/internet/plans-section";
import { InternetPartnersSection } from "@/components/internet/partners-section";
import { InternetCTASection } from "@/components/internet/cta-section";

export const metadata: Metadata = {
  title: "Internet Plans",
  description:
    "Compare the best high-speed internet providers and plans in your area. Fiber, cable, and satellite options with speeds up to 5 Gbps.",
};

export default function InternetPage() {
  return (
    <>
      <InternetHeroSection />
      <InternetIntroSection />
      <InternetFeaturesSection />
      <InternetPlansSection />
      <InternetPartnersSection />
      <InternetCTASection />
    </>
  );
}
