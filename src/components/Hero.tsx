
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 lg:pt-56 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-indigo-50 rounded-full blur-3xl opacity-60 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-slate-50 rounded-full blur-3xl opacity-80 transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center">
        <div className="lg:w-3/5 w-full">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span>Built for Founders, Operators, and Product Teams</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 md:mb-8">
            Build systems that <span className="text-indigo-600">scale your business</span> — not slow it down
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            You’re growing fast, but your tech, tools, and processes aren’t keeping up. 
            We help you turn complexity into clarity — and ideas into scalable products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={onCtaClick}
              className="w-fit px-7 py-3.5 sm:px-8 sm:py-4 bg-slate-900 text-white rounded-full font-bold text-base sm:text-lg hover:bg-indigo-600 transition-all flex items-center justify-center group shadow-xl hover:shadow-indigo-200 mx-auto lg:mx-0"
            >
              Start Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center space-x-2 text-slate-500 text-sm font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img 
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 123}`} 
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-100"
                    alt="Team member"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm">Limited pilot slots available</span>
            </div>
          </div>
        </div>

        {/* Dynamic Image Carousel Column */}
        <div className="lg:w-2/5 w-full mt-12 lg:mt-0 relative px-4 sm:px-0 group">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 aspect-[4/5] sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/3]">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-left">
                  <p className="text-white font-bold text-xl sm:text-2xl mb-2">{img.caption}</p>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-md">{img.description}</p>
                </div>
              </div>
            ))}

            {/* Carousel Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-slate-900 shadow-lg hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-slate-900 shadow-lg hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Carousel Progress Dots */}
            <div className="absolute top-4 right-4 flex space-x-1.5 z-20">
              {GALLERY_IMAGES.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentSlide ? 'w-6 bg-indigo-500' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
