import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

const InstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowBanner(false);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-xl z-50 flex items-center justify-between animate-fadeIn">
      <div className="flex items-center space-x-3">
        <div className="bg-nordeste-red p-2 rounded-lg text-white">
            <Download className="w-6 h-6" />
        </div>
        <div>
            <h3 className="font-bold text-gray-900 text-sm">Instalar App PCM</h3>
            <p className="text-xs text-gray-500">Acesse offline e mais rápido</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
          <button 
            onClick={() => setShowBanner(false)}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
              <X className="w-5 h-5" />
          </button>
          <button 
            onClick={handleInstallClick}
            className="bg-nordeste-red text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            INSTALAR
          </button>
      </div>
    </div>
  );
};

export default InstallBanner;