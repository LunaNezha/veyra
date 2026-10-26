"use client";

import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import { cn } from "@/lib/classnames";
import { useScrolled } from "@/hooks/use-scrolled";
import { Brand } from "@/components/brand";

export default function Navbar({ onOpen }: { onOpen: () => void }) {
  const pathname = usePathname();
  const scrolled = useScrolled(15);
  return (
    <header className={cn("site-header", scrolled && "is-scrolled")}>
      <div className="site-shell flex h-full items-center justify-between gap-6">
        <Brand />
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "nav-link",
                    pathname === item.href && "text-accent",
                  )}
                >
                  {item.name}
                  {item.href === "/careers" && (
                    <span className="nav-count">3</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/contact-us"
          className="button button-secondary hidden !min-h-11 !px-5 !py-2 md:inline-flex"
        >
          Let’s talk
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
          className="flex size-11 items-center justify-center rounded-full border border-white/15 hover:border-accent/50 md:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
