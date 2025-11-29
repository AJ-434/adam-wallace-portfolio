import React from 'react';
import { Bot, TrendingUp, Users, Cpu } from 'lucide-react';

const AIFuture: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-6">
              <Bot className="w-3 h-3" />
              Future of Business
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Scaling Output, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Not Headcount.
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              The traditional model of "hiring to grow" may no longer be the sole requirement for expansion. The future of sustainable business growth lies in strategically leveraging intelligent solutions to achieve higher output opportunities and strategically decouple revenue generation from operational overhead.
            </p>
            
            <div className="text-lg text-slate-600 mb-8 leading-relaxed">
              <p className="mb-4">By implementing smart, scalable AI solutions and automated workflows, we can:</p>
              <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
                <li className="pl-1">Multiply the productivity of your existing high performers.</li>
                <li className="pl-1">Automate routine and administrative tasks.</li>
                <li className="pl-1">Provide hyper personalised experiences to thousands of customers simultaneously.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-700">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Operational Autonomy</h4>
                  <p className="text-sm text-slate-500">Systems that run 24/7 without fatigue.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-700">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Non-Linear Growth</h4>
                  <p className="text-sm text-slate-500">Revenue scales faster than expenses.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-1 shadow-2xl">
              <div className="bg-slate-900 rounded-xl p-8 overflow-hidden relative">
                {/* Abstract UI representation */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                    <div className="text-white font-medium">Growth Velocity</div>
                    <div className="text-green-400 text-sm font-bold">+124% YoY</div>
                  </div>
                  
                  {/* Graph visualization - SVG Implementation */}
                  <div className="h-64 w-full pt-4">
                    <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                      {/* Grid lines */}
                      <line x1="0" y1="160" x2="400" y2="160" stroke="#334155" strokeWidth="1" />
                      <line x1="0" y1="120" x2="400" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                      <line x1="0" y1="80" x2="400" y2="80" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                      <line x1="0" y1="40" x2="400" y2="40" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                      
                      {/* Headcount Line (Flat/Linear) - Grey Dashed */}
                      <path d="M0,160 L400,150" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
                      <circle cx="0" cy="160" r="4" fill="#94a3b8" />
                      <circle cx="400" cy="150" r="4" fill="#94a3b8" />
                      <text x="395" y="145" fill="#94a3b8" fontSize="12" textAnchor="end" fontFamily="sans-serif">Headcount</text>

                      {/* Gradients definition */}
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Area under curve */}
                      <path d="M0,160 C120,160 220,120 400,20 V200 H0 Z" fill="url(#areaGradient)" />
                      
                      {/* The Revenue Curve */}
                      <path d="M0,160 C120,160 220,120 400,20" fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" />
                      
                      {/* Points on curve */}
                      <circle cx="0" cy="160" r="5" fill="#4f46e5" stroke="#1e293b" strokeWidth="2" />
                      <circle cx="400" cy="20" r="6" fill="#a855f7" stroke="#fff" strokeWidth="2" />
                      
                      {/* Label */}
                      <text x="395" y="10" fill="#a855f7" fontSize="14" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">AI Output</text>
                    </svg>
                  </div>

                  <div className="flex items-center justify-between pt-2 px-2 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-0.5 bg-slate-400"></div>
                      <span>Resource Cost</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      <span>Revenue Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIFuture;