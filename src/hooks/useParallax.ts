"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

interface UseParallaxOptions {
  /** Speed multiplier — higher = more movement */
  speed?: number;
  /** Reference element to track */
  ref?: RefObject<HTMLElement | null>;
}

/**
 * Creates a parallax motion value based on scroll position.
 * Returns a MotionValue<number> that can be applied to `style={{ y }}`
 */
export function useParallax({
  speed = 0.5,
  ref,
}: UseParallaxOptions = {}): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return y;
}
