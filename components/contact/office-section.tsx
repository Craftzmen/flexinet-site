"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Clock, Globe } from "lucide-react";

export function ContactOfficeSection() {
  return (
    <SectionWrapper surface="fog">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-surface-white rounded-sm p-8 text-center"
        >
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-mist mb-5">
            <Clock className="h-7 w-7 text-midnight-ink" />
          </div>
          <h3 className="text-lg font-semibold text-midnight-ink mb-2">Working Hours</h3>
          <p className="text-sm text-slate-grille leading-relaxed">
            Monday - Friday: 8:00 AM - 8:00 PM<br />
            Saturday: 9:00 AM - 5:00 PM<br />
            Sunday: 10:00 AM - 4:00 PM
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-surface-white rounded-sm p-8 text-center"
        >
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-mist mb-5">
            <Globe className="h-7 w-7 text-midnight-ink" />
          </div>
          <h3 className="text-lg font-semibold text-midnight-ink mb-2">Service Areas</h3>
          <p className="text-sm text-slate-grille leading-relaxed">
            Serving customers across<br />
            all 50 states in the<br />
            United States of America
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
