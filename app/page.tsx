'use client';

import { useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';

import { BackgroundEffects } from '@/components/effects/background-effects';
import { EasterEggHandler } from '@/components/effects/easter-egg-handler';
import { FloatingEasterEggs } from '@/components/effects/floating-easter-eggs';
import { SlideControls } from '@/components/navigation/slide-controls';
import { SlideNavigation } from '@/components/navigation/slide-navigation';
import { AnimatedSlide } from '@/components/slides/animated-slide';
import { useAutoPlay } from '@/hooks/use-auto-play';
import { useControlsVisibility } from '@/hooks/use-controls-visibility';
import { useKeyboardNavigation } from '@/hooks/use-keyboard-navigation';
import { useSlideNavigation } from '@/hooks/use-slide-navigation';
import { generateSlides } from '@/lib/utils/slide-generator';

export default function Home() {
    // Gera os slides uma única vez com a configuração desejada
    const ALL_SLIDES = useMemo(() => generateSlides(), []);

    const { currentSlide, direction, isAutoPlay, goToSlide, goToNext, toggleAutoPlay, handleNext, handlePrevious } =
        useSlideNavigation({ totalSlides: ALL_SLIDES.length });

    // Gerencia visibilidade dos controles
    const { isVisible: showControls, showControls: showControlsTemporarily } = useControlsVisibility();

    // Mostrar controles quando usar teclado
    const handleKeyboardPrevious = () => {
        showControlsTemporarily();
        handlePrevious();
    };

    const handleKeyboardNext = () => {
        showControlsTemporarily();
        handleNext();
    };

    const handleKeyboardToggleAutoPlay = () => {
        showControlsTemporarily();
        toggleAutoPlay();
    };

    useAutoPlay({ isEnabled: isAutoPlay, onNext: goToNext });
    useKeyboardNavigation({
        onPrevious: handleKeyboardPrevious,
        onNext: handleKeyboardNext,
        onToggleAutoPlay: handleKeyboardToggleAutoPlay,
    });

    const slide = ALL_SLIDES[currentSlide];

    return (
        <>
            <EasterEggHandler />
            <FloatingEasterEggs />

            <div
                className='relative w-full h-screen bg-black overflow-hidden'
                style={{ cursor: showControls ? 'default' : 'none' }}
            >
                <BackgroundEffects />

                {/* Slides container */}
                <AnimatePresence initial={false} custom={direction} mode='wait'>
                    <AnimatedSlide key={currentSlide} slide={slide} direction={direction} />
                </AnimatePresence>

                <SlideNavigation
                    totalSlides={ALL_SLIDES.length}
                    currentSlide={currentSlide}
                    onSlideChange={goToSlide}
                    isAutoPlay={isAutoPlay}
                    isVisible={showControls}
                />

                <SlideControls isVisible={showControls} />
            </div>
        </>
    );
}
