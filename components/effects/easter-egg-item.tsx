'use client';

import { useMemo } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { EasterEggType } from '@/lib/constants/easter-eggs';

interface FloatingEasterEgg {
    id: string;
    content: string;
    type: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    duration: number;
    createdAt: number;
}

interface EasterEggItemProps {
    egg: FloatingEasterEgg;
}

export function EasterEggItem({ egg }: EasterEggItemProps) {
    // Gera valores de rotação uma única vez para evitar mudanças durante a animação
    const rotationValues = useMemo(() => {
        return [0, Math.random() * 360, Math.random() * 360];
    }, [egg.id]);

    return (
        <motion.div
            key={egg.id}
            initial={{
                left: `${egg.startX}%`,
                top: `${egg.startY}%`,
                opacity: 0,
                scale: 0,
            }}
            animate={{
                left: `${egg.endX}%`,
                top: `${egg.endY}%`,
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                rotate: rotationValues,
            }}
            transition={{
                duration: egg.duration,
                ease: 'easeInOut',
            }}
            className='fixed pointer-events-none'
        >
            {egg.type === EasterEggType.Emoji ? (
                <div className='text-6xl drop-shadow-lg filter blur-0 hover:drop-shadow-xl transition-all'>
                    {egg.content}
                </div>
            ) : egg.type === EasterEggType.Image ? (
                <div className='relative w-40 h-40 drop-shadow-lg'>
                    <Image
                        src={egg.content || '/placeholder.svg'}
                        alt='Easter egg'
                        fill
                        className='object-contain'
                        unoptimized
                    />
                </div>
            ) : (
                <div className='px-4 py-2 bg-linear-to-r from-(--logae-primary)/40 to-(--logae-secondary)/40 rounded-full backdrop-blur-sm border border-(--logae-primary)/50 whitespace-nowrap'>
                    <span className='text-white font-bold text-lg drop-shadow-lg'>{egg.content}</span>
                </div>
            )}
        </motion.div>
    );
}

export type { FloatingEasterEgg };
