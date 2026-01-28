import React from 'react';
import { Calendar, CheckCircle2, Circle, Award } from 'lucide-react';
import { Phase } from '../types';

interface PhaseCardProps {
  phase: Phase;
  isCompleted: boolean;
  onToggle: () => void;
  onGenerateCert: (phase: Phase) => void;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, isCompleted, onToggle, onGenerateCert }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${isCompleted ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200 shadow-sm'}`}>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded">
                        {phase.duration}
                    </span>
                    {isCompleted && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded">
                            Concluído
                        </span>
                    )}
                </div>
                <h3 className={`font-bold text-lg ${isCompleted ? 'text-nordeste-darkred' : 'text-gray-900'}`}>
                    {phase.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {phase.dates}
                </div>
            </div>
            
            <button 
                onClick={onToggle}
                className={`p-2 rounded-full transition-colors ${isCompleted ? 'text-nordeste-red bg-white shadow-sm' : 'text-gray-300 hover:text-nordeste-red hover:bg-red-50'}`}
            >
                {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
            </button>
        </div>

        <div className={`space-y-2 mt-4 pt-4 border-t ${isCompleted ? 'border-red-100' : 'border-gray-100'}`}>
            {phase.description.map((desc, idx) => (
                <div key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 mr-2.5 shrink-0"></div>
                    <p className={`text-sm ${isCompleted ? 'text-gray-600' : 'text-gray-600'}`}>{desc}</p>
                </div>
            ))}
        </div>

        {isCompleted && (
            <div className="mt-4 pt-4 border-t border-red-200 flex justify-end">
                <button 
                    onClick={() => onGenerateCert(phase)}
                    className="flex items-center space-x-2 text-xs font-bold text-nordeste-red hover:text-red-800 bg-white px-3 py-1.5 rounded border border-red-200 shadow-sm"
                >
                    <Award className="w-4 h-4" />
                    <span>CERTIFICADO</span>
                </button>
            </div>
        )}
      </div>
      {isCompleted && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-nordeste-red"></div>
      )}
    </div>
  );
};

export default PhaseCard;