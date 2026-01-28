import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import PhaseCard from './components/PhaseCard';
import ModuleCard from './components/ModuleCard';
import AssetTracker from './components/AssetTracker';
import InstallBanner from './components/InstallBanner';
import { PHASES, MODULES } from './constants';
import { TabType, ProgressState, UserProfile, Phase } from './types';
import { getProgress, saveProgress, getUserProfile, saveUserProfile, clearUserProfile } from './services/storageService';
import { generateCertificate, downloadCertificate } from './services/certificateService';
import { LayoutDashboard, BookOpen, Wrench, AlertTriangle, User, Award, Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('cronograma');
  const [progress, setProgress] = useState<ProgressState>({});
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Form state
  const [nameInput, setNameInput] = useState('');
  const [roleInput, setRoleInput] = useState('Assistente de PCM');

  useEffect(() => {
    const savedProgress = getProgress();
    const savedUser = getUserProfile();
    setProgress(savedProgress);
    setUser(savedUser);
    if(savedUser) {
        setNameInput(savedUser.name);
        setRoleInput(savedUser.role);
    }
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

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    
    const newProfile: UserProfile = {
        name: nameInput,
        role: roleInput,
        startDate: new Date().toISOString()
    };
    
    setUser(newProfile);
    saveUserProfile(newProfile);
    setShowProfileModal(false);
  };

  const handleLogout = () => {
      if(confirm('Deseja sair e limpar os dados de sessão? O progresso do checklist será mantido.')) {
          clearUserProfile();
          setUser(null);
          setNameInput('');
      }
  };

  const calculateProgress = () => {
    const total = PHASES.length + MODULES.length;
    const completed = 
      PHASES.filter(p => progress[p.id]).length + 
      MODULES.filter(m => progress[m.id]).length;
    return { total, completed };
  };

  const stats = calculateProgress();
  const isCourseCompleted = stats.total > 0 && stats.completed === stats.total;

  const handleGenerateCertificate = async (phase?: Phase) => {
    if (!user) {
        setShowProfileModal(true);
        return;
    }

    setIsGenerating(true);
    try {
        const type = phase ? 'phase' : 'course';
        const title = phase ? phase.title : 'Curso de Capacitação PCM';
        const details = phase 
            ? `Duração: ${phase.duration} | Período: ${phase.dates}`
            : 'Formação Completa de Assistente de PCM em Manutenção Externa';

        const dataUrl = await generateCertificate(user.name, title, type, details);
        const fileName = phase 
            ? `Certificado_${phase.id}.jpg`
            : `Certificado_Final_PCM.jpg`;
            
        downloadCertificate(dataUrl, fileName);
    } catch (error) {
        alert('Erro ao gerar certificado');
        console.error(error);
    } finally {
        setIsGenerating(false);
    }
  };

  if (!isLoaded) return <div className="min-h-screen bg-gray-100 flex items-center justify-center text-nordeste-red">Carregando...</div>;

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Header />
      
      {/* User Info Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex justify-between items-center">
        {user ? (
             <div className="flex items-center space-x-2" onClick={() => setShowProfileModal(true)}>
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-nordeste-red font-bold">
                    {user.name.charAt(0)}
                </div>
                <div>
                    <p className="text-xs text-gray-500">Logado como</p>
                    <p className="text-sm font-bold leading-none">{user.name}</p>
                </div>
             </div>
        ) : (
            <button 
                onClick={() => setShowProfileModal(true)}
                className="text-sm text-nordeste-red font-bold flex items-center"
            >
                <User className="w-4 h-4 mr-1" />
                Identifique-se
            </button>
        )}
        {user && (
            <button onClick={handleLogout} className="text-xs text-gray-400 hover:text-red-500">Sair</button>
        )}
      </div>
      
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

        {/* Global Certificate Banner */}
        {isCourseCompleted && activeTab === 'cronograma' && (
            <div className="mb-6 bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-5 text-white shadow-lg flex items-center justify-between">
                <div>
                    <h2 className="font-bold text-lg flex items-center">
                        <Award className="w-6 h-6 mr-2" />
                        Curso Concluído!
                    </h2>
                    <p className="text-sm text-red-100 mt-1">Parabéns, você finalizou todas as etapas.</p>
                </div>
                <button 
                    onClick={() => handleGenerateCertificate()}
                    disabled={isGenerating}
                    className="bg-white text-red-700 px-4 py-2 rounded-lg font-bold text-sm shadow hover:bg-gray-100 disabled:opacity-50"
                >
                    {isGenerating ? 'Gerando...' : 'Baixar Certificado Final'}
                </button>
            </div>
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
                            onGenerateCert={handleGenerateCertificate}
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
         <p className="mt-1">Versão 2.0 PWA</p>
      </footer>

      <InstallBanner />

      {/* Profile Modal */}
      {showProfileModal && (
          <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
              <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Identificação</h2>
                  <p className="text-sm text-gray-600 mb-4">Para gerar certificados e salvar seu progresso, precisamos do seu nome.</p>
                  
                  <form onSubmit={handleSaveProfile} className="space-y-4">
                      <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nome Completo</label>
                          <input 
                            type="text" 
                            required
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-nordeste-red focus:border-nordeste-red outline-none"
                            placeholder="Ex: João da Silva"
                          />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Cargo / Função</label>
                          <input 
                            type="text" 
                            value={roleInput}
                            onChange={(e) => setRoleInput(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-nordeste-red focus:border-nordeste-red outline-none"
                          />
                      </div>
                      <div className="flex space-x-2 pt-2">
                          {user && (
                              <button 
                                type="button" 
                                onClick={() => setShowProfileModal(false)}
                                className="flex-1 bg-gray-100 text-gray-700 font-bold py-2.5 rounded-lg"
                            >
                                Cancelar
                            </button>
                          )}
                          <button 
                            type="submit" 
                            className="flex-1 bg-nordeste-red text-white font-bold py-2.5 rounded-lg hover:bg-red-700"
                          >
                            Salvar
                        </button>
                      </div>
                  </form>
              </div>
          </div>
      )}

      {isGenerating && (
          <div className="fixed inset-0 bg-white/80 z-[70] flex items-center justify-center">
              <div className="text-center">
                  <Loader2 className="w-10 h-10 text-nordeste-red animate-spin mx-auto mb-2" />
                  <p className="text-sm font-bold text-gray-600">Gerando Certificado...</p>
              </div>
          </div>
      )}
    </div>
  );
};

export default App;