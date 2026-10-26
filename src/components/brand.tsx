import Link from "next/link";
import { cn } from "@/lib/classnames";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 48"
      fill="none"
      aria-hidden="true"
      className={cn("brand-mark", className)}
    >
      <path d="M2 4h12l12 27L38 4h12L32 44H20L2 4Z" fill="currentColor" />
      <path
        className="brand-spark"
        d="M21 4h11l-6 13-5-13Z"
        fill="currentColor"
        opacity=".55"
      />
    </svg>
  );
}

export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Veyra Interactive home"
      className={cn("brand group", className)}
    >
      <BrandMark className="size-10 text-accent transition-transform duration-300 group-hover:-rotate-6" />
      <span className="flex flex-col">
        <span className="brand-name">
          veyra<span className="text-accent">.</span>
        </span>
        <span className="brand-caption">INTERACTIVE</span>
      </span>
    </Link>
  );
}
