"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";

const partners = [
  { name: "Cox", logo: "https://logo.uplead.com/cox.com" },
  { name: "Optimum", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Optimum_Rebranded_New_logo.webp" },
  { name: "Spectrum", logo: "https://logo.uplead.com/charter.com" },
  { name: "Xfinity", logo: "https://logo.uplead.com/xfinity.com" },
  { name: "DIRECTV", logo: "https://logo.uplead.com/directv.com" },
  { name: "DISH", logo: "https://logo.uplead.com/dish.com" },
  { name: "Verizon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Verizon_2024.svg/3840px-Verizon_2024.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
];

export function CableTVPartnersSection() {
  return (
    <SectionWrapper surface="fog">
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3"
        >
          Our TV Partners
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight"
        >
          Trusted Cable TV Providers
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
