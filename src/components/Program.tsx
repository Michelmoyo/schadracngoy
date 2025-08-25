import React from 'react';
import { BookOpen, Target, Rocket } from 'lucide-react';

const Program = () => {
  const programItems = [
    {
      icon: Target,
      title: "Pourquoi 2025 est l'année idéale pour lancer un business en ligne",
      description: "Découvre les opportunités uniques qui s'offrent à toi cette année"
    },
    {
      icon: BookOpen,
      title: "Le Business Model en ligne parfait pour générer ses premiers revenus",
      description: "Le modèle exact que Schadrac utilise et recommande à ses clients"
    },
    {
      icon: Rocket,
      title: "Comment démarrer pas à pas et éviter les erreurs des débutants",
      description: "La roadmap complète pour lancer ton business sans perdre de temps ni d'argent"
    }
  ];

  return (
    <section className="bg-[#1B2137] py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00DEFF] text-center mb-12 font-['Poppins']">
          Ce que tu vas apprendre
        </h2>
        
        <div className="space-y-8">
          {programItems.map((item, index) => (
            <div key={index} className="bg-[#252B47] p-8 rounded-xl hover:bg-[#2A3052] transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-6">
                <div className="bg-[#00DEFF] p-4 rounded-full flex-shrink-0">
                  <item.icon className="w-8 h-8 text-[#1B2137]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-['Montserrat']">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-['Open_Sans']">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;