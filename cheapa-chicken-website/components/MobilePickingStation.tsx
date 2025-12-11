import React from 'react';
import { SectionId } from '../types';
import { Truck, Clock, CheckCircle, Phone, Mail, Calendar, ClipboardList, Sparkles, ArrowRight } from 'lucide-react';

interface MobilePickingStationProps {
  isSnippet?: boolean;
  onNavigate?: (section: SectionId) => void;
}

export const MobilePickingStation: React.FC<MobilePickingStationProps> = ({ isSnippet = false, onNavigate }) => {
  if (isSnippet) {
    return (
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[80px] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 text-yellow-400 mb-4 font-bold tracking-wider uppercase text-sm">
                <Truck size={20} />
                <span>Mobile Service</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">C.C.M.P.S - We Come To You!</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Introducing the Cheapa Chicken Mobile Picking Station. Professional chicken processing that comes directly to your farm. 
                Save time and transport costs.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-2">
                    <Clock size={18} className="text-yellow-500" />
                    <span className="text-sm font-semibold">100 Birds / Hour</span>
                 </div>
                 <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-2">
                    <Sparkles size={18} className="text-yellow-500" />
                    <span className="text-sm font-semibold">Professional Plucking</span>
                 </div>
              </div>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
               <button 
                 onClick={() => onNavigate && onNavigate(SectionId.SERVICES)}
                 className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 text-lg font-bold py-4 px-8 rounded-xl shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 inline-flex items-center gap-2"
               >
                 View Mobile Services <ArrowRight size={20} />
               </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={SectionId.SERVICES} className="bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544252899-270830421e42?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-500 rounded-full mb-6">
            <Truck className="text-slate-900 w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">C.C.M.P.S</h1>
          <p className="text-xl md:text-2xl text-yellow-400 font-semibold mb-8">Cheapa Chicken Mobile Picking Station</p>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            Professional mobile chicken processing that comes directly to your farm.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {/* Core Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-b-4 border-yellow-500">
            <Truck size={40} className="text-slate-700 mb-4" />
            <h3 className="text-xl font-bold mb-2">We Come To You</h3>
            <p className="text-slate-600">No need to transport live birds. We bring the processing plant to your farm gate.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-b-4 border-yellow-500">
            <Clock size={40} className="text-slate-700 mb-4" />
            <h3 className="text-xl font-bold mb-2">Speed & Efficiency</h3>
            <p className="text-slate-600">Our mobile station can process up to <span className="font-bold text-yellow-600">100 birds in less than an hour</span>.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-b-4 border-yellow-500">
            <Sparkles size={40} className="text-slate-700 mb-4" />
            <h3 className="text-xl font-bold mb-2">Professional Quality</h3>
            <p className="text-slate-600">Expert handling, sanitary equipment, and quality inspection included.</p>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Full-Service Processing</h2>
            <p className="text-slate-600 text-lg mb-8">
              The C.C.M.P.S is our innovative solution designed to support local farmers. We provide a complete sanitary processing environment on wheels.
            </p>
            
            <ul className="space-y-4">
              {[
                "Professional plucking equipment",
                "Clean, sanitary processing area",
                "Complete gutting and cleaning",
                "Quality inspection and grading",
                "Packaging assistance available"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle className="text-green-500 shrink-0" />
                  <span className="font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-200 rounded-3xl h-96 w-full flex items-center justify-center relative overflow-hidden">
             {/* Placeholder for actual mobile unit image */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
               <Truck size={64} className="mb-4" />
               <span className="text-2xl font-bold uppercase tracking-widest opacity-50">C.C.M.P.S Unit</span>
               <span className="text-sm">Image Placeholder</span>
             </div>
          </div>
        </div>

        {/* Booking Process */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: "Contact Us", desc: "Call or email to schedule a visit." },
              { icon: Calendar, title: "Set Date", desc: "We'll arrange a convenient time for your farm." },
              { icon: ClipboardList, title: "Prepare Birds", desc: "Have your chickens ready for processing." },
              { icon: CheckCircle, title: "We Process", desc: "Our team arrives and processes on-site." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:border-yellow-400 transition-all h-full">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center text-yellow-700 mb-4 font-bold text-xl">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-slate-300">
                    <ArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden mb-24">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Pricing & Booking</h2>
            <p className="text-slate-300 mb-8 text-lg">
              We offer competitive rates based on the number of birds to be processed. 
              Contact us today for a custom quote for your farm.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="tel:18765960024" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105">
                 <Phone size={20} /> Call 1-876-596-0024
               </a>
               <a href="mailto:cheapachick@gmail.com" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm transition-colors">
                 <Mail size={20} /> cheapachick@gmail.com
               </a>
            </div>
          </div>
          
          {/* Decorative */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
        </div>
      </div>
    </section>
  );
};
