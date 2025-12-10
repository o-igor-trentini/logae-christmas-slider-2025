import { useEffect } from 'react';

interface UseAutoPlayProps {
    isEnabled: boolean;
    interval?: number;
    onNext: () => void;
}

export function useAutoPlay({ isEnabled, interval = 8000, onNext }: UseAutoPlayProps) {
    useEffect(() => {
        if (!isEnabled) return;

        const timer = setInterval(() => {
            onNext();
        }, interval);

        return () => clearInterval(timer);
    }, [isEnabled, interval, onNext]);
}
