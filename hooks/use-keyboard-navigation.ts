import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
    onPrevious: () => void;
    onNext: () => void;
    onToggleAutoPlay: () => void;
    onToggleSpeedMode?: () => void;
}

export function useKeyboardNavigation({
    onPrevious,
    onNext,
    onToggleAutoPlay,
    onToggleSpeedMode,
}: UseKeyboardNavigationProps) {
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                onPrevious();
            } else if (e.key === 'ArrowRight') {
                onNext();
            } else if (e.key === ' ') {
                e.preventDefault();
                onToggleAutoPlay();
            } else if (e.key.toLocaleLowerCase() === 'm' && onToggleSpeedMode) {
                e.preventDefault();
                onToggleSpeedMode();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [onPrevious, onNext, onToggleAutoPlay, onToggleSpeedMode]);
}
