// Wrapper per sezioni con padding, larghezza e sfondi consistenti

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "surface" | "dark" | "gradient";
}

export default function SectionWrapper({
  children,
  className,
  id,
  background = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-4 py-16 sm:px-6 md:py-24 lg:px-8",
        background === "surface" && "bg-surface",
        background === "dark" && "bg-foreground text-white",
        background === "gradient" && "gradient-mesh",
        className
      )}
    >
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
