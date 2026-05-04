"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProvidersSection() {
  return (
    <SectionWrapper surface="canvas" className="bg-muted/50">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4"
        >
          Trusted Partners
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight"
        >
          We Partner With the Best
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We are dedicated to delivering exceptional service and value by partnering with some of the
          most trusted cable and internet companies across the United States.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {[
          {
            name: "AT&T",
            description:
              "A leading telecommunications provider delivering reliable connectivity and competitive plans.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
          },
          {
            name: "Verizon",
            description:
              "Nationwide wireless and fiber internet with dependable speeds and broad coverage for homes and businesses.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Verizon_2024.svg/3840px-Verizon_2024.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
          },
          {
            name: "DIRECTV",
            description:
              "Offers a broad selection of satellite TV channels, sports, and premium content.",
            logo: "https://logo.uplead.com/directv.com",
          },
          {
            name: "Optimum",
            description:
              "A trusted internet provider delivering high-speed connectivity to homes at affordable rates.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Optimum_Rebranded_New_logo.webp",
          },
        ].map((provider) => {
          return (
            <motion.div
              key={provider.name}
              variants={cardVariants}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 flex items-center justify-center bg-muted/40 px-6">
                <div className="flex h-36 items-center justify-center p-2">
                  <img
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                    className="w-36"
                  />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {provider.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {provider.description}
                </p>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <span className="text-sm font-semibold text-primary group-hover:text-blue-500 transition-colors flex items-center gap-1 cursor-pointer">
                    View Plans <span className="text-lg leading-none">&rarr;</span>
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
