import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { ShieldCheck, Users, ClipboardCheck, MessageSquare, Star } from 'lucide-react';

export const Principles: React.FC = () => {
  const principles = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Trabalho em Equipe",
      description: "Ninguém cresce sozinho. O sucesso de um é o sucesso de todos.",
      color: "bg-blue-500"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      title: "Organização",
      description: "Um ambiente limpo reflete a qualidade do nosso serviço.",
      color: "bg-emerald-500"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Comunicação",
      description: "Fale, ouça e pergunte. A clareza evita erros.",
      color: "bg-purple-500"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Segurança",
      description: "Nossa regra de ouro. Segurança vem sempre em primeiro lugar.",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="space-y-6">
        <Card delay="delay-100">
            <CardHeader title="Princípios Básicos" icon={<Star className="w-6 h-6" />} color="bg-gradient-to-r from-yellow-500 to-amber-600" />
            <CardContent>
                <p className="text-slate-600 mb-8 text-lg text-center md:text-left">
                Antes de tudo, esteja sempre <strong>alinhado com o seu time</strong>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {principles.map((item, index) => (
                    <div 
                        key={index} 
                        className={`
                            flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm
                            transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md
                            animate-slide-up
                        `}
                        style={{ animationDelay: `${(index + 2) * 100}ms` }}
                    >
                    <div className={`p-3 rounded-lg shadow-sm ${item.color} shrink-0`}>
                        {item.icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-snug mt-1">{item.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </CardContent>
        </Card>
    </div>
  );
};