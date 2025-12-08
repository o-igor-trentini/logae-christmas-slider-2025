import type { FloatingEasterEgg } from '@/components/effects/easter-egg-item';
import { EASTER_EGGS } from '@/lib/constants/easter-eggs';

export function generateEasterEggs(): FloatingEasterEgg[] {
  const count = Math.floor(Math.random() * 3) + 1; // 1-3 eggs por geração

  const newEggs: FloatingEasterEgg[] = [];

  for (let i = 0; i < count; i++) {
    const randomEgg =
      EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)];

    // Posição inicial aleatória
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    // Posição final aleatória diferente da inicial
    const endX = Math.random() * 100;
    const endY = Math.random() * 100;

    // Duração variável para movimento mais natural
    const duration = Math.random() * 8 + 8; // 8-16 segundos

    newEggs.push({
      id: `${Date.now()}-${i}`,
      content: randomEgg.content,
      type: randomEgg.type,
      startX,
      startY,
      endX,
      endY,
      duration,
      createdAt: Date.now(),
    });
  }

  return newEggs;
}
