import React from 'react';
import { SectionId } from '../types';
import { Landmark, CheckCircle, DollarSign, Scale, Package, Clock, Phone, Mail, ArrowRight, TrendingUp } from 'lucide-react';

interface CheapaBankProps {
  isSnippet?: boolean;
  onNavigate?: (section: SectionId) => void;
}

export const CheapaBank: React.FC<CheapaBankProps> = ({ isSnippet = false, onNavigate }) => {
  if (isSnippet) {
    return (
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-[80px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-3/5 space-y-6">
              <div className="flex items-center gap-3 text-emerald-400 font-bold tracking-wider uppercase text-sm">
                <Landmark size={20} />
                <span>For Farmers</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Cheapa Chicken <span className="text-yellow-400">Bank</span>
              </h2>
              
              <p className="text-emerald-100 text-lg leading-relaxed max-w-xl">
                Empowering small farmers with immediate payment. No more waiting weeks for your money—get paid same-day for your quality broiler chickens.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-emerald-800/50 px-4 py-2 rounded-lg border border-emerald-700">
                  <DollarSign size={18} className="text-yellow-400" />
                  <span className="font-semibold">Same-Day Pay</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-800/50 px-4 py-2 rounded-lg border border-emerald-700">
                  <TrendingUp size={18} className="text-yellow-400" />
                  <span className="font-semibold">Fair Market Rates</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/5 flex flex-col gap-4 items-center md:items-end">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-sm w-full">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-full text-slate-900">
                    <Scale size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Got Birds?</h4>
                    <p className="text-sm text-emerald-100 mb-4">We are buying healthy broilers (4-4.5 lbs) today.</p>
                    <button 
                      onClick={() => onNavigate && onNavigate(SectionId.BANK)}
                      className="w-full bg-white text-emerald-900 font-bold py-3 px-4 rounded-xl hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
                    >
                      Learn Requirements <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={SectionId.BANK} className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595855709930-b5bf8c751893?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 to-emerald-900"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center p-4 bg-yellow-500 rounded-full mb-6 shadow-lg shadow-yellow-500/20">
            <Landmark className="text-slate-900 w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cheapa Chicken Bank</h1>
          <p className="text-xl md:text-2xl text-emerald-200 font-medium mb-8">
            Empowering small farmers with immediate payment for quality chickens.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <a href="tel:18765960024" className="bg-white text-emerald-900 font-bold py-3 px-8 rounded-xl hover:bg-emerald-50 transition-colors flex items-center gap-2">
               <Phone size={20} /> Call to Schedule
             </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What is the Cheapa Chicken Bank?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The Cheapa Chicken Bank empowers small farmers by offering same-day payment for quality broiler chickens. 
            No more waiting weeks for payment – get paid immediately when you drop off your properly processed chickens!
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-slate-900">How It Works</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Package, 
                title: "1. Drop Off", 
                desc: "Bring your properly processed broiler chickens to our facility in Sellington District.",
                color: "bg-blue-100 text-blue-600"
              },
              { 
                icon: CheckCircle, 
                title: "2. Quality Check", 
                desc: "We inspect each chicken to ensure it meets our strict weight and health standards.",
                color: "bg-yellow-100 text-yellow-600"
              },
              { 
                icon: DollarSign, 
                title: "3. Get Paid", 
                desc: "Receive immediate payment via cash, check, or bank transfer once approved.",
                color: "bg-green-100 text-green-600"
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Requirements */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
             <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
               <Scale className="text-emerald-600" /> Requirements
             </h3>
             <ul className="space-y-4">
               {[
                 { label: "Weight", text: "Chickens must be between 4 - 4.5 lbs" },
                 { label: "Processing", text: "Properly plucked, cleaned, and gutted" },
                 { label: "Quality", text: "Fresh, healthy birds with no defects or bruising" },
                 { label: "Packaging", text: "Clean and properly packaged for transport" }
               ].map((req, idx) => (
                 <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-slate-900 block mb-1">{req.label}</span>
                      <span className="text-slate-600 text-sm">{req.text}</span>
                    </div>
                 </li>
               ))}
             </ul>
          </div>

          {/* Benefits */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Benefits for Farmers</h3>
            <div className="space-y-6">
               <div className="flex gap-6">
                 <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 text-yellow-600">
                   <Clock size={24} />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold text-slate-900 mb-2">Same-Day Payment</h4>
                   <p className="text-slate-600">Improve your cash flow. Walk away with payment in hand the same day you deliver.</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                   <TrendingUp size={24} />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold text-slate-900 mb-2">Fair Prices</h4>
                   <p className="text-slate-600">We offer competitive market rates that respect the hard work you put into raising your birds.</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                   <CheckCircle size={24} />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold text-slate-900 mb-2">Easy Process</h4>
                   <p className="text-slate-600">Simple drop-off procedures and quick inspections mean you spend less time waiting.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1621953464190-675d04845558?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join the Cheapa Chicken Bank?</h2>
             <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
               Contact us today to arrange your first drop-off and start getting paid faster.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-6">
               <a href="tel:18765960024" className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105">
                 <Phone size={20} /> 1-876-596-0024
               </a>
               <a href="mailto:cheapachick@gmail.com" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all backdrop-blur-sm">
                 <Mail size={20} /> cheapachick@gmail.com
               </a>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};