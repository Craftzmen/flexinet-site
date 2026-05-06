"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    id: "eligibility",
    title: "1. Refund Eligibility",
    content: [
      "FlexiNet is committed to ensuring customer satisfaction. Our refund policy applies to all services and plans facilitated through our platform. You may be eligible for a refund under the following circumstances:",
      "• **Service Not Activated:** If you have paid for a service that was never activated or provisioned within 14 business days.",
      "• **Billing Errors:** If you were charged incorrectly due to a billing system error or duplicate payment.",
      "• **Service Quality Issues:** If the service delivered consistently fails to meet the advertised specifications (e.g., internet speeds significantly below the guaranteed minimum).",
      "• **Cancellation Within Trial Period:** If you cancel your service within the first 30 days (the trial period), you may be eligible for a full or prorated refund.",
      "Please note that refund eligibility may also depend on the specific terms and conditions of the service provider you selected through our platform.",
    ],
  },
  {
    id: "process",
    title: "2. Refund Process",
    content: [
      "To request a refund, please follow these steps:",
      "**Step 1:** Contact our customer support team via contact info at our support portal or call 888 208 1423 with your account details and reason for the refund request.",
      "**Step 2:** Our team will review your request within 5 business days and may ask for additional documentation or information to process your claim.",
      "**Step 3:** If your refund is approved, we will notify you via contact info and process the refund to your original payment method.",
      "**Step 4:** The refund will appear on your account within 7-14 business days, depending on your financial institution.",
      "Please include the following information in your refund request: your full name, account number, date of purchase, amount paid, and a detailed description of the reason for the refund.",
    ],
  },
  {
    id: "timeframes",
    title: "3. Refund Timeframes",
    content: [
      "We aim to process all refund requests as quickly as possible. Here are the typical timeframes:",
      "• **Initial Review:** 3-5 business days from the date we receive your refund request",
      "• **Approval Notification:** Within 2 business days of the review completion",
      "• **Processing Time:** 5-7 business days after approval",
      "• **Bank Processing:** 3-7 additional business days depending on your financial institution",
      "In total, you can expect the refund to be reflected in your account within 14-21 business days from the initial request. We will keep you updated throughout the process via contact info.",
    ],
  },
  {
    id: "non-refundable",
    title: "4. Non-Refundable Items",
    content: [
      "The following charges and services are generally non-refundable:",
      "• **Installation Fees:** Once installation has been completed, the installation fee is non-refundable.",
      "• **Equipment Purchases:** Equipment purchased (not leased) through our partners is non-refundable after 14 days of delivery.",
      "• **Promotional Credits:** Free trial credits, promotional discounts, and bonus services are not eligible for refund.",
      "• **Partial Month Usage:** If you cancel mid-billing cycle after the 30-day trial period, the current month's charges are typically non-refundable.",
      "• **Administrative Fees:** Any administrative or processing fees associated with your account are non-refundable.",
      "We evaluate each refund request on a case-by-case basis and may make exceptions in special circumstances.",
    ],
  },
  {
    id: "how-to-request",
    title: "5. How to Request a Refund",
    content: [
      "You can request a refund through any of the following channels:",
      "**By contact info:** Send your refund request to our support portal with the subject line \"Refund Request — [Your Account Number]\". Include all relevant details about your account and the reason for the refund.",
      "**By Phone:** Call our customer support team at 888 208 1423 during business hours (Monday-Friday, 8AM-8PM EST). Our representatives will guide you through the refund process.",
      "For the fastest processing, we recommend contacting us via contact info or phone.",
    ],
  },
  {
    id: "disputes",
    title: "6. Disputes and Escalation",
    content: [
      "If you are not satisfied with the outcome of your refund request, you have the right to escalate the matter:",
      "**Internal Escalation:** Request a review by our customer service manager by contact infoing our escalation portal. We will respond within 5 business days.",
      "**External Resolution:** If the dispute remains unresolved, you may file a complaint with your local consumer protection agency or pursue resolution through your credit card company's chargeback process.",
      "We are committed to resolving all disputes fairly and transparently. Our goal is to ensure every customer has a positive experience with FlexiNet.",
    ],
  },
  {
    id: "changes",
    title: "7. Changes to This Policy",
    content: [
      "FlexiNet reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. We encourage you to review this policy periodically.",
      "If we make significant changes that affect existing customers, we will provide notice via contact info or a prominent announcement on our website at least 30 days before the changes take effect.",
      "Your continued use of our services after any changes to this policy constitutes your acceptance of the updated terms.",
    ],
  },
  {
    id: "contact",
    title: "8. Contact for Refund Inquiries",
    content: [
      "For any questions or concerns about our refund policy, please don't hesitate to reach out:",
      "**FlexiNet Customer Support**",
      "**contact info:** our support portal\n**Phone:** 888 208 1423\n**Business Hours:** Monday-Friday, 8AM-8PM EST",
      "Our team is dedicated to helping you resolve any billing or refund concerns promptly and professionally.",
    ],
  },
];

export function RefundPolicyContent() {
  return (
    <SectionWrapper surface="white">
      <div className="max-w-4xl mx-auto">
        {/* Table of contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-fog-gray rounded-sm p-8 mb-12"
        >
          <h2 className="text-lg font-semibold text-midnight-ink mb-4">Table of Contents</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-deep-teal hover:text-midnight-ink transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Policy sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-midnight-ink mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm text-slate-grille leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-midnight-ink font-semibold">$1</strong>')
                    }}
                  />
                ))}
              </div>
              {index < sections.length - 1 && <Separator className="mt-12 bg-ash-cloud/30" />}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
