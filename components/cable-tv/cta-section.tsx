"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CableTVCTASection() {
  return (
    <section className="relative overflow-hidden bg-midnight-ink">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 h-36 w-36 rounded-full bg-amber-pop/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-44 w-44 rounded-full bg-spring-leaf/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Start Watching Your Favorites Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-ash-cloud/90"
          >
            Compare cable TV packages in your area and find the entertainment bundle
            that fits your lifestyle and budget.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-spring-leaf text-midnight-ink hover:bg-spring-leaf/90 rounded-full px-8 font-semibold"
            >
              <Link href="/contact-us">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-spring-leaf/40 text-white hover:bg-spring-leaf/10 hover:text-white rounded-full px-8 font-semibold"
            >
              <Link href="/contact-us">Call Us Now</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
