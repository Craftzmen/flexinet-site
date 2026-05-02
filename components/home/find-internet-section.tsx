"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Zap, Package, Headphones } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Wide Availability",
    description: "Enter your ZIP code and instantly find providers in your area.",
  },
  {
    icon: Zap,
    title: "Fast Speeds",
    description: "Access plans with speeds up to 5 Gbps for seamless streaming and gaming.",
  },
  {
    icon: Package,
    title: "Bundled Deals",
    description: "Save more with internet, TV, and phone bundles from top providers.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    description: "Get assistance 24/7 from our dedicated customer support team.",
  },
];

export function FindInternetSection() {
  return (
    <SectionWrapper surface="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Looking for the Best Internet Near You?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Finding the right internet service provider doesn&apos;t have to be stressful. A fast and dependable
            internet connection can make a big difference in your everyday life. Enter your ZIP code
            and instantly compare the top internet providers in your area.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">{benefit.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold transition-all"
            >
              <Link href="/contact-us">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border text-foreground hover:bg-muted rounded-full px-8 h-12 text-base font-semibold transition-all"
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-full min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2070&auto=format&fit=crop"
            alt="Person working from home with fast internet"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-background/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">Check Availability</h3>
              {/* Fake search bar */}
              <div className="bg-muted rounded-full px-4 py-3 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground font-medium flex-1">Enter your ZIP code...</span>
                <button className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-md">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
