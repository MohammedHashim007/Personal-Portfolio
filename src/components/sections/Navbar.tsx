"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 flex justify-between items-center ${
        scrolled ? "bg-neutral-950/70 backdrop-blur-xl border-b border-white/10" : ""
      }`}
    >
      <a href="#" className="font-space text-xl font-bold text-white tracking-wider group">
        Md<span className="text-accent-cyan group-hover:text-accent transition-colors">.HASHIM</span>
      </a>

      <nav className="hidden md:flex items-center gap-8 glass-panel px-6 py-2 rounded-full border border-white/10">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-gray-300 hover:text-accent-cyan transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <MagneticButton>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/40 transition-all"
        >
          Let's Talk
        </a>
      </MagneticButton>
    </motion.header>
  );
};