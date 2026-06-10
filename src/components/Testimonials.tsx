import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Quote, ArrowRight, ArrowLeft } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Desai",
    role: "Director, Nexus Tech Park",
    location: "Gurugram",
    text: "The structural integrity and facade work done by Agaon for our tech park was exceptional. Their team handled everything from planning to final handover with complete professionalism.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Rahul Mehta",
    role: "Homeowner",
    location: "Mumbai",
    text: "We wanted a premium home without the usual contractor headaches. Agaon delivered exactly what was promised, on time and within budget.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Priya Sharma",
    role: "Villa Owner",
    location: "Pune",
    text: "The real-time project tracking gave us confidence throughout construction. We could monitor progress from anywhere.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Vikram Khanna",
    role: "Business Owner",
    location: "Bengaluru",
    text: "The transparency in pricing and execution was unlike anything we had experienced before in the construction industry.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Neha Patel",
    role: "Managing Partner",
    location: "Ahmedabad",
    text: "Agaon’s attention to detail and commitment to sustainable building practices transformed our vision into an architectural masterpiece.",
    image: 
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Arjun Singh",
    role: "Estate Developer",
    location: "Delhi",
    text: "Working with Agaon felt less like hiring a contractor and more like partnering with true craftsmen. Their standard of excellence is unmatched.",
    image: 
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].clientWidth;
      scrollRef.current.scrollBy({ left: -cardWidth - 32, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].clientWidth;
      scrollRef.current.scrollBy({ left: cardWidth + 32, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#EAE0CF] relative overflow-hidden flex flex-col justify-center border-t border-[#111844]/5">
      {/* Subtle Premium Background Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#111844 1px, transparent 1px), linear-gradient(90deg, #111844 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full mb-12 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#4B5694]" />
            <span className="text-[#4B5694] text-sm font-bold uppercase tracking-widest">
              Client Stories
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111844] font-extrabold tracking-tight max-w-2xl"
          >
            Built on Trust &amp; Engineering Excellence
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-4 shrink-0"
        >
          <button 
            onClick={scrollLeft}
            className="w-14 h-14 rounded-full border border-[#111844]/20 flex items-center justify-center text-[#111844] hover:bg-[#111844] hover:text-white transition-colors duration-300 group focus:outline-none"
            aria-label="Previous Testimonials"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-14 h-14 rounded-full border border-[#111844]/20 flex items-center justify-center text-[#111844] hover:bg-[#111844] hover:text-white transition-colors duration-300 group focus:outline-none"
            aria-label="Next Testimonials"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <div className="relative z-10 w-full pl-6 md:pl-12 xl:pl-[calc(50vw-650px)]">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-12 pr-6 md:pr-12 xl:pr-[calc(50vw-650px)] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx}
              className="relative isolate flex flex-col bg-white p-8 md:p-12 border border-[#111844]/5 w-[85vw] md:w-[450px] lg:w-[500px] shrink-0 snap-start shadow-[0_20px_50px_rgba(17,24,68,0.03)]"
            >
              <Quote className="absolute top-10 right-10 w-16 h-16 text-[#111844]/5 -z-10" />
              
              <div className="flex-1">
                <div className="mb-8 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#4B5694] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-display text-xl md:text-2xl text-[#111844] leading-relaxed mb-10 font-medium">"{testimonial.text}"</p>
              </div>
              
              <div className="flex items-center space-x-4 mt-auto pt-6 border-t border-[#111844]/5">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover grayscale-[20%] border border-[#111844]/10" 
                />
                <div className="flex flex-col">
                  <span className="font-display text-base md:text-lg font-bold text-[#111844]">{testimonial.name}</span>
                  <span className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-[#111844]/50">{testimonial.role} <span className="mx-1">•</span> {testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
