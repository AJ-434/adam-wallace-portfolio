import React, { useState } from 'react';
import { Mail, Check, ArrowRight, Loader2 } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Weekly Growth Insights
          </h2>
          
          <p className="text-lg text-slate-500 mb-8 max-w-lg mx-auto leading-relaxed">
            Join other forward-thinking leaders. I share actionable strategies on scaling revenue, international expansion, and operational efficiency every Tuesday.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
            <div className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="adam@company.com"
                disabled={status === 'success' || status === 'submitting'}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 pr-32"
              />
              <button
                type="submit"
                disabled={status === 'success' || status === 'submitting'}
                className={`absolute right-1.5 top-1.5 bottom-1.5 rounded-full font-medium px-6 transition-all flex items-center justify-center min-w-[100px] ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === 'success' ? (
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span className="hidden sm:inline">Joined</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Join</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              No spam. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;