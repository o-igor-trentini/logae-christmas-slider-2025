import type { Collaborator } from '@/lib/constants/collaborators';
import type { StatisticSlide } from '@/lib/constants/statistics';

// Enum para tipos de slides
export enum SlideTypeEnum {
    COLLABORATOR = 'collaborator',
    STATISTIC = 'statistic',
    DEPLOYS = 'deploys',
    FIREFIGHTERS = 'firefighters',
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

// Tipos para os slides
export type SlideType =
    | { type: SlideTypeEnum.COLLABORATOR; data: Collaborator }
    | { type: SlideTypeEnum.STATISTIC; data: StatisticSlide }
    | { type: SlideTypeEnum.DEPLOYS; data: DeploysData }
    | { type: SlideTypeEnum.FIREFIGHTERS; data: FirefightersData };

// Interface de configuração do gerador de slides
export interface SlideGeneratorConfig {
    /** Quantos slides de colaboradores antes de inserir uma estatística */
    collaboratorsPerStatistic: number;
    /** Se deve incluir o slide de deploys */
    includeDeploys: boolean;
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
    firefighters: number;
}
