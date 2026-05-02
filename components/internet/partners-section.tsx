"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Signal, Globe, Wifi, Shield } from "lucide-react";

const partners = [
  { name: "Kinetic", icon: Signal },
  { name: "EarthLink", icon: Globe },
  { name: "Frontier", icon: Wifi },
  { name: "Optimum", icon: Shield },
  { name: "AT&T", icon: Globe },
  { name: "HughesNet", icon: Signal },
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
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {partners.map((partner) => {
          const Icon = partner.icon;
          return (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-3 bg-surface-white rounded-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-mist">
                <Icon className="h-6 w-6 text-midnight-ink" />
              </div>
              <span className="text-sm font-semibold text-midnight-ink">{partner.name}</span>
            </div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
