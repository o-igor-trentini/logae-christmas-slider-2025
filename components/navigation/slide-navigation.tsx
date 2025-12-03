'use client';

import { motion } from 'framer-motion';

interface SlideNavigationProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  isAutoPlay: boolean;
}

export function SlideNavigation({
  totalSlides,
  currentSlide,
  onSlideChange,
  isAutoPlay,
}: SlideNavigationProps) {
  return (
    <>
      {/* Navigation dots at bottom */}
      <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-20 flex-wrap justify-center max-w-2xl'>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-linear-to-r from-[#1CBA89] to-[#064635] w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      {isAutoPlay && (
        <div className='absolute top-6 right-6 flex items-center gap-2 text-white/60 text-sm z-20'>
          <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></div>
          Executando
        </div>
      )}
    </>
  );
}
