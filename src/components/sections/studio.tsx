import { ArrowUpRight, Asterisk, Sparkles, Heart, Compass } from "lucide-react";
import { BrandMark } from "@/components/brand";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/motion";

export default function StudioSection() {
  return (
    <section
      id="studio"
      className="site-shell section-space studio-section"
      aria-labelledby="studio-title"
    >
      <Reveal className="studio-grid">
        <div className="studio-art" aria-hidden="true">
          <div className="studio-orbit orbit-one" />
          <div className="studio-orbit orbit-two" />
          <div className="studio-orbit orbit-three" />
          <BrandMark className="studio-art-mark" />
          <span className="studio-art-coordinate">
            IMAGINATION HAS NO COORDINATES.
          </span>
          <Asterisk className="studio-art-star" strokeWidth={1} />
        </div>
        <div className="studio-copy">
          <Eyebrow>02 / THE VEYRA WAY</Eyebrow>
          <h2 id="studio-title">
            Small team.
            <br />
            Unreasonable
            <br />
            <span className="text-accent">ambition.</span>
          </h2>
          <p>
            We believe the best games don’t just fill your time. They stay with
            you.
          </p>
          <p>
            So we bring curious minds together, give bold ideas room to breathe,
            and obsess over the details that turn a good game into a great
            memory.
          </p>
          <div className="studio-values">
            <span>
              <Compass size={15} aria-hidden="true" />
              Curiosity first
            </span>
            <span>
              <Heart size={15} aria-hidden="true" />
              Players always
            </span>
            <span>
              <Sparkles size={15} aria-hidden="true" />
              Craft over hype
            </span>
          </div>
          <ButtonLink href="/studio#team" variant="secondary">
            The people behind the pixels
          </ButtonLink>
        </div>
      </Reveal>
      <div className="studio-statement">
        <span>INDEPENDENT IN SPIRIT.</span>
        <span>CONNECTED BY PLAY.</span>
        <ArrowUpRight size={25} className="text-accent" aria-hidden="true" />
      </div>
    </section>
  );
}
