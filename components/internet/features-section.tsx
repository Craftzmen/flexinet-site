"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Zap, Infinity, Shuffle, DollarSign } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Speeds",
    description:
      "Stream, game, and work from home without lag. Our provider partners deliver speeds up to 5 Gbps so you can do more, faster.",
    accent: "bg-warm-mist",
  },
  {
    icon: Infinity,
    title: "No Data Caps",
    description:
      "Enjoy unlimited data with no throttling or overage fees. Use the internet as much as you want without worrying about hidden limits.",
    accent: "bg-sky-mist",
  },
  {
    icon: Shuffle,
    title: "Freedom to Choose",
    description:
      "Compare multiple providers side by side. No contracts required on many plans — switch whenever you find a better deal.",
    accent: "bg-pale-mint",
  },
  {
    icon: DollarSign,
    title: "Reliable Pricing",
    description:
      "Transparent pricing with no hidden fees. What you see is what you pay — helping you budget with confidence every month.",
    accent: "bg-warm-mist",
  },
];

export function InternetFeaturesSection() {
  return (
    <SectionWrapper surface="canvas">
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3"
        >
          Why Choose Our Internet
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight"
        >
          Internet That Works as Hard as You Do
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-white rounded-sm p-8 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.accent} mb-5`}
              >
                <Icon className="h-7 w-7 text-midnight-ink" />
              </div>
              <h3 className="text-base font-semibold text-midnight-ink mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-grille leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
