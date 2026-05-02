"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { MonitorPlay, Eye, DollarSign, Layers } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Extensive Channel Lineup",
    description:
      "From local channels to international networks, enjoy a comprehensive lineup that covers every genre and interest for the entire family.",
    accent: "bg-sky-mist",
  },
  {
    icon: Eye,
    title: "Crystal-Clear Quality",
    description:
      "Experience stunning HD and 4K picture quality with Dolby surround sound. Every show, movie, and game comes alive on your screen.",
    accent: "bg-pale-mint",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Get the best value for your money with competitive pricing and no hidden fees. Bundle with internet to save even more.",
    accent: "bg-warm-mist",
  },
  {
    icon: MonitorPlay,
    title: "On-Demand Content",
    description:
      "Access thousands of movies and shows on demand. Pause, rewind, and record live TV so you never miss a moment.",
    accent: "bg-sky-mist",
  },
];

export function CableTVFeaturesSection() {
  return (
    <SectionWrapper surface="canvas">
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3"
        >
          Why Choose Cable TV
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight"
        >
          Entertainment That Brings Your Home to Life
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
