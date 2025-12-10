'use client';

import { motion } from 'framer-motion';

import { AnimatedCounter } from '@/components/animated-counter';
import type { DeploysData } from '@/lib/types/slides';

interface DeploysSlideProps {
    data: DeploysData;
}

export function DeploysSlide({ data }: DeploysSlideProps) {
    const environments = [
        { name: 'Produção', value: data.production, emoji: '🟢', color: 'from-green-500 to-emerald-400' },
        { name: 'Staging/Homolog', value: data.staging, emoji: '🟠', color: 'from-orange-500 to-amber-400' },
        { name: 'Develop', value: data.develop, emoji: '🔵', color: 'from-blue-500 to-cyan-400' },
        { name: 'Outros', value: data.others, emoji: '⚪', color: 'from-gray-400 to-gray-300' },
    ];

    const total = data.production + data.staging + data.develop + data.others;

    return (
        <div className='w-full h-screen flex items-center justify-center px-8'>
            <div className='relative w-full max-w-4xl'>
                {/* Background glow */}
                <div className='absolute inset-0 bg-linear-to-br from-[#1CBA89]/20 via-[#064635]/10 to-transparent blur-3xl'></div>

                {/* Main container */}
                <div className='relative rounded-3xl overflow-hidden border-2 border-[#1CBA89]/30 backdrop-blur-xl bg-black/40'>
                    {/* Header */}
                    <div className='text-center py-8 px-6 border-b border-[#1CBA89]/20'>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className='mb-2'
                        >
                            <span className='text-6xl'>🚀</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className='text-4xl md:text-5xl font-bold text-white mb-2'
                        >
                            {data.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className='text-xl text-[#1CBA89] font-semibold'
                        >
                            {data.subtitle}
                        </motion.p>
                    </div>

                    {/* Stats grid */}
                    <div className='p-8 space-y-6'>
                        {environments.map((env, index) => (
                            <motion.div
                                key={env.name}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                className='flex items-center justify-between p-6 rounded-2xl bg-linear-to-r from-white/5 to-white/2 border border-white/10 hover:border-[#1CBA89]/30 transition-all duration-300'
                            >
                                <div className='flex items-center gap-4'>
                                    <motion.span
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: index * 0.2,
                                        }}
                                        className='text-4xl'
                                    >
                                        {env.emoji}
                                    </motion.span>
                                    <span className='text-2xl font-semibold text-white'>{env.name}</span>
                                </div>
                                <div
                                    className={`text-5xl font-black bg-linear-to-r ${env.color} bg-clip-text text-transparent`}
                                >
                                    <AnimatedCounter value={env.value} duration={2} />
                                </div>
                            </motion.div>
                        ))}

                        {/* Total */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                            className='mt-8 pt-6 border-t-2 border-[#1CBA89]/30'
                        >
                            <div className='flex items-center justify-between p-6 rounded-2xl bg-linear-to-r from-[#1CBA89]/10 to-[#064635]/10 border-2 border-[#1CBA89]/50'>
                                <div className='flex items-center gap-4'>
                                    <motion.span
                                        animate={{
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: 'linear',
                                        }}
                                        className='text-4xl'
                                    >
                                        ⚡
                                    </motion.span>
                                    <span className='text-3xl font-bold text-white'>Total de Deploys</span>
                                </div>
                                <div className='text-6xl font-black bg-linear-to-r from-[#1CBA89] via-white to-[#064635] bg-clip-text text-transparent'>
                                    <AnimatedCounter value={total} duration={2.5} />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative corner accents */}
                    <div className='absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#1CBA89]/30 rounded-tr-2xl'></div>
                    <div className='absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#1CBA89]/30 rounded-bl-2xl'></div>
                </div>
            </div>
        </div>
    );
}
