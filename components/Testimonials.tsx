import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Trusted by Leadership
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative">
            <Quote className="absolute top-8 left-8 w-10 h-10 text-blue-100" />
            <p className="text-slate-600 text-lg leading-relaxed relative z-10 mb-6 italic">
              "Adam brought a level of strategic clarity that we were missing. His ability to audit our technology stack and realign our sales processes resulted in immediate, measurable revenue growth. He doesn't just talk strategy; he executes."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-sm">
                JD
              </div>
              <div>
                <div className="font-bold text-slate-900">Glen - General Manager</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">DMW</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative">
            <Quote className="absolute top-8 left-8 w-10 h-10 text-blue-100" />
            <p className="text-slate-600 text-lg leading-relaxed relative z-10 mb-6 italic">
              "Navigating international markets is complex. Adam successfully led our expansion business expansion, new product, new markets and a complete overhaul of our sales process. A true asset to any business looking for scalable growth."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-sm">
                MK
              </div>
              <div>
                <div className="font-bold text-slate-900">Grant - Managing Driector</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">NBM Pty Ltd</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;