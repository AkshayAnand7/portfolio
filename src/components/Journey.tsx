"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";

export default function Journey() {
  return (
    <section id="journey" className="relative section-padding overflow-hidden z-10 bg-background">
      <div className="text-center mb-32">
        <p className="text-sm uppercase tracking-[0.4em] text-accent mb-4">
          Journey
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          The Path
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative px-6">
        <div className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />
        <div className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/0 via-accent to-accent/0 md:-translate-x-1/2" />

        <div className="space-y-16 md:space-y-0 relative z-10">
          {TIMELINE.map((entry, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } md:h-64`}
              >
                <div className="flex-shrink-0 md:hidden relative z-10 mt-1">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                </div>

                <div
                  className={`flex-1 md:w-[calc(50%-40px)] ${
                    isLeft ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"
                  }`}
                >
                  <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
                    <span className="text-4xl mb-4 block">{entry.icon}</span>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-2 text-white">
                      {entry.title}
                    </h3>
                    <p className="text-sm uppercase tracking-widest text-accent mb-4 font-medium">
                      {entry.subtitle}
                    </p>
                    <p className="text-sm text-muted/80 leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center justify-start w-[80px] flex-shrink-0 relative z-10 mt-8">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ amount: 0.8 }}
                    transition={{ type: "spring" }}
                    className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-accent relative"
                  >
                    <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
                  </motion.div>
                </div>

                <div className="hidden md:block flex-1 md:w-[calc(50%-40px)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
