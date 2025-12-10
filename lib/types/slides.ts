import type { Collaborator } from '@/lib/constants/slides/collaborators';
import type { StatisticSlide } from '@/lib/constants/slides/statistics';

// Enum para tipos de slides
export enum SlideTypeEnum {
    COLLABORATOR = 'collaborator',
    STATISTIC = 'statistic',
    DEPLOYS = 'deploys',
    DEMANDS = 'demands',
    FIREFIGHTERS = 'firefighters',
    VIDEO = 'video',
}

// Interface para dados de deploys
export interface DeploysData {
    title: string;
    subtitle: string;
    production: number;
    staging: number;
    develop: number;
    others: number;
}

// Interface para dados de bombeiros
export interface FirefightersData {
    title: string;
    emoji: string;
    mainStat: string;
    mainStatLabel: string;
    description: string;
    benefits: string[];
}

// Interface para dados de demandas
export interface DemandsData {
    title: string;
    subtitle: string;
    total: number;
    news: number;
    updates: {
        total: number;
        products: {
            name: string;
            value: number;
        }[];
    };
}

// Interface para dados de vídeo
export interface VideoData {
    title: string;
    subtitle?: string;
    videoSrc: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

// Tipos para os slides
export type SlideType =
    | { type: SlideTypeEnum.COLLABORATOR; data: Collaborator }
    | { type: SlideTypeEnum.STATISTIC; data: StatisticSlide }
    | { type: SlideTypeEnum.DEPLOYS; data: DeploysData }
    | { type: SlideTypeEnum.DEMANDS; data: DemandsData }
    | { type: SlideTypeEnum.FIREFIGHTERS; data: FirefightersData }
    | { type: SlideTypeEnum.VIDEO; data: VideoData };

// Interface de configuração do gerador de slides
export interface SlideGeneratorConfig {
    /** Quantos slides de colaboradores antes de inserir uma estatística */
    collaboratorsPerStatistic: number;
    /** Se deve incluir o slide de deploys */
    includeDeploys: boolean;
    /** Se deve incluir o slide de demandas */
    includeDemands: boolean;
    /** Se deve incluir slides de vídeo */
    includeVideos: boolean;
    /** Se deve incluir o slide de bombeiros no final */
    includeFirefighters: boolean;
    /** Se deve embaralhar os colaboradores */
    shuffleCollaborators: boolean;
    /** Se deve embaralhar as estatísticas */
    shuffleStatistics: boolean;
}

// Interface de informações sobre composição dos slides
export interface SlidesInfo {
    total: number;
    collaborators: number;
    statistics: number;
    deploys: number;
    demands: number;
    videos: number;
    firefighters: number;
}
