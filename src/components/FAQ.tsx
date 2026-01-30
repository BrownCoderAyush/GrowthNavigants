
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-xl">Everything you need to know before we get started.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm transition-all"
            >
              <button 
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50"
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                {activeIndex === idx ? <ChevronUp className="text-indigo-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {activeIndex === idx && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
