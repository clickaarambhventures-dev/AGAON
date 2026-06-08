import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  { q: 'How accurate is the estimate?', a: 'Our dynamic engine utilizes 5D BIM and real-time commodity indices to provide a structural estimate within a 5% margin of actual costs. Once contracted, the cost is absolutely fixed.' },
  { q: 'How do you ensure zero delays?', a: 'We employ rigorous critical-path planning alongside dedicated procurement teams that secure materials months in advance, isolating your project from local supply chain fluctuations.' },
  { q: 'Can I track my project remotely?', a: 'Yes. Our proprietary client portal gives you 24/7 access to live CCTV site feeds, automated drone progression scanning, and digitized billing milestones.' },
  { q: 'Do you handle approvals?', a: 'We handle comprehensive, end-to-end statutory compliances, structural clearances, environmental zoning permissions, and local municipality NOCs before breaking ground.' },
  { q: 'What warranty do you provide?', a: 'Every structure we hand over includes a certified 10-year structural warranty, shielding you from core foundation, load-bearing, and water-proofing defects.' }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white relative z-10 border-t border-[#07152E]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Left Intro */}
        <div className="md:col-span-5">
          <span className="text-[#FF6B2C] text-[10px] uppercase font-bold tracking-[0.3em] block mb-4">
            Common Inquiries
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#07152E] mb-6 leading-tight">
            Clarity in construction.
          </h2>
          <p className="text-[#07152E]/60 font-sans text-sm font-light leading-relaxed mb-8 max-w-sm">
            We believe an informed client is a powerful partner. Here is everything you need to know about our contracting standards.
          </p>
        </div>

        {/* Right Accordion */}
        <div className="md:col-span-7">
          <div className="space-y-0 border-t border-[#07152E]/10">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border-b border-[#07152E]/10"
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <span className={`font-display text-xl transition-colors ${openIdx === idx ? 'text-[#FF6B2C]' : 'text-[#07152E] group-hover:text-[#FF6B2C]'}`}>{faq.q}</span>
                  <span className="ml-8 text-[#07152E] group-hover:text-[#FF6B2C] transition-colors">
                    {openIdx === idx ? <Minus className="w-5 h-5" strokeWidth={1.5} /> : <Plus className="w-5 h-5" strokeWidth={1.5} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-12 text-[#07152E]/70 text-sm font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
