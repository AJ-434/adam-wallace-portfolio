import React from 'react';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { FEATURED_INSIGHTS } from '../constants';

const FeaturedInsights: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
              Thought Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Featured Insights
            </h2>
            <p className="text-lg text-slate-500">
              Strategies and frameworks for the modern executive.
            </p>
          </div>
          <a 
            href="https://www.linkedin.com/in/adam-wallace-/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-600 transition-colors mt-6 md:mt-0"
          >
            Read more on LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_INSIGHTS.map((insight, idx) => (
            <a 
              key={idx} 
              href={insight.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <div className="h-full bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wide">
                    {insight.category}
                  </span>
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {insight.title}
                </h3>
                
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                  {insight.summary}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  Read Article
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
           <a 
            href="https://www.linkedin.com/in/adam-wallace-/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-600 transition-colors"
          >
            Read more on LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default FeaturedInsights;