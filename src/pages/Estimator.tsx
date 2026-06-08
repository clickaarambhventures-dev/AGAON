import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Estimator() {
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [floors, setFloors] = useState('');
  const [grade, setGrade] = useState('Premium');

  const calculatedCost = (Number(area) || 0) * (Number(floors) || 1) * (grade === 'Premium' ? 4500 : grade === 'Luxury' ? 6500 : 3000);

  return (
    <div className="pt-24 bg-[#F8F9FA] min-h-screen">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-b border-[#07152E]/10 mb-24">
        <span className="text-[#FF6B2C] text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">
          Feasibility Model
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#07152E] tracking-tight leading-[1.05] max-w-2xl">
          Financial<br/>
          <span className="font-serif italic font-medium text-[#07152E]/50">Architecture.</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Calculator Form */}
          <div className="lg:col-span-8 bg-white p-10 md:p-16 border border-[#07152E]/10">
            
            <div className="space-y-16">
              
              {/* Region */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#07152E]">01. Region</label>
                  <p className="text-[#07152E]/50 text-xs mt-2 leading-relaxed tracking-wide pr-4">Select the primary jurisdiction for the asset deployment.</p>
                </div>
                <div className="md:col-span-2">
                  <select 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent border-b border-[#07152E]/20 pb-4 text-[#07152E] font-display text-2xl focus:outline-none focus:border-[#FF6B2C] transition-colors appearance-none cursor-pointer rounded-none"
                  >
                    <option value="" disabled>Select Jurisdiction</option>
                    <option value="mumbai">Mumbai Metropolitan Region</option>
                    <option value="delhi">National Capital Region (NCR)</option>
                    <option value="bangalore">Bangalore Urban</option>
                  </select>
                </div>
              </div>

              {/* Scale */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#07152E]">02. Footprint</label>
                  <p className="text-[#07152E]/50 text-xs mt-2 leading-relaxed tracking-wide pr-4">Define the proposed structural footprint area.</p>
                </div>
                <div className="md:col-span-2">
                  <div className="relative">
                    <input 
                      type="number"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="e.g. 5000"
                      className="w-full bg-transparent border-b border-[#07152E]/20 pb-4 text-[#07152E] font-display text-2xl focus:outline-none focus:border-[#FF6B2C] transition-colors rounded-none placeholder:text-[#07152E]/20"
                    />
                    <span className="absolute right-0 bottom-4 text-[#07152E]/40 font-mono text-sm uppercase tracking-widest pointer-events-none">Sq.Ft.</span>
                  </div>
                </div>
              </div>

              {/* Volume */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#07152E]">03. Volume</label>
                  <p className="text-[#07152E]/50 text-xs mt-2 leading-relaxed tracking-wide pr-4">Vertical expansion parameters.</p>
                </div>
                <div className="md:col-span-2">
                  <select 
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    className="w-full bg-transparent border-b border-[#07152E]/20 pb-4 text-[#07152E] font-display text-2xl focus:outline-none focus:border-[#FF6B2C] transition-colors appearance-none cursor-pointer rounded-none"
                  >
                    <option value="" disabled>Select Floors</option>
                    <option value="1">Ground Level Only</option>
                    <option value="2">G + 1 Elevation</option>
                    <option value="3">G + 2 Elevation</option>
                    <option value="4">G + 3 Elevation</option>
                    <option value="5">G + 4 Elevation</option>
                  </select>
                </div>
              </div>

              {/* Quality Index */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#07152E]">04. Delivery Class</label>
                  <p className="text-[#07152E]/50 text-xs mt-2 leading-relaxed tracking-wide pr-4">Material specifications and tolerances.</p>
                </div>
                <div className="md:col-span-2 flex flex-col gap-4">
                  {[
                    { val: 'Standard', label: 'Standard Architectural', desc: 'Domestic materials, standard structural compliance.' },
                    { val: 'Premium', label: 'Premium Grade', desc: 'Imported finishes, enhanced climatic resistance.' },
                    { val: 'Luxury', label: 'Absolute Luxury', desc: 'Bespoke materials, smart integration, zero-tolerance execution.' }
                  ].map(g => (
                    <button
                      key={g.val}
                      onClick={() => setGrade(g.val)}
                      className={`text-left p-6 border transition-all duration-300 ${
                        grade === g.val
                          ? 'border-[#07152E] bg-[#07152E] text-white'
                          : 'border-[#07152E]/10 hover:border-[#07152E]/30 text-[#07152E]'
                      }`}
                    >
                      <h4 className="font-display font-medium text-lg mb-2">{g.label}</h4>
                      <p className={`text-xs ${grade === g.val ? 'text-white/70' : 'text-[#07152E]/50'} tracking-wide`}>{g.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Side Panel / Sticky Output */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="bg-[#07152E] text-white p-10 border border-[#07152E]">
              <span className="font-sans text-[10px] text-[#FF6B2C] tracking-[0.2em] uppercase font-bold block mb-4">Estimated CapEx</span>
              
              <div className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-8">
                {calculatedCost > 0 ? `₹${(calculatedCost / 10000000).toFixed(2)}` : '₹0.00'}
                {calculatedCost > 0 && <span className="text-xl ml-2 text-white/50 font-normal">Cr</span>}
              </div>

              <div className="border-t border-white/10 pt-8 space-y-4">
                <h4 className="font-sans text-[10px] text-white/50 tracking-[0.2em] uppercase font-bold mb-6">Scope of Delivery</h4>
                {[
                  'Architectural Blueprinting',
                  'Structural Engineering Analysis',
                  'Foundation & Core Erection',
                  'MEP Systems Integration',
                  'Interior Finishes & Millwork',
                  'Dedicated Project Management'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start text-xs text-white/80 tracking-wide leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-[#FF6B2C] mt-1 mr-4 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-[#FF6B2C] text-white flex items-center justify-between p-6 uppercase font-bold text-[10px] tracking-[0.2em] transition-colors hover:bg-[#e05a22]">
              <span>Request Formal Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
