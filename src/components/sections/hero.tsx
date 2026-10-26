"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Pause,
  Play,
  Crosshair,
  Gamepad2,
  Monitor,
  Smartphone,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import hero from "../../../public/games/hero.webp";

export default function Hero() {
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const still = paused || reduceMotion;
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className={`hero-frame ${still ? "atmosphere-paused" : ""}`}>
        <Image
          src={hero}
          alt=""
          fill
          preload
          sizes="(max-width: 767px) 1320px, 100vw"
          className="hero-image"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-aura" aria-hidden="true" />
        <div className="hero-scene-label">
          <span className="status-dot" />
          ORIGINAL WORLDS. UNLIMITED POSSIBILITY.
        </div>
        <motion.div className="hero-copy" initial={false} animate={{ y: 0 }}>
          <p className="eyebrow">
            <span className="size-1.5 bg-accent" />
            INDEPENDENT STUDIO. LIMITLESS IMAGINATION.
          </p>
          <h1 id="hero-title">
            Worlds worth
            <br />
            <span>getting lost in.</span>
          </h1>
          <p className="hero-description">
            We’re Veyra. A collective of creators, dreamers,
            <br className="hidden sm:block" /> and players building your next
            obsession.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#games">Explore our games</ButtonLink>
            <a href="/studio" className="hero-secondary group">
              Meet the studio
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div>
        <div className="hero-world-label">
          <Crosshair className="size-5 text-accent" aria-hidden="true" />
          <div>
            <span>TRANSMISSION 001</span>
            <strong>ECHOFALL</strong>
          </div>
        </div>
        <button
          type="button"
          className="atmosphere-control"
          aria-label={
            paused
              ? "Resume atmosphere animation"
              : "Pause atmosphere animation"
          }
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
          disabled={Boolean(reduceMotion)}
        >
          {still ? (
            <Play size={13} aria-hidden="true" />
          ) : (
            <Pause size={13} aria-hidden="true" />
          )}
          <span>CONCEPT VISUAL</span>
        </button>
        <div className="hero-stats">
          <div>
            <strong>
              03<span> / </span>
            </strong>
            <p>Original universes</p>
          </div>
          <div>
            <strong>
              100<span>%</span>
            </strong>
            <p>Player-first thinking</p>
          </div>
          <div>
            <strong>∞</strong>
            <p>Ways to imagine</p>
          </div>
        </div>
      </div>
      <div className="hero-underbar">
        <a href="#games" className="flex min-h-11 items-center gap-3">
          <ArrowDown size={13} aria-hidden="true" />
          SCROLL TO DISCOVER
        </a>
        <div className="flex items-center gap-6">
          <span className="hidden sm:block">PLAY HAS NO BOUNDARIES</span>
          <span className="flex items-center gap-2">
            <Monitor size={15} aria-hidden="true" />
            PC
          </span>
          <span className="flex items-center gap-2">
            <Gamepad2 size={17} aria-hidden="true" />
            CONSOLE
          </span>
          <span className="flex items-center gap-2">
            <Smartphone size={15} aria-hidden="true" />
            MOBILE
          </span>
        </div>
      </div>
    </section>
  );
}
