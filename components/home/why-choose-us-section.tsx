"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Shield, BarChart3, Users, Settings } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Optimized Bundles",
    description:
      "We provide carefully optimized bundles designed to give you the most benefits while helping you save more on internet, TV, and phone services.",
  },
  {
    icon: Users,
    title: "Personalized Matching",
    description:
      "Enter your ZIP code and we'll present a curated list of high-speed, reliable providers available near you — tailored to your needs.",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. We show you the real cost upfront so you can make informed decisions with confidence.",
  },
  {
    icon: Settings,
    title: "Seamless Setup",
    description:
      "From comparing plans to getting connected, our streamlined process makes it easy to get online in no time.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhyChooseUsSection() {
  return (
    <SectionWrapper className="bg-muted/30 relative border-y border-border/50">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        {/* Left column — intro text */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Why FlexiNet
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            What Makes Us Different
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
            While many providers make big promises, few deliver the level of service and efficiency
            we do. What truly sets FlexiNet apart is our commitment to understanding your needs and
            delivering real value.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">
            We don&apos;t just offer options — we provide carefully optimized bundles designed to give you
            the most benefits while helping you save more on the services you need.
          </p>
        </motion.div>

        {/* Right column — feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group bg-card rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-border hover:border-primary/30 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 bg-primary/5 w-24 h-24 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
