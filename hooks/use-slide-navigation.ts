import { useCallback, useState } from 'react';

interface UseSlideNavigationProps {
    totalSlides: number;
}

export function useSlideNavigation({ totalSlides }: UseSlideNavigationProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const goToSlide = useCallback(
        (index: number) => {
            setDirection(index > currentSlide ? 1 : -1);
            setCurrentSlide(index);
            setIsAutoPlay(false);
        },
        [currentSlide],
    );

    const goToNext = useCallback(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const goToPrevious = useCallback(() => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const toggleAutoPlay = useCallback(() => {
        setIsAutoPlay((prev) => !prev);
    }, []);

    const handleNext = useCallback(() => {
        goToNext();
        setIsAutoPlay(false);
    }, [goToNext]);

    const handlePrevious = useCallback(() => {
        goToPrevious();
        setIsAutoPlay(false);
    }, [goToPrevious]);

    return {
        currentSlide,
        direction,
        isAutoPlay,
        goToSlide,
        goToNext,
        goToPrevious,
        toggleAutoPlay,
        handleNext,
        handlePrevious,
    };
}
