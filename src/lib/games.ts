import type { Game } from "@/types/studio";
import echo from "../../public/games/hero.webp";
import neon from "../../public/games/racing.webp";
import wildlight from "../../public/games/forest.webp";

export const games = [
  {
    slug: "echofall",
    title: "ECHOFALL",
    genre: "Open-world adventure",
    image: echo,
    imageAlt:
      "A lone explorer overlooks an alien ocean beneath an enormous celestial eclipse",
    platforms: ["PC", "Console"],
    status: "In development",
    engine: "Unreal Engine 5",
    tagline: "Some worlds are waiting to be found.",
    description:
      "Follow a signal beyond the edge of the known universe. Traverse a planet that remembers its visitors, uncover impossible architecture, and decide which echoes to leave behind.",
    features: [
      "A seamless alien world",
      "Exploration shaped by your choices",
      "A cinematic, original soundscape",
    ],
  },
  {
    slug: "neon-divide",
    title: "NEON DIVIDE",
    genre: "Arcade racing",
    image: neon,
    imageAlt:
      "A futuristic white race car streaks through a violet-lit city at night",
    platforms: ["PC", "Console"],
    status: "In development",
    engine: "Unreal Engine 5",
    tagline: "Own the night. Rewrite the limits.",
    description:
      "Find your line through a city that never slows down. Build a machine that feels like you, chase impossible corners, and turn every midnight run into a story.",
    features: [
      "Expressive vehicle customization",
      "Fast, precision arcade handling",
      "A rain-soaked, neon metropolis",
    ],
  },
  {
    slug: "wildlight",
    title: "WILDLIGHT",
    genre: "Cozy exploration",
    image: wildlight,
    imageAlt:
      "A traveler with an amber lantern enters a sunlit, overgrown fantasy archway",
    platforms: ["PC", "Mobile"],
    status: "Released",
    engine: "Unity",
    tagline: "A small light. An extraordinary journey.",
    description:
      "Take the scenic route through a forgotten forest. Befriend its curious inhabitants, restore its ancient gardens, and discover the quiet magic of getting a little lost.",
    features: [
      "Explore at your own pace",
      "Tactile environmental puzzles",
      "A hand-crafted world for small screens",
    ],
  },
] as const satisfies readonly Game[];
