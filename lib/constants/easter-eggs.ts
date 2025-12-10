export enum EasterEggType {
    Emoji = 'emoji',
    Phrase = 'phrase',
    Image = 'image',
}

export interface EasterEgg {
    type: EasterEggType;
    content: string;
}

export const EASTER_EGGS: EasterEgg[] = [
    // Emojis
    { type: EasterEggType.Emoji, content: '🎄' },
    { type: EasterEggType.Emoji, content: '🎅' },
    { type: EasterEggType.Emoji, content: '🦌' },
    { type: EasterEggType.Emoji, content: '❄️' },
    { type: EasterEggType.Emoji, content: '⛄' },
    { type: EasterEggType.Emoji, content: '🎁' },
    { type: EasterEggType.Emoji, content: '🔔' },
    { type: EasterEggType.Emoji, content: '✨' },
    { type: EasterEggType.Emoji, content: '⭐' },

    // Frases curtas divertidas
    { type: EasterEggType.Phrase, content: 'Ho Ho Ho! 🎅' },
    { type: EasterEggType.Phrase, content: 'Feliz Natal! 🎄' },
    { type: EasterEggType.Phrase, content: 'Access violation 0x00000001' },
    { type: EasterEggType.Phrase, content: 'Reiniciando integradores...' },
    { type: EasterEggType.Phrase, content: 'Vou acessar o 51' },
    { type: EasterEggType.Phrase, content: 'Feliz aniversário, paga o lanche!' },
    { type: EasterEggType.Phrase, content: 'Chama o Gabriel que ele resolve!' },
    { type: EasterEggType.Phrase, content: 'Já reiniciou?' },
    { type: EasterEggType.Phrase, content: 'Testa em guia anônima 👍' },
    { type: EasterEggType.Phrase, content: 'dps que o cara mata o cara o cara fica como errado' },
    { type: EasterEggType.Phrase, content: 'prefere uma caganera ou o sistema funcionando?' },

    { type: EasterEggType.Image, content: './easter-eggs/guia-anonima.png' },
    { type: EasterEggType.Image, content: './easter-eggs/adailton-1.png' },
    { type: EasterEggType.Image, content: './easter-eggs/adailton-2.png' },
    { type: EasterEggType.Image, content: './easter-eggs/baller-1.png' },
    { type: EasterEggType.Image, content: './easter-eggs/eduardo-m-1.gif' },
    { type: EasterEggType.Image, content: './easter-eggs/eraldo-1.gif' },
    { type: EasterEggType.Image, content: './easter-eggs/igor-1.png' },
    { type: EasterEggType.Image, content: './easter-eggs/igor-2.gif' },
    { type: EasterEggType.Image, content: './easter-eggs/igor-3.png' },
    { type: EasterEggType.Image, content: './easter-eggs/igor-4.png' },
    { type: EasterEggType.Image, content: './easter-eggs/igor-5.gif' },
    { type: EasterEggType.Image, content: './easter-eggs/isaque-1.png' },
    { type: EasterEggType.Image, content: './easter-eggs/isaque-2.png' },
    { type: EasterEggType.Image, content: './easter-eggs/jeffe-1.gif' },
    { type: EasterEggType.Image, content: './easter-eggs/jeffe-2.png' },
    { type: EasterEggType.Image, content: './easter-eggs/jonas-1.png' },
    { type: EasterEggType.Image, content: './easter-eggs/jonas-2.gif' },
    { type: EasterEggType.Image, content: './easter-eggs/magro-1.png' },
    { type: EasterEggType.Image, content: './easter-eggs/magro-2.png' },
    { type: EasterEggType.Image, content: './easter-eggs/pilonetto-1.gif' },
    { type: EasterEggType.Image, content: './easter-eggs/pilonetto-2.gif' },
    { type: EasterEggType.Image, content: './easter-eggs/scheibe-1.png' },
    { type: EasterEggType.Image, content: './easter-eggs/scheibe-2.png' },
    { type: EasterEggType.Image, content: './easter-eggs/scheibe-3.png' },
    { type: EasterEggType.Image, content: './easter-eggs/vini-a-1.png' },
    { type: EasterEggType.Image, content: './easter-eggs/vini-h-1.png' },
    { type: EasterEggType.Image, content: './easter-eggs/vini-h-2.png' },
    { type: EasterEggType.Image, content: './easter-eggs/vini-h-3.png' },
    { type: EasterEggType.Image, content: './easter-eggs/vini-h-4.png' },
    { type: EasterEggType.Image, content: './easter-eggs/ygor-1.png' },
];
