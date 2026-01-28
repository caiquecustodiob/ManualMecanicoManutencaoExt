import React from 'react';
import { Menu, ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-nordeste-red text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
            <div className="bg-white p-1.5 rounded-lg shadow-sm">
                <ShieldCheck className="w-6 h-6 text-nordeste-red" />
            </div>
            <div>
                <h1 className="font-bold text-lg leading-tight">Nordeste Academy</h1>
                <p className="text-xs text-red-100 font-medium tracking-wide">SISTEMAS NORDESTE</p>
            </div>
        </div>
        <div className="text-right hidden sm:block">
            <p className="text-xs text-red-200">Assistente de PCM</p>
            <p className="text-xs font-semibold">Manutenção Externa</p>
        </div>
      </div>
    </header>
  );
};

export default Header;