"use client";
import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

export const EducationSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs font-space uppercase text-accent-cyan tracking-widest">
          Academic Background
        </span>
        <h2 className="text-2xl md:text-4xl font-bold font-space text-white mt-1">
          Education
        </h2>
      </div>

      <div className="space-y-6">
        {PORTFOLIO_DATA.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-space text-white">{edu.degree}</h3>
                  <p className="text-sm text-gray-400">{edu.institution}</p>
                  <span className="text-xs text-accent-cyan font-space mt-1 block">{edu.honors}</span>
                </div>
              </div>
              <span className="text-xs font-space px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                {edu.period}
              </span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};