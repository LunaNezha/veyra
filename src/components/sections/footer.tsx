import Link from "next/link";
import { ArrowUpRight, Code2, Gamepad2, Radio, Asterisk } from "lucide-react";
import { Brand } from "@/components/brand";
import { Eyebrow } from "@/components/ui/section-heading";
import Newsletter from "@/components/newsletter";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <section
          id="newsletter"
          className="newsletter-section"
          aria-labelledby="newsletter-title"
        >
          <div>
            <Eyebrow>STAY IN OUR ORBIT</Eyebrow>
            <h2 id="newsletter-title">
              The next chapter.
              <br />
              <span className="text-muted">Straight to your inbox.</span>
            </h2>
            <p>
              New worlds, behind-the-scenes stories, and the occasional side
              quest.
            </p>
          </div>
          <Newsletter />
        </section>
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />
            <p>
              Independent minds.
              <br />
              Unforgettable games.
            </p>
            <div className="social-links">
              <a
                href={site.repository}
                target="_blank"
                rel="noreferrer"
                aria-label="View the project on GitHub (opens in a new tab)"
              >
                <Code2 size={18} aria-hidden="true" />
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Explore Discord (platform homepage, opens in a new tab)"
              >
                <Gamepad2 size={19} aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/gaming"
                target="_blank"
                rel="noreferrer"
                aria-label="Explore YouTube Gaming (opens in a new tab)"
              >
                <Radio size={18} aria-hidden="true" />
              </a>
            </div>
            <span className="social-note">Studio channels coming soon.</span>
          </div>
          <nav aria-label="Footer navigation" className="footer-nav">
            <div>
              <h3>EXPLORE</h3>
              <Link href="/games">Our games</Link>
              <Link href="/studio">The studio</Link>
              <Link href="/studio#team">Our people</Link>
            </div>
            <div>
              <h3>WHAT’S NEXT</h3>
              <Link href="/careers">
                Careers <span className="text-accent">↗</span>
              </Link>
              <Link href="/contact-us">Let’s talk</Link>
              <a href="#newsletter">Stay in the loop</a>
            </div>
          </nav>
          <div className="footer-signoff">
            <span className="status-dot" />
            <span>
              ALWAYS IN
              <br />
              PLAY MODE.
            </span>
            <ArrowUpRight size={28} aria-hidden="true" />
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          veyra<span>.</span>
          <Asterisk className="wordmark-star" strokeWidth={1} />
        </div>
        <div className="footer-legal">
          <p>
            © {new Date().getFullYear()} Veyra Interactive. A portfolio concept.
          </p>
          <p>Fictional games. Real creative ambition.</p>
          <a href={site.repository} target="_blank" rel="noreferrer">
            View source
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
