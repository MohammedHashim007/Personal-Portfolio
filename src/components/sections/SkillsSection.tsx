"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GlassCard } from "../ui/GlassCard";
import { ProgressRing } from "../ui/ProgressRing";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...PORTFOLIO_DATA.skills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === "All"
      ? PORTFOLIO_DATA.skills.flatMap((s) => s.items)
      : PORTFOLIO_DATA.skills.find((s) => s.category === activeCategory)?.items || [];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-space uppercase text-accent-cyan tracking-widest">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white mt-2">
            Technical Stack
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium font-space transition-all ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-lg shadow-indigo-500/20"
                  : "glass-panel text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <GlassCard className="flex items-center justify-between p-6">
              <div>
                <h3 className="text-lg font-bold font-space text-white">{skill.name}</h3>
                <span className="text-xs text-gray-400 font-space uppercase tracking-wider">
                  Proficiency
                </span>
              </div>
              <ProgressRing percentage={skill.level} />
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};