export const EASTER_EGGS = [
  // Emojis
  { type: 'emoji', content: '🎄' },
  { type: 'emoji', content: '🎅' },
  { type: 'emoji', content: '🦌' },
  { type: 'emoji', content: '❄️' },
  { type: 'emoji', content: '⛄' },
  { type: 'emoji', content: '🎁' },
  { type: 'emoji', content: '🔔' },
  { type: 'emoji', content: '✨' },
  { type: 'emoji', content: '⭐' },

  // Frases curtas divertidas
  { type: 'frase', content: 'Ho Ho Ho! 🎅' },
  { type: 'frase', content: 'Feliz Natal! 🎄' },
  { type: 'frase', content: 'Status: Merry' },
  { type: 'frase', content: 'Access violation 0x00000001' },
  { type: 'frase', content: 'Reiniciando integradores...' },
  { type: 'frase', content: 'Chama o Gabriel que ele resolve!' },
  { type: 'frase', content: 'dps que o cara mata o cara o cara fica como errado' },
  { type: 'frase', content: 'prefere uma caganera ou o sistema funcionando?' },

  { type: 'image', content: '/easter-eggs/adailton-1.png' },
  { type: 'image', content: '/easter-eggs/baller-1.png' },
  { type: 'image', content: '/easter-eggs/eraldo-1.gif' },
  { type: 'image', content: '/easter-eggs/igor-1.png' },
  { type: 'image', content: '/easter-eggs/igor-2.gif' },
  { type: 'image', content: '/easter-eggs/igor-3.png' },
  { type: 'image', content: '/easter-eggs/isaque-1.png' },
  { type: 'image', content: '/easter-eggs/isaque-2.png' },
  { type: 'image', content: '/easter-eggs/jeffe-1.gif' },
  { type: 'image', content: '/easter-eggs/jeffe-2.png' },
  { type: 'image', content: '/easter-eggs/magro-1.png' },
  { type: 'image', content: '/easter-eggs/scheibe-1.png' },
  { type: 'image', content: '/easter-eggs/scheibe-2.png' },
  { type: 'image', content: '/easter-eggs/scheibe-3.png' },
  { type: 'image', content: '/easter-eggs/vini-a-1.png' },
  { type: 'image', content: '/easter-eggs/ygor-1.png' },
];

export type EasterEgg = (typeof EASTER_EGGS)[number];
