import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

const team = [
  {
    name: "Miko Tan",
    role: "Game Director",
    initials: "MT",
    className: "team-lime",
    line: "Chasing the feeling of playing something for the first time.",
  },
  {
    name: "Sofia Reyes",
    role: "Art Director",
    initials: "SR",
    className: "team-lavender",
    line: "Finding extraordinary worlds in the most ordinary things.",
  },
  {
    name: "Noah Brooks",
    role: "Technical Director",
    initials: "NB",
    className: "team-peach",
    line: "Turning impossible ideas into beautifully playable realities.",
  },
];
export default function TeamSection() {
  return (
    <section
      id="team"
      className="site-shell section-space"
      aria-labelledby="team-title"
    >
      <Reveal>
        <SectionHeading
          eyebrow="04 / BUILT BY PEOPLE WHO PLAY"
          title={
            <span id="team-title">
              Good people.
              <br />
              <span className="text-muted">Extraordinary worlds.</span>
            </span>
          }
          description="Different perspectives. One shared love of play. Meet the creative minds behind the Veyra concept."
        />
      </Reveal>
      <div className="team-grid">
        {team.map((person, index) => (
          <Reveal key={person.name} delay={index * 0.08}>
            <article className={`team-card ${person.className}`}>
              <div className="team-portrait" aria-hidden="true">
                <span className="portrait-orbit" />
                <span className="portrait-orbit orbit-offset" />
                <span className="team-initials">{person.initials}</span>
                <span className="team-index">PLAYER 0{index + 1}</span>
              </div>
              <div className="team-info">
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
                <ArrowUpRight size={20} aria-hidden="true" />
              </div>
              <p className="team-line">{person.line}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="team-join">
        <p>There’s always room for another original mind.</p>
        <ButtonLink href="/careers" variant="secondary">
          Find your party
        </ButtonLink>
      </div>
    </section>
  );
}
