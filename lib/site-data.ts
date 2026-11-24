export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  image?: {
    src: string;
    alt: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  statusBadge?: string;
  collaborator?: {
    name: string;
    github: string;
    role: string;
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies?: string[];
}

export const personalInfo = {
  name: "Luiz Felipe dos Santos",
  role: "Desenvolvedor Full-Stack",
  headline: "Engenharia de microsserviços em Go, GraphQL, RabbitMQ e interfaces em Next.js com domínio próprio em KORIS.",
  bio: "Desenvolvedor Full-Stack focado em arquiteturas resilientes e microsserviços com Go, GraphQL, RabbitMQ, React e TypeScript. Graduando em Sistemas de Informação (7º período) e Sócio Proprietário de empresa (ECV Uberlândia / 2022 a Presente). Uno a vivência prática de fluxo de caixa e gestão à capacidade técnica de construir ferramentas que resolvem dores reais de negócio.",
  location: "Uberlândia, MG / Brasil",
  email: "luizz.felipe.santos17@gmail.com",
  phone: "(34) 99161-4690",
  whatsappUrl: "https://wa.me/5534991614690?text=Ol%C3%A1%20Luiz%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!",
  github: "https://github.com/LuizApenas",
  githubUser: "LuizApenas",
  linkedin: "https://www.linkedin.com/in/luiz-felipe-santos-95490b208/",
  status: "Disponível para novos desafios e contratações",
};

export const projects: ProjectItem[] = [
  {
    id: "koris",
    title: "KORIS: Sistema de Gestão de Caixa e Operações",
    category: "Em Produção / Domínio Próprio",
    tagline: "Controle financeiro e operação multi-unidade com backend em Go e frontend em Next.js.",
    description:
      "Plataforma completa de gestão de fluxo de caixa desenvolvida para empresas de prestação de serviços com múltiplas unidades operacionais. Fechamento de caixa em tempo real, conciliação bancária, auditoria de transações com idempotência e dashboards executivos. Possui domínio próprio e infraestrutura em produção.",
    stack: ["Go (Golang)", "GraphQL", "RabbitMQ", "Next.js 16", "PostgreSQL", "Docker", "TypeScript"],
    highlights: [
      "Backend de alta vazão em Go com concorrência segura (goroutines) e schema unificado em GraphQL.",
      "Desacoplamento assíncrono via filas RabbitMQ para conciliação contábil e auditoria sem travar requisições.",
      "Frontend em Next.js com Apollo Client, cache normalizado e painéis em tempo real.",
      "Domínio próprio exclusivo para operação e demonstração da plataforma.",
    ],
    architecture: [
      "Next.js 16 App Router com Server Components e Apollo Client.",
      "API Gateway GraphQL roteando consultas para microsserviços em Go.",
      "Mensageria com RabbitMQ (exchanges direct e filas duráveis com ack manual).",
      "Banco PostgreSQL com transações ACID completas e containerização Docker.",
    ],
    githubUrl: "https://github.com/LuizApenas/sistemagestaocaixa",
    featured: true,
    statusBadge: "EM PRODUÇÃO • DOMÍNIO PRÓPRIO",
  },
  {
    id: "sistema-documentos",
    title: "Sistema de Documentos e Laudos Veiculares",
    category: "Em Produção / Gestão de Laudos",
    tagline: "Plataforma em produção para emissão, armazenamento e gestão eletrônica de laudos e vistorias em PDF.",
    description:
      "Aplicação corporativa em produção focada na centralização do ciclo de vida documental de vistorias automotivas. Co-desenvolvido em parceria com o desenvolvedor Cayke Nakazone (@caykenakazone). Automatiza a montagem, carimbo de autenticação, geração em lote de arquivos PDF padronizados e consulta rápida para auditores e clientes.",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "PDF Generation", "Next.js"],
    highlights: [
      "Em produção ativa atendendo o fluxo diário de emissão de laudos de inspeção veicular.",
      "Desenvolvido em parceria técnica com Cayke Nakazone (@caykenakazone).",
      "Geração automatizada de PDFs com controle estrito de layout e anexação de evidências fotográficas.",
      "Histórico com rastreabilidade completa e versionamento de documentos para conformidade fiscal e regulatória.",
    ],
    architecture: [
      "Frontend Next.js com autenticação e painel de auditoria.",
      "Backend Node.js e TypeScript com esteira de geração e compressão de PDFs.",
      "Banco PostgreSQL para versionamento documental e hash de autenticidade.",
      "Deploy conteinerizado com Docker.",
    ],
    githubUrl: "https://github.com/LuizApenas/Sistema-Documentos",
    featured: true,
    statusBadge: "EM PRODUÇÃO • PARCERIA",
    collaborator: {
      name: "Cayke Nakazone",
      github: "https://github.com/caykenakazone",
      role: "Co-desenvolvedor",
    },
  },
  {
    id: "padaria-pao-fresquim",
    title: "Padaria Pão Fresquim (Sistema Interdisciplinar)",
    category: "Acadêmico Interdisciplinar",
    tagline: "Ecossistema integrando Programação Orientada a Objetos 2, Programação Web 2 e Chatbot inteligente.",
    description:
      "Projeto interdisciplinar desenvolvido na faculdade de Sistemas de Informação unificando três disciplinas de computação: POO 2 (modelagem de domínio sólida, herança, polimorfismo e padrões de projeto), Prog Web 2 (interface web responsiva e API) e Chatbot (atendimento automatizado e fluxo de pedidos).",
    stack: ["Java / Python", "JavaScript / TypeScript", "POO 2", "Programação Web", "Chatbot", "SQL", "Docker"],
    highlights: [
      "Integração de 3 disciplinas acadêmicas em uma única solução prática e funcional.",
      "Chatbot de atendimento automatizado para consulta de catálogo, horários de fornadas e pedidos.",
      "Modelagem rigorosa de classes com princípios SOLID e padrões de projeto em POO 2.",
      "Camada web moderna para gerenciamento de estoque, vendas e relatórios administrativos.",
    ],
    architecture: [
      "Módulo Chatbot para atendimento interativo e conversacional.",
      "Camada Web responsiva para clientes e painel administrativo da padaria.",
      "Núcleo de negócio com classes bem modeladas aplicando padrões em POO 2.",
      "Banco de dados relacional para persistência de pedidos, clientes e produtos.",
    ],
    githubUrl: "https://github.com/LuizApenas/padaria-pao-fresquim",
    featured: true,
    statusBadge: "INTERDISCIPLINAR (POO 2 + WEB + BOT)",
  },
  {
    id: "megalaudo-automacao",
    title: "Megalaudo: Automação do Processo de Montagem de Laudos com Filas",
    category: "Automação Operacional",
    tagline: "Pipeline em Python com filas assíncronas para montagem e geração de laudos veiculares.",
    description:
      "Automação de processos desenvolvida para eliminar o preenchimento manual repetitivo de laudos de vistoria. Utiliza Python com filas de processamento assíncrono para consumir dados de múltiplos formulários e montar a documentação regulatória final em tempo recorde, reduzindo o tempo operacional de 20 minutos para menos de 2 a 3 minutos por veículo.",
    stack: ["Python", "Filas Assíncronas", "Selenium", "ReportLab", "Tkinter / GUI", "PostgreSQL"],
    highlights: [
      "Redução drástica de 20 minutos para menos de 2 a 3 minutos por laudo emitido.",
      "Nova arquitetura com filas de processamento assíncrono para escalabilidade.",
      "Integração automatizada com sistemas de trânsito e órgãos de fiscalização.",
      "Geração de relatórios técnicos padronizados com evidências fotográficas anexas.",
    ],
    architecture: [
      "Interface gráfica para entrada rápida de identificadores do veículo.",
      "Esteira em Python com fila assíncrona para consolidação de dados e status.",
      "Integração via Selenium para checagem em portais governamentais.",
      "Geração do documento final via ReportLab.",
    ],
    githubUrl: "https://github.com/LuizApenas/PythonScripts",
    featured: true,
    statusBadge: "AUTOMAÇÃO • 2-3 MIN / LAUDO",
  },
  {
    id: "financas-casal",
    title: "Finanças Casal: Gestão Financeira Compartilhada",
    category: "Finanças Pessoais / Full-Stack",
    tagline: "Aplicação full-stack para controle orçamentário compartilhado, divisão de despesas e metas financeiras.",
    description:
      "Sistema desenvolvido para simplificar o controle financeiro de duas pessoas com despesas compartilhadas. Permite rateio proporcional baseado em renda individual, categorização inteligente de gastos, metas de economia e projeção de fluxo de caixa mensal. Em uso contínuo no dia a dia.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL", "Node.js", "Docker"],
    highlights: [
      "Cálculo automático de rateio proporcional baseado na renda líquida de cada pessoa.",
      "Controle visual de gastos fixos, variáveis e reservas de emergência.",
      "Interface limpa e otimizada para lançamentos rápidos no celular ou desktop.",
      "Sistema em uso real com dados e conciliação mensal.",
    ],
    githubUrl: "https://github.com/LuizApenas/financas-casal",
    featured: true,
    statusBadge: "FULL-STACK • EM USO REAL",
  },
  {
    id: "chatbot-web",
    title: "ChatBot-Web: Motor Conversacional Web",
    category: "Chatbots / Webhooks",
    tagline: "Interface web interativa para fluxo de atendimento e triagem automatizada com webhooks.",
    description:
      "Solução conversacional web leve e modular criada para demonstração de fluxos de atendimento automático, resolução de dúvidas e coleta de dados estruturados.",
    stack: ["TypeScript", "HTML5", "CSS3", "Docker", "Webhooks"],
    highlights: [
      "Respostas rápidas e árvore de decisão configurável para fluxos de atendimento.",
      "Arquitetura leve pronta para empacotamento em micro-serviços com Docker.",
    ],
    githubUrl: "https://github.com/LuizApenas/ChatBot-Web",
    featured: false,
    statusBadge: "BOT WEB",
  },
  {
    id: "comandas-mobile",
    title: "Comandas Mobile: App de Restaurante",
    category: "Mobile",
    tagline: "Aplicativo mobile para agilidade no atendimento de mesas com envio em tempo real para a cozinha.",
    description:
      "Aplicativo mobile desenvolvido em React Native e Expo focado na operação de restaurantes. Garçons autenticam via PIN numérico de 4 dígitos, despacham pedidos para a tela da cozinha em tempo real e operam com resiliência offline-first.",
    stack: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "WebSockets"],
    highlights: [
      "Autenticação rápida por PIN numérico para troca ágil de garçons no salão.",
      "Sincronização em tempo real de pedidos com a cozinha via WebSockets e suporte offline.",
    ],
    githubUrl: "https://github.com/LuizApenas/Comandas",
    featured: false,
    statusBadge: "APP MOBILE",
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "2025 a Presente",
    role: "Desenvolvedor Full-Stack Junior",
    company: "Engenharia de Software, Microsserviços e Sistemas Distribuídos",
    location: "Uberlândia, MG",
    summary:
      "Atuação no desenvolvimento de microsserviços em Go (Golang), mensageria com RabbitMQ, schemas federados em GraphQL e interfaces em Next.js e React.",
    achievements: [
      "Desenvolvimento de microsserviços em Go com concorrência segura (goroutines) e baixo footprint de memória.",
      "Construção de APIs GraphQL unificadas e schemas integrados via Apollo Client no frontend Next.js.",
      "Implementação de mensageria assíncrona desacoplada com RabbitMQ para eventos contábeis, auditoria e jobs.",
      "Modelagem e consultas transacionais no PostgreSQL, conteinerização padronizada com Docker e versionamento Git.",
      "Evolução contínua da plataforma KORIS (gestão de caixa multi-unidade em produção com domínio próprio) e sistemas distribuídos.",
    ],
    technologies: ["Go", "GraphQL", "RabbitMQ", "Next.js", "React", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    period: "2022 a Presente",
    role: "Sócio Proprietário / Gestão e Desenvolvimento de Ferramentas",
    company: "ECV Uberlândia Ltda. (Empresa Credenciada de Vistoria)",
    location: "Uberlândia, MG",
    summary:
      "Sócio proprietário atuando na gestão executiva, saúde financeira da empresa e no desenvolvimento de softwares e ferramentas para automação da gestão operacional.",
    achievements: [
      "Proprietário da empresa com gestão direta de equipe técnica, contratações e cultura operacional.",
      "Supervisão direta das finanças, fluxo de caixa, precificação de serviços e relacionamento com órgãos fiscalizadores de trânsito.",
      "Identificação de gargalos operacionais e desenvolvimento de softwares e automações em Python com filas assíncronas para montagem de laudos, reduzindo o tempo de 20 minutos para 2 a 3 minutos por veículo.",
      "Aplicação direta da vivência de dono e gestor na concepção de ferramentas de software para controle financeiro e processos.",
    ],
    technologies: ["Visão de Negócio", "Gestão Financeira", "Fluxo de Caixa", "Automação Python", "Otimização de Processos"],
  },
  {
    period: "2019 a 2022",
    role: "Coordenador Administrativo / Vistoriador",
    company: "Iso Prime Brasil Vistorias Ltda.",
    location: "Uberlândia, MG",
    summary:
      "Atuação na coordenação administrativa e inspeção técnica veicular regulatória.",
    achievements: [
      "Atendimento qualificado a clientes e despachantes, rotinas administrativas e inspeção veicular minuciosa.",
      "Treinamento de novos colaboradores nos procedimentos operacionais padrão e melhoria contínua de laudos.",
    ],
    technologies: ["Inspeção Técnica", "Treinamento de Equipe", "Auditoria", "Atendimento"],
  },
  {
    period: "2018 a 2019",
    role: "Entregador e Atendimento Operacional",
    company: "Trabalho Autônomo e Serviços de Entrega",
    location: "Uberlândia, MG",
    summary:
      "Atuação na linha de frente com agilidade, pontualidade rigorosa e contato direto com o cliente.",
    achievements: [
      "Desenvolvimento de disciplina inegociável, resolução de problemas sob pressão e cumprimento estrito de prazos.",
      "Contato diário com clientes de todos os perfis, aprimorando empatia, comunicação direta e foco na resolução.",
      "A base de garra e postura resiliente que alicerçou a trajetória até a sociedade empresarial e a engenharia de software.",
    ],
    technologies: ["Resiliência", "Agilidade Operacional", "Relacionamento com Cliente", "Logística Rápida"],
  },
];

export const trajectoryMilestones = [
  {
    badge: "FASE 01: A BASE",
    role: "Entregador e Atendimento de Rua",
    period: "2018 a 2019",
    tagline: "Resiliência, agilidade de rua e trabalho duro",
    description:
      "A linha de frente do trabalho. Entregar pedidos sob chuva ou sol ensina pontualidade inegociável, agilidade na tomada de decisão e a certeza de que nenhuma tarefa é grande demais quando se tem disciplina. A base que formou o caráter e a disposição para encarar qualquer desafio técnico.",
  },
  {
    badge: "FASE 02: O NEGÓCIO",
    role: "Sócio Proprietário de ECV e Dev de Ferramentas",
    period: "2022 a Presente",
    tagline: "Visão de dono, fluxo de caixa e criação de ferramentas reais",
    description:
      "Sócio proprietário de empresa credenciada de vistorias automotivas. Vivenciando na pele as dores de fluxo de caixa, gestão de equipe e gargalos operacionais, utilizo a programação para criar ferramentas de software que transformam a gestão do negócio, reduzindo custos e tempo de processo.",
  },
  {
    badge: "FASE 03: A ENGENHARIA",
    role: "Desenvolvedor Full-Stack (Go, GraphQL, RabbitMQ, Next.js)",
    period: "2025 a Presente",
    tagline: "Microsserviços de alto desempenho e plataformas em produção",
    description:
      "Graduando em Sistemas de Informação (7º período). Engenharia de software aplicada a microsserviços em Go, mensageria distribuída com RabbitMQ, APIs GraphQL unificadas e frontends modernos em Next.js. Criador da plataforma KORIS (domínio próprio) e sistemas distribuídos.",
  },
];

export const education = {
  degree: "Bacharelado em Sistemas de Informação",
  institution: "Centro Universitário Anhanguera (Uberlândia/MG)",
  period: "2022 a 2026 (Previsão)",
  status: "7º Período em andamento",
  focus: "Engenharia de Software, Algoritmos Avançados, Arquitetura de Sistemas e Banco de Dados",
};
