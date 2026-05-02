"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper surface="canvas">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold text-deep-teal uppercase tracking-wider mb-3">
            Send a Message
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-midnight-ink tracking-tight">
            We&apos;d Love to Hear From You
          </h2>
          <p className="mt-4 text-base text-slate-grille leading-relaxed">
            Whether you have a question about our services, need help with your account,
            or want to explore the best deals in your area — fill out the form and our team
            will get back to you within 24 hours.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 bg-surface-white rounded-sm p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pale-mint">
                <span className="text-lg">⚡</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-midnight-ink">Quick Response</h4>
                <p className="text-xs text-stone-whisper">We typically respond within 24 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-surface-white rounded-sm p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-mist">
                <span className="text-lg">🔒</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-midnight-ink">Secure & Private</h4>
                <p className="text-xs text-stone-whisper">Your information is safe with us</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-surface-white rounded-sm p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warm-mist">
                <span className="text-lg">🎯</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-midnight-ink">Expert Guidance</h4>
                <p className="text-xs text-stone-whisper">Our specialists know every plan inside out</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-surface-white rounded-sm p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-midnight-ink"
                >
                  Full Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="John Doe"
                  required
                  className="rounded-sm border-ash-cloud/50 focus:border-spring-leaf"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-info"
                  className="text-sm font-medium text-midnight-ink"
                >
                  Contact Info
                </label>
                <Input
                  id="contact-info"
                  type="text"
                  placeholder="Your contact info"
                  required
                  className="rounded-sm border-ash-cloud/50 focus:border-spring-leaf"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="contact-phone"
                  className="text-sm font-medium text-midnight-ink"
                >
                  Phone Number
                </label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="rounded-sm border-ash-cloud/50 focus:border-spring-leaf"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium text-midnight-ink"
                >
                  Subject
                </label>
                <Select>
                  <SelectTrigger
                    id="contact-subject"
                    className="rounded-sm border-ash-cloud/50"
                  >
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="internet">Internet Plans</SelectItem>
                    <SelectItem value="cable-tv">Cable TV</SelectItem>
                    <SelectItem value="bundle">Bundle Deals</SelectItem>
                    <SelectItem value="billing">Billing Inquiry</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="text-sm font-medium text-midnight-ink"
              >
                Message
              </label>
              <Textarea
                id="contact-message"
                placeholder="Tell us how we can help you..."
                rows={5}
                required
                className="rounded-sm border-ash-cloud/50 focus:border-spring-leaf resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={submitted}
              className="w-full bg-midnight-ink text-white hover:bg-oceanic-deep rounded-full font-semibold"
            >
              {submitted ? (
                "Message Sent! ✓"
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
