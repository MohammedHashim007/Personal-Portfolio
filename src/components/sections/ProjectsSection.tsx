"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { GlassCard } from "../ui/GlassCard";
import { ProjectModal } from "../ui/ProjectModal";
import { ArrowUpRight, Github } from "lucide-react";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-xs font-space uppercase text-accent-cyan tracking-widest">
          Portfolio
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-space text-white mt-2">
          Featured Engineering Work
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <GlassCard className="h-full flex flex-col justify-between">
              <div>
                {/* Project Image Preview */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-48 rounded-xl overflow-hidden mb-6 cursor-pointer group/img"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/10 transition-colors" />
                  <span className="absolute top-3 left-3 text-[10px] font-space font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                    {project.metrics}
                  </span>
                </div>

                <span className="text-xs font-space text-accent-cyan">{project.category}</span>
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-xl font-bold font-space text-white hover:text-indigo-400 transition-colors cursor-pointer mt-1 mb-3"
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-space text-white flex items-center gap-1 hover:text-accent-cyan transition-colors"
                  >
                    View Details <ArrowUpRight size={14} />
                  </button>

                  <div className="flex items-center gap-3 text-gray-400">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};