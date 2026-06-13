"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ABOUT } from "@/lib/constants";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const words = ABOUT.headline.split(" ");

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center section-padding z-10 bg-background"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px w-24 bg-accent/50 origin-left mb-16"
        />

        <div className="mb-24">
          <p className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight flex flex-wrap gap-x-4 gap-y-2">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  range={[start * 0.6 + 0.2, end * 0.6 + 0.2]}
                />
              );
            })}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="text-lg text-muted leading-relaxed mb-12">
            {ABOUT.bio}
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-widest text-muted/60 mb-2">Focus Areas</p>
            <div className="flex flex-wrap gap-4">
              {ABOUT.focuses.map((focus, i) => (
                <motion.span
                  key={focus}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="text-sm text-foreground/80 pl-3 border-l border-accent/30 py-1"
                >
                  {focus}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const filter = useTransform(progress, range, ["blur(8px)", "blur(0px)"]);
  const y = useTransform(progress, range, [15, 0]);

  return (
    <motion.span style={{ opacity, filter, y }} className="inline-block">
      {word}
    </motion.span>
  );
}
