'use client';

import { motion } from 'framer-motion';

import type { Collaborator } from '@/lib/constants/collaborators';

interface ColaboradorSlideProps {
  data: Collaborator;
}

export function ColaboradorSlide({ data }: ColaboradorSlideProps) {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='relative w-full h-screen max-w-7xl mx-auto px-8 flex items-center justify-between gap-16'>
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='flex-1 flex justify-center flex-shrink-0'
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
            {/* Outer glow layer */}
            <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1CBA89] via-[#064635] to-[#1CBA89] blur-2xl opacity-40 -z-10'></div>

            {/* Main container with gradient border effect */}
            <div className='relative w-96 h-[480px] rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl border-2 border-transparent bg-gradient-to-br from-[#1CBA89]/20 to-[#064635]/20 p-[2px]'>
              {/* Gradient border animation */}
              <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-[#1CBA89] via-transparent to-[#064635] opacity-60 animate-pulse z-0'></div>

              {/* Image container */}
              <div className='relative w-full h-full rounded-[28px] overflow-hidden z-10 bg-black'>
                <img
                  src={data.foto || '/placeholder.svg'}
                  alt={data.nome}
                  className='w-full h-full object-cover'
                />

                {/* Glossy shine effect */}
                <div className='absolute inset-0 rounded-[28px] bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 pointer-events-none'></div>

                {/* Corner accents */}
                <div className='absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#1CBA89] opacity-50 rounded-tr-xl'></div>
                <div className='absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#1CBA89] opacity-50 rounded-bl-xl'></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='flex-1 flex-shrink-0'
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='inline-block mb-4'
          >
            <div className='px-4 py-1.5 rounded-full bg-gradient-to-r from-[#064635] to-[#1CBA89] bg-opacity-20 border border-[#1CBA89] border-opacity-50'>
              <span className='text-sm font-bold text-white'>{data.time}</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className='text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#1CBA89] via-white to-[#064635] bg-clip-text text-transparent'
          >
            {data.nome}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='text-2xl font-semibold text-[#1CBA89] mb-4'
          >
            {data.funcao}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className='h-1 w-24 mb-4 bg-gradient-to-r from-[#064635] via-[#1CBA89] to-[#064635] rounded-full origin-left'
          ></motion.div>

          {/* Short description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='text-lg text-white mb-4 leading-relaxed max-w-lg italic'
          >
            "{data.descricao}"
          </motion.p>

          {/* Full description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className='text-base text-gray-300 mb-6 leading-relaxed max-w-lg'
          >
            {data.descricaoCompleta}
          </motion.p>

          {/* Decoration element */}
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
