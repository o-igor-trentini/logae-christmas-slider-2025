import { COLLABORATORS, type Collaborator } from '@/lib/constants/collaborators';
import { STATISTICS_SLIDES, type StatisticSlide } from '@/lib/constants/statistics';

// Tipos para os slides
export type SlideType =
    | { type: 'collaborator'; data: Collaborator }
    | { type: 'statistic'; data: StatisticSlide }
    | { type: 'deploys'; data: DeploysData }
    | { type: 'firefighters'; data: FirefightersData };

export interface DeploysData {
    title: string;
    subtitle: string;
    production: number;
    staging: number;
    develop: number;
    others: number;
}

export interface FirefightersData {
    title: string;
    emoji: string;
    mainStat: string;
    mainStatLabel: string;
    description: string;
    benefits: string[];
}

interface SlideGeneratorConfig {
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

const defaultConfig: SlideGeneratorConfig = {
    collaboratorsPerStatistic: 2,
    includeDeploys: true,
    includeFirefighters: true,
    shuffleCollaborators: false,
    shuffleStatistics: false,
};

/**
 * Embaralha um array usando o algoritmo Fisher-Yates
 */
function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Gera a lista completa de slides baseado na configuração
 *
 * Lógica:
 * 1. Intercala colaboradores com estatísticas baseado em collaboratorsPerStatistic
 * 2. Se sobrar estatísticas, adiciona no final
 * 3. Se configurado, adiciona slide de bombeiros no final
 *
 * @param config - Configuração para geração dos slides
 * @returns Array com todos os slides na ordem configurada
 */
export function generateSlides(config: Partial<SlideGeneratorConfig> = {}): SlideType[] {
    const finalConfig = { ...defaultConfig, ...config };
    const slides: SlideType[] = [];

    // Prepara os dados
    let collaborators = [...COLLABORATORS];
    let statistics = [...STATISTICS_SLIDES];

    if (finalConfig.shuffleCollaborators) {
        collaborators = shuffle(collaborators);
    }

    if (finalConfig.shuffleStatistics) {
        statistics = shuffle(statistics);
    }

    // Índice para controlar qual estatística usar
    let statisticIndex = 0;

    // Intercala colaboradores com estatísticas
    collaborators.forEach((collaborator, index) => {
        // Adiciona o slide do colaborador
        slides.push({
            type: 'collaborator',
            data: collaborator,
        });

        // Verifica se deve adicionar uma estatística
        const shouldAddStatistic =
            (index + 1) % finalConfig.collaboratorsPerStatistic === 0 && statisticIndex < statistics.length;

        if (shouldAddStatistic) {
            slides.push({
                type: 'statistic',
                data: statistics[statisticIndex],
            });
            statisticIndex++;
        }
    });

    // Adiciona estatísticas restantes (se houver)
    while (statisticIndex < statistics.length) {
        slides.push({
            type: 'statistic',
            data: statistics[statisticIndex],
        });
        statisticIndex++;
    }

    // Adiciona slide de deploys
    if (finalConfig.includeDeploys) {
        slides.push({
            type: 'deploys',
            data: {
                title: 'Deploys',
                subtitle: 'Sucessos desde 01/01/2025',
                production: 1032,
                staging: 2460,
                develop: 2945,
                others: 644,
            },
        });
    }

    // Adiciona slide de bombeiros no final
    if (finalConfig.includeFirefighters) {
        slides.push({
            type: 'firefighters',
            data: {
                title: 'Bombeiros especializados',
                emoji: '🚒',
                mainStat: '0',
                mainStatLabel: 'incêndios na produção',
                description:
                    "Nosso time é como bombeiros altamente especializados. Quanto menos 'incêndios' (bugs e demandas urgentes) temos que apagar, mais eficiente é nossa operação.",
                benefits: [
                    'Deploy bem-sucedido = incêndio evitado',
                    'Bug prevenido = economia de tempo',
                    'Demanda urgente evitada = trabalho estratégico',
                    'Estamos construindo uma cultura de qualidade',
                ],
            },
        });
    }

    return slides;
}

/**
 * Retorna informações sobre a composição dos slides
 */
export function getSlidesInfo(slides: SlideType[]) {
    const collaboratorCount = slides.filter((s) => s.type === 'collaborator').length;
    const statisticCount = slides.filter((s) => s.type === 'statistic').length;
    const deploysCount = slides.filter((s) => s.type === 'deploys').length;
    const firefightersCount = slides.filter((s) => s.type === 'firefighters').length;

    return {
        total: slides.length,
        collaborators: collaboratorCount,
        statistics: statisticCount,
        deploys: deploysCount,
        firefighters: firefightersCount,
    };
}
