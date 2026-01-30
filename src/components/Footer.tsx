
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onCtaClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCtaClick }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 sm:pt-24">
      <div className="container mx-auto px-6">
        <div className="bg-indigo-600 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between mb-16 sm:mb-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
          <div className="lg:w-2/3 mb-8 lg:mb-0 relative z-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">Start with clarity — not commitment</h2>
            <p className="text-indigo-100 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
              De-risk your next build before you scale. Limited pilot slots are available for Q3.
            </p>
          </div>
          <button 
            onClick={onCtaClick}
            className="w-fit lg:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg sm:text-xl hover:bg-slate-100 transition-all flex items-center justify-center shadow-xl relative z-10 group/btn mx-auto"
          >
            Start Free Consult
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">GrowthNavigants</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6 text-sm sm:text-base">
              Empowering fast-growing companies with systems that scale. We bridge the gap between complex tech and real business outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 cursor-pointer transition-colors" aria-label="LinkedIn">
                <span className="text-xs font-bold">In</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 cursor-pointer transition-colors" aria-label="Twitter">
                <span className="text-xs font-bold">X</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:contents">
            <div>
              <h4 className="font-bold text-white mb-6 text-sm sm:text-base">Expertise</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">CRM Solutions</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Cloud Infrastructure</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Fintech Systems</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Gen AI Implementation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-sm sm:text-base">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Methodology</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs sm:text-sm text-center md:text-left">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} GrowthNavigants. All rights reserved.</p>
          <div className="flex space-x-6 sm:space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
