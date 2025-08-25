import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyParticipate = () => {
  const benefits = [
    "Comment identifier un business model digital qui marche en 2025",
    "Les étapes pour générer tes premiers revenus en ligne",
    "Comment démarrer sans capital ni expérience technique",
    "Les secrets du marketing digital appliqué"
  ];

  return (
    <section className="bg-[#1B2137] py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00DEFF] text-center mb-12 font-['Poppins']">
          Pourquoi participer à ce webinaire ?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-[#252B47] rounded-lg hover:bg-[#2A3052] transition-colors duration-300">
              <CheckCircle className="w-8 h-8 text-[#00DEFF] flex-shrink-0 mt-1" />
              <p className="text-white text-lg font-['Open_Sans'] leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;