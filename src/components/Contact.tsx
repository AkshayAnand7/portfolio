"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    value: CONTACT.email,
    display: CONTACT.email,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: CONTACT.github,
    value: CONTACT.github,
    display: "github.com/AkshayAnand7",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
    value: CONTACT.linkedin,
    display: "linkedin.com/in/akshay-anand-mp-27y06",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
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

  const handleCopy = (value: string, label: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section 
      id="contact" 
      className="relative section-padding min-h-screen flex flex-col justify-center bg-[#000000] z-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center perspective-[2000px]">
        
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/5 border border-white/10 mx-auto mb-12 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <span className="font-heading font-bold text-lg tracking-widest pl-[2px] text-white">
            AA
          </span>
        </div>

        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative group rounded-2xl overflow-hidden"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-1000 blur-md" />

          <div 
            className="terminal p-6 sm:p-12 relative bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300"
            style={{ transform: "translateZ(50px)" }}
          >
            
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.5)]" />
              </div>
              <span className="text-xs font-mono text-muted/50 bg-white/5 px-3 py-1 rounded-full border border-white/5">~/contact</span>
            </div>

            <div className="space-y-10 relative z-10">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-accent font-mono text-2xl shrink-0">
                  &gt;
                </span>
                <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white flex items-center flex-wrap gap-2">
                  <span>{CONTACT.tagline}</span>
                  <span className="inline-block w-4 h-8 bg-accent animate-blink ml-1" />
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent w-full" />

              <div className="grid gap-4">
                {socialLinks.map((link) => (
                  <div key={link.label} className="relative group/link">
                    <a
                      href={link.href}
                      onClick={(e) => handleCopy(link.value, link.label, e)}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/0 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-copy"
                    >
                      <div className="flex items-center gap-4 mb-3 sm:mb-0">
                        <span className="p-3 rounded-lg bg-white/5 text-muted group-hover/link:text-accent group-hover/link:bg-accent/10 transition-colors border border-transparent group-hover/link:border-accent/20">
                          {link.icon}
                        </span>
                        <div>
                          <span className="text-xs uppercase tracking-widest text-muted/60 font-medium block mb-1">
                            {link.label}
                          </span>
                          <span className="text-sm font-mono text-white/80 group-hover/link:text-white transition-colors">
                            {link.display}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-xs font-mono text-accent/0 group-hover/link:text-accent/80 transition-colors">
                        {copied === link.label ? (
                          <span className="text-green-400 flex items-center gap-2 bg-green-400/10 px-3 py-1.5 rounded-md">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Copied
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Copy
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                          </span>
                        )}
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-center sm:justify-start">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-accent hover:border-accent hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 font-mono text-sm group/btn"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-[100%] group-hover/btn:animate-[shimmer_1s_infinite]" />
                  <span className="text-accent/60 group-hover/btn:text-white/60 transition-colors">sys.open(</span>
                  <span className="font-semibold tracking-wide">Get In Touch</span>
                  <span className="text-accent/60 group-hover/btn:text-white/60 transition-colors">)</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-auto pb-8 z-10 pt-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-px bg-white/10" />
          <p className="text-xs font-mono text-muted/40 uppercase tracking-widest">
            End of Line
          </p>
          <div className="w-8 h-px bg-white/10" />
        </div>
        <p className="text-xs font-mono text-muted/30">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All systems operational.
        </p>
      </div>
    </section>
  );
}
