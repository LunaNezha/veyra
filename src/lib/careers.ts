import type { Opening } from "@/types/studio";

export const openings = [
  {
    id: "eng-01",
    title: "Senior Gameplay Engineer",
    department: "Engineering",
    location: "Remote · Full-time",
    description:
      "Turn ambitious ideas into interactions that feel effortless. Work closely with design and art to make every moment of play matter.",
    responsibilities: [
      "Prototype and refine core gameplay systems",
      "Build expressive, performance-conscious tools",
      "Collaborate across disciplines from first sketch to final polish",
    ],
  },
  {
    id: "art-01",
    title: "3D Environment Artist",
    department: "Art",
    location: "Remote · Full-time",
    description:
      "Build places players remember. Bring an eye for composition, atmosphere, and the little details that make a world feel alive.",
    responsibilities: [
      "Create compelling environments and world assets",
      "Shape lighting and visual storytelling",
      "Balance beautiful art with real-time performance",
    ],
  },
  {
    id: "des-01",
    title: "Game Designer",
    department: "Design",
    location: "Remote · Full-time",
    description:
      "Find the fun, then make it unforgettable. Connect inventive mechanics with thoughtful systems and player-first design.",
    responsibilities: [
      "Prototype new mechanics and player journeys",
      "Turn playtest observations into better experiences",
      "Document and communicate ideas with clarity",
    ],
  },
] as const satisfies readonly Opening[];
