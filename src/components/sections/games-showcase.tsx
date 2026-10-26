"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Gamepad2,
  Monitor,
  Smartphone,
} from "lucide-react";
import { games } from "@/lib/games";
import type { Game, Platform } from "@/types/studio";
import { Modal } from "@/components/ui/modal";
import { GlowCard } from "@/components/ui/glow-card";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

const filters = ["All games", "PC", "Console", "Mobile"] as const;
const platformIcons = { PC: Monitor, Console: Gamepad2, Mobile: Smartphone };

function PlatformLabels({ platforms }: { platforms: readonly Platform[] }) {
  return (
    <span className="flex flex-wrap items-center gap-3">
      {platforms.map((platform) => {
        const Icon = platformIcons[platform];
        return (
          <span key={platform} className="platform-label">
            <Icon size={13} aria-hidden="true" />
            {platform}
          </span>
        );
      })}
    </span>
  );
}

export default function GamesShowcase() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All games");
  const [selected, setSelected] = useState<Game | null>(null);
  const reduceMotion = useReducedMotion();
  const visibleGames = games.filter(
    (game) =>
      filter === "All games" ||
      (game.platforms as readonly Platform[]).includes(filter),
  );
  return (
    <section
      id="games"
      className="section-space site-shell"
      aria-labelledby="games-title"
    >
      <Reveal>
        <SectionHeading
          eyebrow="01 / OUR UNIVERSES"
          title={
            <span id="games-title">
              Different worlds.
              <br />
              <span className="text-muted">Same obsession.</span>
            </span>
          }
          description="From the beautifully unfamiliar to the impossibly fast. Find a world that feels like yours."
        />
      </Reveal>
      <div className="games-toolbar">
        <div className="filter-group" aria-label="Filter games by platform">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={`filter-button ${filter === item ? "is-active" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>
        <p
          className="font-mono text-[10px] uppercase tracking-widest text-muted"
          aria-live="polite"
        >
          {String(visibleGames.length).padStart(2, "0")} WORLDS TO DISCOVER
        </p>
      </div>
      <div className="games-grid">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleGames.map((game, index) => (
            <motion.article
              layout={!reduceMotion}
              key={game.slug}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
              transition={{ duration: 0.25, delay: index * 0.025 }}
            >
              <GlowCard className="game-card">
                <button
                  type="button"
                  className="game-card-button"
                  onClick={() => setSelected(game)}
                  aria-label={`Explore ${game.title}`}
                >
                  <Image
                    src={game.image}
                    alt={game.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 820px, (min-width: 768px) 720px, 800px"
                    className="game-image"
                  />
                  <span className="game-image-shade" aria-hidden="true" />
                  <span
                    className={`game-status ${game.status === "Released" ? "released" : ""}`}
                  >
                    <span className="status-dot" />
                    {game.status}
                  </span>
                  <span className="game-arrow">
                    <ArrowUpRight size={19} aria-hidden="true" />
                  </span>
                  <span className="game-card-content">
                    <span className="game-genre">{game.genre}</span>
                    <span className="game-title">{game.title}</span>
                    <span className="game-tagline">{game.tagline}</span>
                    <PlatformLabels platforms={game.platforms} />
                  </span>
                </button>
              </GlowCard>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      <div className="games-footnote">
        <span className="status-dot" />
        <p>Built with imagination. Made for the player.</p>
        <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted sm:block">
          CONCEPT COLLECTION / VOL. 01
        </span>
      </div>
      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        title={selected ? `Explore ${selected.title}` : "Explore a game"}
      >
        {selected && (
          <>
            <div className="relative aspect-[16/7]">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6 p-6 sm:p-9">
              <p className="eyebrow">
                {selected.genre} · {selected.status}
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {selected.title}
              </h2>
              <p className="text-lg text-accent">{selected.tagline}</p>
              <p className="leading-relaxed text-muted">
                {selected.description}
              </p>
              <PlatformLabels platforms={selected.platforms} />
              <ul className="space-y-3">
                {selected.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="size-4 text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <span className="font-mono text-xs text-muted">
                  BUILT WITH {selected.engine.toUpperCase()}
                </span>
                <a
                  href="#newsletter"
                  onClick={() => setSelected(null)}
                  className="button button-primary"
                >
                  Follow the journey
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
              <p className="text-xs leading-relaxed text-muted">
                This is a fictional game created for the Veyra portfolio
                concept. Release badges are illustrative; no game is available
                to purchase or download.
              </p>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
