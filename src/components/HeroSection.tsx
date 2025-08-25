import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#1B2137] min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="/Schadrac-ngoy1.png" 
            alt="Schadrac Ngoy" 
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#00DEFF] shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-[#00DEFF] mb-6 leading-tight font-['Poppins']">
          Découvre le Business Model en ligne idéal pour générer tes premiers revenus sur internet en 2025
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 font-['Open_Sans'] leading-relaxed">
          Webinaire 100% gratuit animé par Schadrac Ngoy
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-white">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#00DEFF]" />
            <span className="text-lg">Samedi 30 août</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-[#00DEFF]" />
            <span className="text-lg">20h00</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-[#00DEFF]" />
            <span className="text-lg">Places limitées</span>
          </div>
        </div>
        
        <button 
          onClick={scrollToForm}
          className="bg-[#00DEFF] text-[#1B2137] px-8 py-4 rounded-lg text-xl font-bold hover:bg-[#00BFCC] transition-all duration-300 transform hover:scale-105 shadow-lg font-['Poppins']"
        >
          Je réserve ma place gratuite
        </button>
      </div>
    </section>
  );
};

export default HeroSection;