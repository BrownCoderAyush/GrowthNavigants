
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const InsideGrowth: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  return (
    <section id="inside" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
              <Camera size={14} />
              <span>Inside GrowthNavigants</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Built by real people, solving real growth challenges</h2>
            <p className="text-xl text-slate-600">
              Transparency builds trust. Take a look behind the scenes at our team in action and the progress we're making for our partners.
            </p>
          </div>
          <div className="hidden md:flex space-x-4 mb-2">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Carousel Display */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] shadow-2xl bg-slate-100 border border-slate-100">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  idx === currentIndex ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-110 translate-x-full pointer-events-none'
                }`}
              >
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Caption Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{img.caption}</h3>
                    <p className="text-sm md:text-lg text-slate-200 leading-relaxed font-medium">
                      {img.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Mobile Controls Overlay */}
            <div className="md:hidden absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-slate-900 pointer-events-auto active:scale-90 transition-transform"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-slate-900 pointer-events-auto active:scale-90 transition-transform"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {GALLERY_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-500 rounded-full h-2 ${
                  idx === currentIndex ? 'w-12 bg-indigo-600' : 'w-2 bg-slate-200 hover:bg-indigo-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideGrowth;
