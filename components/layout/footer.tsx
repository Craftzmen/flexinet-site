"use client";

import Link from "next/link";
import { Wifi, Phone } from "lucide-react";

const serviceLinks = [
  { href: "/", label: "Home" },
  { href: "/internet", label: "Internet" },
  { href: "/cable-tv", label: "Cable TV" },
];

const quickLinks = [
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-inner group-hover:scale-105 transition-transform duration-300">
                <Wifi className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-background">
                Flexi<span className="text-primary">Net</span>
              </span>
            </Link>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-md">
              Helping you find the best internet, TV, and phone deals at the most competitive prices across the United States. Fast, reliable, and tailored to your needs.
            </p>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-background uppercase tracking-wider">
                Subscribe to our newsletter
              </h4>
              <form className="flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Enter your details"
                  className="flex-1 rounded-full border border-border/20 bg-background/5 px-4 py-2 text-sm text-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-sm font-bold text-background uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-background uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-background uppercase tracking-wider mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+18882081423"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  888 208 1423
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              © {new Date().getFullYear()} FlexiNet. All Rights Reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacy-policy"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund-policy"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
