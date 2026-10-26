import { Box, Layers3, Orbit, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";

const capabilities = [
  {
    number: "01",
    icon: Layers3,
    name: "Unreal Engine 5",
    description:
      "Big worlds. Small details. Cinematic fidelity, immersive environments, and real-time performance.",
    tags: ["NANITE", "LUMEN", "WORLD BUILDING"],
    className: "tech-unreal",
  },
  {
    number: "02",
    icon: Box,
    name: "Unity",
    description:
      "Play, everywhere. Expressive experiences built to feel right on every screen, big or small.",
    tags: ["CROSS-PLATFORM", "MOBILE", "INTERACTION"],
    className: "tech-unity",
  },
  {
    number: "03",
    icon: Orbit,
    name: "Beyond the screen",
    description:
      "New dimensions of play. Exploring spatial experiences, connected worlds, and thoughtful Web3 systems.",
    tags: ["SPATIAL", "XR", "WEB3 R&D"],
    className: "tech-spatial",
  },
];
export default function TechnologySection() {
  return (
    <section
      id="technology"
      className="technology-section"
      aria-labelledby="technology-title"
    >
      <div className="site-shell section-space">
        <Reveal>
          <SectionHeading
            eyebrow="03 / THE TOOLS. THE POSSIBILITIES."
            title={
              <span id="technology-title">
                Imagination, <span className="text-muted">engineered.</span>
              </span>
            }
            description="Great technology gets out of the way. So the world, the story, and the player can take center stage."
          />
        </Reveal>
        <div className="tech-grid">
          {capabilities.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <GlowCard className={`tech-card ${item.className}`}>
                <div className="tech-card-top">
                  <span>{item.number} /</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
                <div className="tech-icon">
                  <item.icon size={43} strokeWidth={1.1} aria-hidden="true" />
                  <span aria-hidden="true" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="tech-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
