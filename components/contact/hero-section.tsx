"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";

export function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
          alt="Customer support agent"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-8"
          >
            <Headphones className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              We&apos;re Here to Help
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
          >
            Get In Touch With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Have a technical issue, billing question, or need help choosing the right plan?
            Our team is ready to assist you every step of the way.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
