import React from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin, Send, Facebook, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="bg-slate-50 min-h-screen pt-24 pb-12">
       {/* Hero/Header */}
       <div className="bg-slate-900 text-white py-16 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[100px] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
             <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
             <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                Have questions about our prices, mobile picking service, or want to place a bulk order? We're here to help.
             </p>
          </div>
       </div>

       <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
             {/* Contact Info Sidebar */}
             <div className="lg:col-span-1 space-y-6">
                {/* Info Cards */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                   <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                   
                   <div className="space-y-6">
                      <div className="flex items-start gap-4">
                         <div className="bg-yellow-100 p-3 rounded-full text-yellow-700">
                            <Phone size={20} />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Phone</p>
                            <a href="tel:18765960024" className="text-lg font-semibold text-slate-900 hover:text-yellow-600 transition-colors">
                               +1 (876) 596-0024
                            </a>
                            <p className="text-xs text-slate-400 mt-1">Mon-Sat 8am - 6pm</p>
                         </div>
                      </div>

                      <div className="flex items-start gap-4">
                         <div className="bg-yellow-100 p-3 rounded-full text-yellow-700">
                            <Mail size={20} />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</p>
                            <a href="mailto:cheapachick@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-yellow-600 transition-colors break-all">
                               cheapachick@gmail.com
                            </a>
                         </div>
                      </div>

                      <div className="flex items-start gap-4">
                         <div className="bg-yellow-100 p-3 rounded-full text-yellow-700">
                            <MapPin size={20} />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Location</p>
                            <p className="text-lg font-semibold text-slate-900">
                               Sellington District
                            </p>
                            <p className="text-slate-600">St. Elizabeth, Jamaica</p>
                         </div>
                      </div>
                   </div>

                   <div className="mt-8 pt-8 border-t border-slate-100">
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Follow Us</p>
                      <div className="flex gap-4">
                         <a href="#" className="bg-slate-100 hover:bg-blue-600 hover:text-white p-3 rounded-xl transition-all">
                            <Facebook size={20} />
                         </a>
                         <a href="#" className="bg-slate-100 hover:bg-pink-600 hover:text-white p-3 rounded-xl transition-all">
                            <Instagram size={20} />
                         </a>
                      </div>
                   </div>
                </div>
             </div>

             {/* Contact Form */}
             <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                   <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                   <form 
                      action="https://formsubmit.co/cheapachick@gmail.com" 
                      method="POST"
                      className="space-y-6"
                   >
                      {/* Formsubmit Configuration */}
                      <input type="hidden" name="_subject" value="New Inquiry from Cheapa Chicken Website" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      
                      {/* This ensures the user stays on a nice page after submission or returns. 
                          By default, formsubmit shows a success page. */}
                      
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                            <input 
                               type="text" 
                               id="name" 
                               name="name" 
                               required 
                               className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                               placeholder="John Doe"
                            />
                         </div>
                         <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                            <input 
                               type="email" 
                               id="email" 
                               name="email" 
                               required 
                               className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                               placeholder="john@example.com"
                            />
                         </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                            <input 
                               type="tel" 
                               id="phone" 
                               name="phone" 
                               className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                               placeholder="+1 (876) 000-0000"
                            />
                         </div>
                         <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
                            <select 
                               id="subject" 
                               name="subject" 
                               className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all bg-white"
                            >
                               <option value="General Inquiry">General Inquiry</option>
                               <option value="Product Order">Product Order</option>
                               <option value="Mobile Picking Service">Mobile Picking Service</option>
                               <option value="Cheapa Bank">Cheapa Bank</option>
                               <option value="Bulk/Wholesale">Bulk / Wholesale</option>
                            </select>
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                         <textarea 
                            id="message" 
                            name="message" 
                            required 
                            rows={6}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all resize-none"
                            placeholder="How can we help you today?"
                         ></textarea>
                      </div>

                      <button 
                         type="submit"
                         className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-lg shadow-lg shadow-slate-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                      >
                         <Send size={20} /> Send Message
                      </button>
                      
                      <p className="text-center text-xs text-slate-400 mt-4">
                         We typically respond within 24 hours.
                      </p>
                   </form>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};