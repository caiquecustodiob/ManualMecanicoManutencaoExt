import React from 'react';
import { Chapter, SectionContent } from '../types';
import { AlertTriangle, Info, XCircle } from 'lucide-react';
import SecureDocuments from './SecureDocuments';

interface ChapterCardProps {
  chapter: Chapter;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  const renderContent = (block: SectionContent, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed text-base">
            {block.text}
          </p>
        );
      case 'list':
        return (
          <ul key={index} className="mb-4 space-y-2">
            {block.items?.map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <span className="mr-2 mt-1.5 min-w-[6px] h-[6px] bg-nordeste-red rounded-full"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'warning':
        return (
          <div key={index} className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-md">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
              <div className="text-yellow-800 text-sm font-medium">
                {block.title && <strong className="block mb-1">{block.title}</strong>}
                {block.text && <p>{block.text}</p>}
                {block.items && (
                  <ul className="list-disc pl-4 mt-1 space-y-1">
                    {block.items.map((it, i) => <li key={i}>{it}</li>)}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      case 'critical':
        return (
          <div key={index} className="mb-4 p-4 bg-red-50 border-l-4 border-red-600 rounded-r-md">
             <div className="flex items-start">
              <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
              <div className="text-red-800 text-sm font-medium">
                {block.title && <strong className="block mb-1">{block.title}</strong>}
                {block.text}
              </div>
            </div>
          </div>
        );
      case 'info':
        return (
          <div key={index} className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
             <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <div className="text-blue-800 text-sm font-medium">
                {block.title && <strong className="block mb-1">{block.title}</strong>}
                {block.items && (
                  <ul className="space-y-1 mt-1">
                    {block.items.map((it, i) => <li key={i}>{it}</li>)}
                  </ul>
                )}
                 {block.text && <p className="mt-1">{block.text}</p>}
              </div>
            </div>
          </div>
        );
      case 'custom_documents':
        return <SecureDocuments key={index} />;
      default:
        return null;
    }
  };

  return (
    <div id={chapter.id} className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-100">
      <div className="bg-nordeste-red px-5 py-4 flex items-center">
        <div className="bg-white/20 p-2 rounded-lg mr-3 text-white">
          {chapter.icon}
        </div>
        <div>
          <span className="text-nordeste-lightRed text-xs font-bold uppercase tracking-wider">Seção {chapter.number}</span>
          <h2 className="text-white text-xl font-bold leading-tight">{chapter.title}</h2>
        </div>
      </div>
      <div className="p-5 md:p-6">
        {chapter.content.map((block, idx) => renderContent(block, idx))}
      </div>
    </div>
  );
};

export default ChapterCard;