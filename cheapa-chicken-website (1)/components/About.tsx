import React from 'react';
import { SectionId } from '../types';
import { Sun, CloudRain, Heart, ArrowRight } from 'lucide-react';

interface AboutProps {
  isSnippet?: boolean;
  onNavigate?: (section: SectionId) => void;
}

export const About: React.FC<AboutProps> = ({ isSnippet = false, onNavigate }) => {
  return (
    <section id={SectionId.ABOUT} className={`py-24 ${isSnippet ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://i.ibb.co/yF2P7LHk/IMG-0338.jpg" 
                  alt="Cheapa Chicken Farm" 
                  className="rounded-2xl object-cover w-full h-64 lg:h-80 shadow-lg transform translate-y-8"
                />
                <img 
                  src="https://i.ibb.co/W4Sp14RT/IMG-0330.jpg" 
                  alt="Fresh Poultry" 
                  className="rounded-2xl object-cover w-full h-64 lg:h-80 shadow-lg"
                />
             </div>
             {/* Decorative blob only on full page or always? Always looks nice. */}
             <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-yellow-500 font-bold tracking-wider uppercase text-sm mb-2">Our Story</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Born from Resilience, Grown with Love.</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Cheapa Chicken started in 2020 during the COVID-19 pandemic. As a married couple balancing corporate jobs, 
                we saw a community need for affordable protein sources and decided to act.
              </p>
              {!isSnippet && (
                <p className="text-slate-600 text-lg leading-relaxed">
                  What began as a side project has grown into a mission to educate and feed Jamaica. We're proud to share our knowledge 
                  and resources to help others succeed.
                </p>
              )}
            </div>

            {isSnippet ? (
              <button 
                onClick={() => onNavigate && onNavigate(SectionId.ABOUT)}
                className="group flex items-center gap-2 text-yellow-600 font-bold text-lg hover:text-yellow-500 transition-colors"
              >
                Read Our Full Story <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 hover:shadow-md transition-shadow">
                    <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                      <Sun size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Solar Powered</h4>
                    <p className="text-slate-600 text-sm">
                      We harness the power of the sun to run our operations, keeping costs low and energy clean.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
                      <CloudRain size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Rainwater Harvesting</h4>
                    <p className="text-slate-600 text-sm">
                      Innovative water collection methods ensure sustainability and reduce our environmental footprint.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-slate-500 italic border-l-4 border-yellow-500 pl-4 py-2 bg-slate-50 rounded-r-lg">
                   <Heart size={20} className="text-red-500 fill-current" />
                   "We stand by our promises and strive to surpass your expectations."
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};