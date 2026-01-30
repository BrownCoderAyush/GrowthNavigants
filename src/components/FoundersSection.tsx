
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Globe, Quote } from 'lucide-react';
import { FOUNDERS } from '../constants';

const FoundersSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % FOUNDERS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + FOUNDERS.length) % FOUNDERS.length);
  };

  const currentFounder = FOUNDERS[activeIndex];

  return (
    <section id="founders" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
            
            {/* Left Column: Image Carousel */}
            <div className="lg:w-2/5 w-full flex flex-col">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-200 group">
                {FOUNDERS.map((founder, idx) => (
                  <div
                    key={founder.name}
                    className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                      idx === activeIndex 
                        ? 'opacity-100 scale-100 translate-x-0 rotate-0' 
                        : 'opacity-0 scale-110 translate-x-8 pointer-events-none'
                    }`}
                  >
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  </div>
                ))}

                {/* Navigation Controls */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
                  <button 
                    onClick={prevSlide}
                    className="p-3 rounded-full glass-effect text-slate-900 hover:bg-white transition-all shadow-lg active:scale-95"
                    aria-label="Previous Founder"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="flex space-x-2">
                    {FOUNDERS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === activeIndex ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextSlide}
                    className="p-3 rounded-full glass-effect text-slate-900 hover:bg-white transition-all shadow-lg active:scale-95"
                    aria-label="Next Founder"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Details Panel */}
            <div className="lg:w-3/5 w-full flex flex-col justify-center py-4">
              <div className="relative min-h-[400px]">
                {/* Content with simple manual transition logic */}
                <div 
                  key={currentFounder.name}
                  className="animate-in fade-in slide-in-from-right-8 duration-500"
                >
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">
                    <span>Executive Leadership</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-2">
                    {currentFounder.name}
                  </h2>
                  <p className="text-xl md:text-2xl font-semibold text-indigo-600 mb-8">
                    {currentFounder.role}
                  </p>
                  
                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-6 w-12 h-12 text-slate-100 -z-10" />
                    <p className="text-lg text-slate-500 font-medium italic mb-6 leading-relaxed">
                      "{currentFounder.shortBio}"
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                      {currentFounder.longDescription}
                    </p>
                  </div>

                  <div className="flex items-center space-x-6 mt-10">
                    {currentFounder.links.linkedin && (
                      <a 
                        href={currentFounder.links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-md transition-all"
                      >
                        <Linkedin size={24} />
                      </a>
                    )}
                    {currentFounder.links.twitter && (
                      <a 
                        href={currentFounder.links.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-md transition-all"
                      >
                        <Twitter size={24} />
                      </a>
                    )}
                    {currentFounder.links.website && (
                      <a 
                        href={currentFounder.links.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-md transition-all"
                      >
                        <Globe size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Founder Thumbnails Switcher for Desktop */}
              <div className="hidden lg:flex mt-auto pt-12 space-x-4">
                {FOUNDERS.map((founder, idx) => (
                  <button
                    key={`thumb-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      idx === activeIndex ? 'border-indigo-600 scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
