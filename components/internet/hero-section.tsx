"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi } from "lucide-react";

export function InternetHeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 mb-8"
            >
              <Wifi className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                High-Speed Internet
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              Upgrade to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                Ultra-Fast
              </span>{" "}
              Fiber Internet
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Discover top internet providers in your area. Compare speeds, prices, and plans
              to find the perfect connection for your home or business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all rounded-full px-8 h-14 text-base font-semibold"
              >
                <Link href="/contact-us">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted hover:text-foreground rounded-full px-8 h-14 text-base font-semibold transition-all"
              >
                <Link href="/contact-us">Chat With Us</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-blue-500/20 to-primary/20 transform -rotate-3 scale-105" />
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
              alt="High-speed fiber optic network"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-border/50"
            />
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -right-6 bg-background rounded-2xl p-4 shadow-xl border border-border/50 flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Wifi className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">5 Gbps</p>
                <p className="text-xs font-medium text-muted-foreground">Max Download Speed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
