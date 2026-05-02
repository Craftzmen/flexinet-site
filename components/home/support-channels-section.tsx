"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { MessageCircle, Phone } from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    title: "Connect via Chat",
    description:
      "For instant help, connect with us through live chat. Our team is ready to answer your questions in real-time and guide you to the perfect plan.",
    accent: "bg-sky-mist",
    iconColor: "text-indigo-pop",
  },
  {
    icon: Phone,
    title: "Connect via Call",
    description:
      "Stay connected with us on call for quick and convenient support. Speak directly with our experts who understand your connectivity needs.",
    accent: "bg-pale-mint",
    iconColor: "text-midnight-ink",
  },
];

export function SupportChannelsSection() {
  return (
    <SectionWrapper className="bg-primary/5 relative">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      
      <div className="relative text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4"
        >
          Unmatched Customer Support
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight"
        >
          Reliable Assistance Whenever You Need It
        </motion.h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {channels.map((channel, index) => {
          const Icon = channel.icon;
          return (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group bg-card rounded-2xl p-8 text-center border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mb-6`}
              >
                <Icon className={`h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {channel.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {channel.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
