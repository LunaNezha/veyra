"use client";

import { useCallback, useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function getServerSnapshot() {
  return false;
}

export function useScrolled(threshold: number): boolean {
  const getSnapshot = useCallback(
    () => window.scrollY > threshold,
    [threshold],
  );
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
