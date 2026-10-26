import { createPageMetadata } from "@/lib/metadata";
import { ArrowUpRight, Mail } from "lucide-react";
import { getContactEmail } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
export const metadata = createPageMetadata({
  title: "Let’s talk",
  description:
    "Start a conversation about the Veyra Interactive gaming studio showcase, creative projects, and publishing concepts.",
  path: "/contact-us",
});
export default function ContactPage() {
  const email = getContactEmail();
  return (
    <section className="site-shell contact-page">
      <p className="eyebrow">
        <span className="size-1.5 bg-accent" />
        OPEN A NEW CHAPTER
      </p>
      <h1>
        Great things start
        <br />
        with <span className="text-accent">a hello.</span>
      </h1>
      <p>
        Have a bold idea, a publishing opportunity, or a world you want to
        build? We’d love to hear about it.
      </p>
      {email ? (
        <a href={`mailto:${email}`} className="button button-primary">
          <Mail className="size-4" aria-hidden="true" />
          Say hello
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      ) : (
        <div className="contact-notice">
          <p>Our inbox is coming soon.</p>
          <span>
            This is a portfolio studio concept. Explore the games and meet the
            team while you’re here.
          </span>
          <ButtonLink href="/games" variant="secondary">
            Explore our games
          </ButtonLink>
        </div>
      )}
    </section>
  );
}
