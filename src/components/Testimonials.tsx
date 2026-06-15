import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Property Investor",
    location: "Mumbai",
    text: "Agaon Construction delivered our commercial high-rise three months ahead of schedule. Their transparency in pricing and zero cost overruns made a massive difference to our bottom line.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Priya Verma",
    role: "Homeowner",
    location: "Delhi",
    text: "Building our dream home was stress-free. The attention to detail from the foundation to the final finish was impeccable. They kept us updated every single day.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Ankit Singh",
    role: "Managing Director",
    location: "Pune",
    text: "The quality of materials used and the professionalism of their on-site team is unmatched. Agaon doesn't just build structures; they engineer certainty and trust.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Sneha Kapoor",
    role: "Architect",
    location: "Bangalore",
    text: "As an architect, I am extremely particular about execution. Agaon's structural precision and ability to perfectly translate complex designs into reality is outstanding.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Arjun Mehta",
    role: "Retail Business Owner",
    location: "Hyderabad",
    text: "Our entire retail chain revamp was handled by Agaon. Their project management is phenomenal, ensuring no disruptions while maintaining the highest safety standards.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Responsive design handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalGroups = Math.max(1, testimonials.length - cardsToShow + 1);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  }, [totalGroups]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  }, [totalGroups]);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(next, 5000); // 5 seconds autoplay
    return () => clearInterval(interval);
  }, [isHovered, next]);

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  return (
    <section className="py-24 md:py-32 bg-[#EAE0CF] relative overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#111844 1px, transparent 1px), linear-gradient(90deg, #111844 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#4B5694]" />
            <span className="text-[#4B5694] text-sm font-bold uppercase tracking-widest">
              CLIENT STORIES
            </span>
            <div className="w-8 h-[1px] bg-[#4B5694]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl text-[#111844] font-extrabold tracking-tight max-w-2xl"
          >
            Built on Trust, Delivered with Precision.
          </motion.h2>
        </div>

        {/* Carousel */}
        <div 
           className="relative"
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
           onTouchStart={onTouchStart}
           onTouchMove={onTouchMove}
           onTouchEnd={onTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-[0.25,1,0.5,1]"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <div className="bg-white p-8 md:p-10 shadow-xl border border-black/5 flex flex-col h-full rounded-none">
                    <Quote className="w-10 h-10 text-[#4B5694]/20 mb-6" />
                    <p className="font-sans text-[#4B5694] font-light leading-relaxed flex-grow text-lg mb-8">
                       "{t.text}"
                    </p>
                    <div className="flex items-center border-t border-[#111844]/10 pt-6 mt-auto">
                       <img
                         src={t.image}
                         alt={t.name}
                         loading="lazy"
                         referrerPolicy="no-referrer"
                         className="w-14 h-14 rounded-full object-cover border-2 border-[#111844]/5 flex-shrink-0 mr-4"
                       />
                       <div className="min-w-0">
                         <h4 className="font-display text-[#111844] font-bold text-lg leading-tight truncate">
                           {t.name}
                         </h4>
                         <span className="font-sans text-xs text-[#4B5694]/80 font-bold uppercase tracking-wider block mt-1 truncate">
                           {t.role}
                         </span>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-12 md:mt-16 px-4">
            <div className="flex space-x-2">
              {Array.from({ length: totalGroups }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-none transition-all duration-300 ${currentIndex === idx ? "bg-[#4B5694] w-8" : "bg-[#111844]/20 hover:bg-[#111844]/40 w-2"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={prev}
                className="w-12 h-12 border border-[#111844]/20 flex items-center justify-center text-[#4B5694] hover:bg-[#111844] hover:border-[#111844] hover:text-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 ml-[-2px]" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 border border-[#111844]/20 flex items-center justify-center text-[#4B5694] hover:bg-[#111844] hover:border-[#111844] hover:text-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 mr-[-2px]" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}