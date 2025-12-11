import type { SlideGeneratorConfig } from '@/lib/types/slides';

/**
 * Modos de exibição que controlam velocidade de transição e autoplay
 */
export enum DisplayMode {
    ULTRA_FAST = 'ultra_fast',
    FAST = 'fast',
    NORMAL = 'normal',
    SLOW = 'slow',
}

/**
 * Interface de configuração de um modo de exibição
 */
export interface DisplayModeConfig {
    /** Label exibido na UI */
    label: string;
    /** Ícone emoji do modo */
    icon: string;
    /** Tempo de autoplay entre slides (ms) */
    autoPlayInterval: number;
    /** Duração da transição de opacidade (s) */
    opacityDuration: number;
    /** Rigidez da animação spring */
    springStiffness: number;
    /** Amortecimento da animação spring */
    springDamping: number;
}

/**
 * Configuração de cada modo de exibição
 */
export const DISPLAY_MODE_CONFIG: Record<DisplayMode, DisplayModeConfig> = {
    [DisplayMode.ULTRA_FAST]: {
        label: 'Rapidão',
        icon: '🚀',
        /** Tempo de autoplay entre slides (ms) */
        autoPlayInterval: 1500,
        /** Duração da transição de opacidade (s) */
        opacityDuration: 0.15,
        /** Rigidez da animação spring */
        springStiffness: 600,
        /** Amortecimento da animação spring */
        springDamping: 45,
    },
    [DisplayMode.FAST]: {
        label: 'Rápido',
        icon: '⚡',
        /** Tempo de autoplay entre slides (ms) */
        autoPlayInterval: 2500,
        /** Duração da transição de opacidade (s) */
        opacityDuration: 0.2,
        /** Rigidez da animação spring */
        springStiffness: 500,
        /** Amortecimento da animação spring */
        springDamping: 40,
    },
    [DisplayMode.NORMAL]: {
        label: 'Normal',
        icon: '▶️',
        /** Tempo de autoplay entre slides (ms) */
        autoPlayInterval: 8000,
        /** Duração da transição de opacidade (s) */
        opacityDuration: 0.5,
        /** Rigidez da animação spring */
        springStiffness: 300,
        /** Amortecimento da animação spring */
        springDamping: 30,
    },
    [DisplayMode.SLOW]: {
        label: 'Lento',
        icon: '🐢',
        /** Tempo de autoplay entre slides (ms) */
        autoPlayInterval: 12000,
        /** Duração da transição de opacidade (s) */
        opacityDuration: 0.8,
        /** Rigidez da animação spring */
        springStiffness: 200,
        /** Amortecimento da animação spring */
        springDamping: 40,
    },
} as const;

/**
 * Modo de exibição padrão
 */
export const DEFAULT_DISPLAY_MODE = DisplayMode.NORMAL;

/**
 * Retorna a configuração de animação para um modo específico
 */
export function getAnimationConfig(mode: DisplayMode) {
    return DISPLAY_MODE_CONFIG[mode];
}

/**
 * Configuração padrão para geração de slides
 */
export const DEFAULT_SLIDE_CONFIG: SlideGeneratorConfig = {
    /** Quantos slides de colaboradores antes de inserir uma estatística */
    collaboratorsPerStatistic: 2,
    /** Se deve incluir o slide de deploys */
    includeDeploys: true,
    /** Se deve incluir o slide de demandas */
    includeDemands: true,
    /** Se deve incluir slides de vídeo */
    includeVideos: true,
    /** Se deve incluir o slide de bombeiros no final */
    includeFirefighters: true,
    /** Se deve embaralhar os colaboradores */
    shuffleCollaborators: false,
    /** Se deve embaralhar as estatísticas */
    shuffleStatistics: false,
};
