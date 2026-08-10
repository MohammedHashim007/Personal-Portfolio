"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Github, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 py-12 px-6 md:px-12 bg-neutral-950/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="font-space text-lg font-bold text-white tracking-wider">
            <span className="text-accent-cyan">.Hashim</span>
          </a>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} Mohammed Hashim. Built with Next.js 15 & Three.js.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-panel hover:bg-white/10 text-gray-300 hover:text-white transition-colors ml-4"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};