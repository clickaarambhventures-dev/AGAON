import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const sections = [
  {
    id: 'residential',
    title: 'Residential Architecture',
    subtitle: 'Bespoke Luxury Homes & Privileged Estates',
    description: 'We construct highly personalized, generational residential assets. From vast suburban estates to ultra-modern smart homes, our residential structures are built to exceed international quality standards with premium finishes and robust underlying engineering.',
    features: ['Vastu Compliant Layouts', 'Smart Home Integration', 'Energy Efficient Envelopes', 'Premium Imported Finishes'],
    deliverables: 'Turnkey architectural delivery including custom millwork, lighting, HVAC, and landscape integration.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    reverse: false
  },
  {
    id: 'commercial',
    title: 'Commercial Infrastructure',
    subtitle: 'High-Performance Corporate Assets',
    description: 'Complex commercial projects demand absolute adherence to timelines and specialized civil engineering. We deliver sustainable, tech-integrated office parks, retail centers, and high-rise structures optimized for modern enterprise use cases.',
    features: ['Grade-A Technical Specs', 'Post-Tension Slabs', 'High-speed Elevators', 'Advanced Fire Suppression Base'],
    deliverables: 'Core & Shell or complete fit-out delivery with LEED certification compliance.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    reverse: true
  },
  {
    id: 'facade',
    title: 'Facade Engineering',
    subtitle: 'High-Performance Structural Envelopes',
    description: 'The exterior envelope is the critical interface between the environment and the structure. We design and install advanced kinetic glazing, ventilated facades, and energy-efficient skins that define the aesthetic and performative qualities of the building.',
    features: ['Unitized Glazing Systems', 'Thermal Break Technology', 'Acoustic Insulation', 'Parametric Designs'],
    deliverables: 'End-to-end design, load testing, fabrication logistics, and site installation of the complete building skin.',
    image: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?auto=format&fit=crop&w=1200&q=80',
    reverse: false
  },
  {
    id: 'interior',
    title: 'Interior Spatial Systems',
    subtitle: 'Immersive Spatial Ecosystems',
    description: 'Going beyond basic fit-outs, our interior architecture division harmonizes structural integrity with ergonomic design. We craft interior spaces that elevate human experience through meticulous material selection and layout acoustics.',
    features: ['Custom Acoustic Paneling', 'Bespoke Millwork', 'Integrated Automation', 'Curated Lighting Systems'],
    deliverables: 'Fully integrated, move-in ready interior spaces executed to millimeter precision matching exact 3D renders.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    reverse: true
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-[#07152E] text-white min-h-screen">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 mb-12">
        <span className="text-[#FF6B2C] text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">
          Divisions
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-2xl mb-12">
          Comprehensive<br/>
          <span className="font-serif italic font-medium text-white/50">Expertise.</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl font-light leading-relaxed">
          Full-spectrum architectural execution covering every phase of development from foundational civil work to bespoke interior finishes.
        </p>
      </div>

      {/* Services Loop */}
      <div className="flex flex-col space-y-0">
        {sections.map((section, idx) => (
          <section key={section.id} className="relative w-full overflow-hidden border-t border-white/10 group">
            
            {/* Split Layout */}
            <div className="flex flex-col lg:flex-row min-h-[80vh]">
              
              {/* Text Area */}
              <div className={`w-full lg:w-[45%] p-10 md:p-24 flex flex-col justify-center order-2 ${section.reverse ? 'lg:order-2 lg:border-l border-white/10' : 'lg:order-1 lg:border-r border-white/10'}`}>
                <div className="mb-12">
                  <span className="font-sans text-[10px] text-white/50 tracking-[0.2em] uppercase font-bold block mb-4">
                    0{idx + 1} &mdash; {section.subtitle}
                  </span>
                  <h2 className="font-display text-4xl font-bold mb-6">{section.title}</h2>
                  <p className="text-white/70 font-sans leading-relaxed text-sm">
                    {section.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 mb-12">
                  <span className="font-sans text-[10px] text-white/50 tracking-[0.2em] uppercase font-bold block mb-6">Parameters</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {section.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start text-white/80 font-sans text-xs tracking-wide">
                        <div className="w-1.5 h-1.5 bg-[#FF6B2C] mt-1 mr-3 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <span className="font-sans text-[10px] text-white/50 tracking-[0.2em] uppercase font-bold block mb-3">Final Deliverable</span>
                  <p className="text-white/90 text-sm italic font-serif leading-relaxed">"{section.deliverables}"</p>
                </div>
              </div>

              {/* Image Area */}
              <div className={`w-full lg:w-[55%] relative overflow-hidden order-1 ${section.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img 
                    src={section.image} 
                    alt={section.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2s]"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-[#07152E]/20" />
                </motion.div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <section className="py-32 bg-white text-[#07152E] text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#FF6B2C] text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">Initiate</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to commence execution?</h2>
          <p className="text-[#07152E]/60 mb-12 font-sans font-light text-lg">Consult with our structural engineering syndicate for an exact project feasibility parameters.</p>
          <button className="px-10 py-5 bg-[#07152E] text-white font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#FF6B2C] transition-colors">
            Schedule Technical Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
