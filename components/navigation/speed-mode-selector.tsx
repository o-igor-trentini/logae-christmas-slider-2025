'use client';

import { motion } from 'framer-motion';

import { DISPLAY_MODE_CONFIG, DisplayMode } from '@/lib/config/slides.config';

interface SpeedModeSelectorProps {
    currentMode: DisplayMode;
    onModeChange: (mode: DisplayMode) => void;
    isVisible: boolean;
}

export function SpeedModeSelector({ currentMode, onModeChange, isVisible }: SpeedModeSelectorProps) {
    const modes = [DisplayMode.ULTRA_FAST, DisplayMode.FAST, DisplayMode.NORMAL, DisplayMode.SLOW];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className='absolute top-6 right-6 z-20'
        >
            <div className='bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10'>
                <p className='text-white/60 text-xs font-semibold mb-2'>⚙️ Velocidade</p>
                <div className='flex gap-2'>
                    {modes.map((mode) => {
                        const config = DISPLAY_MODE_CONFIG[mode];
                        const isActive = currentMode === mode;
                        const timeInSeconds = (config.autoPlayInterval / 1000).toFixed(1).replace('.0', '');

                        return (
                            <button
                                key={mode}
                                onClick={() => onModeChange(mode)}
                                className={`
                                    relative px-3 py-2 rounded-lg text-sm font-medium transition-all
                                    ${
                                        isActive
                                            ? 'bg-white/20 text-white border border-white/30'
                                            : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80'
                                    }
                                `}
                            >
                                <div className='flex flex-col items-center gap-1'>
                                    <span className='text-lg leading-none'>{config.icon}</span>
                                    <span className='text-xs'>{config.label}</span>
                                    <span className='text-[10px] text-white/40'>{timeInSeconds}s</span>
                                </div>
                                {isActive && (
                                    <motion.div
                                        layoutId='activeMode'
                                        className='absolute inset-0 rounded-lg bg-white/10 -z-10'
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
                <p className='text-white/40 text-[10px] mt-2 text-center'>Pressione M para alternar</p>
            </div>
        </motion.div>
    );
}
