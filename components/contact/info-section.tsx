"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Phone, Clock } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "+01-123-456-7890",
    secondary: "Mon - Fri, 8:00 AM - 8:00 PM EST",
    description: "Speak directly with our team for immediate assistance with your internet or TV services.",
    accent: "bg-pale-mint",
  },
  {
    icon: Clock,
    title: "Business Hours",
    primary: "Mon - Fri: 8AM - 8PM",
    secondary: "Sat - Sun: 9AM - 5PM",
    description: "Our support team is available during business hours. Emergency support available 24/7.",
    accent: "bg-warm-mist",
  },
];

export function ContactInfoSection() {
  return (
    <SectionWrapper surface="white">
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3"
        >
          Contact Information
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight"
        >
          Multiple Ways to Reach Us
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-fog-gray rounded-sm p-6 hover:shadow-md transition-shadow"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.accent} mb-4`}
              >
                <Icon className="h-6 w-6 text-midnight-ink" />
              </div>
              <h3 className="text-base font-semibold text-midnight-ink mb-1">
                {card.title}
              </h3>
              <p className="text-sm font-medium text-midnight-ink">{card.primary}</p>
              <p className="text-xs text-stone-whisper mb-3">{card.secondary}</p>
              <p className="text-xs text-slate-grille leading-relaxed">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
