// Tipo para slide de estatística
export interface StatisticSlide {
  id: string
  title: string
  value: string
  unit: string
  description: string
  emoji: string
  color: string
  bgGradient: string
  fullDescription?: string
}

export const STATISTICS_SLIDES: StatisticSlide[] = [
  {
    id: 'stat-1',
    title: 'Café consumido',
    value: '8001+',
    unit: 'xícaras',
    description: 'Durante o ano, pelo time de desenvolvimento',
    emoji: '☕',
    color: 'from-amber-600 to-amber-400',
    bgGradient: 'from-amber-900 to-amber-700',
  },
  {
    id: 'stat-2',
    title: 'Deploys na sexta',
    value: '89',
    unit: 'de manhã',
    description: 'Logo depois do galo cantar',
    emoji: '📦',
    color: 'from-red-600 to-red-400',
    bgGradient: 'from-red-900 to-red-700',
  },
  {
    id: 'stat-3',
    title: 'Lanches pagos',
    value: '156',
    unit: 'refeições',
    description: 'É praticamente um recreio corporativo',
    emoji: '🍔',
    color: 'from-orange-600 to-orange-400',
    bgGradient: 'from-orange-900 to-orange-700',
  },
  {
    id: 'stat-4',
    title: 'Cucas consumidas',
    value: '999',
    unit: 'artefatos não planejados em produção',
    description: 'Viramos praticamente sócios da Santa Terezinha',
    emoji: '🥧',
    color: 'from-orange-600 to-orange-400',
    bgGradient: 'from-orange-900 to-orange-700',
  },
  {
    id: 'stat-5',
    title: 'Cuca streak',
    value: '2 semanas',
    unit: 'todos os dias uma ou mais',
    description: 'Nunca vi ninguém comer tanta cuca assim',
    emoji: '🥧',
    color: 'from-orange-600 to-orange-400',
    bgGradient: 'from-orange-900 to-orange-700',
  },
  {
    id: 'stat-6',
    title: 'Chamados 17:99',
    value: '123',
    unit: 'horários impossíveis',
    description: 'Bugs que aparecem nos acréscimos do segundo tempo',
    emoji: '🚨',
    color: 'from-purple-600 to-purple-400',
    bgGradient: 'from-purple-900 to-purple-700',
  },
  {
    id: 'stat-7',
    title: 'Calvice em evolução',
    value: '67%',
    unit: 'do time',
    description: 'Resultado do stress de produção',
    emoji: '👨‍🦲',
    color: 'from-slate-600 to-slate-400',
    bgGradient: 'from-slate-900 to-slate-700',
  },
  {
    id: 'stat-8',
    title: 'Servidores destruídos',
    value: '3',
    unit: 'afetados',
    description: 'Testes automatizados que saíram do controle',
    emoji: '💥',
    color: 'from-yellow-600 to-yellow-400',
    bgGradient: 'from-yellow-900 to-yellow-700',
  },
  {
    id: 'stat-9',
    title: 'Investimento padaria',
    value: 'R$ 12.943',
    unit: 'gastos',
    description: 'Custo anual em cuca, pão de queijo e café',
    emoji: '💸',
    color: 'from-green-600 to-green-400',
    bgGradient: 'from-green-900 to-green-700',
  },
  {
    id: 'stat-10',
    title: 'Feliz aniversário',
    value: '999999',
    unit: 'mensagens',
    description: 'No dia de um único aniversário',
    emoji: '🎂',
    color: 'from-pink-600 to-pink-400',
    bgGradient: 'from-pink-900 to-pink-700',
  },
  {
    id: 'stat-11',
    title: 'Eventos gastronômicos',
    value: '29',
    unit: 'confraternizações',
    description: 'Momentos de descontração do time',
    emoji: '🍽️',
    color: 'from-cyan-600 to-cyan-400',
    bgGradient: 'from-cyan-900 to-cyan-700',
  },
  {
    id: 'stat-12',
    title: 'Gambiarras realizadas',
    value: '512',
    unit: 'soluções criativas',
    description: 'Que funcionam melhor que deveriam',
    emoji: '🔧',
    color: 'from-indigo-600 to-indigo-400',
    bgGradient: 'from-indigo-900 to-indigo-700',
  },
  {
    id: 'stat-bombeiros',
    title: 'Bombeiros especializados',
    value: 'Muitos',
    unit: 'incêndios evitados',
    description: 'Estamos cada vez menos resolvendo incêndios (bugs e demandas urgentes)',
    emoji: '🚒',
    color: 'from-red-600 to-orange-400',
    bgGradient: 'from-red-900 to-orange-700',
    fullDescription:
      'Nosso time é como bombeiros altamente especializados. Quanto menos incêndios temos que apagar, mais eficiente é nossa operação. Cada deploy bem-sucedido, cada bug prevenido, e cada demanda urgente evitada = menos incêndios na produção. Estamos construindo uma cultura de qualidade que nos permite trabalhar de forma mais estratégica e menos reativa.',
  },
]
