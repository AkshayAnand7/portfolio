"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, type Project } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth - containerRef.current.offsetWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen horizontal-scroll-container bg-background z-10 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div ref={containerRef} className="h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12 relative z-10">
        
        <div className="px-6 sm:px-12 md:px-20 mb-12 shrink-0 flex items-center gap-6">
          <div className="w-12 h-px bg-accent/50 hidden sm:block" />
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-accent mb-2">
              Featured
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Selected Work
            </h2>
          </div>
        </div>

        <div
          ref={trackRef}
          className="horizontal-scroll-track px-6 sm:px-12 md:px-20 items-stretch"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          <div className="flex-shrink-0 w-[10vw]" />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="flex-shrink-0 w-[85vw] max-w-[600px] h-[60vh] min-h-[400px] max-h-[600px] group relative project-card-inner overflow-hidden">
      <div className="absolute -inset-1 bg-gradient-to-br from-accent/0 via-accent/20 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700 blur-lg" />
      
      <div className="relative w-full h-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-xl p-8 sm:p-12 flex flex-col overflow-hidden transition-all duration-300">
        
        <div className="relative z-10 flex flex-col h-full">
          
          <div className="mb-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-mono text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="h-px w-12 bg-white/20" />
            </div>

            <h3 className="font-heading text-4xl sm:text-5xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm uppercase tracking-widest text-muted mb-8 font-medium">
              {project.subtitle}
            </p>
          </div>
          
          <div>
            <p className="text-lg text-muted/90 leading-relaxed mb-8 max-w-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
