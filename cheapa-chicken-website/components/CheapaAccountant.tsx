import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Camera, PieChart, Brain, CreditCard, FileText, Smartphone, ArrowRight, UploadCloud, MessageSquare, Send } from 'lucide-react';

interface CheapaAccountantProps {
  isSnippet?: boolean;
  onNavigate?: (section: SectionId) => void;
}

export const CheapaAccountant: React.FC<CheapaAccountantProps> = ({ isSnippet = false, onNavigate }) => {
  // Carousel State
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const screenshots = [
    "https://i.ibb.co/QvXWGXv3/IMG-0668.png",
    "https://i.ibb.co/jkXbPk35/IMG-0667.png",
    "https://i.ibb.co/yBV6ZG41/IMG-0669.png",
    "https://i.ibb.co/S4cX2rCp/IMG-0673.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (isSnippet) {
    return (
      <section className="py-20 bg-indigo-950 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-700/50 px-4 py-1.5 rounded-full text-sm font-medium text-indigo-300">
                <Brain size={16} /> <span>AI-Powered Finance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Cheapa <span className="text-yellow-400">Accountant</span>
              </h2>
              <p className="text-xl text-indigo-200 font-light">
                Your Business, Automated.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                Stop counting chickens. Start counting profits. Our AI bookkeeper lives in your pocket, turning crumpled receipts into professional financial reports instantly.
              </p>
              <button 
                onClick={() => onNavigate && onNavigate(SectionId.ACCOUNTANT)}
                className="bg-white text-indigo-950 font-bold py-4 px-8 rounded-xl shadow-lg shadow-indigo-900/50 transition-transform hover:scale-105 flex items-center gap-2"
              >
                Try Cheapa Accountant <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Visual Representation */}
            <div 
                className="lg:w-1/2 flex justify-center lg:justify-end cursor-pointer group"
                onClick={() => onNavigate && onNavigate(SectionId.ACCOUNTANT)}
            >
              <div className="relative transition-transform duration-300 group-hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-3xl shadow-2xl max-w-sm w-full transform rotate-3 hover:rotate-0 transition-transform duration-500">
                   {/* Mock Phone UI */}
                   <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center">
                        <FileText size={20} className="text-white" />
                      </div>
                      <span className="text-green-400 font-bold">+$1,240.50</span>
                   </div>
                   <div className="space-y-3">
                      <div className="h-2 bg-slate-700 rounded w-1/3"></div>
                      <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                      <div className="mt-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                        <p className="text-xs text-slate-400 mb-1">Receipt Scanned</p>
                        <p className="text-sm text-white font-medium flex justify-between">
                          <span>Feed Bags x10</span>
                          <span>$140.00</span>
                        </p>
                      </div>
                   </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-yellow-500 text-slate-900 p-3 rounded-xl shadow-lg font-bold flex items-center gap-2">
                  <Camera size={18} /> Auto-Scan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={SectionId.ACCOUNTANT} className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-950 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-800/40 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-block bg-indigo-900/50 backdrop-blur-md border border-indigo-700 px-6 py-2 rounded-full mb-6">
                  <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm">The Future of Farming Finance</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                  Stop Counting Chickens.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Start Counting Profits.</span>
                </h1>
                <p className="text-xl text-indigo-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
                  Cheapa Accountant is the AI-powered bookkeeper designed specifically for producers who need to move fast. No spreadsheets, no headaches.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-xl shadow-lg shadow-yellow-500/20 transition-all flex items-center justify-center gap-2">
                    Download App <Smartphone size={20} />
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-xl backdrop-blur-sm transition-all">
                    View Demo
                  </button>
                </div>
            </div>

            {/* Phone Slider */}
            <div className="lg:w-1/2 flex justify-center perspective-1000">
                <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl rotate-y-12 rotate-z-2 transform transition-transform hover:rotate-0 duration-500 overflow-hidden ring-1 ring-white/10 group">
                   {/* Dynamic Island / Notch */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>
                   
                   {/* Screen Content */}
                   <div className="absolute inset-0 bg-slate-900">
                      {screenshots.map((src, index) => (
                        <img 
                          key={index}
                          src={src} 
                          alt={`App Screen ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                            index === currentScreenshot 
                              ? 'opacity-100 scale-100' 
                              : 'opacity-0 scale-105'
                          }`}
                        />
                      ))}
                      
                      {/* Gradient Overlay for gloss */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10"></div>
                   </div>

                   {/* Slide Indicators inside phone */}
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                     {screenshots.map((_, idx) => (
                       <div 
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentScreenshot ? 'w-4 bg-white' : 'w-1.5 bg-white/30'}`}
                       />
                     ))}
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
           {/* Feature 1 */}
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
               <Camera size={28} className="text-indigo-600 group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">Just Snap a Picture</h3>
             <p className="text-slate-600 leading-relaxed">
               Forget manual data entry. Simply take a photo of your receipt. Our AI extracts every line item, categorizes them instantly, and saves them to the cloud.
             </p>
           </div>

           {/* Feature 2 */}
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
               <PieChart size={28} className="text-indigo-600 group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">Know Your Numbers</h3>
             <p className="text-slate-600 leading-relaxed">
               Open your dashboard to see Gross Revenue, Total Expenses, and Net Profit in real-time. Know exactly how much money you are actually making.
             </p>
           </div>

           {/* Feature 3 */}
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
               <Brain size={28} className="text-indigo-600 group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">AI Tax Strategy</h3>
             <p className="text-slate-600 leading-relaxed">
               Meet "Wayne Blair," your AI tax assistant. He analyzes your spending and gives you personalized tips to maximize deductions so you don't overpay.
             </p>
           </div>

           {/* Feature 4 */}
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
               <CreditCard size={28} className="text-indigo-600 group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">Get Paid Faster</h3>
             <p className="text-slate-600 leading-relaxed">
               Generate custom payment links right from the app. Send invoices via WhatsApp or Email and get paid instantly.
             </p>
           </div>

           {/* Feature 5 */}
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
               <FileText size={28} className="text-indigo-600 group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">Professional Reports</h3>
             <p className="text-slate-600 leading-relaxed">
               Need to show your numbers to a bank? Generate detailed PDF financial reports with a single tap.
             </p>
           </div>

           {/* Feature 6 */}
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
               <UploadCloud size={28} className="text-indigo-600 group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">Secure & Synced</h3>
             <p className="text-slate-600 leading-relaxed">
               Work offline in the field and sync automatically when you get back online. Your data is secure and accessible everywhere.
             </p>
           </div>
        </div>

        {/* Static AI Display Section */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                   <MessageSquare size={16} /> Live Demo
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">Meet "Wayne Blair"</h2>
                <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                   Your built-in AI tax assistant. Wayne analyzes your business data and answers your financial questions instantly.
                </p>
                <div className="space-y-4">
                   <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="bg-indigo-500 p-2 rounded-lg shrink-0">
                         <Brain size={20} className="text-white" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold mb-1">Smart Deductions</h4>
                         <p className="text-slate-400 text-sm">Wayne identifies potential tax write-offs you might have missed.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="bg-indigo-500 p-2 rounded-lg shrink-0">
                         <PieChart size={20} className="text-white" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold mb-1">Profit Analysis</h4>
                         <p className="text-slate-400 text-sm">Get instant insights on which products are making you the most money.</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Static Chat Interface Display */}
             <div className="bg-white rounded-3xl p-6 shadow-2xl h-[500px] flex flex-col relative overflow-hidden">
                {/* Header */}
                <div className="border-b border-slate-100 pb-4 mb-4 flex items-center gap-3">
                   <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Brain size={20} className="text-indigo-600" />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900">Wayne Blair (AI)</h4>
                      <p className="text-xs text-green-500 font-medium flex items-center gap-1">● Online</p>
                   </div>
                </div>

                {/* Static Conversation */}
                <div className="flex-1 space-y-4 pr-2">
                   {/* Model Message */}
                   <div className="flex gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                           <Brain size={14} className="text-indigo-600" />
                      </div>
                      <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-slate-700 text-sm">
                         Wah gwaan! I'm Wayne. I analyze your farm expenses to help you save money. Upload a receipt to get started!
                      </div>
                   </div>
                   
                   {/* User Message */}
                   <div className="flex gap-3 justify-end">
                      <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none text-sm">
                         How much profit did I make on the last batch?
                      </div>
                   </div>

                   {/* Model Message */}
                   <div className="flex gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                           <Brain size={14} className="text-indigo-600" />
                      </div>
                      <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-slate-700 text-sm">
                         Based on your logs, Batch #42 generated <strong>$45,000 JMD</strong> in net profit. Your feed efficiency improved by 5%!
                      </div>
                   </div>
                </div>

                {/* Visual Fake Input */}
                <div className="relative opacity-60">
                   <div className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-4 pr-12 text-sm text-slate-500 cursor-not-allowed">
                     Ask Wayne a question...
                   </div>
                   <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg">
                      <Send size={16} />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};