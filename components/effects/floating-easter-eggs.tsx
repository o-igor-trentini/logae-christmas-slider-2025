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

      // Limpar eggs antigos e gerar novos periodicamente
      setTimeout(() => {
        setEggs((prev) => prev.slice(-3)); // Manter apenas os últimos 3
        runGeneration();
      }, 10000);
    };

    runGeneration();
  }, []);

  return (
    <div className='fixed inset-0 pointer-events-none z-10 overflow-hidden'>
      {eggs.map((egg) => (
        <EasterEggItem key={egg.id} egg={egg} />
      ))}
    </div>
  );
}

