"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus,
  ArrowUpRight,
  Check,
  Globe2,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { openings } from "@/lib/careers";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/motion";
import { Modal } from "@/components/ui/modal";
import type { Opening } from "@/types/studio";

const departments = ["All teams", "Engineering", "Art", "Design"] as const;

export default function CareersSection() {
  const [department, setDepartment] =
    useState<(typeof departments)[number]>("All teams");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [application, setApplication] = useState<Opening | null>(null);
  const reduceMotion = useReducedMotion();
  const jobs = openings.filter(
    (job) => department === "All teams" || job.department === department,
  );
  return (
    <section
      id="careers"
      className="site-shell section-space careers-section"
      aria-labelledby="careers-title"
    >
      <Reveal>
        <div className="careers-heading">
          <div>
            <Eyebrow>05 / YOUR NEXT ADVENTURE</Eyebrow>
            <h2 id="careers-title">
              Make your
              <br />
              <span className="text-accent">next move.</span>
            </h2>
          </div>
          <div className="careers-intro">
            <p>
              Bring your weird ideas, your big questions, and your love of play.
              We’ll bring the possibilities.
            </p>
            <div className="career-perks">
              <span>
                <Globe2 size={14} aria-hidden="true" />
                Remote-first
              </span>
              <span>
                <Lightbulb size={14} aria-hidden="true" />
                Creative ownership
              </span>
              <span>
                <Rocket size={14} aria-hidden="true" />
                Room to grow
              </span>
            </div>
          </div>
        </div>
      </Reveal>
      <div className="careers-toolbar">
        <div
          className="filter-group"
          aria-label="Filter openings by department"
        >
          {departments.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter-button ${item === department ? "is-active" : ""}`}
              aria-pressed={item === department}
              onClick={() => {
                setDepartment(item);
                setExpanded(null);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <p
          aria-live="polite"
          className="font-mono text-[10px] uppercase tracking-widest text-muted"
        >
          {String(jobs.length).padStart(2, "0")} CONCEPT OPENINGS
        </p>
      </div>
      <div className="jobs-list">
        {jobs.map((job) => (
          <article className="job" key={job.id}>
            <h3>
              <button
                type="button"
                onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                aria-expanded={expanded === job.id}
                aria-controls={`job-${job.id}`}
                className="job-toggle"
              >
                <span className="job-title">
                  {job.title}
                  <span>{job.location}</span>
                </span>
                <span className="job-department">{job.department}</span>
                <motion.span
                  className="job-plus"
                  animate={{ rotate: expanded === job.id ? 45 : 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2 }}
                >
                  <Plus size={19} aria-hidden="true" />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded === job.id && (
                <motion.div
                  key={job.id}
                  id={`job-${job.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="job-details">
                    <p>{job.description}</p>
                    <ul>
                      {job.responsibilities.map((item) => (
                        <li key={item}>
                          <Check
                            size={15}
                            className="text-accent"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => setApplication(job)}
                      className="button button-primary"
                    >
                      Explore this role
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        ))}
      </div>
      <p className="careers-note">
        A look at the team we’d love to build. These are illustrative roles for
        a fictional studio.
      </p>
      <Modal
        open={application !== null}
        onClose={() => setApplication(null)}
        title={
          application ? `About the ${application.title} role` : "About a role"
        }
      >
        {application && (
          <div className="space-y-6 px-6 pb-8 pt-20 sm:px-10">
            <Eyebrow>YOUR NEXT CHAPTER</Eyebrow>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              {application.title}
            </h2>
            <p className="text-accent">
              {application.department} · {application.location}
            </p>
            <p className="leading-relaxed text-muted">
              {application.description}
            </p>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
              <p className="mb-2 font-medium">A role to imagine, for now.</p>
              <p className="text-sm leading-relaxed text-muted">
                Veyra is a portfolio concept, so applications and résumés aren’t
                being collected. You can explore the studio’s creative direction
                and follow its journey below.
              </p>
            </div>
            <a
              href="#newsletter"
              onClick={() => setApplication(null)}
              className="button button-primary"
            >
              Stay in the loop
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
}
