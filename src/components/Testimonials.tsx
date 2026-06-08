import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajendra Kumar',
    location: 'Mumbai, Maharashtra',
    text: 'Agaon Construction delivered our commercial complex exactly on time and completely within budget. Their tracking app gave me total peace of mind.',
    role: 'Commercial Developer'
  },
  {
    name: 'Anjali Sharma',
    location: 'Delhi NCR',
    text: 'Building my dream home was stress-free thanks to Agaon. The 3D VR sessions before construction started helped us visualize every detail perfectly.',
    role: 'Private Estate Owner'
  },
  {
    name: 'Dr. Subramaniam',
    location: 'Bangalore, Karnataka',
    text: 'Their commitment to quality is unmatched. The 500+ point inspection reports we received at every milestone proved their dedication to absolute certainty.',
    role: 'Institutional Client'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="py-32 bg-[#F8F9FA] relative border-t border-[#07152E]/10 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col md:flex-row justify-between">
        
        {/* Editorial Info Left */}
        <div className="md:w-1/3 mb-16 md:mb-0 flex flex-col justify-between">
          <div>
            <span className="text-[#FF6B2C] text-[10px] uppercase font-bold tracking-[0.3em] block mb-4">
              Client Perspectives
            </span>
            <h2 className="font-display text-4xl text-[#07152E] font-bold tracking-tight mb-8">
              Words from<br/>our partners.
            </h2>
          </div>
          
          <button 
            onClick={next}
            className="flex items-center space-x-4 text-[#07152E] group w-fit"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold">Next Statement</span>
            <div className="w-10 h-10 border border-[#07152E] flex items-center justify-center group-hover:bg-[#07152E] group-hover:text-white transition-colors duration-300 rounded-none">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Quote Right */}
        <div className="md:w-3/5 min-h-[300px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col"
            >
              <h3 className="font-display text-3xl md:text-5xl lg:text-5xl text-[#07152E] font-medium leading-[1.2] mb-12 flex-grow">
                “{testimonials[currentIndex].text}”
              </h3>
              
              <div className="flex flex-col border-t border-[#07152E]/10 pt-6">
                <span className="font-display text-xl text-[#07152E] font-bold mb-1">{testimonials[currentIndex].name}</span>
                <span className="font-sans text-[10px] text-[#07152E]/60 uppercase tracking-[0.2em]">
                  {testimonials[currentIndex].role} — {testimonials[currentIndex].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
