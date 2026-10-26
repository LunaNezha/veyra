"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/classnames";

export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const background = useMotionTemplate`radial-gradient(380px circle at ${x}px ${y}px, rgba(212, 250, 115, 0.12), transparent 75%)`;
  return (
    <div
      className={cn("glow-card group relative", className)}
      onPointerMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }}
    >
      {children}
      <motion.div
        aria-hidden="true"
        style={{ background }}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
}
