"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import { Brand } from "@/components/brand";

export default function Drawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[90]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-200 data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 flex justify-end">
        <DialogPanel
          transition
          className="relative flex h-full w-full max-w-sm flex-col gap-12 border-l border-white/10 bg-background p-7 transition duration-300 data-[closed]:translate-x-full"
        >
          <DialogTitle className="sr-only">Main navigation</DialogTitle>
          <div className="flex items-center justify-between">
            <Brand />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex size-11 items-center justify-center rounded-full border border-white/15"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="flex min-h-16 items-center justify-between border-b border-white/10 py-4 text-2xl hover:text-accent"
                  >
                    <span>
                      <span className="mr-4 font-mono text-xs text-muted">
                        0{index + 1}
                      </span>
                      {item.name}
                    </span>
                    <ArrowUpRight aria-hidden="true" className="size-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/contact-us"
            onClick={onClose}
            className="button button-primary"
          >
            Let’s make something great
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
          <p className="mt-auto text-sm text-muted">
            Independent minds.
            <br />
            Unforgettable games.
          </p>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
