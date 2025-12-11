'use client';

import { motion, type Variants } from 'framer-motion';

import type { DISPLAY_MODE_CONFIG } from '@/lib/config/slides.config';
import type { SlideType } from '@/lib/types/slides';

import { SlideRenderer } from './slide-renderer';

interface AnimatedSlideProps {
    slide: SlideType;
    direction: number;
    animationConfig: (typeof DISPLAY_MODE_CONFIG)[keyof typeof DISPLAY_MODE_CONFIG];
}

const slideVariants: Variants = {
    enter: (dir: number) => ({
        x: dir > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (dir: number) => ({
        zIndex: 0,
        x: dir < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

export function AnimatedSlide({ slide, direction, animationConfig }: AnimatedSlideProps) {
    return (
        <motion.div
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
                x: {
                    type: 'spring',
                    stiffness: animationConfig.springStiffness,
                    damping: animationConfig.springDamping,
                },
                opacity: { duration: animationConfig.opacityDuration },
            }}
            className='absolute inset-0'
        >
            <SlideRenderer slide={slide} />
        </motion.div>
    );
}
