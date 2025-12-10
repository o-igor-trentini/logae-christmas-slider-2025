'use client';

import { motion } from 'framer-motion';

import { AnimatedCounter } from '@/components/ui/animated-counter';
import type { DemandsData } from '@/lib/types/slides';

interface DemandsSlideProps {
    data: DemandsData;
}

export function DemandsSlide({ data }: DemandsSlideProps) {
    return (
        <div className='w-full h-screen flex items-center justify-center px-8'>
            <div className='relative w-full max-w-5xl'>
                {/* Background glow */}
                <div className='absolute inset-0 bg-linear-to-br from-(--logae-primary)/20 via-(--logae-secondary)/10 to-transparent blur-3xl'></div>

                {/* Main container */}
                <div className='relative rounded-3xl overflow-hidden border-2 border-(--logae-primary)/30 backdrop-blur-xl bg-black/40'>
                    {/* Header */}
                    <div className='text-center py-5 px-6 border-b border-(--logae-primary)/20'>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className='mb-1'
                        >
                            <span className='text-5xl'>✅</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className='text-3xl md:text-4xl font-bold text-white mb-1'
                        >
                            {data.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className='text-lg text-(--logae-primary) font-semibold'
                        >
                            {data.subtitle}
                        </motion.p>
                    </div>

                    {/* Stats content */}
                    <div className='p-6 space-y-4'>
                        {/* Total tasks */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className='flex items-center justify-between p-5 rounded-2xl bg-linear-to-r from-(--logae-primary)/10 to-(--logae-secondary)/10 border-2 border-(--logae-primary)/50'
                        >
                            <div className='flex items-center gap-3'>
                                <motion.span
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: 'linear',
                                    }}
                                    className='text-3xl'
                                >
                                    🎯
                                </motion.span>
                                <span className='text-2xl font-bold text-white'>Total de Tarefas</span>
                            </div>
                            <div className='text-5xl font-black bg-linear-to-r from-(--logae-primary) via-white to-(--logae-secondary) bg-clip-text text-transparent'>
                                <AnimatedCounter value={data.total} duration={2.5} />
                            </div>
                        </motion.div>

                        {/* News */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className='flex items-center justify-between p-4 rounded-2xl bg-linear-to-r from-white/5 to-white/2 border border-white/10 hover:border-(--logae-primary)/30 transition-all duration-300'
                        >
                            <div className='flex items-center gap-3'>
                                <motion.span
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                    }}
                                    className='text-3xl'
                                >
                                    ✨
                                </motion.span>
                                <span className='text-xl font-semibold text-white'>Novidades</span>
                            </div>
                            <div className='text-4xl font-black bg-linear-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent'>
                                <AnimatedCounter value={data.news} duration={2} />
                            </div>
                        </motion.div>

                        {/* Updates section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className='space-y-3'
                        >
                            {/* Updates header */}
                            <div className='flex items-center justify-between p-4 rounded-2xl bg-linear-to-r from-white/5 to-white/2 border border-white/10'>
                                <div className='flex items-center gap-3'>
                                    <motion.span
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: 0.2,
                                        }}
                                        className='text-3xl'
                                    >
                                        🔄
                                    </motion.span>
                                    <span className='text-xl font-semibold text-white'>Atualizações</span>
                                </div>
                                <div className='text-4xl font-black bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
                                    <AnimatedCounter value={data.updates.total} duration={2} />
                                </div>
                            </div>

                            {/* Products breakdown */}
                            <div className='pl-4 space-y-2'>
                                {data.updates.products.map((product, index) => (
                                    <motion.div
                                        key={product.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                                        className='flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-(--logae-primary)/20 transition-all duration-300'
                                    >
                                        <div className='flex items-center gap-2'>
                                            <span className='text-xl'>📦</span>
                                            <span className='text-base font-medium text-white/90'>{product.name}</span>
                                        </div>
                                        <div className='text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent'>
                                            <AnimatedCounter value={product.value} duration={1.5} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative corner accents */}
                    <div className='absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-(--logae-primary)/30 rounded-tr-2xl'></div>
                    <div className='absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-(--logae-primary)/30 rounded-bl-2xl'></div>
                </div>
            </div>
        </div>
    );
}
