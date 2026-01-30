
import React from 'react';
import { AlertCircle } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">When growth feels harder than it should</h2>
          <p className="text-xl text-slate-600">
            You’ve outgrown spreadsheets, patchwork tools, and “temporary fixes.” 
            Your CRM exists, but nobody really uses it. Features ship, but adoption stays low.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Messy Operations",
              description: "Systems that worked for 5 people break at 50. Data is siloed, and visibility into growth is clouded by manual work.",
              icon: <div className="p-3 bg-red-50 text-red-600 rounded-lg"><AlertCircle className="w-6 h-6" /></div>
            },
            {
              title: "Stalled Velocity",
              description: "Every new decision feels risky. Every delay costs money, momentum, and confidence in your tech stack.",
              icon: <div className="p-3 bg-red-50 text-red-600 rounded-lg"><AlertCircle className="w-6 h-6" /></div>
            },
            {
              title: "Low ROI on Tech",
              description: "You're paying for software that isn't actually solving the core business problems, leading to 'tool fatigue'.",
              icon: <div className="p-3 bg-red-50 text-red-600 rounded-lg"><AlertCircle className="w-6 h-6" /></div>
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <p className="text-2xl md:text-3xl font-medium max-w-2xl mx-auto mb-4 relative z-10">
            You don’t need <span className="underline decoration-indigo-400 underline-offset-4">more</span> software. 
          </p>
          <p className="text-3xl md:text-4xl font-bold relative z-10">
            You need systems built for <span className="text-indigo-300">your business</span> — today and tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
