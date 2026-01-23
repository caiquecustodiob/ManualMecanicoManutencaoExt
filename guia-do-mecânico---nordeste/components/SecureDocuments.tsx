import React, { useState } from 'react';
import PatternLock from './PatternLock';
import { FileText, Download, Shield } from 'lucide-react';

const SecureDocuments: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Dados extraídos dos PDFs (OCR)
  const documents = [
    {
      id: 1,
      name: 'CRLV - HONDA CG 125I FAN (2018)',
      plate: 'PNK6G03',
      file: 'https://github.com/caiquecustodiob/ManualMecanicoManutencaoExt/raw/d75269bbd134a790f43e4a9f40389416a6740439/guia-do-mec%C3%A2nico---nordeste/documentos/CRLVDigital_PNK6G03_2025.pdf'
    },
    {
      id: 2,
      name: 'CRLV - HONDA CG 160 START (2019)',
      plate: 'POC8G33',
      file: 'https://github.com/caiquecustodiob/ManualMecanicoManutencaoExt/raw/d75269bbd134a790f43e4a9f40389416a6740439/guia-do-mec%C3%A2nico---nordeste/documentos/CRLVDigital_POC8G33_2025-1.pdf'
    },
    {
      id: 3,
      name: 'CRLV - HONDA CG 160 CARGO (2024)',
      plate: 'SBI6D12',
      file: 'https://github.com/caiquecustodiob/ManualMecanicoManutencaoExt/raw/d75269bbd134a790f43e4a9f40389416a6740439/guia-do-mec%C3%A2nico---nordeste/documentos/CRLVDigital_SBI6D12_2025.pdf'
    }
  ];

  if (!isUnlocked) {
    return (
      <div className="my-6">
        <PatternLock onSuccess={() => setIsUnlocked(true)} />
      </div>
    );
  }

  return (
    <div className="bg-white border border-green-100 rounded-lg shadow-sm overflow-hidden my-6 animate-fade-in-up">
      <div className="bg-green-50 p-3 border-b border-green-100 flex items-center">
        <Shield size={18} className="text-green-600 mr-2" />
        <h3 className="font-bold text-green-800 text-sm">Documentação Liberada</h3>
      </div>
      <div className="p-2">
        {documents.map((doc) => (
          <a
            key={doc.id}
            href={doc.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors group border-b last:border-0 border-gray-50"
          >
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-lg text-gray-500 mr-3 group-hover:bg-nordeste-lightRed group-hover:text-nordeste-red transition-colors">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">{doc.name}</p>
                <p className="text-xs text-gray-500 font-mono">PLACA: {doc.plate}</p>
              </div>
            </div>
            <Download size={18} className="text-gray-400 group-hover:text-nordeste-red" />
          </a>
        ))}
      </div>
      <div className="bg-gray-50 p-2 text-center text-xs text-gray-400 border-t border-gray-100">
        Toque no arquivo para visualizar/baixar
      </div>
    </div>
  );
};

export default SecureDocuments;