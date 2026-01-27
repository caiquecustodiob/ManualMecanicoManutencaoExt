import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { HeartHandshake, Rocket, ThumbsUp } from 'lucide-react';

export const Teamwork: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card delay="delay-100">
        <CardHeader title="Trabalho em Equipe" icon={<HeartHandshake className="w-6 h-6" />} color="bg-gradient-to-r from-pink-600 to-rose-600" />
        <CardContent>
          <div className="text-center mb-8">
            <p className="text-xl font-medium text-slate-700">
                Aqui, todos crescem juntos. 💪
            </p>
            <p className="text-slate-500 text-sm mt-1">Sua atitude define o ambiente.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-rose-200 rounded-full opacity-50 blur-xl"></div>
              <h4 className="font-bold text-rose-700 mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5" /> Atitudes Esperadas
              </h4>
              <ul className="space-y-3 text-slate-700 relative z-10">
                <li className="flex gap-3 items-center bg-white/60 p-2 rounded-lg">
                  <span className="text-rose-500 font-bold">➜</span> Ajude sem ser pedido
                </li>
                <li className="flex gap-3 items-center bg-white/60 p-2 rounded-lg">
                  <span className="text-rose-500 font-bold">➜</span> Apoie a expedição
                </li>
                <li className="flex gap-3 items-center bg-white/60 p-2 rounded-lg">
                  <span className="text-rose-500 font-bold">➜</span> Compartilhe ideias
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl shadow-slate-900/20 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 ring-4 ring-slate-700">
                <Rocket className="w-8 h-8 text-rose-500" />
              </div>
              <h4 className="font-bold text-xl mb-2">Bom Trabalho! 🚀</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Você é essencial para a Nordeste Locações. Conte sempre com sua liderança.
              </p>
              <button className="mt-6 px-6 py-2 bg-rose-600 hover:bg-rose-700 rounded-full text-sm font-bold transition-colors">
                Vamos lá!
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};