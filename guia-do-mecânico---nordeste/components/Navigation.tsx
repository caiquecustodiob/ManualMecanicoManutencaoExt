import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Chapter } from '../types';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  chapters: Chapter[];
  onNavigate: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose, chapters, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
        <div className="p-4 bg-nordeste-red flex justify-between items-center">
          <h2 className="text-white font-bold text-lg">Índice</h2>
          <button onClick={onClose} className="text-white p-1 hover:bg-white/10 rounded-full">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => onNavigate(chapter.id)}
              className="w-full text-left p-3 flex items-center justify-between hover:bg-gray-50 rounded-lg group transition-colors border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center overflow-hidden">
                <span className="text-nordeste-red font-bold text-sm mr-3 bg-red-50 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">
                  {chapter.number}
                </span>
                <span className="text-gray-700 font-medium truncate text-sm">{chapter.title}</span>
              </div>
              <ChevronRight size={16} className="text-gray-400 group-hover:text-nordeste-red" />
            </button>
          ))}
        </div>
        
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">Sistemas Nordeste &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;