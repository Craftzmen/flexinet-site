import type { Metadata } from "next";
import { PolicyHeroSection } from "@/components/shared/policy-hero-section";
import { PrivacyPolicyContent } from "@/components/privacy/policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how FlexiNet collects, uses, and protects your personal information. Read our full privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyHeroSection
        title="Privacy Policy"
        description="Your privacy matters to us. This policy explains how FlexiNet collects, uses, and protects your personal information when you use our services."
        icon="shield"
      />
      <PrivacyPolicyContent />
    </>
  );
}
