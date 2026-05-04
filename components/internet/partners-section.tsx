"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";

const partners = [
  { name: "Kinetic", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJptsz9T2ctjwpIBvAsVrQv8C4oYY3CC16Q&s" },
  { name: "EarthLink", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8vLIguYjRUwsMSH_n0VxOXNgGrVEFlr_bQ&s" },
  { name: "Frontier", logo: "https://logo.uplead.com/frontier.com" },
  { name: "Optimum", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Optimum_Rebranded_New_logo.webp " },
  { name: "AT&T", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
  { name: "Verizon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Verizon_2024.svg/3840px-Verizon_2024.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
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
              <div className="flex h-36 w-36 items-center justify-center p-2">
                <img src={partner.logo} alt={`${partner.name} logo`} className="w-36 h-36 object-contain" />
              </div>
              <span className="text-sm font-semibold text-midnight-ink">{partner.name}</span>
            </div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
