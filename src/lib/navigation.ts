import type { NavigationItem } from "@/types/navigation";

export const navigation = [
  { name: "Our games", href: "/games" },
  { name: "The studio", href: "/studio" },
  { name: "Careers", href: "/careers" },
] as const satisfies readonly NavigationItem[];
