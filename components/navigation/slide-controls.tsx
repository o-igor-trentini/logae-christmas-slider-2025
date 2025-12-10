'use client';

import { motion } from 'framer-motion';

interface SlideControlsProps {
    isVisible: boolean;
}

export function SlideControls({ isVisible }: SlideControlsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className='absolute top-6 left-6 text-white/60 text-sm z-20 bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10 pointer-events-none'
        >
            <p className='font-semibold mb-2 text-white/80'>⌨️ Controles:</p>
            <div className='space-y-1'>
                <p className='flex items-center gap-2'>
                    <span className='px-2 py-0.5 rounded bg-white/10 font-mono text-xs'>←</span>
                    <span className='px-2 py-0.5 rounded bg-white/10 font-mono text-xs'>→</span>
                    <span>Navegar</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='px-2 py-0.5 rounded bg-white/10 font-mono text-xs'>ESPAÇO</span>
                    <span>Pausar/Retomar</span>
                </p>
            </div>
        </motion.div>
    );
}
