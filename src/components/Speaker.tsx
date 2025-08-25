import React from 'react';
import { MapPin, TrendingUp, Award } from 'lucide-react';

const Speaker = () => {
  return (
    <section className="bg-[#1B2137] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00DEFF] text-center mb-12 font-['Poppins']">
          Qui est Schadrac Ngoy ?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <img 
              src="/public/Schadrac-ngoy1.png" 
              alt="Schadrac Ngoy" 
              className="w-80 h-80 rounded-2xl mx-auto md:mx-0 mb-6 border-4 border-[#00DEFF] shadow-2xl object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-[#00DEFF]" />
              <h3 className="text-2xl font-bold text-[#00DEFF] font-['Montserrat']">
                Consultant International
              </h3>
            </div>
            
            <p className="text-white text-lg leading-relaxed font-['Open_Sans'] mb-6">
              Consultant international en marketing digital et business en ligne. De salarié en télécoms à entrepreneur digital reconnu, Schadrac a bâti un empire grâce à un business model simple et duplicable.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#00DEFF]" />
                <span className="text-white">A voyagé à travers le monde (Pattaya, Stockholm, etc.)</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#00DEFF]" />
                <span className="text-white">A construit sa maison grâce au business en ligne</span>
              </div>
            </div>
            
            <div className="bg-[#252B47] p-6 rounded-lg mt-8">
              <p className="text-[#00DEFF] font-semibold text-lg italic font-['Montserrat']">
                "Le business en ligne m'a donné la liberté financière et géographique que je n'aurais jamais imaginée."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;