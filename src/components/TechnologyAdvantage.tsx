import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Activity, Users } from 'lucide-react';

const benefits = [
  { title: 'Fixed Price Integrity', desc: 'No hidden costs, no escalations. Structural quotes are absolute and binding.', icon: Shield },
  { title: 'Transparent Escrow', desc: 'Milestone-based release tied directly to verified civil progress.', icon: CheckCircle2 },
  { title: 'Telemetry & Tracking', desc: 'Active site monitoring via remote feeds and daily drone mapping.', icon: Activity },
  { title: 'Dedicated Command', desc: 'Single point of contact from mobilization to final client handover.', icon: Users }
];

export default function TechnologyAdvantage() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-[#07152E]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12">
            <div>
              <span className="text-[#FF6B2C] text-[10px] font-bold uppercase tracking-[0.2em] block mb-6">
                The Agaon Advantage
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#07152E] leading-[1.1]">
                Built on Technology.<br />
                <span className="font-serif italic font-medium text-[#07152E]/60">Grounded in Reality.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 pt-4">
              {benefits.map((bg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx} 
                  className="space-y-4"
                >
                  <div className="w-8 h-8 flex items-center justify-center border-b-2 border-[#07152E]">
                    <bg.icon className="w-4 h-4 text-[#07152E]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-sans font-bold text-[#07152E] tracking-wide text-sm uppercase">{bg.title}</h4>
                  <p className="text-[#07152E]/60 text-sm leading-relaxed font-light">{bg.desc}</p>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-4 mt-4 bg-transparent border border-[#07152E] text-[#07152E] font-sans font-bold text-[10px] uppercase tracking-[0.2em] rounded-none hover:bg-[#07152E] hover:text-white transition-colors duration-300">
              Discover Our Process
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, filter: "grayscale(100%)" }}
            whileInView={{ opacity: 1, filter: "grayscale(20%)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" 
                alt="Construction Site"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-105"
              />
            </div>

            {/* Architectural Annotation instead of floating glass card */}
            <div className="absolute -left-6 md:-left-12 bottom-12 bg-white p-6 border border-[#07152E]/10 max-w-[280px]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-[#FF6B2C]" />
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#07152E] font-bold">
                  Status: Active Site
                </span>
              </div>
              <p className="text-sm font-display text-[#07152E] font-bold mb-1 uppercase tracking-wide">Sector 65 Corporate Park</p>
              <p className="text-[10px] uppercase tracking-[0.1em] text-[#07152E]/50 font-sans">Phase 2: RC Core Pouring</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
