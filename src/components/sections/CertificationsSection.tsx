"use client";
import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Award } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

export const CertificationsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-space uppercase text-accent-cyan tracking-widest">
          Verified Expertise
        </span>
        <h2 className="text-2xl md:text-4xl font-bold font-space text-white mt-1">
          Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <GlassCard className="space-y-3">
              <div className="flex items-center justify-between">
                <Award className="text-cyan-400" size={24} />
                <span className="text-xs font-space text-gray-400">{cert.date}</span>
              </div>
              <h3 className="text-base font-bold font-space text-white leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs font-space text-indigo-300">{cert.issuer}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};