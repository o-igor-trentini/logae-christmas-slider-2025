export const EASTER_EGGS = [
  // Emojis
  { type: "emoji", content: "🎄" },
  { type: "emoji", content: "🎅" },
  { type: "emoji", content: "🤶" },
  { type: "emoji", content: "🦌" },
  { type: "emoji", content: "❄️" },
  { type: "emoji", content: "⛄" },
  { type: "emoji", content: "🎁" },
  { type: "emoji", content: "🔔" },
  { type: "emoji", content: "✨" },
  { type: "emoji", content: "⭐" },
  { type: "emoji", content: "🍪" },
  { type: "emoji", content: "🥛" },
  { type: "emoji", content: "🎀" },
  { type: "emoji", content: "🕯️" },
  { type: "emoji", content: "🎵" },

  // Frases curtas divertidas
  { type: "frase", content: "Ho Ho Ho! 🎅" },
  { type: "frase", content: "Feliz Natal! 🎄" },
  { type: "frase", content: "Código Natalino" },
  { type: "frase", content: "Debug com Alegria" },
  { type: "frase", content: "Deploy em Paz" },
  { type: "frase", content: "Git Commit" },
  { type: "frase", content: "Status: Merry" },
  { type: "frase", content: "Console.log(Alegria)" },
  { type: "frase", content: "null !== Natal" },
  { type: "frase", content: "if(Navidad) ..." },

  { type: "image", content: "https://media.giphy.com/media/3o7TKU8LAASkEUkwFO/giphy.gif" },
  { type: "image", content: "https://media.giphy.com/media/g9GznKK0ZX9bS/giphy.gif" },
  { type: "image", content: "https://media.giphy.com/media/l3q2K5jinAlZ8V1i8/giphy.gif" },
  { type: "image", content: "https://media.giphy.com/media/Rl6YzcCz9LeJ2QFGWT/giphy.gif" },
  { type: "image", content: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" },
]

export type EasterEgg = (typeof EASTER_EGGS)[number]
