'use client';

import { motion } from 'framer-motion';

import { ContentRenderer } from '@/components/content-renderer';
import type { StatisticSlide } from '@/lib/constants/statistics';

interface StatisticSlideComponentProps {
    data: StatisticSlide;
}

export function StatisticSlideComponent({ data }: StatisticSlideComponentProps) {
    return (
        <div className='w-full h-screen flex items-center justify-center px-8'>
            {/* Distinct container for statistics with elevated appearance */}
            <div className='relative w-full max-w-3xl rounded-3xl overflow-hidden'>
                <div className='absolute inset-0 bg-linear-to-br from-black/80 via-gray-950/85 to-black/80 backdrop-blur-sm'></div>

                <div className='absolute inset-0 rounded-3xl bg-linear-to-r from-(--logae-primary)/30 via-transparent to-(--logae-secondary)/30 pointer-events-none'></div>

                {/* Main content */}
                <div className='relative z-10 flex flex-col items-center justify-center text-center p-12'>
                    {/* Title with emoji - discrete animation */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className='text-4xl md:text-5xl font-bold mb-8 text-white'
                    >
                        <motion.span
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: 'easeInOut',
                            }}
                            className='inline-block mr-4'
                        >
                            {data.emoji}
                        </motion.span>
                        {data.title}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className='mb-6'
                    >
                        <ContentRenderer
                            content={data.value}
                            className={`text-7xl font-black bg-linear-to-r ${data.color} bg-clip-text text-transparent`}
                            duration={2}
                        />
                    </motion.div>

                    {/* Unit */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className={`text-2xl font-semibold mb-4 bg-linear-to-r ${data.color} bg-clip-text text-transparent`}
                    >
                        {data.unit}
                    </motion.p>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className='h-1 w-32 mx-auto mb-6 bg-linear-to-r from-(--logae-secondary) via-(--logae-primary) to-(--logae-secondary) rounded-full'
                    ></motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='text-xl text-gray-300 leading-relaxed max-w-2xl'
                    >
                        {data.description}
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
