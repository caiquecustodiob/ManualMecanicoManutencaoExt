import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import PhaseCard from './components/PhaseCard';
import ModuleCard from './components/ModuleCard';
import AssetTracker from './components/AssetTracker';
import { PHASES, MODULES } from './constants';
import { TabType, ProgressState } from './types';
import { getProgress, saveProgress } from './services/storageService';
import { LayoutDashboard, BookOpen, Wrench, AlertTriangle } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('cronograma');
  const [progress, setProgress] = useState<ProgressState>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = getProgress();
    setProgress(saved);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveProgress(progress);
    }
  }, [progress, isLoaded]);

  const toggleItem = (id: string) => {
    setProgress(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const calculateProgress = () => {
    const total = PHASES.length + MODULES.length;
    const completed = 
      PHASES.filter(p => progress[p.id]).length + 
      MODULES.filter(m => progress[m.id]).length;
    return { total, completed };
  };

  const stats = calculateProgress();

  if (!isLoaded) return <div className="min-h-screen bg-gray-100 flex items-center justify-center text-nordeste-red">Carregando...</div>;

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Header />
      
      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-[60px] z-40">
        <div className="max-w-4xl mx-auto flex">
            <button 
                onClick={() => setActiveTab('cronograma')}
                className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${activeTab === 'cronograma' ? 'border-nordeste-red text-nordeste-red' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                <LayoutDashboard className="w-4 h-4" />
                <span>Cronograma</span>
            </button>
            <button 
                onClick={() => setActiveTab('modulos')}
                className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${activeTab === 'modulos' ? 'border-nordeste-red text-nordeste-red' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                <BookOpen className="w-4 h-4" />
                <span>Módulos</span>
            </button>
            <button 
                onClick={() => setActiveTab('ativos')}
                className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${activeTab === 'ativos' ? 'border-nordeste-red text-nordeste-red' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                <Wrench className="w-4 h-4" />
                <span>Ativos</span>
            </button>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-6">
        
        {activeTab !== 'ativos' && (
             <ProgressBar total={stats.total} completed={stats.completed} />
        )}

        {/* Content Area */}
        <div className="space-y-6">
            
            {activeTab === 'cronograma' && (
                <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider">Visão Macro (Fases)</span>
                    </div>
                    {PHASES.map(phase => (
                        <PhaseCard 
                            key={phase.id} 
                            phase={phase} 
                            isCompleted={!!progress[phase.id]} 
                            onToggle={() => toggleItem(phase.id)} 
                        />
                    ))}
                </div>
            )}

            {activeTab === 'modulos' && (
                <div className="space-y-4 animate-fadeIn">
                     <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider">Visão Micro (Detalhes)</span>
                    </div>
                    {MODULES.map(module => (
                        <ModuleCard 
                            key={module.id} 
                            module={module} 
                            isCompleted={!!progress[module.id]} 
                            onToggle={() => toggleItem(module.id)} 
                        />
                    ))}
                </div>
            )}

            {activeTab === 'ativos' && (
                <div className="animate-fadeIn">
                    <AssetTracker 
                        checkedItems={progress} 
                        onToggle={toggleItem} 
                    />
                    <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                        <h4 className="font-bold flex items-center mb-2">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            Política de Avaria
                        </h4>
                        <p>Qualquer avaria identificada deve ser reportada imediatamente. Itens marcados como defeituosos no checklist devem ser retirados de operação até manutenção.</p>
                    </div>
                </div>
            )}
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-400 text-xs">
         <p>Nordeste Locações - Departamento de PCM</p>
         <p className="mt-1">Versão 1.0.0 (2026)</p>
      </footer>
    </div>
  );
};

export default App;