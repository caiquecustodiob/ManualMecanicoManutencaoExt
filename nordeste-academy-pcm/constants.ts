import { Phase, ModuleItem, AssetChecklistItem } from './types';

export const PHASES: Phase[] = [
  {
    id: 'fase-1',
    title: 'Fase 1 – Integração e Fundamentos',
    duration: '3 dias',
    dates: '02/02/2026 - 04/02/2026',
    description: [
      'Conceito de PCM aplicado à manutenção externa',
      'Fluxo da manutenção (entrada → rota → execução → retorno)',
      'Papel do PCM como elo entre áreas'
    ]
  },
  {
    id: 'fase-2',
    title: 'Fase 2 – Padronização de Dados',
    duration: '5 dias',
    dates: '05/02/2026 - 11/02/2026',
    description: [
      'Padrões de tabela oficiais',
      'Organização por patrimônio (uma linha por patrimônio)',
      'Identificação de dados incompletos ou conflitantes',
      'Controle de substituições'
    ]
  },
  {
    id: 'fase-3',
    title: 'Fase 3 – Planejamento e Roteirização',
    duration: '1 semana',
    dates: '12/02/2026 - 18/02/2026',
    description: [
      'Análise geográfica básica',
      'Montagem de rotas otimizadas',
      'Divisão de rotas por técnico',
      'Previsão de tempo e deslocamento'
    ]
  },
  {
    id: 'fase-4',
    title: 'Fase 4 – Acompanhamento da Execução',
    duration: '3 dias',
    dates: '19/02/2026 - 23/02/2026',
    description: [
      'Monitoramento de saída e retorno',
      'Suporte ao técnico em campo',
      'Registro de alterações de rota'
    ]
  },
  {
    id: 'fase-5',
    title: 'Fase 5 – Pós-Execução e Melhoria',
    duration: 'Contínuo',
    dates: 'A partir de 24/02/2026',
    description: [
      'Consolidação de dados diários',
      'Análise de falhas recorrentes',
      'Ajustes de planejamento'
    ]
  }
];

export const MODULES: ModuleItem[] = [
  {
    id: 'mod-1',
    title: 'Módulo 1: Fundamentos do PCM',
    content: [
      "PCM é crítico para evitar 'incêndios'",
      'Diferença entre urgência e prioridade',
      'Impacto do planejamento na execução'
    ],
    expectedResult: 'PCM entende que planejar bem evita problemas em campo.'
  },
  {
    id: 'mod-2',
    title: 'Módulo 2: Recebimento e Organização',
    content: [
      'Fontes de demanda: Cliente, Comercial, Galpão',
      'Registro e Classificação (Manutenção, Substituição, Vistoria)'
    ],
    checklist: ['Cliente', 'Endereço', 'Contato', 'Patrimônio', 'Equipamento']
  },
  {
    id: 'mod-3',
    title: 'Módulo 3: Padrões de Tabela e Dados',
    content: [
      'Modelo padrão (Data, Técnico, Concluídos)',
      'Importância da padronização',
      'Conferência de patrimônio e compostos'
    ]
  },
  {
    id: 'mod-4',
    title: 'Módulo 4: Planejamento de Rotas',
    content: [
      'Agrupamento por região',
      'Ordem lógica de atendimento',
      'Limite saudável de atendimentos',
      'Divisão estratégica'
    ]
  },
  {
    id: 'mod-5',
    title: 'Módulo 5: Interface com o Técnico',
    content: [
      'Envio claro da rota',
      'Confirmação de entendimento',
      'Suporte durante a execução',
      'Registro de imprevistos'
    ]
  },
  {
    id: 'mod-6',
    title: 'Módulo 6: Horários e Controle',
    content: [
      'Manhã: Saída 08:00 (Tolerância 10min)',
      'Tarde: Saída 13:00 (Tolerância 10min)',
      'Registro de atrasos e justificativas'
    ]
  },
  {
    id: 'mod-7',
    title: 'Módulo 7: Pós-Rota e Consolidação',
    content: [
      'Conferência Executado x Planejado',
      'Registro de substituídos',
      'Comunicação com áreas envolvidas'
    ]
  },
  {
    id: 'mod-8',
    title: 'Módulo 8: Erros Comuns',
    content: [
      'Rota mal dimensionada',
      'Falta de validação de dados',
      'Comunicação incompleta',
      'Falta de follow-up'
    ]
  }
];

export const ASSET_CHECKLIST: AssetChecklistItem[] = [
  { id: 'asset-moto-oil', label: 'Nível de Óleo', category: 'moto' },
  { id: 'asset-moto-tire', label: 'Calibragem Pneus', category: 'moto' },
  { id: 'asset-moto-brake', label: 'Freios', category: 'moto' },
  { id: 'asset-eq-phone', label: 'Celular Corporativo', category: 'equipment' },
  { id: 'asset-eq-charger', label: 'Carregador / Powerbank', category: 'equipment' },
  { id: 'asset-eq-epi', label: 'EPIs Completos', category: 'equipment' },
  { id: 'asset-admin-doc', label: 'Documentação Veículo', category: 'admin' },
];