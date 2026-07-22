"use client";

import { useEffect, useRef } from "react";

/**
 * A very subtle radial glow that follows the cursor on desktop.
 * Purely decorative — ignored by screen readers and disabled for
 * touch devices and reduced-motion preferences.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (prefersReducedMotion || isTouch || !ref.current) return;

    const el = ref.current;
    let frame: number;

    function handleMove(e: MouseEvent) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--spotlight-x", `${e.clientX}px`);
        el.style.setProperty("--spotlight-y", `${e.clientY}px`);
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden sm:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--spotlight-x, 50%) var(--spotlight-y, 0%), rgba(196, 159, 77, 0.06), transparent 70%)",
      }}
    />
  );
}
