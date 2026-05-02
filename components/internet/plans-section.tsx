"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "29.99",
    description: "Perfect for light browsing and social media.",
    features: [
      "Download speeds up to 100 Mbps",
      "Unlimited data usage",
      "Free modem rental",
      "24/7 technical support",
      "No annual contract",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    speed: "500 Mbps",
    price: "49.99",
    description: "Ideal for streaming, gaming, and working from home.",
    features: [
      "Download speeds up to 500 Mbps",
      "Unlimited data usage",
      "Free Wi-Fi router included",
      "Priority 24/7 support",
      "No annual contract",
      "Free installation",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    speed: "1 Gbps",
    price: "69.99",
    description: "Best for power users and large households.",
    features: [
      "Download speeds up to 1 Gbps",
      "Unlimited data usage",
      "Premium Wi-Fi 6 router",
      "Dedicated support line",
      "No annual contract",
      "Free professional installation",
      "Static IP available",
    ],
    highlight: false,
  },
];

export function InternetPlansSection() {
  return (
    <SectionWrapper surface="white">
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3"
        >
          Plans & Pricing
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight"
        >
          Choose the Plan That Fits Your Needs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base text-slate-grille max-w-2xl mx-auto"
        >
          All plans include unlimited data, no hidden fees, and 24/7 customer support.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className={`relative rounded-sm p-8 ${
              plan.highlight
                ? "bg-midnight-ink text-white ring-2 ring-spring-leaf"
                : "bg-fog-gray"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-spring-leaf text-midnight-ink text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <div className="mb-6">
              <h3
                className={`text-lg font-semibold ${
                  plan.highlight ? "text-white" : "text-midnight-ink"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlight ? "text-spring-leaf" : "text-midnight-ink"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlight ? "text-ash-cloud" : "text-stone-whisper"
                  }`}
                >
                  /month
                </span>
              </div>
              <div
                className={`mt-1 text-xs font-medium ${
                  plan.highlight ? "text-electric-blue" : "text-electric-blue"
                }`}
              >
                {plan.speed}
              </div>
              <p
                className={`mt-3 text-sm ${
                  plan.highlight ? "text-ash-cloud/90" : "text-slate-grille"
                }`}
              >
                {plan.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check
                    className={`h-4 w-4 mt-0.5 shrink-0 ${
                      plan.highlight ? "text-spring-leaf" : "text-deep-teal"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      plan.highlight ? "text-ash-cloud/90" : "text-slate-grille"
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
                plan.highlight
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
