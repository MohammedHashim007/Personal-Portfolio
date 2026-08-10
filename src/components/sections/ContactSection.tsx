"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GlassCard } from "../ui/GlassCard";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_75ndcnb",  // Replace with your EmailJS Service ID
        "template_ogdy5tb", // Replace with your EmailJS Template ID
        formRef.current,
        "CRGa1H0_Xm8JbSZTe"   // Replace with your EmailJS Public Key
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-space uppercase text-accent-cyan tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white">
            Let's Engineer Something Exceptional
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Interested in deploying scalable BI architecture, automated ML pipelines, or modern dynamic dashboards? Let's discuss your organization's data goals.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-space">Email</span>
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-sm font-medium text-white hover:text-cyan-400">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-indigo-400">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-space">Phone</span>
                <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="text-sm font-medium text-white hover:text-indigo-400">
                  {PORTFOLIO_DATA.personal.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-space">Location</span>
                <span className="text-sm font-medium text-white">{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Glass Contact Form Column */}
        <div className="lg:col-span-7">
          <GlassCard className="p-8">
            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 space-y-4">
                <CheckCircle2 size={48} className="text-accent-cyan mx-auto" />
                <h3 className="text-2xl font-bold font-space text-white">Message Delivered</h3>
                <p className="text-sm text-gray-400">Thank you for reaching out. I will respond to your query within 24 hours.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-space text-gray-300">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-space text-gray-300">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-space text-gray-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="BI Infrastructure Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-space text-gray-300">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Tell me about your project or data pipeline requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20 hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {loading ? "Transmitting..." : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};