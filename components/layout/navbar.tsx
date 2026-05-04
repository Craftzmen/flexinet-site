"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/internet", label: "Internet" },
  { href: "/cable-tv", label: "Cable TV" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm transition-all duration-300">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-inner group-hover:scale-105 transition-transform duration-300">
            <Wifi className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            Flexi<span className="text-primary">Net</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            className="bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90 rounded-full px-6 transition-all duration-300"
          >
            <Link href="/contact-us">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background p-0 border-l border-border/50">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border/50">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                      <Wifi className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold text-foreground">
                      Flexi<span className="text-primary">Net</span>
                    </span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-2 p-6">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 text-base font-semibold rounded-xl transition-colors",
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-auto p-6 border-t border-border/50 flex flex-col gap-3">
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground shadow-md hover:shadow-lg rounded-full font-semibold"
                  >
                    <Link href="/contact-us" onClick={() => setOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
