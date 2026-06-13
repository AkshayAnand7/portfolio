"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SKILLS, type SkillCategory } from "@/lib/constants";

const CATEGORY_CONFIG: Record<SkillCategory, { icon: React.ReactNode; color: string }> = {
  Frontend: {
    color: "from-blue-500/20 to-cyan-500/0",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  Backend: {
    color: "from-emerald-500/20 to-teal-500/0",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  Database: {
    color: "from-purple-500/20 to-fuchsia-500/0",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  "AI & Analytics": {
    color: "from-amber-500/20 to-orange-500/0",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
};

export default function SkillsGalaxy() {
  const categories = Object.entries(SKILLS) as [
    SkillCategory,
    (typeof SKILLS)[SkillCategory]
  ][];

  return (
    <section id="skills" className="relative py-40 section-padding bg-background z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <p className="text-sm uppercase tracking-[0.4em] text-accent font-medium">
              Capabilities
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 perspective-[2000px]">
          {categories.map(([category, data], i) => (
            <SkillCard key={category} category={category} items={data.items as unknown as string[]} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function SkillCard({ category, items, index }: { category: SkillCategory, items: string[], index: number }) {
  const config = CATEGORY_CONFIG[category];
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative p-8 sm:p-12 h-full flex flex-col z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-inner">
            {config.icon}
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {category}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          {items.map((skill, j) => (
            <div key={skill} className="relative group/pill">
              <div className="absolute inset-0 bg-white/10 rounded-full blur opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300" />
              <span className="relative block px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm font-medium text-white/70 group-hover/pill:text-white group-hover/pill:bg-white/10 group-hover/pill:border-white/20 transition-all duration-300 shadow-sm whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
