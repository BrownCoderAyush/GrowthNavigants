
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Trust: React.FC = () => {
  return (
    <section id="trust" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by teams building serious growth</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Logo placeholders */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-slate-900 rounded-lg"></div>
              <span className="font-bold text-xl text-slate-900 uppercase tracking-tighter">SWIFT</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-slate-900 rounded-full"></div>
              <span className="font-bold text-xl text-slate-900 uppercase tracking-tighter">LUMINA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-1 bg-slate-900 rotate-45"></div>
              <span className="font-bold text-xl text-slate-900 uppercase tracking-tighter">NEXUS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 border-4 border-slate-900 rounded-md"></div>
              <span className="font-bold text-xl text-slate-900 uppercase tracking-tighter">ORION</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-indigo-100" />
              <p className="text-lg text-slate-700 mb-8 italic relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={`https://picsum.photos/seed/${idx + 100}/50/50`} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <p className="text-sm text-slate-500">{t.role} at {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
