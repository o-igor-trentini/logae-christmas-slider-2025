'use client';

import { useState, useEffect } from 'react';

import { generateEasterEggs } from '@/lib/utils/easter-egg-generator';

import { EasterEggItem, type FloatingEasterEgg } from './easter-egg-item';

export function FloatingEasterEggs() {
  const [eggs, setEggs] = useState<FloatingEasterEgg[]>([]);

  useEffect(() => {
    const runGeneration = () => {
      const newEggs = generateEasterEggs();
      setEggs((prev) => [...prev, ...newEggs]);

      // Agendar próxima geração
      setTimeout(() => {
        runGeneration();
      }, 10000);
    };

    // Limpar eggs que já completaram sua animação
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setEggs((prev) =>
        prev.filter((egg) => {
          const eggAge = now - egg.createdAt;
          // Remove apenas eggs que completaram sua animação (duration em ms)
          return eggAge < egg.duration * 1000;
        })
      );
    }, 2000); // Verifica a cada 2 segundos

    runGeneration();

    return () => {
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className='fixed inset-0 pointer-events-none z-10 overflow-hidden'>
      {eggs.map((egg) => (
        <EasterEggItem key={egg.id} egg={egg} />
      ))}
    </div>
  );
}
