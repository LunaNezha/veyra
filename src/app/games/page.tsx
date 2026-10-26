import { createPageMetadata } from "@/lib/metadata";
import GamesShowcase from "@/components/sections/games-showcase";
export const metadata = createPageMetadata({
  title: "Our games",
  description:
    "Explore ECHOFALL, NEON DIVIDE, and WILDLIGHT: three fictional game worlds across PC, console, and mobile in the Veyra Interactive showcase.",
  path: "/games",
});
export default function GamesPage() {
  return (
    <div className="subpage">
      <div className="site-shell page-intro">
        <p className="eyebrow">THE VEYRA COLLECTION</p>
        <h1>
          Find your next
          <br />
          <span className="text-accent">obsession.</span>
        </h1>
        <p>Three original universes. Countless ways to get lost.</p>
      </div>
      <GamesShowcase />
    </div>
  );
}
