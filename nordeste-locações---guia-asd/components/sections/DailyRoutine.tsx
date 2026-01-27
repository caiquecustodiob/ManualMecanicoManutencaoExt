import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { CalendarClock, Hammer, Droplets, Warehouse, AlertTriangle, Filter, Construction, Search, CheckSquare, Brush } from 'lucide-react';

export const DailyRoutine: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="animate-slide-up delay-100 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center gap-4">
        <div className="p-3 bg-red-100 text-red-600 rounded-full w-fit">
             <CalendarClock className="w-8 h-8" />
        </div>
        <div>
            <h2 className="text-xl font-bold text-slate-800">Organização Diária</h2>
            <p className="text-slate-500 text-sm">
            O dia a dia é dividido em tarefas e rodízio. Organização é a chave.
            </p>
        </div>
      </div>

      {/* Lixamento */}
      <Card delay="delay-200" className="border-l-4 border-l-orange-500">
        <CardHeader 
            title="1. Lixamento de Betoneiras" 
            icon={<Hammer className="w-5 h-5" />} 
            color="bg-orange-500" 
        />
        <CardContent>
          <p className="mb-4 text-slate-600">
            Atividade importante que exige <strong>atenção máxima</strong>.
          </p>
          <div className="bg-orange-50 p-5 rounded-xl border border-orange-100 mb-4 shadow-inner">
            <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
              <AlertTriangle className="w-4 h-4" /> Segurança e Regras
            </h4>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
                <span>Use <strong>todos os EPIs</strong> (luvas, óculos, máscara, protetor).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
                <span>Cada ASD fica <strong>2 dias consecutivos</strong> nesta função.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
                <span>Rodízio obrigatório entre a equipe.</span>
              </li>
            </ul>
          </div>
          <div className="text-center bg-red-50 text-red-600 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
            Risco Elevado • Atenção Constante
          </div>
        </CardContent>
      </Card>

      {/* Lavagem */}
      <Card delay="delay-300" className="border-l-4 border-l-blue-500">
        <CardHeader 
            title="2. Lavagem de Equipamentos" 
            icon={<Droplets className="w-5 h-5" />} 
            color="bg-blue-500"
        />
        <CardContent>
          <p className="mb-6 text-slate-600">
            Fundamental para o controle de qualidade. Funciona em <strong>rodízio diário</strong>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            {[
                { title: "Início", color: "bg-blue-50 text-blue-800", items: ["Limpar caixa de resíduos", "Remover obstruções"] },
                { title: "Durante", color: "bg-blue-100 text-blue-900", items: ["Limpeza completa", "Verificar avarias", "Conferir patrimônio"] },
                { title: "Final", color: "bg-blue-50 text-blue-800", items: ["Ambiente limpo", "Secar o piso", "Organizar mangueiras"] }
            ].map((col, idx) => (
                <div key={idx} className={`${col.color} p-4 rounded-xl`}>
                    <h5 className="font-bold mb-2 text-xs uppercase opacity-80">{col.title}</h5>
                    <ul className="text-sm space-y-1 font-medium">
                        {col.items.map((it, i) => <li key={i}>• {it}</li>)}
                    </ul>
                </div>
            ))}
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 flex gap-3 items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0" />
            <p className="text-sm text-yellow-800 font-medium">
              Conferência Obrigatória: A marcação industrial deve bater com a plaquinha de patrimônio.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Peneiras */}
      <Card delay="delay-300" className="border-l-4 border-l-indigo-600">
        <CardHeader 
            title="3. Manutenção de Peneiras" 
            icon={<Filter className="w-5 h-5" />} 
            color="bg-indigo-600"
        />
        <CardContent>
          <div className="space-y-4">
            {[
                { 
                    title: "Limpeza e Inspeção", 
                    icon: <Search className="w-5 h-5 text-indigo-500" />,
                    text: "Remova areia e concreto. Verifique furos na tela. Qualquer rasgo condena o serviço." 
                },
                { 
                    title: "Lixamento e Pintura", 
                    icon: <Brush className="w-5 h-5 text-indigo-500" />,
                    text: "Lixar ferrugem da estrutura metálica. Pintar após manutenção para proteção." 
                },
                { 
                    title: "Troca de Tela", 
                    icon: <CheckSquare className="w-5 h-5 text-indigo-500" />,
                    text: "Tela nova deve ficar MUITO esticada. Liberar apenas se motor e polia estiverem 100%." 
                }
            ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-fit">{item.icon}</div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">{item.text}</p>
                    </div>
                </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Andaimes e Escoras - Highlighted Section */}
      <Card delay="delay-300" className="border-l-4 border-l-teal-600">
        <CardHeader 
            title="4. Andaimes e Escoras" 
            icon={<Construction className="w-5 h-5" />} 
            color="bg-teal-600"
        />
        <CardContent>
          <p className="mb-6 text-slate-600">
            A segurança depende da integridade. Equipamento torto ou sujo não vai para obra. O objetivo é padrão de <strong>equipamento novo</strong>.
          </p>
          
          <div className="space-y-6">
            {/* Limpeza Detalhada */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 p-5 shadow-sm">
               <div className="absolute right-0 top-0 p-4 opacity-5">
                  <Hammer className="w-24 h-24 text-teal-900" />
               </div>
              <h4 className="font-bold text-teal-900 mb-3 flex items-center gap-2">
                 <div className="p-1.5 bg-teal-100 rounded-md"><Hammer className="w-4 h-4 text-teal-700"/></div>
                 Limpeza & Ferramentas
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg border border-teal-100 shadow-sm">
                    <span className="text-xs font-bold text-teal-600 uppercase block mb-1">Passo 1: Grossa</span>
                    <div className="flex items-center gap-2 mb-1">
                        <strong className="text-slate-800">Espátulas</strong>
                    </div>
                    <p className="text-xs text-slate-500">Para raspagem do concreto incrustado.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-teal-100 shadow-sm">
                    <span className="text-xs font-bold text-teal-600 uppercase block mb-1">Passo 2: Fina</span>
                    <div className="flex items-center gap-2 mb-1">
                        <strong className="text-slate-800">Escova de Aço</strong>
                    </div>
                    <p className="text-xs text-slate-500">Limpeza de roscas e encaixes.</p>
                  </div>
              </div>
            </div>

            {/* Pintura e Marcação */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-800 text-white p-5 shadow-lg">
               <div className="absolute right-0 top-0 p-4 opacity-10">
                  <Brush className="w-24 h-24 text-white" />
               </div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                 <Brush className="w-5 h-5 text-teal-400"/>
                 Padrão Visual (Pintura)
              </h4>
              <p className="text-sm text-slate-300 mb-4">
                Marcação estratégica para organização no galpão:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                      <span className="block text-teal-400 text-xs font-bold uppercase">Andaimes</span>
                      <span className="text-sm">Pintar as partes do meio.</span>
                  </div>
                  <div className="flex-1 bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                      <span className="block text-teal-400 text-xs font-bold uppercase">Escoras</span>
                      <span className="text-sm">Pintar o eixo central.</span>
                  </div>
              </div>
            </div>
            
            {/* Checklist */}
            <div className="bg-teal-50/50 rounded-xl p-4 border border-teal-100">
                <h5 className="text-sm font-bold text-teal-800 mb-3 uppercase tracking-wide">Checklist Técnico</h5>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-700">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Sem amassados</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Soldas íntegras</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Rosca gira livre</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Pontas alinhadas</div>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Galpão */}
      <Card delay="delay-300" className="border-l-4 border-l-slate-600">
        <CardHeader 
            title="5. Organização do Galpão" 
            icon={<Warehouse className="w-5 h-5" />} 
            color="bg-slate-600"
        />
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-100 rounded-full hidden sm:block">
                <Warehouse className="w-6 h-6 text-slate-600" />
            </div>
            <div>
                <p className="text-slate-600 mb-2">
                    Não está lavando? Sua missão é o <strong>galpão</strong>.
                </p>
                <p className="text-sm text-slate-500 italic">
                    "Organização reflete na agilidade da expedição."
                </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};