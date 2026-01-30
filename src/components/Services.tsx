
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">A growth partner that builds for where you’re going</h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              GrowthNavigants helps you design and build robust, scalable applications grounded in real product research and industry context.
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <div className="inline-block bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold text-slate-500 uppercase tracking-widest shadow-sm">
              Our Expertise
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-100 transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 inline-block self-start group-hover:bg-indigo-50 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="pt-4 mt-auto border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center text-indigo-600 font-semibold text-sm">
                Learn more
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
