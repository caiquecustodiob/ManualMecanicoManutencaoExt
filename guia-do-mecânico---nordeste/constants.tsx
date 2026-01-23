import React from 'react';
import { Chapter } from './types';
import { 
  Briefcase, 
  Clock, 
  Bike, 
  Map, 
  Wrench, 
  FileText, 
  RefreshCcw, 
  LogIn, 
  ShieldCheck,
  BookOpen,
  Siren
} from 'lucide-react';

export const CHAPTERS: Chapter[] = [
  {
    id: "intro",
    number: "00",
    title: "Bem-Vindo",
    icon: <BookOpen size={24} />,
    content: [
      {
        type: 'paragraph',
        text: "Bem-vindo à operação de Manutenção Externa. Este guia foi criado para padronizar processos, garantir eficiência operacional, segurança, rastreabilidade e qualidade técnica nos atendimentos externos."
      },
      {
        type: 'warning',
        title: "Atenção",
        text: "O cumprimento integral deste guia é obrigatório. Qualquer descumprimento é passível de perda de ponto na matriz de competência, podendo impactar avaliações internas e permanência na função."
      }
    ]
  },
  {
    id: "preparacao",
    number: "01",
    title: "Acionamento e Preparação",
    icon: <Briefcase size={24} />,
    content: [
      {
        type: 'paragraph',
        text: "Ao ser acionado para uma manutenção externa, o mecânico dispõe de 30 minutos para se organizar e sair."
      },
      {
        type: 'list',
        items: [
          "Conferir sua demanda",
          "Organizar sua maleta e bolsa de ferramentas",
          "Separar EPIs e ferramentas de suporte",
          "Verificar o celular corporativo"
        ]
      },
      {
        type: 'paragraph',
        text: "As peças necessárias para a rota já estarão separadas no almoxarifado. Caso identifique qualquer divergência, falta de peça ou confusão, o mecânico deve procurar imediatamente o PCM de Manutenção."
      },
      {
        type: 'info',
        title: "Sobre o Assistente de PCM",
        text: "Um assistente pode acompanhar este processo para liberação, mas não dependa dele. A responsabilidade da conferência é sua."
      }
    ]
  },
  {
    id: "turnos",
    number: "02",
    title: "Turnos de Saída",
    icon: <Clock size={24} />,
    content: [
      {
        type: 'paragraph',
        text: "Os turnos de saída são variáveis, mas seguem normalmente os horários abaixo:"
      },
      {
        type: 'info',
        title: "Turno da Manhã",
        items: [
          "Início da organização: 07:30",
          "Saída programada: 08:00",
          "Tolerância: 10 minutos"
        ]
      },
      {
        type: 'info',
        title: "Turno da Tarde",
        items: [
          "Início da organização: 12:30",
          "Saída programada: 13:00",
          "Tolerância: 10 minutos"
        ]
      },
      {
        type: 'critical',
        text: "O mecânico deve estar pronto até o horário. Atrasos recorrentes são passíveis de avaliação negativa na matriz de competência."
      }
    ]
  },
  {
    id: "moto",
    number: "03",
    title: "Moto e Documentação",
    icon: <Bike size={24} />,
    content: [
      {
        type: 'list',
        items: [
          "Dirija-se à moto indicada para sua rota",
          "Ajuste corretamente o baú",
          "Verifique as condições básicas da moto"
        ]
      },
      {
        type: 'paragraph',
        text: "O documento da moto está salvo no celular corporativo e disponível no grupo 'DOCUMENTAÇÃO'. Caso precise baixar uma cópia agora, utilize a área segura abaixo:"
      },
      {
        type: 'custom_documents'
      },
      {
        type: 'warning',
        title: "Responsabilidade do Mecânico",
        items: [
            "Saber acessar o documento",
            "Apresentá-lo quando solicitado",
            "Zelar pelo celular e documentação"
        ]
      }
    ]
  },
  {
    id: "rota",
    number: "04",
    title: "Informações de Rota",
    icon: <Map size={24} />,
    content: [
      {
        type: 'paragraph',
        text: "Antes da saída, procure o PCM se precisar esclarecer dúvidas sobre rota, demandas, clientes ou prioridades."
      },
      {
        type: 'info',
        title: "Mensagem da Rota",
        text: "Leia atentamente a mensagem enviada. Nela constam sua demanda, equipamentos, endereços e observações importantes."
      }
    ]
  },
  {
    id: "execucao",
    number: "05",
    title: "Execução no Cliente",
    icon: <Wrench size={24} />,
    content: [
      {
        type: 'paragraph',
        text: "A manutenção deve ser técnica, correta e seguir estritamente o descrito na demanda."
      },
      {
        type: 'critical',
        title: "Peças e Cobranças",
        text: "Fotos de peças que podem gerar cobrança DEVEM ser enviadas no grupo da manutenção, SEM EXCEÇÕES."
      },
      {
        type: 'info',
        title: "Dificuldades e Suporte",
        text: "Em caso de dificuldade ou necessidade de liberação:",
        items: [
          "Consulte o contato do cliente na mensagem da rota, ligue e alinhe as informações.",
          "Ou ligue para o PCM responsável, que lhe dará todo o suporte necessário sem falta."
        ]
      },
      {
        type: 'paragraph',
        text: "Se surgirem outros equipamentos no local, fica a critério do mecânico resolver na hora ou agendar retorno, usando bom senso."
      },
      {
        type: 'warning',
        title: "Comunicação com o Cliente",
        items: [
          "Não prometa substituição",
          "Não afirme causas sem comprovação",
          "Não autorize trocas sem comunicação prévia ao PCM"
        ]
      }
    ]
  },
  {
    id: "laudo",
    number: "06",
    title: "Laudo Técnico",
    icon: <FileText size={24} />,
    content: [
      {
        type: 'paragraph',
        text: "O preenchimento correto do laudo é essencial e obrigatório. Utilize celular, fotos e vídeos como suporte."
      },
      {
        type: 'list',
        items: [
          "Fotos do equipamento",
          "Data e Assinatura",
          "Descrição clara do problema",
          "Descrição do serviço executado",
          "Registro das peças utilizadas"
        ]
      },
      {
        type: 'critical',
        text: "Laudos incompletos, genéricos ou sem fotos são passíveis de perda de ponto na matriz de competência."
      }
    ]
  },
  {
    id: "substituicao",
    number: "07",
    title: "Substituição de Equipamento",
    icon: <RefreshCcw size={24} />,
    content: [
      {
        type: 'critical',
        title: "REGRA CRÍTICA",
        text: "Sempre que houver necessidade de substituição, o mecânico deve avisar o PCM IMEDIATAMENTE, antes de qualquer ação."
      },
      {
        type: 'paragraph',
        text: "O descumprimento desta ordem gera penalidade na matriz de competência."
      }
    ]
  },
  {
    id: "acidente",
    number: "08",
    title: "Em Caso de Acidente",
    icon: <Siren size={24} />,
    content: [
      {
        type: 'paragraph',
        text: "Em caso de acidente, PREOCUPE-SE COM SUA VIDA E SAÚDE EM PRIMEIRO LUGAR. Primeiro validamos sua condição, depois vemos os danos."
      },
      {
        type: 'list',
        title: "Procedimento:",
        items: [
          "Verifique se você tem condições de lidar com a situação.",
          "SE NÃO: Ligue IMEDIATAMENTE para o PCM responsável. Ele prestará suporte e orientará como prosseguir.",
          "SE SIM: Colete dados do motorista envolvido (se houver) e bata fotos de toda a situação.",
          "Sempre ligue para o PCM responsável para conseguir suporte, independentemente da gravidade."
        ]
      },
      {
        type: 'critical',
        title: "OBRIGATORIEDADE DE REPORTE",
        text: "É TOTALMENTE PROIBIDO ocultar qualquer acidente, por mínimo que seja (até mesmo queda acidental sem ferimentos). TUDO deve ser relatado e registrado."
      }
    ]
  },
  {
    id: "retorno",
    number: "09",
    title: "Retorno da Externa",
    icon: <LogIn size={24} />,
    content: [
      {
        type: 'list',
        items: [
          "Checklist de Chegada com o PCM (relatar problemas na moto ou rota)",
          "Anotar as externas concluídas no quadro",
          "Dar baixa nas peças no almoxarifado",
          "Entregar celular, chave da moto e laudos"
        ]
      },
      {
        type: 'warning',
        text: "O descumprimento de qualquer etapa pode resultar em perda de ponto."
      }
    ]
  },
  {
    id: "final",
    number: "10",
    title: "Considerações Finais",
    icon: <ShieldCheck size={24} />,
    content: [
      {
        type: 'paragraph',
        text: "Este guia existe para proteger o mecânico e a empresa, garantindo qualidade, rastreabilidade e padrão técnico."
      },
      {
        type: 'info',
        title: "Resumo",
        text: "Siga o processo. Registre tudo. Comunique o PCM."
      }
    ]
  }
];