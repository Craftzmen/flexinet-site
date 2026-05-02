import { cn } from "@/lib/utils";

type SurfaceVariant = "canvas" | "white" | "fog" | "pale-mint" | "warm-mist" | "sky-mist" | "midnight" | "oceanic";

const surfaceClasses: Record<SurfaceVariant, string> = {
  canvas: "bg-canvas",
  white: "bg-surface-white",
  fog: "bg-fog-gray",
  "pale-mint": "bg-pale-mint",
  "warm-mist": "bg-warm-mist",
  "sky-mist": "bg-sky-mist",
  midnight: "bg-midnight-ink text-white",
  oceanic: "bg-oceanic-deep text-white",
};

interface SectionWrapperProps {
  children: React.ReactNode;
  surface?: SurfaceVariant;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export function SectionWrapper({
  children,
  surface = "white",
  className,
  id,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        surfaceClasses[surface],
        !noPadding && "py-24 md:py-32",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
