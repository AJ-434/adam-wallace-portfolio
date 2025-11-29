import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center">
        <div className="flex items-center gap-3">
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-xs sm:text-sm font-semibold hover:border-slate-900 hover:text-slate-900 transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            Book Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;