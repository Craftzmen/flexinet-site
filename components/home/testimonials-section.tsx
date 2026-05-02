"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Home User",
    content:
      "FlexiNet made it incredibly easy to find the best internet and TV deals in my area. I entered my zip code and had multiple options to compare within minutes. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "James Rodriguez",
    role: "Small Business Owner",
    content:
      "I was tired of overpaying for my internet service. Thanks to FlexiNet, I found a faster plan at a much better price. The process was quick and stress-free.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Emily Chen",
    role: "Remote Worker",
    content:
      "Finding reliable internet where I live was always a challenge. FlexiNet helped me connect with top providers and choose a plan that perfectly fits my needs.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper surface="white" className="bg-muted/10">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight"
        >
          What Our Customers Say
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative bg-card rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-border"
          >
            <Quote className="absolute top-8 right-8 h-10 w-10 text-primary/10" />
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                />
              ))}
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 italic">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div className="flex items-center gap-4 border-t border-border/50 pt-6">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <div className="text-base font-bold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
