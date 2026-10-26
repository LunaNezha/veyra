import { createPageMetadata } from "@/lib/metadata";
import StudioSection from "@/components/sections/studio";
import TechnologySection from "@/components/sections/technology";
import TeamSection from "@/components/sections/team";
export const metadata = createPageMetadata({
  title: "The studio",
  description:
    "Meet the fictional creative team behind Veyra Interactive and explore its approach to storytelling, Unreal Engine, Unity, and spatial experiences.",
  path: "/studio",
});
export default function StudioPage() {
  return (
    <div className="subpage">
      <div className="site-shell page-intro">
        <p className="eyebrow">MEET VEYRA INTERACTIVE</p>
        <h1>
          Independent minds.
          <br />
          <span className="text-accent">Shared imagination.</span>
        </h1>
        <p>A studio for the curious. A home for the wonderfully ambitious.</p>
      </div>
      <StudioSection />
      <TechnologySection />
      <TeamSection />
    </div>
  );
}
