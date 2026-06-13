"use client";

import { motion } from "framer-motion";
import { VISION } from "@/lib/constants";

export default function Vision() {
  return (
    <section id="vision" className="relative min-h-[70vh] flex items-center justify-center section-padding z-10 bg-background">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
            {VISION.statement}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm font-mono text-muted/60"
        >
          {VISION.interests.map((interest, i) => (
            <div key={interest} className="flex items-center gap-4">
              <span className="hover:text-accent transition-colors duration-300">
                {interest}
              </span>
              {i < VISION.interests.length - 1 && (
                <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
