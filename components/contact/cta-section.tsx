"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function ContactCTASection() {
  return (
    <section className="relative overflow-hidden bg-midnight-ink">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-36 w-36 rounded-full bg-spring-leaf/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-44 w-44 rounded-full bg-deep-teal/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Need Immediate Help?
            </h2>
            <p className="mt-2 text-base text-ash-cloud/90">
              Call us directly and speak with a specialist now.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-spring-leaf text-midnight-ink hover:bg-spring-leaf/90 rounded-full px-8 font-semibold"
            >
              <Link href="tel:+18882081423">
                <Phone className="mr-2 h-4 w-4" />
                Call 888 208 1423
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
