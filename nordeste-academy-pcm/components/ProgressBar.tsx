import React from 'react';

interface ProgressBarProps {
  total: number;
  completed: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, completed }) => {
  const percentage = Math.round((completed / total) * 100) || 0;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
      <div className="flex justify-between items-end mb-2">
        <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Progresso Geral</span>
            <div className="text-2xl font-bold text-nordeste-red">{percentage}%</div>
        </div>
        <div className="text-xs text-gray-400">
            {completed} de {total} itens concluídos
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div 
            className="bg-nordeste-red h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;