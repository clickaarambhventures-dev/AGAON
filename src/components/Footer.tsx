import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07152E] pt-32 pb-12 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col h-full">
        
        {/* Top Massive Typography */}
        <div className="mb-24 md:mb-32">
          <h2 className="font-display text-5xl md:text-[7rem] lg:text-[10rem] font-bold text-white tracking-tighter leading-none mb-6">
            AGAON
          </h2>
          <div className="w-full h-[1px] bg-white/20" />
        </div>

        {/* Middle Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 mb-24 md:mb-32">
          
          <div className="col-span-2 md:col-span-1 space-y-8">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FF6B2C] font-bold">Office</h4>
            <div className="text-white/60 font-sans text-sm leading-relaxed">
              Level 42, Signature Tower,<br />
              BKC, Mumbai 400051<br />
              India
            </div>
            <div className="text-white font-sans text-sm tracking-wide">
              info@agaonconstruction.in
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FF6B2C] font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li>
                <button onClick={() => handleNavigate('/about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Firm Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Executive Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/portfolio')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Our Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Join Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FF6B2C] font-bold mb-8">Disciplines</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li>
                <button onClick={() => handleNavigate('/services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Residential
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Commercial
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Facades
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Interiors
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FF6B2C] font-bold mb-8">Tools</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li>
                <button onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  // This opens the portal modal on Header since Header is global
                  const portalBtn = document.querySelector('button:contains("Client Portal")') as HTMLButtonElement;
                  if (portalBtn) {
                    portalBtn.click();
                  } else {
                    const buttons = Array.from(document.querySelectorAll('button'));
                    const target = buttons.find(b => b.textContent?.includes('Client Portal'));
                    if (target) target.click();
                  }
                }} className="hover:text-white transition-colors cursor-pointer text-left">
                  Client Portal Login
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/estimator')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cost Estimator
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('/about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Quality Control Manual
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
          <p>&copy; 2026 AGAON CORP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <button onClick={() => handleNavigate('/about')} className="hover:text-white transition-colors cursor-pointer">
              Privacy
            </button>
            <button onClick={() => handleNavigate('/about')} className="hover:text-white transition-colors cursor-pointer">
              Legal Terms
            </button>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
