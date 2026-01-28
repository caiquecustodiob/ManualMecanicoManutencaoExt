import React from 'react';
import { ASSET_CHECKLIST } from '../constants';
import { ProgressState } from '../types';
import { Bike, BatteryCharging, FileText, Check } from 'lucide-react';

interface AssetTrackerProps {
  checkedItems: ProgressState;
  onToggle: (id: string) => void;
}

const AssetTracker: React.FC<AssetTrackerProps> = ({ checkedItems, onToggle }) => {
  
  const renderCategory = (category: string, title: string, icon: React.ReactNode) => {
    const items = ASSET_CHECKLIST.filter(i => i.category === category);
    
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-4">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
                <div className="text-nordeste-red">{icon}</div>
                <h3 className="font-bold text-gray-800">{title}</h3>
            </div>
            <div className="divide-y divide-gray-100">
                {items.map(item => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                        <div 
                            key={item.id} 
                            onClick={() => onToggle(item.id)}
                            className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors ${isChecked ? 'bg-red-50/50' : ''}`}
                        >
                            <span className={`text-sm font-medium ${isChecked ? 'text-gray-800' : 'text-gray-600'}`}>{item.label}</span>
                            <div className={`w-6 h-6 rounded border flex items-center justify-center transition-all ${isChecked ? 'bg-nordeste-red border-nordeste-red text-white' : 'border-gray-300 bg-white'}`}>
                                {isChecked && <Check className="w-4 h-4" />}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
  };

  return (
    <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-900">
            <h4 className="font-bold mb-1">Controle Diário</h4>
            <p>O Assistente de PCM deve garantir que este checklist seja realizado diariamente antes da saída para rota.</p>
        </div>

        {renderCategory('moto', 'Manutenção da Moto', <Bike className="w-5 h-5" />)}
        {renderCategory('equipment', 'Equipamentos e EPIs', <BatteryCharging className="w-5 h-5" />)}
        {renderCategory('admin', 'Documentação', <FileText className="w-5 h-5" />)}
    </div>
  );
};

export default AssetTracker;