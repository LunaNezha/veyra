import Hero from "@/components/sections/hero";
import GamesShowcase from "@/components/sections/games-showcase";
import StudioSection from "@/components/sections/studio";
import TechnologySection from "@/components/sections/technology";
import TeamSection from "@/components/sections/team";
import CareersSection from "@/components/sections/careers";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GamesShowcase />
      <StudioSection />
      <TechnologySection />
      <TeamSection />
      <CareersSection />
    </>
  );
}
