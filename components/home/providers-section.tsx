"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Satellite, Globe, Tv, Wifi } from "lucide-react";

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
            icon: Globe,
            description: "A leading telecommunications provider delivering reliable connectivity and competitive plans.",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
          },
          {
            name: "HughesNet",
            icon: Satellite,
            description: "Delivers high-speed satellite internet to customers in even the most remote locations.",
            image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop",
          },
          {
            name: "DIRECTV",
            icon: Tv,
            description: "Offers a broad selection of satellite TV channels, sports, and premium content.",
            image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop",
          },
          {
            name: "Optimum",
            icon: Wifi,
            description: "A trusted internet provider delivering high-speed connectivity to homes at affordable rates.",
            image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
          },
        ].map((provider) => {
          const Icon = provider.icon;
          return (
            <motion.div
              key={provider.name}
              variants={cardVariants}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-background/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  <Icon className="h-6 w-6 text-primary" />
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
