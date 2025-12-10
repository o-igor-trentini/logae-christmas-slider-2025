import { DEFAULT_SLIDE_CONFIG } from '@/lib/config/slides.config';
import { COLLABORATORS } from '@/lib/constants/slides/collaborators';
import { DEMANDS_DATA } from '@/lib/constants/slides/demands';
import { DEPLOYS_DATA } from '@/lib/constants/slides/deploys';
import { FIREFIGHTERS_DATA } from '@/lib/constants/slides/firefighters';
import { STATISTICS_SLIDES } from '@/lib/constants/slides/statistics';
import { VIDEO_SLIDES } from '@/lib/constants/slides/videos';
import { SlideTypeEnum, type SlideType, type SlideGeneratorConfig, type SlidesInfo } from '@/lib/types/slides';

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
    const finalConfig = { ...DEFAULT_SLIDE_CONFIG, ...config };
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
            type: SlideTypeEnum.COLLABORATOR,
            data: collaborator,
        });

        // Verifica se deve adicionar uma estatística
        const shouldAddStatistic =
            (index + 1) % finalConfig.collaboratorsPerStatistic === 0 && statisticIndex < statistics.length;

        if (shouldAddStatistic) {
            slides.push({
                type: SlideTypeEnum.STATISTIC,
                data: statistics[statisticIndex],
            });
            statisticIndex++;
        }
    });

    // Adiciona estatísticas restantes (se houver)
    while (statisticIndex < statistics.length) {
        slides.push({
            type: SlideTypeEnum.STATISTIC,
            data: statistics[statisticIndex],
        });
        statisticIndex++;
    }

    // Adiciona slide de deploys
    if (finalConfig.includeDeploys) {
        slides.push({
            type: SlideTypeEnum.DEPLOYS,
            data: DEPLOYS_DATA,
        });
    }

    // Adiciona slide de demandas
    if (finalConfig.includeDemands) {
        slides.push({
            type: SlideTypeEnum.DEMANDS,
            data: DEMANDS_DATA,
        });
    }

    // Adiciona slides de vídeo
    if (finalConfig.includeVideos) {
        VIDEO_SLIDES.forEach((video) => {
            slides.push({
                type: SlideTypeEnum.VIDEO,
                data: video,
            });
        });
    }

    // Adiciona slide de bombeiros no final
    if (finalConfig.includeFirefighters) {
        slides.push({
            type: SlideTypeEnum.FIREFIGHTERS,
            data: FIREFIGHTERS_DATA,
        });
    }

    return slides;
}

/**
 * Retorna informações sobre a composição dos slides
 */
export function getSlidesInfo(slides: SlideType[]): SlidesInfo {
    const collaboratorCount = slides.filter((s) => s.type === SlideTypeEnum.COLLABORATOR).length;
    const statisticCount = slides.filter((s) => s.type === SlideTypeEnum.STATISTIC).length;
    const deploysCount = slides.filter((s) => s.type === SlideTypeEnum.DEPLOYS).length;
    const demandsCount = slides.filter((s) => s.type === SlideTypeEnum.DEMANDS).length;
    const videosCount = slides.filter((s) => s.type === SlideTypeEnum.VIDEO).length;
    const firefightersCount = slides.filter((s) => s.type === SlideTypeEnum.FIREFIGHTERS).length;

    return {
        total: slides.length,
        collaborators: collaboratorCount,
        statistics: statisticCount,
        deploys: deploysCount,
        demands: demandsCount,
        videos: videosCount,
        firefighters: firefightersCount,
    };
}
