import type { Metadata } from "next";
import { CableTVHeroSection } from "@/components/cable-tv/hero-section";
import { CableTVIntroSection } from "@/components/cable-tv/intro-section";
import { CableTVFeaturesSection } from "@/components/cable-tv/features-section";
import { CableTVPackagesSection } from "@/components/cable-tv/packages-section";
import { CableTVPartnersSection } from "@/components/cable-tv/partners-section";
import { CableTVCTASection } from "@/components/cable-tv/cta-section";

export const metadata: Metadata = {
  title: "Cable TV Plans",
  description:
    "Compare the best cable TV packages and providers in your area. 125+ to 350+ channels with HD, 4K, DVR, and premium content.",
};

export default function CableTVPage() {
  return (
    <>
      <CableTVHeroSection />
      <CableTVIntroSection />
      <CableTVFeaturesSection />
      <CableTVPackagesSection />
      <CableTVPartnersSection />
      <CableTVCTASection />
    </>
  );
}
