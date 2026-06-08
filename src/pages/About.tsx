import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 bg-[#F8F9FA] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-[#07152E] leading-[1.05] max-w-4xl"
          >
            Structuring The<br/>
            <span className="font-serif italic font-medium text-[#FF6B2C]">Unorganized.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#07152E]/70 max-w-xl text-lg md:text-xl font-light leading-relaxed mt-12"
          >
            We merge heavy civil engineering with extreme digital accountability to bring absolute certainty to the construction industry.
          </motion.p>
        </div>
      </section>

      {/* Massive Editorial Image */}
      <section className="px-6 md:px-12 max-w-[100rem] mx-auto pb-32">
        <div className="w-full aspect-[21/9] bg-[#07152E] relative overflow-hidden">
          <motion.img
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
            alt="Structuring The Unorganized"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>
      </section>

      {/* Vision & Mission Split */}
      <section className="py-32 bg-[#07152E] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-white/20 pt-8"
          >
            <h3 className="text-[#FF6B2C] font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-8">01 &mdash; Our Vision</h3>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-8 leading-snug">
              Redefining the skyline with unwavering operational integrity.
            </h2>
            <p className="text-white/60 font-sans leading-relaxed text-sm md:text-base mb-12">
              We envision a future where luxury real estate development is entirely devoid of delays, budget escalations, and opacity. By merging civil engineering mastery with digital precision, we aim to be the gold standard in premium construction across the country.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-white/20 pt-8"
          >
            <h3 className="text-[#FF6B2C] font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-8">02 &mdash; Our Mission</h3>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-8 leading-snug">
              Certainty from initial blueprint to final handover.
            </h2>
            <p className="text-white/60 font-sans leading-relaxed text-sm md:text-base mb-10">
              To drastically simplify the complex process of development for our clients. We do this by implementing uncompromising quality controls, fixed-price contracts, and real-time verifiable telemetry.
            </p>
            <ul className="space-y-4 border-t border-white/10 pt-6">
              {['100% On-time deliveries', 'Zero hidden costs', 'Global quality compliances', 'Turnkey accountability'].map((item, idx) => (
                <li key={idx} className="flex items-center text-white/80 font-sans text-sm tracking-wide">
                  <div className="w-1.5 h-1.5 bg-[#FF6B2C] mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Story & Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-end">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#07152E] mb-6 tracking-tight leading-[1.1]">
                A Legacy of<br/>Execution.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 pb-2 border-b border-[#07152E]">
              <p className="text-[#07152E]/70 text-lg font-light leading-relaxed">
                Founded on the principles of precision engineering and absolute accountability, AGAON stems from a lineage of structural perfection. What began as a boutique civil consultancy has rapidly matured into a heavy civil construction powerhouse.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[{ title: 'Software Precision', text: 'Applying modern technological management frameworks to legacy physical engineering problems.'},
              { title: 'Extreme Accountability', text: 'Taking complete, undivided ownership of every structural millimeter within the asset footprint.'},
              { title: 'Material Honesty', text: 'Sourcing, testing, and deploying only globally-certified materials that exceed required tolerances.'},
              { title: 'Client Centricity', text: 'Providing absolute peace of mind through radical transparency and continuous project telemetry.'}].map((value, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="flex flex-col group cursor-pointer"
                >
                  <div className="font-display text-3xl text-[#07152E]/20 font-bold mb-4 group-hover:text-[#FF6B2C] transition-colors">0{idx + 1}</div>
                  <h4 className="font-sans font-bold text-[#07152E] mb-3">{value.title}</h4>
                  <p className="text-[#07152E]/60 text-sm leading-relaxed">{value.text}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-24 bg-[#F8F9FA] border-t border-[#07152E]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 divide-x divide-[#07152E]/10">
              {[
                { count: '12+', label: 'Years Experience' },
                { count: '50+', label: 'Premium Projects' },
                { count: '500+', label: 'Personnel' },
                { count: '100%', label: 'Delivery Rate' }
              ].map((stat, idx) => (
                <div key={idx} className={`${idx !== 0 ? 'pl-8 lg:pl-16' : ''}`}>
                  <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#07152E] mb-4">{stat.count}</div>
                  <div className="font-sans text-[10px] text-[#07152E]/50 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
