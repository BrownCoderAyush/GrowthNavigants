
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import FoundersSection from './components/FoundersSection';
import Services from './components/Services';
import Process from './components/Process';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen">
      <Header onCtaClick={toggleModal} />
      
      <main>
        <Hero onCtaClick={toggleModal} />
        <Problem />
        <FoundersSection />
        <Services />
        <Process />
        <Trust />
        <FAQ />
      </main>

      <Footer onCtaClick={toggleModal} />

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;
