import React from 'react';
import { EXPERTISE_AREAS } from '../constants';
import { TrendingUp, Globe, Cpu, Users } from 'lucide-react';

const icons = [TrendingUp, Globe, Cpu, Users];

// Using a much more subtle, sophisticated palette. 
// Moving away from neon gradients to soft backgrounds and deep text colors.
const styles = [
  {
    bg: "bg-slate-50",
    border: "border-slate-200",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
    accent: "bg-slate-400"
  },
  {
    bg: "bg-blue-50/50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-800",
    accent: "bg-blue-400"
  },
  {
    bg: "bg-indigo-50/30",
    border: "border-indigo-100",
    iconBg: "bg-indigo-100/50",
    iconColor: "text-indigo-800",
    accent: "bg-indigo-400"
  },
  {
    bg: "bg-stone-50",
    border: "border-stone-200",
    iconBg: "bg-stone-100",
    iconColor: "text-stone-700",
    accent: "bg-stone-400"
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-slate-500 font-semibold tracking-widest text-xs uppercase mb-3 block">
            Executive Toolkit
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Core Competencies
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A diverse skill set combining strategic foresight with operational rigour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_AREAS.map((area, idx) => {
            const Icon = icons[idx];
            const style = styles[idx];

            return (
              <div key={idx} className="group relative">
                <div className={`h-full rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${style.bg} ${style.border} flex flex-col`}>
                  
                  {/* Icon Header - Subtle and Professional */}
                  <div className={`w-12 h-12 rounded-xl ${style.iconBg} ${style.iconColor} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-tight text-slate-900">
                    {area.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-8 flex-grow leading-relaxed">
                    {area.description}
                  </p>

                  <div className="space-y-3">
                    {area.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                        <span className={`w-1.5 h-1.5 rounded-full mr-3 ${style.accent}`}></span>
                        {skill}
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

export default Expertise;