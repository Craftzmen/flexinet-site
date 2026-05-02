"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I find internet providers in my area?",
    answer:
      "Simply enter your ZIP code on our website and we'll instantly show you all available internet providers in your area, along with their plans, speeds, and pricing. You can compare options side by side to find the best deal.",
  },
  {
    question: "Can I bundle internet and cable TV services?",
    answer:
      "Yes! Many of our partner providers offer bundle deals that combine internet, cable TV, and even phone services at a discounted rate. Bundling can save you 20-30% compared to purchasing each service separately.",
  },
  {
    question: "Are there any contracts or hidden fees?",
    answer:
      "Most of our recommended plans come with no annual contracts and transparent pricing. We always display the full cost upfront so there are no surprises on your bill. Some providers may offer contract-based plans at lower rates.",
  },
  {
    question: "How fast can I get connected after signing up?",
    answer:
      "Installation timelines vary by provider, but most can get you connected within 3-7 business days. Some providers offer self-installation kits that allow you to set up same-day. Our team will guide you through the process.",
  },
  {
    question: "What if I'm not satisfied with my service?",
    answer:
      "We want you to be completely satisfied. If you're not happy with your current plan, contact us and we'll help you explore alternatives or switch providers. Many plans come with satisfaction guarantees and easy cancellation policies.",
  },
  {
    question: "Do you offer customer support after I sign up?",
    answer:
      "Absolutely! Our support team is available to help you even after you've signed up. Whether you need help with billing, technical issues, or want to upgrade your plan, we're here to assist you via phone or live chat.",
  },
];

export function ContactFAQSection() {
  return (
    <SectionWrapper surface="white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-grille"
          >
            Can&apos;t find what you&apos;re looking for? Contact our support team.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-fog-gray rounded-sm border-none px-6"
              >
                <AccordionTrigger className="text-sm font-semibold text-midnight-ink hover:text-oceanic-deep hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-grille leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
