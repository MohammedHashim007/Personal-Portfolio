"use client";
import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-space uppercase text-accent-cyan tracking-widest">
          Career Journey
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-space text-white mt-2">
          Professional Experience
        </h2>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
        {PORTFOLIO_DATA.experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-neutral-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/50">
              <Briefcase size={12} />
            </div>

            {/* Time period pill */}
            <span className="md:absolute md:-left-36 md:top-1 text-xs font-space font-medium text-accent-cyan bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit mb-2 md:mb-0 inline-block">
              {exp.period}
            </span>

            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
              <div>
                <h3 className="text-xl font-bold font-space text-white">{exp.role}</h3>
                <h4 className="text-sm font-medium text-indigo-300">{exp.company} • {exp.location}</h4>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="text-xs md:text-sm text-gray-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};