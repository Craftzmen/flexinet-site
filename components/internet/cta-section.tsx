"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function InternetCTASection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 border-t border-border/50">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto bg-card border border-border rounded-3xl p-10 sm:p-14 shadow-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Ready to Get Connected?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Compare the best internet plans in your area and start saving today.
            Our experts are standing by to help you find the perfect plan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 rounded-full px-8 h-12 font-semibold transition-all"
            >
              <Link href="/contact-us">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted rounded-full px-8 h-12 font-semibold transition-all"
            >
              <Link href="/contact-us">Call Us Now</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
