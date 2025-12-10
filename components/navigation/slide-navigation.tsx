'use client';

import { motion } from 'framer-motion';

interface SlideNavigationProps {
    totalSlides: number;
    currentSlide: number;
    onSlideChange: (index: number) => void;
    isAutoPlay: boolean;
    isVisible: boolean;
}

export function SlideNavigation({
    totalSlides,
    currentSlide,
    onSlideChange,
    isAutoPlay,
    isVisible,
}: SlideNavigationProps) {
    return (
        <>
            {/* Navigation counter at bottom */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className='absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20'
            >
                <div className='flex items-center gap-4 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3'>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onSlideChange((currentSlide - 1 + totalSlides) % totalSlides)}
                        className='text-white/80 hover:text-white transition-colors'
                        aria-label='Slide anterior'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <polyline points='15 18 9 12 15 6'></polyline>
                        </svg>
                    </motion.button>

                    <div className='text-white font-medium text-sm min-w-20 text-center'>
                        <span className='text-lg font-bold'>{currentSlide + 1}</span>
                        <span className='text-white/60 mx-1'>/</span>
                        <span className='text-white/60'>{totalSlides}</span>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onSlideChange((currentSlide + 1) % totalSlides)}
                        className='text-white/80 hover:text-white transition-colors'
                        aria-label='Próximo slide'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <polyline points='9 18 15 12 9 6'></polyline>
                        </svg>
                    </motion.button>
                </div>
            </motion.div>

            {/* Auto-play indicator */}
            {isAutoPlay && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                    className='absolute top-6 right-6 flex items-center gap-2 text-white/60 text-sm z-20 pointer-events-none'
                >
                    <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></div>
                    Executando
                </motion.div>
            )}
        </>
    );
}
