import React from 'react';
import { KEY_METRICS, IMPACT_HIGHLIGHTS } from '../constants';
import { TrendingUp, Globe, Users, Zap, BarChart, Target, ArrowUpRight } from 'lucide-react';

const iconMap = {
  TrendingUp,
  Globe,
  Users,
  Zap,
  BarChart,
  Target
};

const ImpactGrid: React.FC = () => {
  return (
    <section id="impact" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER FOR METRICS */}
        <div className="text-center mb-16">
           <span className="text-blue-600 font-semibold tracking-wider text-xs uppercase mb-3 block">
            Executive Snapshot
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
            Performance at a Glance
          </h2>
        </div>

        {/* Metrics Row - Redesigned to be cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {KEY_METRICS.map((metric, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:border-blue-200 transition-colors">
              <div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
                {metric.label}
              </div>
              <div className="text-sm text-slate-500 leading-relaxed">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
            Strategic Milestones
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A track record of driving operational excellence and revenue growth across diverse industries and international markets.
          </p>
        </div>

        {/* Highlights Grid - Redesigned for cleaner look */}
        <div className="grid md:grid-cols-3 gap-8">
          {IMPACT_HIGHLIGHTS.map((highlight, idx) => {
            const Icon = iconMap[highlight.iconName];
            return (
              <div key={idx} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-t-slate-900 hover:border-t-blue-600">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {highlight.description}
                  </p>
                  
                  <div className="space-y-4">
                    {highlight.achievements.map((achievement, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-3">
                        <ArrowUpRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ImpactGrid;