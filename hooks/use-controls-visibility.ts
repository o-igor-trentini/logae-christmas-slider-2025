import { useEffect, useState } from 'react';

interface UseControlsVisibilityOptions {
    /** Tempo em ms antes de ocultar os controles (padrão: 3000) */
    hideDelay?: number;
    /** Se os controles devem estar visíveis inicialmente (padrão: true) */
    initialVisible?: boolean;
}

/**
 * Hook para gerenciar a visibilidade dos controles da interface
 * Oculta automaticamente após período de inatividade
 */
export function useControlsVisibility({ hideDelay = 3000, initialVisible = true }: UseControlsVisibilityOptions = {}) {
    const [isVisible, setIsVisible] = useState(initialVisible);
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

    // Função para mostrar controles temporariamente
    const showControls = () => {
        setIsVisible(true);

        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }

        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, hideDelay);

        setHideTimeout(timeout);
    };

    // Detectar movimento do mouse
    useEffect(() => {
        const handleMouseMove = () => {
            showControls();
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
        };
    }, [hideTimeout, hideDelay]);

    return {
        isVisible,
        showControls,
    };
}
