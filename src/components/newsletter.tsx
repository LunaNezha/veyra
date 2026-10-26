"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }
  return (
    <div className="newsletter-form-wrap">
      {subscribed ? (
        <div role="status" className="newsletter-success">
          <Check size={22} className="text-accent" aria-hidden="true" />
          <div>
            <strong>You’re part of the story.</strong>
            <p>Demo signup complete. No email was collected or sent.</p>
            <button type="button" onClick={() => setSubscribed(false)}>
              Try another address
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={subscribe} className="newsletter-form">
          <label htmlFor="newsletter-email">Your email address</label>
          <div className="newsletter-input-group">
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@yourworld.com"
              required
              maxLength={254}
              aria-describedby="newsletter-notice"
            />
            <button type="submit" aria-label="Join the newsletter">
              <ArrowUpRight size={22} aria-hidden="true" />
            </button>
          </div>
          <p id="newsletter-notice">
            Demo signup. Your email stays in this browser.
          </p>
        </form>
      )}
    </div>
  );
}
