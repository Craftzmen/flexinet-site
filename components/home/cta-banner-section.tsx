"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABannerSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Global connectivity"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto bg-background/5 p-8 sm:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-background tracking-tight"
          >
            Discover Your Perfect Bundle Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-muted leading-relaxed"
          >
            Find the best internet, TV, and phone plans near you — fast and easy.
            Start comparing now and save on your monthly bill.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:-translate-y-1 transition-all rounded-full px-10 h-14 text-lg font-bold"
            >
              <Link href="/contact-us">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
