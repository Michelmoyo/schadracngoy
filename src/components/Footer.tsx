import React from 'react';
import { MessageCircle, Globe, Mail, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B2137] py-12 px-4 border-t border-[#252B47]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#00DEFF] mb-4 font-['Poppins']">
            Contactez Schadrac Ngoy
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <a href="#" className="flex items-center gap-3 text-white hover:text-[#00DEFF] transition-colors">
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-[#00DEFF] transition-colors">
              <Globe className="w-6 h-6" />
              <span>Site web</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-[#00DEFF] transition-colors">
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#252B47] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-5 h-5" />
              <span className="text-sm">© 2025 Schadrac Ngoy. Tous droits réservés.</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#00DEFF] transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-[#00DEFF] transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-[#00DEFF] transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;