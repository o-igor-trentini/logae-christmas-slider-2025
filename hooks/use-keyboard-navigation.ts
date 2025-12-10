import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
    onPrevious: () => void;
    onNext: () => void;
    onToggleAutoPlay: () => void;
}

export function useKeyboardNavigation({ onPrevious, onNext, onToggleAutoPlay }: UseKeyboardNavigationProps) {
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                onPrevious();
            } else if (e.key === 'ArrowRight') {
                onNext();
            } else if (e.key === ' ') {
                e.preventDefault();
                onToggleAutoPlay();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [onPrevious, onNext, onToggleAutoPlay]);
}
