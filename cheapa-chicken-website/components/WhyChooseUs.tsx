import React from 'react';
import { SectionId } from '../types';
import { Leaf, Zap, Truck, ShieldCheck, DollarSign, Award, Clock, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onNavigate: (section: SectionId) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  return (
    <section id={SectionId.WHY_US} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-yellow-200">
            <Award size={16} /> The Cheapa Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose <span className="text-yellow-500 relative inline-block">
              Cheapa Chicken
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We aren't just a farm; we are a modern agricultural ecosystem. 
            From AI-powered tools to mobile processing, we are changing how Jamaica farms and eats.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Card 1: Large Feature (Farm to Fork) */}
          <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Leaf className="text-green-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">100% Farm Fresh & Organic</h3>
              <p className="text-slate-600 text-lg mb-8 max-w-md">
                No hormones. No preservatives. Just clean, corn-fed chickens raised in the fresh air of St. Elizabeth. 
                We process on demand, so your chicken is fresh from the coop to your kitchen.
              </p>
              <button 
                onClick={() => onNavigate(SectionId.PRODUCTS)} 
                className="text-slate-900 font-bold flex items-center gap-2 group/btn"
              >
                <span className="underline decoration-yellow-500 underline-offset-4 group-hover/btn:text-yellow-600 transition-colors">Taste the difference</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1612170153139-6f881d97f1ab?auto=format&fit=crop&q=80&w=800"
              alt="Fresh Farm"
              className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-20 md:opacity-100 mask-image-gradient group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              style={{ maskImage: 'linear-gradient(to left, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)' }}
            />
          </div>

          {/* Card 2: Vertical Feature (Mobile Processing) */}
          <div className="md:row-span-2 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
             <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-yellow-500/50 transition-colors">
                  <Truck className="text-yellow-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">We Come To You</h3>
                <p className="text-slate-400 leading-relaxed mb-auto">
                  Our Mobile Picking Station (C.C.M.P.S) is a revolution in local farming. We bring professional-grade processing to your farm gate.
                </p>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                    <Clock size={18} className="text-yellow-500" />
                    <span className="text-sm font-semibold">100 Birds / Hour</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                    <ShieldCheck size={18} className="text-yellow-500" />
                    <span className="text-sm font-semibold">Sanitary & Clean</span>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate(SectionId.SERVICES)}
                  className="mt-8 w-full bg-yellow-500 text-slate-900 font-bold py-3 rounded-xl hover:bg-yellow-400 transition-colors flex justify-center items-center gap-2"
                >
                  Book the Truck <ArrowRight size={18} />
                </button>
             </div>
          </div>

          {/* Card 3: Feature (Sustainability) */}
          <div className="bg-green-50 rounded-3xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-green-600 shadow-sm group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Solar Powered</h3>
            <p className="text-slate-600 text-sm">
              Our operations run on 100% renewable energy, keeping our costs down so we can pass the savings to you.
            </p>
          </div>

          {/* Card 4: Feature (Price) */}
          <div className="bg-yellow-50 rounded-3xl p-8 border border-yellow-100 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-yellow-600 shadow-sm group-hover:scale-110 transition-transform">
              <DollarSign size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Unbeatable Prices</h3>
            <p className="text-slate-600 text-sm">
              By cutting out the middleman and using efficient tech, we offer the lowest prices in the parish.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};