import type { StaticImageData } from "next/image";

export type Platform = "PC" | "Console" | "Mobile";
export interface Game {
  slug: string;
  title: string;
  genre: string;
  image: StaticImageData;
  imageAlt: string;
  platforms: readonly Platform[];
  status: "In development" | "Released";
  engine: string;
  tagline: string;
  description: string;
  features: readonly string[];
}
export interface Opening {
  id: string;
  title: string;
  department: "Engineering" | "Art" | "Design";
  location: string;
  description: string;
  responsibilities: readonly string[];
}
