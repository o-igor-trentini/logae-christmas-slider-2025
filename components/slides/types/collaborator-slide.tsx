'use client';

import { motion } from 'framer-motion';

import type { Collaborator } from '@/lib/constants/slides/collaborators';

interface CollaboratorSlideProps {
    data: Collaborator;
}

export function CollaboratorSlide({ data }: CollaboratorSlideProps) {
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='relative w-full h-screen max-w-7xl mx-auto px-8 flex items-center justify-between gap-16'>
                {/* Lado esquerdo - Imagem */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className='flex-1 flex justify-center shrink-0'
                >
                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'easeInOut',
                        }}
                        className='relative'
                    >
                        {/* Camada de brilho externo */}
                        <div className='absolute inset-0 rounded-3xl bg-linear-to-br from-(--logae-primary) via-(--logae-secondary) to-(--logae-primary) blur-2xl opacity-40 -z-10'></div>

                        {/* Contêiner principal com efeito de borda gradiente */}
                        <div className='relative w-96 h-[480px] rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl border-2 border-transparent bg-linear-to-br from-(--logae-primary)/20 to-(--logae-secondary)/20 p-0.5'>
                            {/* Animação de borda gradiente */}
                            <div className='absolute inset-0 rounded-3xl bg-linear-to-r from-(--logae-primary) via-transparent to-(--logae-secondary) opacity-60 animate-pulse z-0'></div>

                            {/* Contêiner da imagem */}
                            <div className='relative w-full h-full rounded-[28px] overflow-hidden z-10 bg-black'>
                                <img
                                    src={data.photo || '/placeholder.svg'}
                                    alt={data.name}
                                    className='w-full h-full object-cover'
                                />

                                {/* Efeito de brilho glossy */}
                                <div className='absolute inset-0 rounded-[28px] bg-linear-to-tr from-transparent via-white to-transparent opacity-20 pointer-events-none'></div>

                                {/* Acentos de canto */}
                                <div className='absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-(--logae-primary) opacity-50 rounded-tr-xl'></div>
                                <div className='absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-(--logae-primary) opacity-50 rounded-bl-xl'></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Lado direito - Informações */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className='flex-1 shrink-0'
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className='inline-block mb-4'
                    >
                        <div className='px-4 py-1.5 rounded-full bg-linear-to-r from-(--logae-secondary) to-(--logae-primary) bg-opacity-20 border border-(--logae-primary) border-opacity-50'>
                            <span className='text-sm font-bold text-white'>{data.team}</span>
                        </div>
                    </motion.div>

                    {/* Nome */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.5 }}
                        className='text-5xl md:text-6xl font-bold mb-2 bg-linear-to-r from-(--logae-primary) via-white to-(--logae-secondary) bg-clip-text text-transparent'
                    >
                        {data.name}
                    </motion.h1>

                    {/* Função */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='text-2xl font-semibold text-(--logae-primary) mb-4'
                    >
                        {data.role}
                    </motion.p>

                    {/* Linha decorativa */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.55, duration: 0.6 }}
                        className='h-1 w-24 mb-4 bg-linear-to-r from-(--logae-secondary) via-(--logae-primary) to-(--logae-secondary) rounded-full origin-left'
                    ></motion.div>

                    {/* Descrição curta */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='text-lg text-white mb-4 leading-relaxed max-w-lg italic'
                    >
                        "{data.description}"
                    </motion.p>

                    {/* Descrição completa */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65, duration: 0.5 }}
                        className='text-base text-gray-300 mb-6 leading-relaxed max-w-lg'
                    >
                        {data.fullDescription}
                    </motion.p>

                    {/* Elemento decorativo */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'linear',
                        }}
                        className='text-4xl'
                    >
                        🎄
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
