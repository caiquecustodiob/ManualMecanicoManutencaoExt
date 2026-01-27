import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { ListTodo, Check } from 'lucide-react';

export const Attributions: React.FC = () => {
  const tasks = [
    "Limpeza detalhada dos equipamentos",
    "Organização impecável do galpão",
    "Gestão de resíduos da oficina",
    "Lixamento e restauração de betoneiras",
    "Pintura técnica e acabamento",
    "Manutenção completa das peneiras"
  ];

  return (
    <div className="space-y-6">
        <Card delay="delay-100">
            <CardHeader title="Atribuições Gerais" icon={<ListTodo className="w-6 h-6" />} />
            <CardContent>
                <div className="mb-8 p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <p className="text-slate-600 text-center font-medium">
                        Seu foco: Garantir que os equipamentos estejam em <strong className="text-green-600">perfeito estado para locação</strong>.
                    </p>
                </div>
                
                <ul className="space-y-3">
                {tasks.map((task, index) => (
                    <li 
                        key={index} 
                        className="group flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-red-200 transition-colors animate-slide-up"
                        style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                            <Check className="w-3.5 h-3.5 text-green-600 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-slate-700 font-medium">{task}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
        </Card>
    </div>
  );
};