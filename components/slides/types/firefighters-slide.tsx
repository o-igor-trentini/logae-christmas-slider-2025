'use client';

import { motion } from 'framer-motion';

interface FirefightersData {
    title: string;
    emoji: string;
    mainStat: string;
    mainStatLabel: string;
    description: string;
    benefits: string[];
}

interface FirefightersSlideProps {
    data: FirefightersData;
}

export function FirefightersSlide({ data }: FirefightersSlideProps) {
    return (
        <div className='w-full h-screen flex items-center justify-center px-8'>
            <div className='relative w-full max-w-4xl rounded-3xl overflow-hidden'>
                <div className='absolute inset-0 bg-linear-to-br from-black/80 via-gray-950/85 to-black/80 backdrop-blur-sm'></div>

                <div className='absolute inset-0 rounded-3xl bg-linear-to-r from-red-600/20 via-orange-600/20 to-red-600/20 pointer-events-none'></div>

                <div className='relative z-10 flex flex-col items-center justify-center text-center p-12'>
                    {/* Large emoji with animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className='text-7xl mb-6'
                    >
                        <motion.span
                            animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                            }}
                        >
                            {data.emoji}
                        </motion.span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className='text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent'
                    >
                        {data.title}
                    </motion.h2>

                    {/* Main stat */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className='mb-8'
                    >
                        <div className='text-7xl font-black text-red-500 mb-2'>{data.mainStat}</div>
                        <div className='text-2xl font-bold text-orange-400'>{data.mainStatLabel}</div>
                    </motion.div>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className='h-1 w-40 mx-auto mb-8 bg-linear-to-r from-red-600 via-orange-500 to-red-600 rounded-full'
                    ></motion.div>

                    {/* Main description */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='text-lg text-white mb-8 leading-relaxed max-w-2xl'
                    >
                        {data.description}
                    </motion.p>

                    {/* Benefits list */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'
                    >
                        {data.benefits.map((benefit: string, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{
                                    opacity: 0,
                                    x: idx % 2 === 0 ? -20 : 20,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.65 + idx * 0.1,
                                    duration: 0.5,
                                }}
                                className='p-3 rounded-xl bg-linear-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 hover:border-red-500/60 transition-colors'
                            >
                                <p className='text-base font-semibold text-orange-300'>{benefit}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export type { FirefightersData };
