import React from 'react';

import Header from './components/Header';

import Hero from './components/Hero';

import ImpactGrid from './components/ImpactGrid';

import StrategyBlueprint from './components/StrategyBlueprint';

import Expertise from './components/Expertise';

import AIFuture from './components/AIFuture';

import Testimonials from './components/Testimonials';

import FeaturedInsights from './components/FeaturedInsights';

import Footer from './components/Footer';



const App: React.FC = () => {

  return (

    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen selection:bg-blue-100 selection:text-blue-900">

      <Header />

      <main>

        <Hero />

        <ImpactGrid />

        <StrategyBlueprint />

        <Expertise />

        <AIFuture />

        <Testimonials />

        <FeaturedInsights />

        {/* Philosophy / About Section text */}

        <section id="philosophy" className="py-24 bg-white border-t border-slate-100">

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

             <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-4 block">

              Leadership Philosophy

            </span>

            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight text-slate-900">

              "Growth isn't just about selling more. It's about aligning operational capability with market opportunity."

            </h2>

            <p className="text-lg text-slate-500 leading-relaxed">

              I believe that true scalability comes from a consultative approach in understanding the unique pain points of a business, conducting deep technological, process and customer audits, and building the cross functional teams required to execute. Whether it's expanding into new markets or optimising a local sales funnel, the principle remains the same: data driven strategy that meets commercial and operational excellence.

            </p>

          </div>

        </section>

      </main>

      <Footer />

    </div>

  );

};



export default App;
