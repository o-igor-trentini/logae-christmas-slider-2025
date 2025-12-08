// Tipo para colaborador
export interface Collaborator {
  photo: string
  name: string
  role: string
  team: string
  description: string
  fullDescription: string
}

// Arquitetos
const architects: Collaborator[] = [
  {
    photo: './collaborators/isaque.jpeg',
    name: 'Isaque Klassmann',
    role: 'Arquiteto',
    team: 'Arquitetura/DevOps',
    description: 'Código testado é seu compromisso natalino.',
    fullDescription:
      'Isaque garante qualidade em cada entrega como se estivesse embrulhando presentes premium. Seus testes são tão rigorosos quanto a lista do Papai Noel.',
  },
  {
    photo: '/collaborators/jefferson.jpeg',
    name: 'Jefferson Valcarenki',
    role: 'Arquiteto',
    team: 'Arquitetura/DevOps',
    description: 'Backend sólido como base de árvore centenária.',
    fullDescription:
      'Jefferson constrói fundações tão robustas que suportariam até o peso de todos os presentes do mundo. Sua expertise em backend é lendária.',
  },
  {
    photo: '/collaborators/geferson.jpeg',
    name: 'Geferson Ludvig',
    role: 'Arquiteto',
    team: 'Arquitetura/DevOps',
    description: 'DevOps mágico como oficina automatizada.',
    fullDescription:
      'Geferson automatiza processos com a eficiência de uma fábrica de brinquedos moderna. Seus pipelines fluem como trenó em noite estrelada.',
  },
]

// BI
const biAnalysts: Collaborator[] = [
  {
    photo: '/collaborators/cris.jpeg',
    name: 'Cris',
    role: 'BI',
    team: 'BI',
    description: 'Qualidade de código é tradição natalina.',
    fullDescription:
      'Cris mantém os padrões de qualidade tão altos quanto a estrela no topo da árvore. Seu comprometimento com excelência inspira toda a equipe.',
  },
  {
    photo: '/collaborators/douglas.jpeg',
    name: 'Douglas',
    role: 'BI',
    team: 'BI',
    description: 'Arquitetura sólida como base de árvore gigante.',
    fullDescription:
      'Douglas constrói fundações tão robustas que suportariam até o peso de todos os presentes do mundo. Sua expertise em arquitetura é presente que nunca para de dar.',
  },
  {
    photo: '/collaborators/wesley.jpeg',
    name: 'Wesley',
    role: 'BI',
    team: 'BI',
    description: 'Segurança de código como cofre de presentes.',
    fullDescription:
      'Wesley protege aplicações com o cuidado de guardião dos presentes do Papai Noel. Nenhuma vulnerabilidade passa despercebida por sua vigilância.',
  },
]

// Desenvolvedores
const developers: Collaborator[] = [
  {
    photo: '/collaborators/eduardo-maltauro.jpeg',
    name: 'Eduardo Maltauro',
    role: 'Desenvolvedor',
    team: 'Siga Verd-e',
    description: 'Performance é seu combustível de trenó voador.',
    fullDescription:
      'Eduardo otimiza aplicações com a mesma precisão que o Papai Noel calcula suas rotas. Cada milissegundo economizado é como um presente extra debaixo da árvore.',
  },
  {
    photo: '/collaborators/eduardo-pilonetto.jpeg',
    name: 'Eduardo Pilonetto',
    role: 'Desenvolvedor',
    team: 'eCentral',
    description: 'Debugger profissional certificado pelo Polo Norte.',
    fullDescription:
      'Com paciência de elfo experiente, Eduardo rastreia bugs como se estivesse seguindo pegadas na neve. Nenhum erro escapa de sua análise detalhada.',
  },
  {
    photo: '/collaborators/eraldo.jpeg',
    name: 'Eraldo',
    role: 'Desenvolvedor',
    team: 'eTorre',
    description: 'Inovação constante é seu presente diário.',
    fullDescription:
      'Eraldo explora novas tecnologias com curiosidade de criança na manhã de Natal. Cada projeto é uma oportunidade de aprender e ensinar algo novo.',
  },
  {
    photo: '/collaborators/gabriel.jpeg',
    name: 'Gabriel Stringhini',
    role: 'Desenvolvedor',
    team: '???',
    description: 'Full stack como pilha de presentes.',
    fullDescription:
      'Gabriel domina todas as camadas da aplicação como o Papai Noel conhece todas as chaminés do mundo. Seu conhecimento abrangente é presente que nunca para de dar.',
  },
  {
    photo: '/collaborators/guilherme.jpeg',
    name: 'Guilherme Borges',
    role: 'Desenvolvedor',
    team: 'eCentral',
    description: 'Criatividade que brilha como luzes coloridas.',
    fullDescription:
      'Guilherme traz ideias frescas e inovadoras para cada projeto, como flocos de neve únicos. Sua criatividade transforma desafios em oportunidades mágicas.',
  },
  {
    photo: '/collaborators/hiuri.jpeg',
    name: 'Hiuri Xavier',
    role: 'Desenvolvedor',
    team: 'eCentral',
    description: 'Agilidade ninja em código festivo.',
    fullDescription:
      'Hiuri se move pelo código com a agilidade de um elfo experiente. Sua velocidade de entrega faz até as renas do Papai Noel parecerem lentas.',
  },
  {
    photo: '/collaborators/jucian.jpeg',
    name: 'Jucian Decazena',
    role: 'Desenvolvedor',
    team: 'ePonto',
    description: 'Resolução de problemas é seu superpoder festivo.',
    fullDescription:
      'Jucian enfrenta desafios técnicos com a determinação de quem escala chaminés estreitas. Sua capacidade analítica ilumina soluções como velas de Natal.',
  },
  {
    photo: '/collaborators/lucas.jpeg',
    name: 'Lucas',
    role: 'Desenvolvedor',
    team: 'ePonto',
    description: 'Código limpo como neve recém-caída.',
    fullDescription:
      'Lucas escreve código tão puro e organizado quanto paisagem nevada intocada. Sua atenção aos detalhes garante entregas impecáveis.',
  },
  {
    photo: '/collaborators/mateus-s.jpeg',
    name: 'Mateus Schverz',
    role: 'Desenvolvedor',
    team: 'ePonto',
    description: 'Performance otimizada é sua meta de ano novo.',
    fullDescription:
      'Mateus Schverz transforma aplicações lentas em foguetes supersônicos. Sua paixão por performance faz cada usuário sentir a magia da velocidade.',
  },
  {
    photo: '/collaborators/murilo.jpeg',
    name: 'Murilo Casagrande',
    role: 'Desenvolvedor',
    team: 'eTorre',
    description: 'Full stack completo como ceia de Natal.',
    fullDescription:
      'Murilo domina todo o ecossistema de desenvolvimento como chef prepara banquete natalino. Sua versatilidade é ingrediente secreto de projetos bem-sucedidos.',
  },
  {
    photo: '/collaborators/rhuan.jpeg',
    name: 'Rhuan Klassmann',
    role: 'Desenvolvedor',
    team: 'eTorre',
    description: 'Debugging preciso como mira de elfo arqueiro.',
    fullDescription:
      'Rhuan encontra e corrige bugs com precisão cirúrgica. Sua habilidade de rastreamento faz dele o Sherlock Holmes do código natalino.',
  },
  {
    photo: '/collaborators/vini-abreu.jpeg',
    name: 'Vinícius Abreu',
    role: 'Desenvolvedor',
    team: 'ePonto',
    description: 'Code review minucioso como lista de Papai Noel.',
    fullDescription:
      'Vinícius Abreu revisa código com atenção aos mínimos detalhes. Seus feedbacks construtivos elevam qualidade de todo o time como coro natalino.',
  },
  {
    photo: '/collaborators/vini-hartmann.jpeg',
    name: 'Vinícius Hartmann',
    role: 'Desenvolvedor',
    team: 'eTorre',
    description: 'Automação inteligente é seu elfo ajudante.',
    fullDescription:
      'Vinícius Hartmann automatiza processos com eficiência de fábrica de brinquedos moderna. Cada script criado libera tempo para mais inovação.',
  },
  {
    photo: '/collaborators/welerson.jpeg',
    name: 'Welerson Bugança',
    role: 'Desenvolvedor',
    team: 'eTorre',
    description: 'Integração contínua é seu fluxo natalino.',
    fullDescription:
      'Welerson mantém pipeline de desenvolvimento fluindo suavemente como canção de Natal. Seus processos CI/CD são exemplares como coral afinado.',
  },
  {
    photo: '/collaborators/tarcisio.jpeg',
    name: 'Tarcísio',
    role: 'Desenvolvedor',
    team: 'PEC',
    description: 'Código eficiente como trenó otimizado.',
    fullDescription:
      'Tarcísio desenvolve soluções com precisão e eficiência. Sua dedicação ao código limpo e funcional é como presente bem embrulhado que todos adoram receber.',
  },
  {
    photo: '/collaborators/igor.jpeg',
    name: 'Igor Trentini',
    role: 'Desenvolvedor',
    team: 'PEC',
    description: 'Lidera como Papai Noel lidera os elfos.',
    fullDescription:
      'Igor guia a equipe com a sabedoria de quem conhece cada detalhe da oficina. Sua liderança técnica transforma desafios em conquistas memoráveis.',
  },
  {
    photo: '/collaborators/ia-dieison.jpeg',
    name: 'IA Dieison',
    role: 'Desenvolvedor',
    team: 'IA',
    description: 'Inteligência artificial com espírito natalino.',
    fullDescription:
      'IA Dieison processa dados com a eficiência de uma fábrica de brinquedos automatizada. Seu aprendizado contínuo é como a magia do Natal que nunca acaba.',
  },
  {
    photo: '/collaborators/ia-nathan.jpeg',
    name: 'IA Nathan',
    role: 'Desenvolvedor',
    team: 'IA',
    description: 'Machine learning mais rápido que trenó supersônico.',
    fullDescription:
      'IA Nathan analisa padrões com precisão cirúrgica, como se estivesse organizando presentes por categoria. Sua capacidade de predição impressiona até os elfos mais experientes.',
  },
  {
    photo: '/collaborators/ia-vinicius.jpeg',
    name: 'IA Vinícius',
    role: 'Desenvolvedor',
    team: 'IA',
    description: 'Algoritmos inteligentes envoltos em papel de presente.',
    fullDescription:
      'IA Vinícius combina lógica computacional com criatividade humana. Suas soluções baseadas em IA são como presentes que se adaptam perfeitamente a cada necessidade.',
  },
]

// DevOps
const devOps: Collaborator[] = [
  {
    photo: '/collaborators/mateus-m.jpeg',
    name: 'Mateus Magro',
    role: 'DevOps',
    team: 'Arquitetura/DevOps',
    description: 'Arquitetura escalável como fábrica de brinquedos.',
    fullDescription:
      'Mateus Magro projeta sistemas que crescem harmoniosamente como árvore bem cuidada. Sua visão técnica prepara o terreno para futuras expansões.',
  },
]

// Gerentes
const managers: Collaborator[] = [
  {
    photo: '/collaborators/cleimar.jpeg',
    name: 'Cleimar Casagrande',
    role: 'Gerente',
    team: 'Gerente',
    description: 'Resolve problemas mais rápido que trenó voador.',
    fullDescription:
      'Veterano da equipe, Cleimar tem experiência suficiente para ensinar até o Papai Noel a otimizar rotas. Seu conhecimento técnico é lendário como as histórias de Natal.',
  },
]

// PO
const productOwners: Collaborator[] = [
  {
    photo: '/collaborators/ariele.jpeg',
    name: 'Ariele Fernandes',
    role: 'PO',
    team: 'PEC',
    description: 'Código limpo é seu presente de Natal favorito.',
    fullDescription:
      'Com um olhar atento aos detalhes, Ariele garante que cada linha de código seja um presente bem embrulhado. Sua organização deixaria até os elfos do Papai Noel com inveja.',
  },
  {
    photo: '/collaborators/bruna.jpeg',
    name: 'Bruna',
    role: 'PO',
    team: 'Siga Verd-e',
    description: 'UX que encanta como decoração natalina.',
    fullDescription:
      'Bruna cria experiências de usuário tão mágicas quanto a manhã de Natal. Cada interface projetada por ela é um presente de usabilidade perfeita.',
  },
  {
    photo: '/collaborators/eleno.jpeg',
    name: 'Eleno',
    role: 'PO',
    team: 'eCentral',
    description: 'Código elegante é sua especialidade natalina.',
    fullDescription:
      'Eleno escreve código com a elegância de uma valsa de Natal. Suas soluções são tão bem elaboradas que parecem envolvidas em papel de presente dourado.',
  },
  {
    photo: '/collaborators/luan.jpeg',
    name: 'Luan',
    role: 'PO',
    team: 'eTorre',
    description: 'Explorador de tecnologias como viajante do Polo Norte.',
    fullDescription:
      'Luan explora novas fronteiras tecnológicas com entusiasmo contagiante. Cada descoberta é compartilhada como presente precioso com a equipe.',
  },
  {
    photo: '/collaborators/ygor.jpeg',
    name: 'Ygor',
    role: 'PO',
    team: 'ePonto',
    description: 'Frontend moderno como vitrine de loja de Natal.',
    fullDescription:
      'Ygor cria experiências visuais encantadoras que capturam espírito natalino. Cada componente é crafted com paixão e precisão técnica excepcional.',
  },
]

// QA
const qaAnalysts: Collaborator[] = [
  {
    photo: '/collaborators/adailton.jpeg',
    name: 'Adailton Teixeira',
    role: 'QA',
    team: 'QA',
    description: 'Transforma café em código antes do Papai Noel acordar.',
    fullDescription:
      'Especialista em resolver bugs complexos enquanto toma seu terceiro café do dia. Sua dedicação é tão grande que até os renos do Papai Noel param para aplaudir.',
  },
  {
    photo: '/collaborators/joana.jpeg',
    name: 'Joana Franciscon',
    role: 'QA',
    team: 'QA',
    description: 'UX/UI que brilha como luzes de Natal.',
    fullDescription:
      'Joana cria interfaces tão intuitivas e bonitas quanto decorações natalinas premium. Cada pixel é posicionado com cuidado de quem arruma presentes sob a árvore.',
  },
  {
    photo: '/collaborators/karine.jpeg',
    name: 'Karine Campos',
    role: 'QA',
    team: 'QA',
    description: 'Qualidade de código como estrela guia.',
    fullDescription:
      'Karine mantém padrões elevados como estrela no topo da árvore. Seu comprometimento com excelência inspira toda a equipe a dar o melhor.',
  },
  {
    photo: '/collaborators/taissa.jpeg',
    name: 'Taissa',
    role: 'QA',
    team: 'QA',
    description: 'Design de código como arte natalina.',
    fullDescription:
      'Taissa transforma requisitos em código elegante com a maestria de artista decorando árvore. Cada função é uma obra de arte funcional.',
  },
  {
    photo: '/collaborators/rodrigo.jpeg',
    name: 'Rodrigo Ruviaro',
    role: 'QA',
    team: 'TA',
    description: 'Inovação técnica como fogos de artifício festivos.',
    fullDescription:
      'Rodrigo ilumina projetos com soluções inovadoras que brilham como fogos de fim de ano. Cada contribuição sua adiciona magia ao código.',
  },
  {
    photo: '/collaborators/vitor.jpeg',
    name: 'Vitor Loli',
    role: 'QA',
    team: 'TA',
    description: 'Testes automatizados são sua garantia de qualidade.',
    fullDescription:
      'Vitor garante que cada funcionalidade funcione perfeitamente, como mecânico que testa trenó antes da grande viagem. Sua dedicação à qualidade é inspiradora.',
  },
]

// RPA
const rpaAnalysts: Collaborator[] = [
  {
    photo: '/collaborators/rafael.jpeg',
    name: 'Rafael',
    role: 'RPA',
    team: 'RPA',
    description: 'Soluções criativas como enfeites artesanais.',
    fullDescription:
      'Rafael aborda problemas de ângulos únicos, criando soluções tão originais quanto decorações feitas à mão. Sua criatividade não conhece limites festivos.',
  },
]

// Constante exportada com todos os colaboradores unificados
export const COLLABORATORS: Collaborator[] = [
  ...architects,
  ...biAnalysts,
  ...developers,
  ...devOps,
  ...managers,
  ...productOwners,
  ...qaAnalysts,
  ...rpaAnalysts,
]
