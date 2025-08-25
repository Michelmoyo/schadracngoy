import React from 'react';
import HeroSection from './components/HeroSection';
import WhyParticipate from './components/WhyParticipate';
import Speaker from './components/Speaker';
import Program from './components/Program';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1B2137]">
      <HeroSection />
      <WhyParticipate />
      <Speaker />
      <Program />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;