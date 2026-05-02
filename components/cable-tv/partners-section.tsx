"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Tv, Satellite, Radio, MonitorPlay, Signal, Wifi } from "lucide-react";

const partners = [
  { name: "Cox", icon: Tv },
  { name: "Optimum", icon: Wifi },
  { name: "Spectrum", icon: Signal },
  { name: "Xfinity", icon: MonitorPlay },
  { name: "DIRECTV", icon: Satellite },
  { name: "DISH", icon: Radio },
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
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {partners.map((partner) => {
          const Icon = partner.icon;
          return (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-3 bg-surface-white rounded-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warm-mist">
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
