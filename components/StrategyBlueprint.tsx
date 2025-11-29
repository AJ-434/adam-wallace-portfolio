import React from 'react';
import { Search, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const StrategyBlueprint: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-2 block">
            The Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            How I Delivered 290% Growth
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Success isn't accidental. It is the result of a repeatable, three-phase framework I apply to every organisation to bridge the gap between strategy and execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 z-0"></div>

          {/* Phase 1 */}
          <div className="relative z-10">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl h-full hover:border-blue-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto">
                <Search className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">1. Audit & Analyse</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 text-center min-h-[40px]">
                Review and analyse data to identify critical bottlenecks and opportunities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tech Stack & CRM Review</span>
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Competitor data analysis</span>
                </li>
                 <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Market Analysis (PESTLE & VRIO)</span>
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sales & Marketing Gap Analysis</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative z-10">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl h-full hover:border-blue-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto">
                <Settings className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">2. Optimise & Automate</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 text-center min-h-[40px]">
                Ensure optimisation is done through the entire customer journey.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Technology optimisation and implementation</span>
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customer journey optimisation</span>
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sales Workflow Automation</span>
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Conversion Rate Optimisation (CRO)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative z-10">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl h-full hover:border-blue-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">3. Scale & Expand</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 text-center min-h-[40px]">
                Scalable solutions right through customer journey to ensure revenue expansion.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Global Market Entry Strategy</span>
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>New Channel Development</span>
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cross-functional Team Scaling</span>
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Revenue Stream Diversification</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategyBlueprint;