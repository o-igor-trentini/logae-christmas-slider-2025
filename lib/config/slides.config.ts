import type { SlideGeneratorConfig } from '@/lib/types/slides';

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
    /** Se deve incluir o slide de bombeiros no final */
    includeFirefighters: true,
    /** Se deve embaralhar os colaboradores */
    shuffleCollaborators: false,
    /** Se deve embaralhar as estatísticas */
    shuffleStatistics: false,
};
