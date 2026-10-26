import { createPageMetadata } from "@/lib/metadata";
import CareersSection from "@/components/sections/careers";
export const metadata = createPageMetadata({
  title: "Careers",
  description:
    "Explore illustrative engineering, art, and design roles at Veyra Interactive, a fictional gaming studio portfolio concept.",
  path: "/careers",
});
export default function CareersPage() {
  return (
    <div className="subpage">
      <h1 className="sr-only">Careers at Veyra Interactive</h1>
      <CareersSection />
    </div>
  );
}
