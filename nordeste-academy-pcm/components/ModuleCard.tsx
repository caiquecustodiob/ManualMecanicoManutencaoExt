import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckSquare, Square, AlertCircle, CheckCircle } from 'lucide-react';
import { ModuleItem } from '../types';

interface ModuleCardProps {
  module: ModuleItem;
  isCompleted: boolean;
  onToggle: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, isCompleted, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-xl border transition-all duration-300 ${isCompleted ? 'bg-white border-green-200 ring-1 ring-green-100' : 'bg-white border-gray-200 shadow-sm'}`}>
      <div 
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-red-50 text-nordeste-red'}`}>
                {isCompleted ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            </div>
            <div>
                <h4 className={`font-bold text-sm sm:text-base ${isCompleted ? 'text-green-900' : 'text-gray-900'}`}>
                    {module.title}
                </h4>
                {isCompleted && <p className="text-xs text-green-600 font-medium">Módulo Finalizado</p>}
            </div>
        </div>
        <div className="flex items-center space-x-3">
            {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </div>
      </div>

      {isOpen && (
        <div className="px-4 pb-4 animate-fadeIn">
            <div className="pl-14 space-y-3">
                <ul className="space-y-2">
                    {module.content.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                             <span className="mr-2 text-nordeste-red">•</span> {item}
                        </li>
                    ))}
                </ul>

                {module.checklist && (
                     <div className="mt-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <p className="text-xs font-bold text-gray-500 uppercase mb-2">Checklist Obrigatório</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {module.checklist.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-700 flex items-center">
                                    <div className="w-3 h-3 border border-gray-400 rounded-sm mr-2"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                     </div>
                )}

                {module.expectedResult && (
                    <div className="mt-3 p-3 bg-blue-50 text-blue-800 text-sm rounded-lg border border-blue-100 flex items-start">
                        <AlertCircle className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                        <span className="font-medium">Resultado: {module.expectedResult}</span>
                    </div>
                )}

                <div className="pt-4 mt-2 border-t border-gray-100 flex justify-end">
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggle();
                        }}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                            isCompleted 
                            ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                            : 'bg-nordeste-red text-white hover:bg-red-700 shadow-md'
                        }`}
                    >
                        {isCompleted ? (
                            <>
                                <Square className="w-4 h-4 mr-2" />
                                Reabrir Módulo
                            </>
                        ) : (
                            <>
                                <CheckSquare className="w-4 h-4 mr-2" />
                                Marcar como Concluído
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;