"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Globe, Shield, Wifi, Signal } from "lucide-react";

const providers = [
  {
    name: "Kinetic by Windstream",
    icon: Signal,
    speeds: "Up to 1 Gbps",
    description:
      "Kinetic by Windstream offers high-speed fiber internet with no data caps. Enjoy reliable connectivity with plans designed for both casual and heavy internet users.",
  },
  {
    name: "EarthLink",
    icon: Globe,
    speeds: "Up to 5 Gbps",
    description:
      "EarthLink provides ultra-fast fiber and wireless internet services with a focus on privacy and security. No data caps and no throttling — ever.",
  },
  {
    name: "Frontier Fiber",
    icon: Wifi,
    speeds: "Up to 2 Gbps",
    description:
      "Frontier brings fiber-optic internet to millions of homes across the U.S. with symmetrical upload and download speeds ideal for remote work and streaming.",
  },
  {
    name: "Optimum",
    icon: Shield,
    speeds: "Up to 1 Gbps",
    description:
      "Optimum delivers reliable cable and fiber internet at competitive prices, backed by a vast network and responsive customer service.",
  },
];

export function InternetIntroSection() {
  return (
    <SectionWrapper surface="white">
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3"
        >
          Top Providers
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight"
        >
          Discover the Best Internet Providers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base text-slate-grille max-w-2xl mx-auto"
        >
          Whether you need basic browsing or ultra-fast fiber, we connect you with the leading
          internet service providers offering the best deals in your area.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {providers.map((provider, index) => {
          const Icon = provider.icon;
          return (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5 bg-fog-gray rounded-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-mist">
                <Icon className="h-6 w-6 text-midnight-ink" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-semibold text-midnight-ink">{provider.name}</h3>
                  <span className="text-xs font-medium text-electric-blue bg-sky-mist px-2 py-0.5 rounded-full">
                    {provider.speeds}
                  </span>
                </div>
                <p className="text-sm text-slate-grille leading-relaxed">{provider.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
