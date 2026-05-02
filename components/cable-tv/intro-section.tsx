"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Tv, Film, Radio, MonitorPlay } from "lucide-react";

const highlights = [
  {
    icon: Tv,
    title: "350+ Channels",
    description: "Access a massive lineup of channels covering sports, news, entertainment, and international programming.",
  },
  {
    icon: Film,
    title: "Premium Content",
    description: "Enjoy exclusive access to HBO, Showtime, Starz, and other premium movie and series channels.",
  },
  {
    icon: Radio,
    title: "Live Sports",
    description: "Never miss a game with comprehensive sports coverage including NFL, NBA, MLB, and more.",
  },
  {
    icon: MonitorPlay,
    title: "On-Demand Library",
    description: "Watch what you want, when you want. Thousands of on-demand titles at your fingertips.",
  },
];

export function CableTVIntroSection() {
  return (
    <SectionWrapper surface="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3">
            Cable TV Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight">
            Experience the Best Cable TV Deals in Your Area
          </h2>
          <p className="mt-4 text-base text-slate-grille leading-relaxed">
            Whether you&apos;re a sports fanatic, movie lover, or just looking for quality family
            entertainment, our cable TV partners offer the best packages at unbeatable prices.
            Compare plans, channels, and features side by side.
          </p>
          <p className="mt-3 text-base text-slate-grille leading-relaxed">
            Bundle your cable TV with internet and phone services to save even more on your
            monthly bill. Our experts will help you find the perfect combination.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-fog-gray rounded-sm p-5 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-warm-mist mb-3">
                  <Icon className="h-5 w-5 text-midnight-ink" />
                </div>
                <h4 className="text-sm font-semibold text-midnight-ink mb-1">{item.title}</h4>
                <p className="text-xs text-stone-whisper leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
