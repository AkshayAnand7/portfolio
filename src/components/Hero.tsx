"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ROLES } from "@/lib/constants";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding z-10 overflow-hidden"
    >
      <div className="hero-grid absolute inset-0 z-0 pointer-events-none" />
      <div className="hero-spotlight animate-spotlight z-0" />
      <div className="hero-beam z-0" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-8 overflow-hidden py-2 mt-12">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="block"
          >
            AKSHAY ANAND
          </motion.span>
        </h1>

        <div className="h-8 relative overflow-hidden flex justify-center items-center">
          {ROLES.map((role, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: i === roleIndex ? 1 : 0,
                y: i === roleIndex ? 0 : -20,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute text-lg sm:text-xl text-muted font-light tracking-wide"
            >
              {role}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
