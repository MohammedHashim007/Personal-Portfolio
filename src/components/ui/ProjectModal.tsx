"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-neutral-950/90 border-white/10 rounded-3xl p-6 md:p-10 z-10 custom-scrollbar shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
          >
            <X size={20} />
          </button>

          <span className="text-xs font-space tracking-widest text-accent-cyan uppercase">
            {project.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-white mt-1 mb-4">
            {project.title}
          </h2>

          {/* Hero Banner */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-2">
                  <AlertCircle size={18} className="text-red-400" /> The Problem
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-2">
                  <Lightbulb size={18} className="text-amber-400" /> The Solution
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-accent-cyan" /> Key Results
                </h3>
                <ul className="space-y-2">
                  {project.results.map((res, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6">
              <div>
                <h4 className="text-xs font-space uppercase text-gray-400 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-space uppercase text-gray-400 mb-2">Technical Challenges</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{project.challenges}</p>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all"
                >
                  Source Code <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};