import React, { useState } from 'react';
import { ArrowRight, Linkedin, Mail, Check, Loader2 } from 'lucide-react';
import { HERO_TITLE, HERO_SUBTITLE, LINKEDIN_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-50/30">
      {/* Background ambient glows - More vibrant */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-slate-300/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-300/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Profile Photo */}
        <div className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-slate-400 rounded-full blur opacity-40"></div>
            <img 
              src="/adam-photo.jpg" 
              alt="Adam Wallace"
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover object-top border-4 border-white shadow-2xl"
            />
          </div>
        </div>


        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          {/* Name with specific glow effect */}
          <span className="relative inline-block px-4">
            {/* The Glow Behind */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 blur-3xl opacity-20 rounded-full"></span>
            
            {/* The Text - Changed to Sans-Serif and slightly adjusted gradient */}
            <span className="relative font-sans bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 drop-shadow-sm">
              Adam Wallace
            </span>
          </span>
          
          <span className="block text-2xl md:text-4xl font-sans font-light text-slate-600 mt-6 tracking-normal">
            {HERO_TITLE}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          {HERO_SUBTITLE}
        </p>

        {/* Integrated Newsletter Form - Connected to Kit (Form 8819282) */}
        <div className="w-full max-w-md animate-fade-in opacity-0 mb-6" style={{ animationDelay: '0.4s' }}>
          <form 
            method="post" 
            action="https://app.kit.com/forms/8819282/subscriptions"
            className="relative group"
          >
            {/* Hidden fields required by Kit */}
            <input type="hidden" name="b_8819282" value="1" />
            <input type="hidden" name="_convertkit_form" value="8819282" />
            <input type="hidden" name="_uid" value="4c02f6e299" />

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-xl ring-1 ring-slate-900/5">
              <div className="pl-4 text-slate-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                name="email_address"
                required
                placeholder="Join my weekly newsletter..."
                className="w-full bg-transparent px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-slate-900 text-white hover:bg-slate-800 shadow-md rounded-full px-6 py-2.5 font-medium text-sm transition-all flex items-center justify-center min-w-[110px]"
              >
                <div className="flex items-center gap-1.5">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </form>
          <p className="mt-3 text-xs text-slate-400">
            Actionable insights on scaling revenue & operations. Sent every Sunday.
          </p>
        </div>

        {/* Secondary Links - LinkedIn Only */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
             <a 
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all text-sm font-medium py-2.5 px-6 rounded-full transform hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;