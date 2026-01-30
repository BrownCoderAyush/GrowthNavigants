
import React from 'react';
import { Search, PenTool, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Discover & Research",
      description: "We lead with research, not just code. We start by understanding how your business actually works to find the real friction points.",
      icon: <Search className="w-8 h-8" />,
      tag: "Step 01"
    },
    {
      title: "Design & Build",
      description: "We validate ideas with research, prototypes, and pilots. No templates. No forced tools. Just custom solutions designed for you.",
      icon: <PenTool className="w-8 h-8" />,
      tag: "Step 02"
    },
    {
      title: "Scale & Optimize",
      description: "From startup to enterprise, we build scalable foundations that grow as you do. We ensure what you launch actually gets used.",
      icon: <Rocket className="w-8 h-8" />,
      tag: "Step 03"
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Launch faster — without breaking things</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Our proven SDLC methodology ensures your investment results in adoption and measurable business growth.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="mb-8 relative">
                  <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center rotate-3 group-hover:rotate-12 group-hover:bg-indigo-500 transition-all duration-300 shadow-xl shadow-indigo-600/20">
                    <div className="-rotate-3 group-hover:-rotate-12 transition-all">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-[10px] font-bold tracking-widest text-indigo-400">
                    {step.tag}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
