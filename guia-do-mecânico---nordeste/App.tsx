import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ChapterCard from './components/ChapterCard';
import { CHAPTERS } from './constants';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setIsNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <Header onMenuClick={() => setIsNavOpen(true)} />
      
      <Navigation 
        isOpen={isNavOpen} 
        onClose={() => setIsNavOpen(false)} 
        chapters={CHAPTERS}
        onNavigate={handleNavigate}
      />

      <main className="flex-1 container mx-auto px-4 pb-12 pt-24 max-w-3xl">
        <div className="text-center mb-8 animate-fade-in-up">
          <span className="inline-block bg-white text-nordeste-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm mb-3 border border-red-100">
            Procedimento Operacional Padrão
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Manutenção Externa
          </h1>
          <p className="text-gray-600">
            Guia oficial para eficiência, segurança e qualidade técnica.
          </p>
        </div>

        <div className="space-y-6">
          {CHAPTERS.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
                Sistemas Nordeste &bull; V1.0
            </p>
        </div>
      </main>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-nordeste-red text-white p-3 rounded-full shadow-lg hover:bg-nordeste-darkRed transition-all duration-300 z-40 opacity-80 hover:opacity-100"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;