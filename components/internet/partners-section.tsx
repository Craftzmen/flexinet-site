"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";

const partners = [
  { name: "Kinetic", logo: "https://www.google.com/s2/favicons?domain=windstream.com&sz=256" },
  { name: "EarthLink", logo: "https://www.google.com/s2/favicons?domain=earthlink.net&sz=256" },
  { name: "Frontier", logo: "https://logo.uplead.com/frontier.com" },
  { name: "Optimum", logo: "https://logo.uplead.com/optimum.com" },
  { name: "AT&T", logo: "https://logo.uplead.com/att.com" },
  { name: "HughesNet", logo: "https://logo.uplead.com/hughesnet.com" },
  { name: "Verizon", logo: "https://logo.uplead.com/verizon.com" },
];

export function InternetPartnersSection() {
  return (
    <SectionWrapper surface="fog">
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3"
        >
          Our Network
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight"
        >
          Trusted Internet Partners
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-8"
      >
        {partners.map((partner) => {
          return (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-6 bg-surface-white rounded-sm p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex h-28 w-28 items-center justify-center p-2">
                <img src={partner.logo} alt={`${partner.name} logo`} className="w-24 h-24 object-contain" />
              </div>
              <span className="text-sm font-semibold text-midnight-ink">{partner.name}</span>
            </div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
