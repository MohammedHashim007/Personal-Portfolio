"use client";
import React from "react";
import { useLenis } from "@/hooks/useLenis";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
//import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  // Initialize Lenis Smooth Scroll
  useLenis();

  return (
    <main className="relative min-h-screen bg-[#050505] bg-noise overflow-hidden">
      {/* Custom Interactive Pointer Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      {/* Landing Hero Section */}
      <HeroSection />

      {/* About & Core Strengths */}
      <AboutSection />

      {/* Technical Skill Matrix */}
      <SkillsSection />

      {/* Case Study Projects */}
      <ProjectsSection />

      {/* Career Experience */}
      <ExperienceSection />

      {/* Academic Credentials */}
      <EducationSection />

      {/* Industry Certifications */}
      {/* <CertificationsSection /> */}

      {/* Contact Form & Information */}
      <ContactSection />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}