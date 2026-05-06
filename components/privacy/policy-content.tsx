"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      "At FlexiNet, we collect information that helps us provide you with the best possible service. This includes:",
      "**Personal Information:** When you contact us, request a quote, or sign up for services, we may collect your name, contact info, and phone number.",
      "**Usage Information:** We automatically collect certain information when you visit our website, including your IP , browser type, operating system, referring URLs, and pages viewed.",
      "**Service Information:** If you subscribe to our services, we collect information related to your account, including your service plan, billing information, and service usage data.",
      "**Cookies and Tracking Technologies:** We use cookies, web beacons, and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content.",
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect for various purposes, including:",
      "• To process your service inquiries and provide you with relevant plan recommendations",
      "• To communicate with you about your account, services, and promotional offers",
      "• To improve our website, services, and customer experience",
      "• To analyze usage patterns and optimize our platform performance",
      "• To protect against fraud, unauthorized access, and other security threats",
      "• To comply with legal obligations and enforce our terms of service",
      "We will never sell your personal information to third parties for their independent marketing purposes without your explicit consent.",
    ],
  },
  {
    id: "cookies",
    title: "3. Cookies and Tracking Technologies",
    content: [
      "Our website uses cookies and similar tracking technologies to provide a better user experience. These technologies help us:",
      "• **Essential Cookies:** Required for the website to function properly, such as session management and security features.",
      "• **Analytics Cookies:** Help us understand how visitors interact with our website by collecting anonymous usage data.",
      "• **Marketing Cookies:** Used to deliver personalized advertisements and measure the effectiveness of our marketing campaigns.",
      "• **Preference Cookies:** Remember your settings and preferences to provide a more personalized experience.",
      "You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect the functionality of our website.",
    ],
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:",
      "• SSL/TLS encryption for all data transmitted between your browser and our servers",
      "• Regular security audits and vulnerability assessments",
      "• Access controls limiting employee access to personal information on a need-to-know basis",
      "• Secure data storage with encryption at rest",
      "• Regular employee training on data protection best practices",
      "While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    title: "5. Your Rights and Choices",
    content: [
      "Depending on your location, you may have certain rights regarding your personal information:",
      "• **Access:** You can request a copy of the personal information we hold about you.",
      "• **Correction:** You can request that we correct any inaccurate or incomplete information.",
      "• **Deletion:** You can request that we delete your personal information, subject to certain legal obligations.",
      "• **Opt-Out:** You can opt out of marketing communications at any time by clicking the unsubscribe link in our contact infos or contacting us directly.",
      "• **Data Portability:** You can request a machine-readable copy of your personal data.",
      "To exercise any of these rights, please contact us at our support portal or call 888 208 1423.",
    ],
  },
  {
    id: "third-party",
    title: "6. Third-Party Services",
    content: [
      "Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you interact with.",
      "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our customers. These parties are contractually obligated to keep your information confidential.",
      "We may also disclose your information when required by law, such as in response to a court order, subpoena, or government investigation.",
    ],
  },
  {
    id: "children",
    title: "7. Children's Privacy",
    content: [
      "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information promptly.",
      "If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can take appropriate action.",
    ],
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make significant changes, we will notify you by:",
      "• Posting a prominent notice on our website",
      "• Sending you an contact info notification (if you have provided your contact info )",
      "• Updating the \"Last Updated\" date at the top of this policy",
      "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
    ],
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
      "**FlexiNet**",
      "**contact info:** our support portal\n**Phone:** 888 208 1423",
      "We will respond to your inquiry within 30 business days.",
    ],
  },
];

export function PrivacyPolicyContent() {
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
