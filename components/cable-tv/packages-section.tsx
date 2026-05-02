"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Entertainment",
    channels: "125+",
    price: "39.99",
    description: "Essential channels for everyday entertainment and news.",
    features: [
      "125+ channels including local",
      "HD quality on all channels",
      "Basic on-demand library",
      "Cloud DVR (50 hours)",
      "No annual contract",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    channels: "200+",
    price: "64.99",
    description: "Premium content including sports, movies, and series.",
    features: [
      "200+ channels including premium",
      "Full HD & select 4K content",
      "HBO, Showtime included",
      "Cloud DVR (200 hours)",
      "No annual contract",
      "Multi-room viewing",
    ],
    highlight: true,
  },
  {
    name: "Ultimate",
    channels: "350+",
    price: "89.99",
    description: "The complete entertainment experience for your home.",
    features: [
      "350+ channels — everything included",
      "4K Ultra HD on supported channels",
      "All premium channels included",
      "Unlimited cloud DVR",
      "No annual contract",
      "Multi-room & mobile viewing",
      "International channel packs",
    ],
    highlight: false,
  },
];

export function CableTVPackagesSection() {
  return (
    <SectionWrapper surface="white">
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3"
        >
          TV Packages
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight"
        >
          Pick the Perfect Package for You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base text-slate-grille max-w-2xl mx-auto"
        >
          All packages include HD quality, cloud DVR, and no hidden fees.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className={`relative rounded-sm p-8 ${
              pkg.highlight
                ? "bg-midnight-ink text-white ring-2 ring-spring-leaf"
                : "bg-fog-gray"
            }`}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-spring-leaf text-midnight-ink text-xs font-bold px-4 py-1 rounded-full">
                Best Value
              </div>
            )}
            <div className="mb-6">
              <h3
                className={`text-lg font-semibold ${
                  pkg.highlight ? "text-white" : "text-midnight-ink"
                }`}
              >
                {pkg.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${
                    pkg.highlight ? "text-spring-leaf" : "text-midnight-ink"
                  }`}
                >
                  ${pkg.price}
                </span>
                <span
                  className={`text-sm ${
                    pkg.highlight ? "text-ash-cloud" : "text-stone-whisper"
                  }`}
                >
                  /month
                </span>
              </div>
              <div
                className={`mt-1 text-xs font-medium text-electric-blue`}
              >
                {pkg.channels} channels
              </div>
              <p
                className={`mt-3 text-sm ${
                  pkg.highlight ? "text-ash-cloud/90" : "text-slate-grille"
                }`}
              >
                {pkg.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check
                    className={`h-4 w-4 mt-0.5 shrink-0 ${
                      pkg.highlight ? "text-spring-leaf" : "text-deep-teal"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      pkg.highlight ? "text-ash-cloud/90" : "text-slate-grille"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className={`w-full rounded-full font-semibold ${
                pkg.highlight
                  ? "bg-spring-leaf text-midnight-ink hover:bg-spring-leaf/90"
                  : "bg-midnight-ink text-white hover:bg-oceanic-deep"
              }`}
            >
              <Link href="/contact-us">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
