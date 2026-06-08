import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 bg-[#07152E] text-white min-h-screen">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 mb-12 border-b border-white/10">
        <span className="text-[#FF6B2C] text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">
          Initiate Contact
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl mb-12">
          Commence<br/>
          <span className="font-serif italic font-medium text-white/50">Engagement.</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl font-light leading-relaxed">
          Connect with our corporate syndicates for bespoke proposals, structural analysis, and feasibility models.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-16">
            
            <div className="space-y-12">
              <div className="group">
                <span className="font-sans text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-4 flex items-center">
                  <MapPin className="w-3 h-3 mr-2" /> Global Headquarters
                </span>
                <p className="font-display text-2xl group-hover:text-[#FF6B2C] transition-colors cursor-pointer">
                  Level 42, AGAON Tower<br/>
                  BKC, Mumbai<br/>
                  Maharashtra 400051
                </p>
              </div>

              <div className="group">
                <span className="font-sans text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-4 flex items-center">
                  <Phone className="w-3 h-3 mr-2" /> Direct Voice
                </span>
                <p className="font-display text-2xl group-hover:text-[#FF6B2C] transition-colors cursor-pointer">
                  +91 (022) 4800 2424
                </p>
              </div>

              <div className="group">
                <span className="font-sans text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-4 flex items-center">
                  <Mail className="w-3 h-3 mr-2" /> Digital Inquiries
                </span>
                <p className="font-display text-2xl group-hover:text-[#FF6B2C] transition-colors cursor-pointer">
                  proposals@agaon.co.in
                </p>
              </div>
            </div>

            <div className="p-8 border border-white/10 bg-white/5">
              <h4 className="font-sans text-[10px] text-white/50 tracking-[0.2em] uppercase font-bold block mb-4">Operations Status</h4>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-display text-lg text-white">Active</span>
              </div>
              <p className="text-white/50 text-xs font-sans tracking-wide">Business Hours: 09:00 — 19:00 IST</p>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7">
            <h3 className="font-sans text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-12">Encrypted Submission</h3>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input type="text" id="name" required className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-sans text-sm focus:outline-none focus:border-[#FF6B2C] transition-colors peer placeholder-transparent" placeholder="Full Name" />
                  <label htmlFor="name" className="absolute left-0 top-0 text-white/40 font-sans text-[10px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#FF6B2C] pointer-events-none">
                    Identified Entity Name
                  </label>
                </div>

                <div className="relative group">
                  <input type="tel" id="phone" required className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-sans text-sm focus:outline-none focus:border-[#FF6B2C] transition-colors peer placeholder-transparent" placeholder="Phone Number" />
                  <label htmlFor="phone" className="absolute left-0 top-0 text-white/40 font-sans text-[10px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#FF6B2C] pointer-events-none">
                    Telephonic Contact
                  </label>
                </div>
              </div>

              <div className="relative group">
                <select id="type" className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-sans text-sm focus:outline-none focus:border-[#FF6B2C] transition-colors appearance-none cursor-pointer rounded-none">
                  <option value="" className="bg-[#07152E]">Select Requirement Profile</option>
                  <option value="res" className="bg-[#07152E]">Residential Asset Development</option>
                  <option value="com" className="bg-[#07152E]">Commercial Infrastructure</option>
                  <option value="fac" className="bg-[#07152E]">Kinetic Facade Engineering</option>
                  <option value="int" className="bg-[#07152E]">Interior Architecture Systems</option>
                </select>
                <div className="absolute right-0 top-0 pointer-events-none">
                  <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              <div className="relative group mt-16 pt-8">
                <textarea id="message" rows={4} required className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-sans text-sm focus:outline-none focus:border-[#FF6B2C] transition-colors peer placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-8 text-white/40 font-sans text-[10px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-8 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FF6B2C] pointer-events-none">
                  Detailed Operational Requirement
                </label>
              </div>

              <div className="pt-8 text-right">
                <button type="submit" className="px-10 py-5 bg-white text-[#07152E] flex items-center justify-between ml-auto hover:bg-[#FF6B2C] hover:text-white transition-colors group">
                  <span className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] mr-8">Transmit Packet</span>
                  <ArrowRight className="w-4 h-4 text-[#07152E] group-hover:text-white" strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
