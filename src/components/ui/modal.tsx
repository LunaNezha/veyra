"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[100]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-200 data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4 sm:p-8">
        <DialogPanel
          transition
          className="relative max-h-[90svh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-panel shadow-2xl transition duration-200 data-[closed]:translate-y-4 data-[closed]:opacity-0"
        >
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
