import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Clock } from 'lucide-react';
import { supabase, type WebinarRegistration } from '../lib/supabase';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Validation basique
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        throw new Error('Tous les champs sont obligatoires');
      }

      // Validation email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Veuillez entrer une adresse email valide');
      }

      // Préparer les données pour Supabase
      const registrationData: Omit<WebinarRegistration, 'id' | 'created_at'> = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim()
      };

      // Insérer dans Supabase
      const { data, error } = await supabase
        .from('webinar_registrations')
        .insert([registrationData])
        .select();

      if (error) {
        console.error('Erreur Supabase:', error);
        
        // Gestion des erreurs spécifiques
        if (error.code === '23505') {
          throw new Error('Cette adresse email est déjà inscrite au webinaire');
        } else {
          throw new Error('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
        }
      }

      console.log('Inscription réussie:', data);
      setSubmitStatus('success');
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: ''
      });

    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur inattendue est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="registration-form" className="bg-[#1B2137] py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00DEFF] text-center mb-8 font-['Poppins']">
          Inscris-toi maintenant
        </h2>
        
        <div className="bg-[#252B47] p-8 rounded-2xl shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-6 mb-4 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#00DEFF]" />
                <span>Samedi 30 août</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#00DEFF]" />
                <span>20h00</span>
              </div>
            </div>
            <p className="text-[#00DEFF] font-semibold">Places limitées</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-green-600 text-white p-4 rounded-lg text-center">
                <p className="font-semibold">🎉 Inscription réussie !</p>
                <p className="text-sm mt-1">Vous recevrez bientôt les détails de connexion par email.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-600 text-white p-4 rounded-lg text-center">
                <p className="font-semibold">❌ Erreur d'inscription</p>
                <p className="text-sm mt-1">{errorMessage}</p>
              </div>
            )}

            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00DEFF]" />
              <input
                type="text"
                name="name"
                placeholder="Votre nom complet"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 bg-[#1B2137] border-2 border-[#00DEFF] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFCC] transition-colors"
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00DEFF]" />
              <input
                type="email"
                name="email"
                placeholder="Votre adresse email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 bg-[#1B2137] border-2 border-[#00DEFF] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFCC] transition-colors"
              />
            </div>
            
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00DEFF]" />
              <input
                type="tel"
                name="phone"
                placeholder="Votre numéro WhatsApp"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 bg-[#1B2137] border-2 border-[#00DEFF] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFCC] transition-colors"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00DEFF] text-[#1B2137] py-4 px-6 rounded-lg text-xl font-bold hover:bg-[#00BFCC] transition-all duration-300 transform hover:scale-105 shadow-lg font-['Poppins'] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Inscription en cours...' : 'Je réserve ma place gratuite'}
            </button>
          </form>
          
          <p className="text-center text-white mt-6 font-['Open_Sans']">
            <span className="text-[#00DEFF] font-semibold">Places limitées</span> – Webinaire le samedi 30 août à 20h00
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;