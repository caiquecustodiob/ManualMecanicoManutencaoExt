import React, { useState, useEffect } from 'react';
import { Home, ClipboardList, ListChecks, Clock, Users, Menu, X, ChevronRight } from 'lucide-react';
import { Welcome } from './components/sections/Welcome';
import { Principles } from './components/sections/Principles';
import { Attributions } from './components/sections/Attributions';
import { DailyRoutine } from './components/sections/DailyRoutine';
import { Teamwork } from './components/sections/Teamwork';
import { Section } from './types';

const sections: Section[] = [
  { id: 'welcome', title: 'Início', icon: Home, component: Welcome },
  { id: 'principles', title: 'Princípios', icon: ClipboardList, component: Principles },
  { id: 'attributions', title: 'Atribuições', icon: ListChecks, component: Attributions },
  { id: 'routine', title: 'Rotinas Diárias', icon: Clock, component: DailyRoutine },
  { id: 'team', title: 'Equipe', icon: Users, component: Teamwork },
];

function App() {
  const [activeSection, setActiveSection] = useState<string>('welcome');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollSpy: Detect which section is currently active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Ativa quando a seção está no topo/meio da tela
        threshold: 0
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      // Ajuste para o header fixo no mobile
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans selection:bg-red-500 selection:text-white">
      
      {/* Mobile Header (Glassmorphism) */}
      <div className={`
        md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300
        flex justify-between items-center px-4 py-3
        ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-red-600 text-white'}
      `}>
        <div className={`font-bold text-lg tracking-tight flex items-center gap-2 ${scrolled ? 'text-slate-800' : 'text-white'}`}
             onClick={() => handleNavClick('welcome')}>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${scrolled ? 'bg-red-600 text-white' : 'bg-white text-red-600'}`}>
            N
          </div>
          Nordeste Locações
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className={`p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-0 z-40 transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
        md:sticky md:top-0 md:h-screen md:translate-x-0 md:w-72 md:block
        bg-slate-900 text-white shrink-0 shadow-2xl md:shadow-none
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-8 border-b border-slate-800 hidden md:block">
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-sm shadow-lg shadow-red-900/50">NL</div>
              Nordeste
            </h1>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-semibold pl-10">Guia de Operações</p>
          </div>

          <div className="md:hidden pt-24 px-6 pb-6">
            <h2 className="text-3xl font-bold text-white mb-1">Menu</h2>
            <p className="text-slate-400">Navegue pelo guia</p>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`
                    group w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 relative overflow-hidden
                    ${isActive 
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-900/40 translate-x-1' 
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white hover:translate-x-1'}
                  `}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <Icon size={22} className={`transition-colors duration-300 ${isActive ? 'text-white' : 'group-hover:text-red-400'}`} />
                    <span className="font-medium text-base tracking-wide">{section.title}</span>
                  </div>
                  {isActive && <ChevronRight size={18} className="animate-pulse" />}
                </button>
              );
            })}
          </nav>
          
          <div className="p-6 md:p-8 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <Users size={18} className="text-slate-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Time Operacional</p>
                <p className="text-xs text-slate-500">Versão 2.1 OnePage</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full relative overflow-x-hidden">
        {/* Top spacing for mobile header */}
        <div className="h-16 md:hidden"></div>

        <div className="p-4 md:p-8 lg:p-12 max-w-5xl mx-auto">
          
          <div className="space-y-16 pb-24">
            {sections.map((section) => {
              const Component = section.component;
              return (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  {/* Section Title Only Visible on Mobile to Divide Content */}
                  <div className="md:hidden mb-6 flex items-center gap-3 opacity-80">
                    <section.icon className="w-5 h-5 text-red-600" />
                    <h2 className="text-lg font-bold text-slate-400 uppercase tracking-widest text-xs">
                      {section.title}
                    </h2>
                    <div className="h-px bg-slate-200 flex-1"></div>
                  </div>

                  <Component />
                </section>
              );
            })}
          </div>
          
          <footer className="py-8 border-t border-slate-200/60 text-center">
             <p className="text-sm text-slate-400 font-medium">
               Nordeste Locações &copy; {new Date().getFullYear()}
             </p>
             <p className="text-xs text-slate-300 mt-1">Excelência Operacional</p>
          </footer>
        </div>
      </main>
      
    </div>
  );
}

export default App;