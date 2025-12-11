import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { RecipeGenerator } from './components/RecipeGenerator';
import { MobilePickingStation } from './components/MobilePickingStation';
import { CheapaBank } from './components/CheapaBank';
import { CheapaAccountant } from './components/CheapaAccountant';
import { ProfitCalculator } from './components/ProfitCalculator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookPromo } from './components/BookPromo';
import { SectionId } from './types';

function App() {
  const [currentView, setCurrentView] = useState<SectionId>(SectionId.HOME);

  const handleNavigate = (section: SectionId, targetId?: string) => {
    // Switch view
    setCurrentView(section);
    
    // Handle scrolling behavior
    if (targetId) {
      // Use a slight delay to allow the new view to render
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      // If no specific target, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative">
      <Header activeSection={currentView} onNavigate={handleNavigate} />
      
      <main>
        {/* Home View: Hero + Snippets */}
        {currentView === SectionId.HOME && (
          <>
            <Hero onNavigate={handleNavigate} />
            <About isSnippet onNavigate={handleNavigate} />
            <BookPromo />
            <MobilePickingStation isSnippet onNavigate={handleNavigate} />
            <CheapaBank isSnippet onNavigate={handleNavigate} />
            <CheapaAccountant isSnippet onNavigate={handleNavigate} />
            <ProfitCalculator isSnippet onNavigate={handleNavigate} />
            <Products isSnippet onNavigate={handleNavigate} />
            <RecipeGenerator isSnippet onNavigate={handleNavigate} />
          </>
        )}

        {/* Full Page Views */}
        {currentView === SectionId.ABOUT && <About />}
        {currentView === SectionId.SERVICES && <MobilePickingStation />}
        {currentView === SectionId.BANK && <CheapaBank />}
        {currentView === SectionId.ACCOUNTANT && <CheapaAccountant />}
        {currentView === SectionId.CALCULATOR && <ProfitCalculator />}
        {currentView === SectionId.PRODUCTS && <Products onNavigate={handleNavigate} />}
        {currentView === SectionId.RECIPES && <RecipeGenerator />}
        {currentView === SectionId.CONTACT && <Contact />}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Floating Call Button */}
      <a 
        href="tel:18765960024"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl border-4 border-white overflow-hidden transform hover:scale-110 transition-transform duration-300 hover:shadow-yellow-500/50 group bg-slate-900"
        aria-label="Call Us Now"
      >
        <img 
          src="https://i.ibb.co/v6ygD5Yw/Red-and-White-Video-Centric-Coming-Soon-Instagram-Post.png" 
          alt="Call Cheapa Chicken" 
          className="w-full h-full object-cover"
        />
        {/* Optional overlay hint on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
      </a>
    </div>
  );
}

export default App;