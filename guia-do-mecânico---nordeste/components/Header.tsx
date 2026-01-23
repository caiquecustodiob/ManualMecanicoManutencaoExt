import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

const Header: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-nordeste-darkRed shadow-md py-3' : 'bg-nordeste-red py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <div className="bg-white text-nordeste-red p-1.5 rounded-full">
                <Wrench size={20} strokeWidth={2.5} />
            </div>
            <div>
                <h1 className="text-white font-bold text-lg leading-none">Sistemas Nordeste</h1>
                <p className="text-white/80 text-xs font-medium">Guia do Mecânico</p>
            </div>
        </div>
        <button 
          onClick={onMenuClick}
          className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;