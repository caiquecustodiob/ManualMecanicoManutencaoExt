import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Hand, HardHat, Info } from 'lucide-react';

export const Welcome: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card delay="delay-100">
        <div className="relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/10 rounded-full blur-2xl"></div>
            
            <CardHeader 
                title="Bem-vindo à Nordeste Locações" 
                icon={<HardHat className="w-6 h-6" />} 
                color="bg-gradient-to-r from-slate-800 to-slate-900"
            />
            
            <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
                <div className="bg-red-50 p-5 rounded-full ring-4 ring-red-50 shadow-sm animate-scale-in delay-200">
                    <Hand className="w-10 h-10 text-red-600" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Seja bem-vindo ao time! 👷‍♂️</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Este guia foi desenvolvido para complementar o <strong className="text-red-600">Projeto de Capacitação Operacional</strong>. 
                        Nosso objetivo é padronizar e auxiliar o ASD no dia a dia, garantindo excelência.
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-5 rounded-xl border border-red-100 flex gap-4 shadow-sm animate-slide-up delay-300">
                <div className="mt-1">
                    <Info className="w-6 h-6 text-red-500" />
                </div>
                <div>
                    <h4 className="font-semibold text-red-900 mb-1">Propósito do Guia</h4>
                    <p className="text-slate-700 italic text-sm md:text-base">
                    "Aqui você encontrará as principais responsabilidades, rotinas e boas práticas esperadas durante suas atividades."
                    </p>
                </div>
            </div>
            </CardContent>
        </div>
      </Card>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center animate-slide-up delay-200">
            <span className="block text-3xl font-bold text-red-600 mb-1">100%</span>
            <span className="text-xs text-slate-500 font-medium uppercase">Segurança</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center animate-slide-up delay-300">
            <span className="block text-3xl font-bold text-red-600 mb-1">24h</span>
            <span className="text-xs text-slate-500 font-medium uppercase">Excelência</span>
        </div>
      </div>
    </div>
  );
};