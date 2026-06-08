import React from 'react';
import { motion } from 'motion/react';
import { Glasses, ArrowRight } from 'lucide-react';

export default function VRCta() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#07152E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[600px] w-full bg-[#07152E] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
              alt="VR Visualization"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[#FF6B2C] text-[10px] font-bold uppercase tracking-[0.3em] block mb-8">
              Digital Twin Simulation
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8">
              Simulate Reality<br/>
              <span className="font-serif italic font-medium text-white/50">Before Excavation.</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
              Experience your structural asset in 1:1 scale Virtual Reality. Traverse corridors, inspect lighting physics, and audit material selections telemetry before a single unit of capital is deployed on-site.
            </p>
            <div className="pt-8 border-t border-white/10">
              <button className="px-8 py-5 bg-white text-[#07152E] flex items-center justify-between hover:bg-[#FF6B2C] hover:text-white transition-colors group">
                <span className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] mr-8">Schedule Simulation Call</span>
                <ArrowRight className="w-4 h-4 text-[#07152E] group-hover:text-white" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
