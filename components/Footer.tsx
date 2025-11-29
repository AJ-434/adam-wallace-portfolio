import React from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { LINKEDIN_URL, BOOKING_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
          Unlock Sustainable Revenue Growth
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
         Partner with a strategic leader who bridges the gap between commercial vision and operational execution.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            Contact me via LinkedIn
            <ArrowUpRight className="w-5 h-5" />
          </a>
          
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-700 transition-all transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            Book Strategy Call
            <Calendar className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Adam Wallace. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Strategic Growth Executive • International Business</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;