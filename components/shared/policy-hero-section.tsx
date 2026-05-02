"use client";

import { motion } from "framer-motion";
import { Shield, FileText } from "lucide-react";

interface PolicyHeroProps {
  title: string;
  description: string;
  icon?: "shield" | "file";
}

export function PolicyHeroSection({ title, description, icon = "shield" }: PolicyHeroProps) {
  const Icon = icon === "shield" ? Shield : FileText;

  return (
    <section className="relative overflow-hidden bg-midnight-ink">
      <div className="absolute inset-0">
        <div className="absolute -top-20 right-1/4 h-48 w-48 rounded-full bg-deep-teal/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-spring-leaf/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-spring-leaf/15 px-4 py-1.5 mb-6"
          >
            <Icon className="h-3.5 w-3.5 text-spring-leaf" />
            <span className="text-xs font-semibold text-spring-leaf uppercase tracking-wider">
              Legal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-ash-cloud/90 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xs text-ash-cloud/60"
          >
            Last updated: May 1, 2026
          </motion.p>
        </div>
      </div>
    </section>
  );
}
