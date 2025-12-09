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
    photo: './collaborators/jefferson.jpeg',
    name: 'Jefferson Valcarenki',
    role: 'Arquiteto',
    team: 'Arquitetura/DevOps',
    description: 'Mestre em arquitetura de sistemas complexos.',
    fullDescription:
      'Jefferson desenha blueprints tecnológicos como o Papai Noel planeja suas rotas: com precisão milimétrica e visão de longo prazo. Suas arquiteturas são alicerces sólidos que suportam qualquer tempestade de neve.',
  },
  {
    photo: './collaborators/geferson.jpeg',
    name: 'Geferson Ludvig',
    role: 'Arquiteto',
    team: 'Arquitetura/DevOps',
    description: 'Arquiteto que projeta sistemas escaláveis e resilientes.',
    fullDescription:
      'Geferson desenha arquiteturas robustas e escaláveis que crescem harmoniosamente. Suas decisões técnicas garantem sistemas confiáveis como alicerce sólido que suporta qualquer construção, preparando infraestrutura para futuro.',
  },
]

// BI
const biAnalysts: Collaborator[] = [
  {
    photo: './collaborators/cris.jpeg',
    name: 'Christian Sbaraini',
    role: 'BI',
    team: 'BI',
    description: 'Analista de dados que transforma números em insights.',
    fullDescription:
      'Christian extrai inteligência dos dados como quem desembrulha presentes: com cuidado e revelando surpresas valiosas. Seus dashboards iluminam decisões estratégicas como luzes de Natal.',
  },
  {
    photo: './collaborators/douglas.jpeg',
    name: 'Douglas Fantin',
    role: 'BI',
    team: 'BI',
    description: 'Analista de dados que transforma informações em insights.',
    fullDescription:
      'Douglas organiza e interpreta dados com atenção, revelando padrões úteis como quem desembrulha presentes: com cuidado e surpreendendo com achados valiosos. Seus relatórios ajudam o time a tomar decisões mais claras e seguras.',
  },
  {
    photo: './collaborators/wesley.jpeg',
    name: 'Wesley Wunder',
    role: 'BI',
    team: 'BI',
    description: 'Mestre em visualização de dados e relatórios.',
    fullDescription:
      'Wesley transforma dados brutos em histórias visuais encantadoras. Seus relatórios são tão claros e informativos quanto a lista de desejos perfeitamente organizada do Papai Noel.',
  },
]

// Desenvolvedores
const developers: Collaborator[] = [
  {
    photo: './collaborators/eduardo-maltauro.jpeg',
    name: 'Eduardo Maltauro',
    role: 'Desenvolvedor',
    team: 'Siga Verd-e',
    description: 'Desenvolvedor full stack focado em soluções robustas.',
    fullDescription:
      'Eduardo desenvolve aplicações completas do backend ao frontend, como construtor que ergue casa do alicerce ao telhado. Seu código é sólido e escalável como construções feitas para durar gerações.',
  },
  {
    photo: './collaborators/eduardo-pilonetto.jpeg',
    name: 'Eduardo Pilonetto',
    role: 'Desenvolvedor',
    team: 'eCentral',
    description: 'Especialista em desenvolvimento backend e APIs.',
    fullDescription:
      'Eduardo constrói APIs robustas e serviços backend escaláveis. Suas integrações são tão confiáveis quanto rede elétrica que nunca falha, mantendo sistemas funcionando perfeitamente em harmonia.',
  },
  {
    photo: './collaborators/eraldo.jpeg',
    name: 'Eraldo Freitag',
    role: 'Desenvolvedor',
    team: 'eTorre',
    description: 'Desenvolvedor aprendendo novas tecnologias.',
    fullDescription:
      'Eraldo está sempre buscando aprender e crescer. Aplica o que aprende em seus projetos diários com dedicação e vontade de evoluir.',
  },
  {
    photo: './collaborators/gabriel.jpeg',
    name: 'Gabriel Stringhini',
    role: 'Desenvolvedor',
    team: '???',
    description: 'Especialista em integrações e projetos diversos.',
    fullDescription:
      'Gabriel conecta sistemas através de múltiplas APIs e integrações complexas como maestro que harmoniza diferentes instrumentos. Versátil e adaptável, aceita qualquer desafio de projeto com confiança, entregando soluções funcionais independente da complexidade.',
  },
  {
    photo: './collaborators/guilherme.jpeg',
    name: 'Guilherme Borges',
    role: 'Desenvolvedor',
    team: 'eCentral',
    description: 'Desenvolvedor aprendendo e evoluindo.',
    fullDescription:
      'Guilherme está em constante aprendizado, buscando entender cada aspecto do desenvolvimento. Com curiosidade e determinação, aplica conhecimentos adquiridos em suas tarefas diárias.',
  },
  {
    photo: './collaborators/hiuri.jpeg',
    name: 'Hiuri Xavier',
    role: 'Desenvolvedor',
    team: 'eCentral',
    description: 'Desenvolvedor ágil com entregas rápidas e eficientes.',
    fullDescription:
      'Hiuri desenvolve features com velocidade impressionante sem comprometer qualidade. Suas entregas rápidas mantêm o time produtivo como linha de montagem bem azeitada que nunca para.',
  },
  {
    photo: './collaborators/jucian.jpeg',
    name: 'Jucian Decazena',
    role: 'Desenvolvedor',
    team: 'ePonto',
    description: 'Solucionador de problemas complexos de desenvolvimento.',
    fullDescription:
      'Jucian encara desafios técnicos complexos com metodologia analítica. Quebra problemas grandes em pedaços gerenciáveis como quem resolve quebra-cabeça de mil peças com paciência e lógica.',
  },
  {
    photo: './collaborators/lucas.jpeg',
    name: 'Lucas Holdefer',
    role: 'Desenvolvedor',
    team: 'ePonto',
    description: 'Desenvolvedor focado em código limpo e mantenível.',
    fullDescription:
      'Lucas escreve código legível e bem estruturado que outros desenvolvedores agradecem. Sua atenção a padrões e boas práticas facilita manutenção futura como manual bem escrito.',
  },
  {
    photo: './collaborators/mateus-s.jpeg',
    name: 'Mateus Schverz',
    role: 'Desenvolvedor',
    team: 'ePonto',
    description: 'Especialista em otimização e performance de código.',
    fullDescription:
      'Mateus Schverz otimiza aplicações para máxima performance. Identifica gargalos e implementa melhorias que transformam sistemas lentos em rápidos como upgr ade de hardware sem custo extra.',
  },
  {
    photo: './collaborators/murilo.jpeg',
    name: 'Murilo Casagrande',
    role: 'Desenvolvedor',
    team: 'eTorre',
    description: 'Desenvolvedor full stack completo e independente.',
    fullDescription:
      'Murilo entrega projetos completos sozinho quando necessário. Domina frontend, backend e banco de dados como músico que toca todos os instrumentos da orquestra com maestria.',
  },
  {
    photo: './collaborators/rhuan.jpeg',
    name: 'Rhuan Klassmann',
    role: 'Desenvolvedor',
    team: 'eTorre',
    description: 'Expert em debugging e resolução de bugs críticos.',
    fullDescription:
      'Rhuan tem talento especial para encontrar bugs difíceis. Usa ferramentas de debugging e lógica dedutiva para rastrear problemas como detetive seguindo pistas até resolver mistério.',
  },
  {
    photo: './collaborators/vini-abreu.jpeg',
    name: 'Vinícius Abreu',
    role: 'Desenvolvedor',
    team: 'ePonto',
    description: 'Desenvolvedor atento a detalhes e qualidade.',
    fullDescription:
      'Vinícius Abreu revisa código meticulosamente, encontrando melhorias e possíveis problemas. Seus code reviews elevam qualidade do código de toda equipe como editor que aperfeiçoa manuscritos.',
  },
  {
    photo: './collaborators/vini-hartmann.jpeg',
    name: 'Vinícius Hartmann',
    role: 'Desenvolvedor',
    team: 'eTorre',
    description: 'Desenvolvedor que automatiza processos repetitivos.',
    fullDescription:
      'Vinícius Hartmann cria scripts e ferramentas que economizam tempo do time. Identifica tarefas repetitivas e as automatiza como inventor que cria máquinas para facilitar trabalho.',
  },
  {
    photo: './collaborators/welerson.jpeg',
    name: 'Welerson Bugança',
    role: 'Desenvolvedor',
    team: 'eTorre',
    description: 'Especialista em CI/CD e integração contínua.',
    fullDescription:
      'Welerson configura pipelines que automatizam build, teste e deploy. Garante que código novo seja integrado suavemente como engrenagens que se encaixam perfeitamente sem atrito.',
  },
  {
    photo: './collaborators/tarcisio.jpeg',
    name: 'Tarcísio',
    role: 'Desenvolvedor',
    team: 'PEC',
    description: 'Desenvolvedor eficiente focado em entregas de valor.',
    fullDescription:
      'Tarcísio desenvolve soluções pragmáticas que resolvem problemas reais. Equilibra perfeição técnica com pragmatismo de negócio como arquiteto que entrega prédios funcionais no prazo.',
  },
  {
    photo: './collaborators/igor.jpeg',
    name: 'Igor Trentini',
    role: 'Desenvolvedor',
    team: 'PEC',
    description: 'Desenvolvedor full stack que resolve problemas complexos.',
    fullDescription:
      'Igor desenvolve soluções completas e robustas, dominando tanto frontend quanto backend com profundidade técnica. Resolve desafios complexos de arquitetura e performance como engenheiro que transforma ideias em sistemas funcionais e escaláveis.',
  },
  {
    photo: './collaborators/ia-dieison.jpeg',
    name: 'IA Dieison',
    role: 'Desenvolvedor',
    team: 'IA',
    description: 'Desenvolvedor especializado em inteligência artificial.',
    fullDescription:
      'IA Dieison implementa modelos de machine learning e IA em produção. Transforma algoritmos científicos em aplicações práticas que agregam valor real ao negócio como alquimista moderno.',
  },
  {
    photo: './collaborators/ia-nathan.jpeg',
    name: 'IA Nathan',
    role: 'Desenvolvedor',
    team: 'IA',
    description: 'Expert em machine learning e análise preditiva.',
    fullDescription:
      'IA Nathan treina modelos que preveem comportamentos e otimizam processos. Seus algoritmos aprendem com dados como estudante dedicado que se torna mestre em sua área.',
  },
  {
    photo: './collaborators/ia-vinicius.jpeg',
    name: 'IA Vinícius',
    role: 'Desenvolvedor',
    team: 'IA',
    description: 'Desenvolvedor focado em soluções inteligentes com IA.',
    fullDescription:
      'IA Vinícius integra inteligência artificial em produtos existentes. Adiciona capacidades cognitivas a sistemas tradicionais como quem instala cérebro eletrônico em máquinas.',
  },
]

// DevOps
const devOps: Collaborator[] = [
  {
    photo: './collaborators/mateus-m.jpeg',
    name: 'Mateus Magro',
    role: 'DevOps',
    team: 'Arquitetura/DevOps',
    description: 'Engenheiro DevOps que automatiza e otimiza.',
    fullDescription:
      'Mateus Magro mantém a infraestrutura rodando suavemente como trenó bem lubrificado. Seus scripts de automação e monitoramento garantem que os serviços estejam sempre disponíveis, mesmo na noite mais movimentada do ano.',
  },
]

// Gerentes
const managers: Collaborator[] = [
  {
    photo: './collaborators/cleimar.jpeg',
    name: 'Cleimar Casagrande',
    role: 'Gerente',
    team: 'Desenvolvimento',
    description: 'Gerente experiente que lidera com visão estratégica.',
    fullDescription:
      'Cleimar coordena múltiplas equipes de desenvolvimento com maestria, equilibrando demandas técnicas e necessidades de negócio. Veterano da área, remove impedimentos e facilita comunicação entre times como dirigente experiente que conhece cada detalhe da operação.',
  },
  {
    photo: './collaborators/isaque.jpeg',
    name: 'Isaque Klassmann',
    role: 'Supervisor',
    team: 'Desenvolvimento',
    description: 'Supervisor técnico que orienta e inspira o time.',
    fullDescription:
      'Isaque supervisiona o desenvolvimento técnico garantindo qualidade e boas práticas. Como mestre experiente, orienta desenvolvedores e garante que entregas atendam os mais altos padrões, coordenando equipes como maestro rege orquestra perfeita.',
  },
]

// PO
const productOwners: Collaborator[] = [
  {
    photo: './collaborators/ariele.jpeg',
    name: 'Ariele Fernandes',
    role: 'PO',
    team: 'PEC',
    description: 'PO que traduz visão em valor.',
    fullDescription:
      'Ariele prioriza backlog como quem organiza lista de presentes por importância. Define o que construir e quando, garantindo que cada sprint entregue valor real aos usuários como presentes cuidadosamente escolhidos.',
  },
  {
    photo: './collaborators/bruna.jpeg',
    name: 'Bruna Provinelli',
    role: 'PO',
    team: 'Siga Verd-e',
    description: 'PO especialista em experiência do usuário.',
    fullDescription:
      'Bruna equilibra necessidades de negócio e usuários como quem equilibra enfeites na árvore. Suas histórias de usuário são tão claras que os desenvolvedores entendem no primeiro read, como cartinhas ao Papai Noel.',
  },
  {
    photo: './collaborators/eleno.jpeg',
    name: 'Eleno Miranda',
    role: 'PO',
    team: 'eCentral',
    description: 'PO focado em resultados de negócio.',
    fullDescription:
      'Eleno alinha produto com objetivos estratégicos da empresa. Suas decisões baseadas em dados garantem que cada feature desenvolvida traga ROI positivo como investimento em presentes que realmente agradam.',
  },
  {
    photo: './collaborators/luan.jpeg',
    name: 'Luan Einsfeld',
    role: 'PO',
    team: 'eTorre',
    description: 'PO que conecta stakeholders e desenvolvimento.',
    fullDescription:
      'Luan facilita comunicação entre todas as partes interessadas como Papai Noel coordena entrega mundial. Gerencia expectativas e garante que todos estejam alinhados rumo aos mesmos objetivos.',
  },
  {
    photo: './collaborators/ygor.jpeg',
    name: 'Ygor Preto',
    role: 'PO',
    team: 'ePonto',
    description: 'PO ágil e adaptativo.',
    fullDescription:
      'Ygor responde rapidamente a mudanças de mercado e feedback de usuários. Sua agilidade em repriorizar e pivotar mantém o produto sempre relevante como tendências de presentes da temporada.',
  },
]

// QA
const qaAnalysts: Collaborator[] = [
  {
    photo: './collaborators/adailton.jpeg',
    name: 'Adailton Teixeira',
    role: 'QA',
    team: 'QA',
    description: 'Analista de qualidade que caça bugs implacavelmente.',
    fullDescription:
      'Adailton testa cada funcionalidade como inspetor que verifica qualidade dos presentes antes da entrega. Nenhum bug escapa de seus testes rigorosos e metódicos que garantem software impecável.',
  },
  {
    photo: './collaborators/joana.jpeg',
    name: 'Joana Franciscon',
    role: 'QA',
    team: 'QA',
    description: 'QA focada em experiência do usuário.',
    fullDescription:
      'Joana valida não apenas se funciona, mas se funciona bem. Seus testes de usabilidade garantem que usuários tenham experiência fluida e intuitiva como abrir presente perfeitamente embalado.',
  },
  {
    photo: './collaborators/karine.jpeg',
    name: 'Karine Campos',
    role: 'QA',
    team: 'QA',
    description: 'Especialista em testes manuais e exploratórios.',
    fullDescription:
      'Karine explora cada canto do sistema buscando cenários não documentados. Sua curiosidade metódica descobre bugs que testes automatizados nunca encontrariam, como presentes escondidos em lugares inusitados.',
  },
  {
    photo: './collaborators/taissa.jpeg',
    name: 'Taissa de Castro',
    role: 'QA',
    team: 'QA',
    description: 'QA que documenta e reporta com precisão.',
    fullDescription:
      'Taissa cria relatórios de bugs tão detalhados que desenvolvedores reproduzem problemas no primeiro try. Sua documentação é clara como instruções de montagem de brinquedo bem feitas.',
  },
  {
    photo: './collaborators/rodrigo.jpeg',
    name: 'Rodrigo Ruviaro',
    role: 'QA',
    team: 'TA',
    description: 'Engenheiro de testes automatizados.',
    fullDescription:
      'Rodrigo constrói suítes de testes que rodam como relógio suíço. Seus frameworks de automação garantem que regressões sejam detectadas antes de chegarem à produção, como filtro mágico do Papai Noel.',
  },
  {
    photo: './collaborators/vitor.jpeg',
    name: 'Vitor Loli',
    role: 'QA',
    team: 'TA',
    description: 'Especialista em automação de testes e CI/CD.',
    fullDescription:
      'Vitor integra testes em pipelines de deploy como quem adiciona camadas de segurança. Seus testes automatizados executam a cada commit, garantindo qualidade contínua como controle de qualidade da fábrica do Polo Norte.',
  },
]

// RPA
const rpaAnalysts: Collaborator[] = [
  {
    photo: './collaborators/rafael.jpeg',
    name: 'Rafael Vizzotto',
    role: 'RPA',
    team: 'RPA',
    description: 'Especialista em automação robótica de processos.',
    fullDescription:
      'Rafael automatiza tarefas repetitivas com robôs de software, liberando pessoas para trabalho estratégico. Seus bots trabalham 24/7 como elfos incansáveis, executando processos com precisão e velocidade sobre-humanas.',
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
