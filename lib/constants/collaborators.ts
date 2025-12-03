// Tipo para colaborador
export interface Colaborador {
  foto: string
  nome: string
  funcao: string
  time: string
  descricao: string
  descricaoCompleta: string
}

// Constante com todos os colaboradores fixos
export const COLABORADORES: Colaborador[] = [
  {
    foto: '/collaborators/isaque.jpeg',
    nome: 'Isaque Klassmann',
    funcao: 'Arquiteto',
    time: 'Arquitetura/DevOps',
    descricao: 'Código testado é seu compromisso natalino.',
    descricaoCompleta:
      'Isaque garante qualidade em cada entrega como se estivesse embrulhando presentes premium. Seus testes são tão rigorosos quanto a lista do Papai Noel.',
  },
  {
    foto: '/collaborators/jefferson.jpeg',
    nome: 'Jefferson Valcarenki',
    funcao: 'Arquiteto',
    time: 'Arquitetura/DevOps',
    descricao: 'Backend sólido como base de árvore centenária.',
    descricaoCompleta:
      'Jefferson constrói fundações tão robustas que suportariam até o peso de todos os presentes do mundo. Sua expertise em backend é lendária.',
  },
  {
    foto: '/collaborators/cris.jpeg',
    nome: 'Cris',
    funcao: 'BI',
    time: 'BI',
    descricao: 'Qualidade de código é tradição natalina.',
    descricaoCompleta:
      'Cris mantém os padrões de qualidade tão altos quanto a estrela no topo da árvore. Seu comprometimento com excelência inspira toda a equipe.',
  },
  {
    foto: '/collaborators/douglas.jpeg',
    nome: 'Douglas',
    funcao: 'BI',
    time: 'BI',
    descricao: 'Arquitetura sólida como base de árvore gigante.',
    descricaoCompleta:
      'Douglas constrói fundações tão robustas que suportariam até o peso de todos os presentes do mundo. Sua expertise em arquitetura é presente que nunca para de dar.',
  },
  {
    foto: '/collaborators/wesley.jpeg',
    nome: 'Wesley',
    funcao: 'BI',
    time: 'BI',
    descricao: 'Segurança de código como cofre de presentes.',
    descricaoCompleta:
      'Wesley protege aplicações com o cuidado de guardião dos presentes do Papai Noel. Nenhuma vulnerabilidade passa despercebida por sua vigilância.',
  },
  {
    foto: '/collaborators/eduardo-maltauro.jpeg',
    nome: 'Eduardo Maltauro',
    funcao: 'Desenvolvedor',
    time: 'Siga Verd-e',
    descricao: 'Performance é seu combustível de trenó voador.',
    descricaoCompleta:
      'Eduardo otimiza aplicações com a mesma precisão que o Papai Noel calcula suas rotas. Cada milissegundo economizado é como um presente extra debaixo da árvore.',
  },
  {
    foto: '/collaborators/eduardo-pilonetto.jpeg',
    nome: 'Eduardo Pilonetto',
    funcao: 'Desenvolvedor',
    time: 'eCentral',
    descricao: 'Debugger profissional certificado pelo Polo Norte.',
    descricaoCompleta:
      'Com paciência de elfo experiente, Eduardo rastreia bugs como se estivesse seguindo pegadas na neve. Nenhum erro escapa de sua análise detalhada.',
  },
  {
    foto: '/collaborators/eraldo.jpeg',
    nome: 'Eraldo',
    funcao: 'Desenvolvedor',
    time: 'eTorre',
    descricao: 'Inovação constante é seu presente diário.',
    descricaoCompleta:
      'Eraldo explora novas tecnologias com curiosidade de criança na manhã de Natal. Cada projeto é uma oportunidade de aprender e ensinar algo novo.',
  },
  {
    foto: '/collaborators/gabriel.jpeg',
    nome: 'Gabriel Stringhini',
    funcao: 'Desenvolvedor',
    time: '???',
    descricao: 'Full stack como pilha de presentes.',
    descricaoCompleta:
      'Gabriel domina todas as camadas da aplicação como o Papai Noel conhece todas as chaminés do mundo. Seu conhecimento abrangente é presente que nunca para de dar.',
  },
  {
    foto: '/collaborators/geferson-barba.jpeg',
    nome: 'Geferson Ludvig',
    funcao: 'Arquiteto',
    time: 'Arquitetura/DevOps',
    descricao: 'DevOps mágico como oficina automatizada.',
    descricaoCompleta:
      'Geferson automatiza processos com a eficiência de uma fábrica de brinquedos moderna. Seus pipelines fluem como trenó em noite estrelada.',
  },
  {
    foto: '/collaborators/guilherme.jpeg',
    nome: 'Guilherme Borges',
    funcao: 'Desenvolvedor',
    time: 'eCentral',
    descricao: 'Criatividade que brilha como luzes coloridas.',
    descricaoCompleta:
      'Guilherme traz ideias frescas e inovadoras para cada projeto, como flocos de neve únicos. Sua criatividade transforma desafios em oportunidades mágicas.',
  },
  {
    foto: '/collaborators/hiuri.jpeg',
    nome: 'Hiuri Xavier',
    funcao: 'Desenvolvedor',
    time: 'eCentral',
    descricao: 'Agilidade ninja em código festivo.',
    descricaoCompleta:
      'Hiuri se move pelo código com a agilidade de um elfo experiente. Sua velocidade de entrega faz até as renas do Papai Noel parecerem lentas.',
  },
  {
    foto: '/collaborators/jucian.jpeg',
    nome: 'Jucian Decazena',
    funcao: 'Desenvolvedor',
    time: 'ePonto',
    descricao: 'Resolução de problemas é seu superpoder festivo.',
    descricaoCompleta:
      'Jucian enfrenta desafios técnicos com a determinação de quem escala chaminés estreitas. Sua capacidade analítica ilumina soluções como velas de Natal.',
  },
  {
    foto: '/collaborators/lucas.jpeg',
    nome: 'Lucas',
    funcao: 'Desenvolvedor',
    time: 'ePonto',
    descricao: 'Código limpo como neve recém-caída.',
    descricaoCompleta:
      'Lucas escreve código tão puro e organizado quanto paisagem nevada intocada. Sua atenção aos detalhes garante entregas impecáveis.',
  },
  {
    foto: '/collaborators/mateus-s.jpeg',
    nome: 'Mateus Schverz',
    funcao: 'Desenvolvedor',
    time: 'ePonto',
    descricao: 'Performance otimizada é sua meta de ano novo.',
    descricaoCompleta:
      'Mateus Schverz transforma aplicações lentas em foguetes supersônicos. Sua paixão por performance faz cada usuário sentir a magia da velocidade.',
  },
  {
    foto: '/collaborators/murilo.jpeg',
    nome: 'Murilo Casagrande',
    funcao: 'Desenvolvedor',
    time: 'eTorre',
    descricao: 'Full stack completo como ceia de Natal.',
    descricaoCompleta:
      'Murilo domina todo o ecossistema de desenvolvimento como chef prepara banquete natalino. Sua versatilidade é ingrediente secreto de projetos bem-sucedidos.',
  },
  {
    foto: '/collaborators/rafael.jpeg',
    nome: 'Rafael',
    funcao: 'RPA',
    time: 'RPA',
    descricao: 'Soluções criativas como enfeites artesanais.',
    descricaoCompleta:
      'Rafael aborda problemas de ângulos únicos, criando soluções tão originais quanto decorações feitas à mão. Sua criatividade não conhece limites festivos.',
  },
  {
    foto: '/collaborators/rhuan.jpeg',
    nome: 'Rhuan Klassmann',
    funcao: 'Desenvolvedor',
    time: 'eTorre',
    descricao: 'Debugging preciso como mira de elfo arqueiro.',
    descricaoCompleta:
      'Rhuan encontra e corrige bugs com precisão cirúrgica. Sua habilidade de rastreamento faz dele o Sherlock Holmes do código natalino.',
  },
  {
    foto: '/collaborators/rodrigo.jpeg',
    nome: 'Rodrigo Ruviaro',
    funcao: 'QA',
    time: 'TA',
    descricao: 'Inovação técnica como fogos de artifício festivos.',
    descricaoCompleta:
      'Rodrigo ilumina projetos com soluções inovadoras que brilham como fogos de fim de ano. Cada contribuição sua adiciona magia ao código.',
  },
  {
    foto: '/collaborators/vini-abreu.jpeg',
    nome: 'Vinícius Abreu',
    funcao: 'Desenvolvedor',
    time: 'ePonto',
    descricao: 'Code review minucioso como lista de Papai Noel.',
    descricaoCompleta:
      'Vinícius Abreu revisa código com atenção aos mínimos detalhes. Seus feedbacks construtivos elevam qualidade de todo o time como coro natalino.',
  },
  {
    foto: '/collaborators/vini-hartmann.jpeg',
    nome: 'Vinícius Hartmann',
    funcao: 'Desenvolvedor',
    time: 'eTorre',
    descricao: 'Automação inteligente é seu elfo ajudante.',
    descricaoCompleta:
      'Vinícius Hartmann automatiza processos com eficiência de fábrica de brinquedos moderna. Cada script criado libera tempo para mais inovação.',
  },
  {
    foto: '/collaborators/vitor.jpeg',
    nome: 'Vitor Loli',
    funcao: 'QA',
    time: 'TA',
    descricao: 'Testes automatizados são sua garantia de qualidade.',
    descricaoCompleta:
      'Vitor garante que cada funcionalidade funcione perfeitamente, como mecânico que testa trenó antes da grande viagem. Sua dedicação à qualidade é inspiradora.',
  },
  {
    foto: '/collaborators/welerson.jpeg',
    nome: 'Welerson Bugança',
    funcao: 'Desenvolvedor',
    time: 'PEC',
    descricao: 'Integração contínua é seu fluxo natalino.',
    descricaoCompleta:
      'Welerson mantém pipeline de desenvolvimento fluindo suavemente como canção de Natal. Seus processos CI/CD são exemplares como coral afinado.',
  },
  {
    foto: '/collaborators/magro.jpeg',
    nome: 'Mateus Magro',
    funcao: 'DevOps',
    time: 'Arquitetura/DevOps',
    descricao: 'Arquitetura escalável como fábrica de brinquedos.',
    descricaoCompleta:
      'Mateus Magro projeta sistemas que crescem harmoniosamente como árvore bem cuidada. Sua visão técnica prepara o terreno para futuras expansões.',
  },
  {
    foto: '/collaborators/cleimar.jpeg',
    nome: 'Cleimar Casagrande',
    funcao: 'Gerente',
    time: 'Gerente',
    descricao: 'Resolve problemas mais rápido que trenó voador.',
    descricaoCompleta:
      'Veterano da equipe, Cleimar tem experiência suficiente para ensinar até o Papai Noel a otimizar rotas. Seu conhecimento técnico é lendário como as histórias de Natal.',
  },
  {
    foto: '/collaborators/ariele.jpeg',
    nome: 'Ariele Fernandes',
    funcao: 'PO',
    time: 'PEC',
    descricao: 'Código limpo é seu presente de Natal favorito.',
    descricaoCompleta:
      'Com um olhar atento aos detalhes, Ariele garante que cada linha de código seja um presente bem embrulhado. Sua organização deixaria até os elfos do Papai Noel com inveja.',
  },
  {
    foto: '/collaborators/bruna.jpeg',
    nome: 'Bruna',
    funcao: 'PO',
    time: 'Siga Verd-e',
    descricao: 'UX que encanta como decoração natalina.',
    descricaoCompleta:
      'Bruna cria experiências de usuário tão mágicas quanto a manhã de Natal. Cada interface projetada por ela é um presente de usabilidade perfeita.',
  },
  {
    foto: '/collaborators/eleno.jpeg',
    nome: 'Eleno',
    funcao: 'PO',
    time: 'eCentral',
    descricao: 'Código elegante é sua especialidade natalina.',
    descricaoCompleta:
      'Eleno escreve código com a elegância de uma valsa de Natal. Suas soluções são tão bem elaboradas que parecem envolvidas em papel de presente dourado.',
  },
  {
    foto: '/collaborators/luan.jpeg',
    nome: 'Luan',
    funcao: 'PO',
    time: 'eTorre',
    descricao: 'Explorador de tecnologias como viajante do Polo Norte.',
    descricaoCompleta:
      'Luan explora novas fronteiras tecnológicas com entusiasmo contagiante. Cada descoberta é compartilhada como presente precioso com a equipe.',
  },
  {
    foto: '/collaborators/ygor.jpeg',
    nome: 'Ygor',
    funcao: 'PO',
    time: 'ePonto',
    descricao: 'Frontend moderno como vitrine de loja de Natal.',
    descricaoCompleta:
      'Ygor cria experiências visuais encantadoras que capturam espírito natalino. Cada componente é crafted com paixão e precisão técnica excepcional.',
  },
  {
    foto: '/collaborators/adailton.jpeg',
    nome: 'Adailton Teixeira',
    funcao: 'QA',
    time: 'QA',
    descricao: 'Transforma café em código antes do Papai Noel acordar.',
    descricaoCompleta:
      'Especialista em resolver bugs complexos enquanto toma seu terceiro café do dia. Sua dedicação é tão grande que até os renos do Papai Noel param para aplaudir.',
  },
  {
    foto: '/collaborators/joana.jpeg',
    nome: 'Joana Franciscon',
    funcao: 'QA',
    time: 'QA',
    descricao: 'UX/UI que brilha como luzes de Natal.',
    descricaoCompleta:
      'Joana cria interfaces tão intuitivas e bonitas quanto decorações natalinas premium. Cada pixel é posicionado com cuidado de quem arruma presentes sob a árvore.',
  },
  {
    foto: '/collaborators/karine.jpeg',
    nome: 'Karine Campos',
    funcao: 'QA',
    time: 'QA',
    descricao: 'Qualidade de código como estrela guia.',
    descricaoCompleta:
      'Karine mantém padrões elevados como estrela no topo da árvore. Seu comprometimento com excelência inspira toda a equipe a dar o melhor.',
  },
  {
    foto: '/collaborators/taissa.jpeg',
    nome: 'Taissa',
    funcao: 'QA',
    time: 'QA',
    descricao: 'Design de código como arte natalina.',
    descricaoCompleta:
      'Taissa transforma requisitos em código elegante com a maestria de artista decorando árvore. Cada função é uma obra de arte funcional.',
  },
  {
    foto: '/collaborators/igor.jpeg',
    nome: 'Igor Trentini',
    funcao: 'Desenvolvedor',
    time: 'PEC',
    descricao: 'Lidera como Papai Noel lidera os elfos.',
    descricaoCompleta:
      'Igor guia a equipe com a sabedoria de quem conhece cada detalhe da oficina. Sua liderança técnica transforma desafios em conquistas memoráveis.',
  },
    {
    foto: '/collaborators/ia_dieison.jpeg',
    nome: 'IA Dieison',
    funcao: 'Desenvolvedor',
    time: 'IA',
    descricao: 'Inteligência artificial com espírito natalino.',
    descricaoCompleta:
      'IA Dieison processa dados com a eficiência de uma fábrica de brinquedos automatizada. Seu aprendizado contínuo é como a magia do Natal que nunca acaba.',
  },
  {
    foto: '/collaborators/ia_nathan.jpeg',
    nome: 'IA Nathan',
    funcao: 'Desenvolvedor',
    time: 'IA',
    descricao: 'Machine learning mais rápido que trenó supersônico.',
    descricaoCompleta:
      'IA Nathan analisa padrões com precisão cirúrgica, como se estivesse organizando presentes por categoria. Sua capacidade de predição impressiona até os elfos mais experientes.',
  },
  {
    foto: '/collaborators/ia_vinicius.jpeg',
    nome: 'IA Vinícius',
    funcao: 'Desenvolvedor',
    time: 'IA',
    descricao: 'Algoritmos inteligentes envoltos em papel de presente.',
    descricaoCompleta:
      'IA Vinícius combina lógica computacional com criatividade humana. Suas soluções baseadas em IA são como presentes que se adaptam perfeitamente a cada necessidade.',
  },
]
