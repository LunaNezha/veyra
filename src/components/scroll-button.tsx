"use client";

import { ArrowUp } from "lucide-react";
import { useScrolled } from "@/hooks/use-scrolled";

export default function ScrollButton() {
  const scrolled = useScrolled(800);
  if (!scrolled) return null;
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        })
      }
      className="fixed bottom-5 right-5 z-40 flex size-11 items-center justify-center rounded-full border border-white/20 bg-panel/90 text-accent shadow-xl backdrop-blur-md transition-colors hover:border-accent"
    >
      <ArrowUp className="size-4" aria-hidden="true" />
    </button>
  );
}
