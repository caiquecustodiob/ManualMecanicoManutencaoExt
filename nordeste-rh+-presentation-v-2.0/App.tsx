
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  Rocket, 
  ShieldCheck, 
  Activity, 
  BarChart3, 
  Cpu, 
  Zap,
  Clock,
  Briefcase,
  TrendingUp,
  AlertCircle,
  ExternalLink,
  MousePointer2,
  UserPlus,
  RefreshCw,
  FileText,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  HardHat,
  Users,
  Search,
  ArrowRightLeft
} from 'lucide-react';

// --- Links de Ativos ---
const LOGO_URL = "https://raw.githubusercontent.com/caiquecustodiob/Apresenta-o/21a61cab378f5c952913acb77aa90e037d234c5e/imagens/logo-nordeste-white.svg";

// --- Utilitários de Animação ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// --- Componentes de Slide ---

const Slide1_Contexto = () => (
  <div className="h-full flex flex-col justify-center items-center text-center px-6">
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={itemVariants}>
        <img src={LOGO_URL} alt="Logo" className="h-20 mx-auto mb-6" />
        <h2 className="text-4xl md:text-7xl font-black font-orbitron text-nordeste-red uppercase tracking-tighter glitch" data-text="NORDESTE RH+ 2.0">NORDESTE RH+ 2.0</h2>
        <p className="text-xl md:text-2xl font-light text-slate-400 mt-4 max-w-2xl mx-auto uppercase tracking-widest">Evolução real baseada na operação da Nordeste</p>
      </motion.div>
      
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
        <div className="p-8 bg-slate-900/40 rounded-3xl border border-slate-800 text-left">
          <span className="text-nordeste-red font-black text-xs uppercase block mb-2">Ponto de Partida</span>
          <p className="text-slate-300">O sistema nasceu funcional e objetivo: cadastro, acompanhamento e organização básica.</p>
        </div>
        <div className="p-8 bg-nordeste-red/10 rounded-3xl border border-nordeste-red/30 text-left">
          <span className="text-nordeste-red font-black text-xs uppercase block mb-2">O Próximo Nível</span>
          <p className="text-white font-bold italic">"O RH validou o conceito e pediu algo maior: mais profundidade e inteligência."</p>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

const Slide2_PedidoRH = () => (
  <div className="h-full flex flex-col justify-center px-6 md:px-20 overflow-y-auto scrollbar-hide py-10">
    <motion.h2 variants={itemVariants} initial="hidden" animate="visible" className="text-3xl md:text-5xl font-black font-orbitron mb-12 border-l-8 border-nordeste-red pl-6 uppercase">
      O Pedido do <span className="text-nordeste-red">RH</span>
    </motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
      {[
        { text: "Mais controle legal (CLT / SST)", icon: ShieldCheck },
        { text: "Histórico mais completo do colaborador", icon: Clock },
        { text: "Menos dependência de controles paralelos", icon: RefreshCw },
        { text: "Segurança em auditorias e decisões", icon: ShieldAlert },
        { text: "Sistema que se adapte à Nordeste", icon: Cpu }
      ].map((item, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: i * 0.1 }}
          className="flex items-center space-x-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 group hover:border-nordeste-red transition-all"
        >
          <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-nordeste-red transition-colors">
            <item.icon size={24} className="text-white" />
          </div>
          <span className="text-lg md:text-xl font-bold text-slate-200">{item.text}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const Slide3_ConceitoEvolucao = () => (
  <div className="h-full flex flex-col justify-center items-center px-6">
    <h2 className="text-3xl md:text-6xl font-black font-orbitron mb-16 uppercase text-center">De Sistema para <span className="text-nordeste-red">Ecossistema</span></h2>
    
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 w-full max-w-6xl">
      <div className="flex-1 text-center md:text-right space-y-6">
        <span className="text-slate-500 font-black uppercase tracking-[0.3em]">Versão 1.0</span>
        <div className="space-y-4 text-slate-400">
          <p className="bg-slate-900/30 p-4 rounded-xl border border-slate-800">Cadastro básico</p>
          <p className="bg-slate-900/30 p-4 rounded-xl border border-slate-800">Acompanhamento pontual</p>
          <p className="bg-slate-900/30 p-4 rounded-xl border border-slate-800">Processos manuais</p>
        </div>
      </div>
      
      <div className="flex-none">
        <ArrowRightLeft size={64} className="text-nordeste-red animate-pulse rotate-90 md:rotate-0" />
      </div>

      <div className="flex-1 text-center md:text-left space-y-6">
        <span className="text-nordeste-red font-black uppercase tracking-[0.3em]">Versão 2.0 (Agora)</span>
        <div className="space-y-4 text-white font-bold">
          <p className="bg-nordeste-red/20 p-4 rounded-xl border border-nordeste-red/50">Prontuário Completo</p>
          <p className="bg-nordeste-red/20 p-4 rounded-xl border border-nordeste-red/50">Automação de Processos</p>
          <p className="bg-nordeste-red/20 p-4 rounded-xl border border-nordeste-red/50">Regras de Operação Real</p>
        </div>
      </div>
    </div>
  </div>
);

const Slide4_Fardamento = () => (
  <div className="h-full flex flex-col justify-center px-6 md:px-20 overflow-y-auto scrollbar-hide py-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-5xl font-black font-orbitron mb-6 uppercase leading-none">
          Fardamento não é estoque. <br/><span className="text-nordeste-red italic">É CICLO.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          O sistema abandonou regras genéricas. Agora ele aplica as <span className="text-white font-bold">regras reais de uso</span> da Nordeste Locações.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 bg-slate-900/60 p-4 rounded-xl border-l-4 border-blue-500">
            <span className="text-white font-black text-xs uppercase w-24">ADM</span>
            <span className="text-slate-300">Troca inteligente a cada <span className="text-blue-400 font-bold">12 meses</span></span>
          </div>
          <div className="flex items-center space-x-4 bg-slate-900/60 p-4 rounded-xl border-l-4 border-nordeste-red">
            <span className="text-white font-black text-xs uppercase w-24">OPERACIONAL</span>
            <span className="text-slate-300">Troca intensiva a cada <span className="text-nordeste-red font-bold">6 meses</span></span>
          </div>
          <div className="flex items-center space-x-4 bg-slate-900/60 p-4 rounded-xl border-l-4 border-yellow-500">
            <span className="text-white font-black text-xs uppercase w-24">AVARIAS</span>
            <span className="text-slate-300">Registro histórico imediato com motivo e evidência</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="bg-slate-900 rounded-[3rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-nordeste-red opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-slate-800 rounded-3xl flex items-center justify-center mb-6 border border-nordeste-red/30">
              <Zap size={48} className="text-nordeste-red" />
            </div>
            <h3 className="text-2xl font-orbitron font-black text-white mb-2 uppercase">Zero Desperdício</h3>
            <p className="text-slate-500 text-sm">Controle cirúrgico que impede a entrega antes do prazo ou o esquecimento do vencimento.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide5_CadastroPratica = () => (
  <div className="h-full flex flex-col justify-center px-6 md:px-20 overflow-y-auto scrollbar-hide py-10">
    <h2 className="text-3xl md:text-5xl font-black font-orbitron mb-12 uppercase text-center">Cadastro: A <span className="text-nordeste-red">Base</span> de Tudo</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { title: "eSocial", desc: "Dados legais completos para conformidade.", icon: FileText },
        { title: "Documentos", desc: "Digitalização e controle de obrigatoriedades.", icon: ShieldCheck },
        { title: "Vínculos", desc: "Contratos ligados ao local de atuação real.", icon: Target },
        { title: "Benefícios", desc: "Dependentes e auxílios centralizados.", icon: Users }
      ].map((card, i) => (
        <motion.div 
          key={i} 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: i * 0.1 }}
          className="bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col items-center text-center group hover:bg-slate-900 transition-colors"
        >
          <card.icon className="text-nordeste-red mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h4 className="text-white font-orbitron font-bold uppercase mb-2">{card.title}</h4>
          <p className="text-slate-500 text-xs">{card.desc}</p>
        </motion.div>
      ))}
    </div>
    <div className="mt-12 bg-nordeste-red/5 p-6 rounded-2xl border border-nordeste-red/20 text-center max-w-2xl mx-auto">
      <p className="text-nordeste-red font-bold uppercase tracking-widest text-sm">"O cadastro deixou de ser formulário e virou ferramenta de decisão."</p>
    </div>
  </div>
);

const Slide6_Acompanhamento = () => (
  <div className="h-full flex flex-col justify-center px-6 md:px-12 overflow-y-auto scrollbar-hide py-10">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-black font-orbitron uppercase">Visão <span className="text-nordeste-red">Consolidada</span></h2>
      <p className="text-slate-500 uppercase tracking-widest text-xs mt-2">Dossiê Completo em uma Única Tela</p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Carreira", list: ["Admissões", "Promoções", "Reajustes"], icon: TrendingUp },
        { title: "Férias", list: ["Controle de Saldo", "Regras CLT", "Agendamentos"], icon: Clock },
        { title: "Disciplina", list: ["Ocorrências", "Advertências", "Elogios"], icon: ShieldAlert },
        { title: "Saúde (SST)", list: ["ASOs", "Atestados", "Exames"], icon: Activity }
      ].map((item, i) => (
        <div key={i} className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] hover:border-nordeste-red/50 transition-all">
          <item.icon className="text-nordeste-red mb-4" size={28} />
          <h3 className="text-xl font-bold font-orbitron text-white mb-4 uppercase">{item.title}</h3>
          <ul className="space-y-2">
            {item.list.map((li, idx) => (
              <li key={idx} className="text-slate-400 text-sm flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-nordeste-red/40" />
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Slide7_UsoReal = () => (
  <div className="h-full flex flex-col justify-center px-6 md:px-20 overflow-y-auto scrollbar-hide py-10">
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-5xl font-black font-orbitron uppercase leading-tight">
          Funções do <br/><span className="text-nordeste-red italic">USO REAL</span>
        </h2>
        <p className="text-slate-400">Estas funcionalidades não estavam no papel. Elas surgiram da vivência diária do RH.</p>
        
        <div className="space-y-4">
          <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-yellow-500 flex items-center space-x-4">
            <AlertCircle className="text-yellow-500" />
            <span className="text-white font-bold text-sm">Alertas de Risco Legal (Férias e SST)</span>
          </div>
          <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-nordeste-red flex items-center space-x-4">
            <ShieldAlert className="text-nordeste-red" />
            <span className="text-white font-bold text-sm">Gatilhos Automáticos (Ex: Justa Causa)</span>
          </div>
          <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-blue-500 flex items-center space-x-4">
            <BarChart3 className="text-blue-500" />
            <span className="text-white font-bold text-sm">Dossiê Único para Auditoria e Diretoria</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center bg-nordeste-red/5 p-12 rounded-[3rem] border border-nordeste-red/20 text-center">
        <div className="text-6xl font-black font-orbitron text-nordeste-red mb-4">RH+</div>
        <p className="text-xl text-slate-300 italic font-medium leading-relaxed">
          "Essas funções não vieram de teoria, vieram do uso e da vivência do RH."
        </p>
      </div>
    </div>
  </div>
);

const Slide8_Diferencial = () => (
  <div className="h-full flex flex-col justify-center px-6 md:px-12 overflow-y-auto scrollbar-hide py-10">
    <h2 className="text-3xl md:text-6xl font-black font-orbitron text-center mb-16 uppercase">Por que <span className="text-nordeste-red">Não</span> é Genérico?</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-slate-950 p-8 rounded-[2rem] border-t-8 border-red-900/50 opacity-60">
        <h3 className="text-xl font-black text-slate-500 uppercase mb-6 flex items-center gap-2">
          <XCircle size={24} /> Sistemas Prontos
        </h3>
        <ul className="space-y-4 text-slate-500">
          <li>❌ Impõem fluxo rígido</li>
          <li>❌ Exigem adaptação do RH</li>
          <li>❌ Custos mensais recorrentes</li>
          <li>❌ Dados genéricos espalhados</li>
        </ul>
      </div>
      
      <div className="bg-slate-900 p-8 rounded-[2rem] border-t-8 border-nordeste-red shadow-2xl scale-105">
        <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-2">
          <CheckCircle2 size={24} className="text-nordeste-red" /> Nordeste RH+
        </h3>
        <ul className="space-y-4 text-slate-200">
          <li>✔ Segue a lógica da empresa</li>
          <li>✔ Cresce conforme a operação</li>
          <li>✔ Conhecimento dentro da casa</li>
          <li>✔ Inteligência focada em lucro</li>
        </ul>
      </div>
    </div>
  </div>
);

const Slide9_Ganhos = () => (
  <div className="h-full flex flex-col justify-center items-center px-6 text-center">
    <h2 className="text-3xl md:text-6xl font-black font-orbitron mb-12 uppercase text-nordeste-red">Ganhos Reais</h2>
    
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
      {[
        { title: "Segurança Jurídica", icon: ShieldCheck },
        { title: "Menos Retrabalho", icon: RefreshCw },
        { title: "Fim de Planilhas", icon: XCircle },
        { title: "Auditoria Ágil", icon: Search },
        { title: "Decisões Humanas", icon: Users },
        { title: "Economia Ativa", icon: TrendingUp }
      ].map((item, i) => (
        <motion.div 
          key={i} 
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-slate-900/50 rounded-3xl border border-slate-800 flex flex-col items-center justify-center space-y-4"
        >
          <item.icon className="text-nordeste-red" size={40} />
          <span className="text-white font-bold text-sm md:text-lg uppercase tracking-tight leading-tight">{item.title}</span>
        </motion.div>
      ))}
    </div>
    <p className="mt-12 text-slate-400 font-medium italic">"Tecnologia aqui não substitui o RH. Protege e fortalece o RH."</p>
  </div>
);

const Slide10_Posicionamento = () => (
  <div className="h-full flex flex-col justify-center items-center px-6 text-center">
    <h2 className="text-3xl md:text-6xl font-black font-orbitron mb-8 uppercase">Já é uma <span className="text-nordeste-red">Realidade</span></h2>
    <div className="space-y-4 text-2xl md:text-4xl font-bold text-slate-300">
      <div className="flex items-center space-x-4 bg-slate-900/40 px-10 py-4 rounded-full border border-slate-800">
        <CheckCircle2 className="text-green-500" size={32} />
        <span>JÁ EXISTE</span>
      </div>
      <div className="flex items-center space-x-4 bg-slate-900/40 px-10 py-4 rounded-full border border-slate-800">
        <CheckCircle2 className="text-green-500" size={32} />
        <span>JÁ FOI TESTADO</span>
      </div>
      <div className="flex items-center space-x-4 bg-slate-900/40 px-10 py-4 rounded-full border border-slate-800">
        <CheckCircle2 className="text-green-500" size={32} />
        <span>JÁ FOI AJUSTADO</span>
      </div>
    </div>
    <p className="mt-10 text-nordeste-red font-orbitron font-black text-xl uppercase tracking-widest animate-pulse">Entrando em Fase de Consolidação</p>
  </div>
);

const Slide11_ProximoPasso = () => (
  <div className="h-full flex flex-col justify-center px-6 md:px-20">
    <h2 className="text-3xl md:text-5xl font-black font-orbitron mb-12 uppercase border-l-8 border-nordeste-red pl-6">O Caminho à <span className="text-nordeste-red">Frente</span></h2>
    
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-start space-x-6 p-6 bg-slate-900/60 rounded-3xl border border-slate-800">
        <div className="w-12 h-12 bg-nordeste-red rounded-xl flex items-center justify-center flex-none">
          <span className="text-white font-black text-xl">1</span>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-2 uppercase">Validação de Escopo</h4>
          <p className="text-slate-400">Confirmar se todas as novas necessidades do RH foram plenamente atendidas.</p>
        </div>
      </div>
      <div className="flex items-start space-x-6 p-6 bg-slate-900/60 rounded-3xl border border-slate-800">
        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-none">
          <span className="text-white font-black text-xl">2</span>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-2 uppercase">Ajustes de Campo</h4>
          <p className="text-slate-400">Refinar funcionalidades conforme a vivência prática e feedback imediato.</p>
        </div>
      </div>
      <div className="flex items-start space-x-6 p-6 bg-slate-900/60 rounded-3xl border border-slate-800">
        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-none">
          <span className="text-white font-black text-xl">3</span>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-2 uppercase">Evolução Contínua</h4>
          <p className="text-slate-400">Garantir que o sistema continue crescendo organicamente sem rupturas.</p>
        </div>
      </div>
    </div>
  </div>
);

const Slide12_Encerramento = () => (
  <div className="h-full flex flex-col items-center justify-center text-center p-8 relative overflow-y-auto scrollbar-hide py-10">
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="z-20 mb-8">
      <h2 className="text-[4rem] md:text-[8rem] font-black font-orbitron uppercase red-glow leading-none glitch" data-text="NORDESTE RH+ 2.0">
        RH<span className="text-nordeste-red">+</span> 2.0
      </h2>
      <p className="text-xl md:text-3xl font-orbitron mt-2 md:mt-4 uppercase tracking-[0.4em] font-black text-slate-400">Operação & Inteligência</p>
    </motion.div>
    
    <div className="flex flex-col items-center space-y-10 z-20 w-full max-w-4xl">
      <p className="text-xl md:text-3xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed italic">
        "Não é sobre mudar processos. É sobre organizar, proteger e dar inteligência ao que já existe."
      </p>

      <a 
        href="http://192.168.88.231:3001/login" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative px-10 py-5 bg-nordeste-red rounded-full text-lg md:text-2xl font-black font-orbitron uppercase tracking-widest flex items-center space-x-4 shadow-[0_0_40px_rgba(225,29,72,0.3)] hover:shadow-[0_0_60px_rgba(225,29,72,0.6)] transition-all"
      >
        <span>ACESSAR PLATAFORMA 2.0</span>
        <MousePointer2 size={28} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left max-w-3xl">
        <div className="p-6 bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800">
          <span className="text-nordeste-red font-black text-[10px] uppercase tracking-widest mb-1 block">Desenvolvedor Sênior</span>
          <h4 className="text-sm md:text-xl font-orbitron font-black text-white">Caique Custodio</h4>
        </div>
        <div className="p-6 bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800">
          <span className="text-nordeste-red font-black text-[10px] uppercase tracking-widest mb-1 block">Analista de BI & Dados</span>
          <h4 className="text-sm md:text-xl font-orbitron font-black text-white">Nathanael</h4>
        </div>
      </div>
    </div>
  </div>
);

// --- Motor da Apresentação ---

const SLIDES = [
  { id: 0, component: <Slide1_Contexto /> },
  { id: 1, component: <Slide2_PedidoRH /> },
  { id: 2, component: <Slide3_ConceitoEvolucao /> },
  { id: 3, component: <Slide4_Fardamento /> },
  { id: 4, component: <Slide5_CadastroPratica /> },
  { id: 5, component: <Slide6_Acompanhamento /> },
  { id: 6, component: <Slide7_UsoReal /> },
  { id: 7, component: <Slide8_Diferencial /> },
  { id: 8, component: <Slide9_Ganhos /> },
  { id: 9, component: <Slide10_Posicionamento /> },
  { id: 10, component: <Slide11_ProximoPasso /> },
  { id: 11, component: <Slide12_Encerramento /> },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    const next = currentSlide + newDirection;
    if (next >= 0 && next < SLIDES.length) {
      setDirection(newDirection);
      setCurrentSlide(next);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const slideVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      scale: 1.02,
      x: direction > 0 ? 500 : -500,
      filter: "blur(10px)"
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.98,
      x: direction < 0 ? 500 : -500,
      filter: "blur(10px)",
      transition: { duration: 0.5 }
    })
  };

  return (
    <div className="relative w-screen h-screen bg-[#050505] overflow-hidden select-none">
      {/* HUD de Fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full border-[100px] border-white/5" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/20" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-white/20" />
      </div>

      {/* Indicadores de Progresso */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-50">
        {SLIDES.map((_, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              width: i === currentSlide ? 40 : 8,
              backgroundColor: i === currentSlide ? '#E11D48' : '#1e293b',
              opacity: i === currentSlide ? 1 : 0.5
            }}
            className="h-1 rounded-full cursor-pointer transition-all duration-500"
            onClick={() => {
              setDirection(i > currentSlide ? 1 : -1);
              setCurrentSlide(i);
            }}
          />
        ))}
      </div>

      {/* Navegação */}
      <div className="fixed bottom-10 right-10 flex space-x-4 z-50">
        <button 
          onClick={() => paginate(-1)}
          disabled={currentSlide === 0}
          className="w-14 h-14 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-nordeste-red transition-all disabled:opacity-10 group"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={() => paginate(1)}
          disabled={currentSlide === SLIDES.length - 1}
          className="w-14 h-14 bg-nordeste-red rounded-2xl text-white shadow-[0_0_20px_rgba(225,29,72,0.3)] flex items-center justify-center hover:scale-110 transition-all disabled:opacity-10 group"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
          >
            <div className="w-full h-full rounded-[4rem] bg-black/40 backdrop-blur-2xl border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col">
              {/* Moldura de Design */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-nordeste-red/20 m-12 rounded-tl-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-nordeste-red/20 m-12 rounded-br-3xl pointer-events-none" />
              
              <div className="flex-1">
                {SLIDES[currentSlide].component}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Header Fixo */}
      <div className="fixed top-8 left-12 z-50 flex items-center space-x-6">
        <img src={LOGO_URL} alt="Nordeste Logo" className="h-10 opacity-80" />
        <div className="h-8 w-px bg-white/10" />
        <div className="hidden md:flex flex-col">
          <span className="text-white font-orbitron font-black text-xs uppercase tracking-widest">Nordeste RH+</span>
          <span className="text-nordeste-red font-black text-[9px] uppercase tracking-widest leading-none">Intelligence Engine 2.0</span>
        </div>
      </div>
      
      <div className="fixed top-8 right-12 z-50 flex items-center space-x-4">
        <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[10px] text-slate-500 font-black uppercase">
          Slide {currentSlide + 1} / {SLIDES.length}
        </div>
      </div>
    </div>
  );
}
