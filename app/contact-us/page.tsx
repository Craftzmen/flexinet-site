import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/contact/hero-section";
import { ContactInfoSection } from "@/components/contact/info-section";
import { ContactFormSection } from "@/components/contact/form-section";
import { ContactFAQSection } from "@/components/contact/faq-section";
import { ContactOfficeSection } from "@/components/contact/office-section";
import { ContactCTASection } from "@/components/contact/cta-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FlexiNet for questions about internet and cable TV plans, billing, technical support, or any other inquiries.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactFAQSection />
      <ContactOfficeSection />
      <ContactCTASection />
    </>
  );
}
