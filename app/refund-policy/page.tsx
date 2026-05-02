import type { Metadata } from "next";
import { PolicyHeroSection } from "@/components/shared/policy-hero-section";
import { RefundPolicyContent } from "@/components/refund/policy-content";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Understand FlexiNet's refund policy, including eligibility, process, timeframes, and how to request a refund.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PolicyHeroSection
        title="Refund Policy"
        description="We want you to be completely satisfied with our services. This policy outlines the terms and conditions for requesting a refund."
        icon="file"
      />
      <RefundPolicyContent />
    </>
  );
}
