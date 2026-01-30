
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Logic for header appearance
  const getHeaderClasses = () => {
    const baseClasses = "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ";
    if (isMobileMenuOpen) {
      return baseClasses + "bg-white py-4 shadow-md";
    }
    if (isScrolled) {
      return baseClasses + "glass-effect shadow-sm py-3";
    }
    return baseClasses + "bg-transparent py-6";
  };

  return (
    <>
      <header className={getHeaderClasses()}>
        <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
          <a href="#" className="flex items-center space-x-2 group focus:outline-none shrink-0" aria-label="Home" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">GrowthNavigants</span>
          </a>

          {/* Desktop Nav - Switched to 'lg' to prevent overlap on smaller screens/tablets */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={onCtaClick}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200 whitespace-nowrap"
            >
              Get Free Consultation
            </button>
          </nav>

          {/* Mobile Toggle - Visible up to 'lg' breakpoint */}
          <button 
            className="lg:hidden text-slate-900 p-2 focus:outline-none transition-transform active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-white z-[105] transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-slate-50 opacity-50 -z-10"></div>
          
          <div className="flex flex-col h-full pt-32 pb-12 px-8 overflow-y-auto">
            <div className="mb-4">
              <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.2em] mb-4 block">Navigation</span>
            </div>
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link, idx) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={`text-2xl sm:text-3xl font-bold text-slate-900 py-4 flex items-center justify-between border-b border-slate-100 transition-all duration-300 hover:text-indigo-600 ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 75}ms` }}
                  onClick={handleLinkClick}
                >
                  <span>{link.label}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </a>
              ))}
            </nav>
            
            <div className={`mt-auto transition-all duration-500 delay-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onCtaClick();
                }}
                className="w-full bg-indigo-600 text-white px-5 py-5 rounded-2xl text-center font-bold text-xl shadow-xl shadow-indigo-100 active:scale-[0.98] transition-all"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
