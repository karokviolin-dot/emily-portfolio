"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin progress bar fixed to the top of the viewport, filling as the
 * visitor scrolls through the page.
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[2.5px] w-full origin-left bg-accent-400"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
