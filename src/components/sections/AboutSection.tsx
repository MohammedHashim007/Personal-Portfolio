"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Database, LineChart, Cpu, Server } from "lucide-react";

const STRENGTHS = [
  { icon: Database, title: "SQL & Data Warehousing", desc: "Expert in complex CTEs, analytical indexing, and schema design in PostgreSQL & Redshift." },
  { icon: LineChart, title: "Power BI & Analytics", desc: "Master of DAX formulas, dynamic star-schema models, and executive dashboard design." },
  { icon: Server, title: "PySpark & Data Pipelines", desc: "Engineered scalable distributed pipelines handling multi-gigabyte data streaming." },
  { icon: Cpu, title: "Predictive AI / Machine Learning", desc: "Productionizing Scikit-Learn models and predictive triage alerts into enterprise CRM platforms." },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <span className="text-xs font-space uppercase text-accent-cyan tracking-widest">
          About Me
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-space text-white">
          Bridging Raw Data & Strategic Decisions
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          I specialize in transforming vast, unstructured corporate data repositories into streamlined, real-time analytics dashboards and predictive ML engines that drive executive-level decision making.
        </p>
      </motion.div>

      {/* Grid of Core Strengths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STRENGTHS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <GlassCard key={idx} className="space-y-4">
              <div className="p-3 w-fit rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 text-accent-cyan">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white font-space">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};