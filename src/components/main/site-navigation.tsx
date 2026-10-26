"use client";

import { useState } from "react";
import Drawer from "./drawer";
import Navbar from "./navbar";

export default function SiteNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar onOpen={() => setOpen(true)} />
      <Drawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
