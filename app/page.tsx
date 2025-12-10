'use client';

import { useState, useEffect, useMemo } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { EasterEggHandler } from '@/components/effects/easter-egg-handler';
import { FloatingEasterEggs } from '@/components/effects/floating-easter-eggs';
import { SlideControls } from '@/components/navigation/slide-controls';
import { SlideNavigation } from '@/components/navigation/slide-navigation';
import { CollaboratorSlide } from '@/components/slides/collaborator-slide';
import { DeploysSlide } from '@/components/slides/deploys-slide';
import { FirefightersSlide } from '@/components/slides/firefighters-slide';
import { StatisticSlideComponent } from '@/components/slides/statistic-slide';
import { generateSlides } from '@/lib/utils/slide-generator';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [direction, setDirection] = useState(0);

    // Gera os slides uma única vez com a configuração desejada
    const ALL_SLIDES = useMemo(
        () =>
            generateSlides({
                collaboratorsPerStatistic: 2, // A cada 2 colaboradores, mostra 1 estatística
                includeFirefighters: true, // Inclui slide de bombeiros no final
                shuffleCollaborators: false, // Não embaralha colaboradores
                shuffleStatistics: false, // Não embaralha estatísticas
            }),
        [],
    );

    useEffect(() => {
        if (!isAutoPlay) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % ALL_SLIDES.length);
        }, 8000);

        return () => clearInterval(timer);
    }, [isAutoPlay]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                setDirection(-1);
                setCurrentSlide((prev) => (prev - 1 + ALL_SLIDES.length) % ALL_SLIDES.length);
                setIsAutoPlay(false);
            } else if (e.key === 'ArrowRight') {
                setDirection(1);
                setCurrentSlide((prev) => (prev + 1) % ALL_SLIDES.length);
                setIsAutoPlay(false);
            } else if (e.key === ' ') {
                e.preventDefault();
                setIsAutoPlay(!isAutoPlay);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isAutoPlay]);

    const slide = ALL_SLIDES[currentSlide];

    const slideVariants = {
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

    return (
        <>
            <EasterEggHandler />
            <FloatingEasterEggs />

            <div className='relative w-full h-screen bg-black overflow-hidden'>
                {/* Background elements */}
                <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                    <div className='absolute top-0 left-1/4 w-[600px] h-[600px] bg-linear-to-br from-[#1CBA89] via-[#064635] to-transparent opacity-20 rounded-full blur-3xl animate-pulse'></div>
                    <div
                        className='absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-linear-to-br from-[#064635] to-[#1CBA89] opacity-10 rounded-full blur-3xl animate-pulse'
                        style={{ animationDelay: '1s' }}
                    ></div>
                </div>

                {/* Slides container */}
                <AnimatePresence initial={false} custom={direction} mode='wait'>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 },
                        }}
                        className='absolute inset-0'
                    >
                        {slide?.type === 'collaborator' ? (
                            <CollaboratorSlide data={slide.data} />
                        ) : slide?.type === 'statistic' ? (
                            <StatisticSlideComponent data={slide.data} />
                        ) : slide?.type === 'deploys' ? (
                            <DeploysSlide data={slide.data} />
                        ) : slide?.type === 'firefighters' ? (
                            <FirefightersSlide data={slide.data} />
                        ) : (
                            <div className='w-full min-h-screen flex items-center justify-center px-8'>
                                {/* Placeholder for unknown slide types */}
                                <div className='relative w-full max-w-4xl rounded-3xl overflow-hidden'>
                                    <div className='absolute inset-0 bg-linear-to-br from-black/80 via-gray-950/85 to-black/80 backdrop-blur-sm'></div>
                                    <div className='relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-20'>
                                        <motion.h2 className='text-6xl md:text-7xl font-bold mb-12 text-white'>
                                            Slide Type Not Supported
                                        </motion.h2>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                <SlideNavigation
                    totalSlides={ALL_SLIDES.length}
                    currentSlide={currentSlide}
                    onSlideChange={(index) => {
                        setDirection(index > currentSlide ? 1 : -1);
                        setCurrentSlide(index);
                        setIsAutoPlay(false);
                    }}
                    isAutoPlay={isAutoPlay}
                />

                <SlideControls />
            </div>
        </>
    );
}
