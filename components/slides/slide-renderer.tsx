import type { ComponentType } from 'react';

import { CollaboratorSlide } from '@/components/slides/types/collaborator-slide';
import { DemandsSlide } from '@/components/slides/types/demands-slide';
import { DeploysSlide } from '@/components/slides/types/deploys-slide';
import { FirefightersSlide } from '@/components/slides/types/firefighters-slide';
import { StatisticSlideComponent } from '@/components/slides/types/statistic-slide';
import { VideoSlide } from '@/components/slides/types/video-slide';
import { SlideTypeEnum, type SlideType } from '@/lib/types/slides';

interface SlideRendererProps {
    slide: SlideType;
}

// Mapeamento de tipos de slides para seus respectivos componentes
const SLIDE_COMPONENTS: Record<SlideTypeEnum, ComponentType<{ data: unknown }>> = {
    [SlideTypeEnum.COLLABORATOR]: CollaboratorSlide as ComponentType<{ data: unknown }>,
    [SlideTypeEnum.STATISTIC]: StatisticSlideComponent as ComponentType<{ data: unknown }>,
    [SlideTypeEnum.DEPLOYS]: DeploysSlide as ComponentType<{ data: unknown }>,
    [SlideTypeEnum.DEMANDS]: DemandsSlide as ComponentType<{ data: unknown }>,
    [SlideTypeEnum.FIREFIGHTERS]: FirefightersSlide as ComponentType<{ data: unknown }>,
    [SlideTypeEnum.VIDEO]: VideoSlide as ComponentType<{ data: unknown }>,
};

export function SlideRenderer({ slide }: SlideRendererProps) {
    const SlideComponent = SLIDE_COMPONENTS[slide.type];

    if (!SlideComponent) {
        return (
            <div className='w-full min-h-screen flex items-center justify-center px-8'>
                <div className='relative w-full max-w-4xl rounded-3xl overflow-hidden'>
                    <div className='absolute inset-0 bg-linear-to-br from-black/80 via-gray-950/85 to-black/80 backdrop-blur-sm'></div>
                    <div className='relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-20'>
                        <h2 className='text-6xl md:text-7xl font-bold mb-12 text-white'>Slide não suportado</h2>
                    </div>
                </div>
            </div>
        );
    }

    return <SlideComponent data={slide.data} />;
}
