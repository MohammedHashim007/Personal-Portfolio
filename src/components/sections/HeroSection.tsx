"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { TextScramble } from "../ui/TextScramble";
import { MagneticButton } from "../ui/MagneticButton";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Download, ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";

// Dynamically import HeroCanvas to disable Server-Side Rendering for 3D elements
const HeroCanvas = dynamic(
  () => import("../canvas/HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 text-accent-cyan text-xs font-space font-medium">
            <Sparkles size={14} />
            <span>Available for Enterprise Projects</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-space tracking-tight text-white leading-none">
            Hi, I'm <br />
            <span className="text-gradient">
              <TextScramble text={PORTFOLIO_DATA.personal.name} />
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-space font-medium text-gray-300">
            {PORTFOLIO_DATA.personal.title}
          </h2>

          <p className="text-gray-400 text-base max-w-xl leading-relaxed">
            {PORTFOLIO_DATA.personal.bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <MagneticButton>
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-accent hover:bg-accent/90 text-white text-sm font-semibold flex items-center gap-2 shadow-xl shadow-indigo-500/25 transition-all"
              >
                View Projects <ArrowUpRight size={18} />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                download
                className="px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 border border-white/10 text-white text-sm font-semibold flex items-center gap-2 transition-all"
              >
                Resume <Download size={18} />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={`https://wa.me/971564745749?text=${encodeURIComponent(
                  "Hello Mohammed, I viewed your portfolio and would like to connect!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm flex items-center gap-2 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all shadow-lg shadow-emerald-500/10"
              >
                WhatsApp <MessageCircle size={18} />
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right Column Interactive 3D Mesh */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 h-[400px] sm:h-[500px] lg:h-[600px] relative"
        >
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
};
