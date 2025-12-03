'use client';

export function SlideControls() {
  return (
    <div className='absolute top-6 left-6 text-white/60 text-sm z-20 bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10'>
      <p className='font-semibold mb-2 text-white/80'>⌨️ Controles:</p>
      <div className='space-y-1'>
        <p className='flex items-center gap-2'>
          <span className='px-2 py-0.5 rounded bg-white/10 font-mono text-xs'>
            ←
          </span>
          <span className='px-2 py-0.5 rounded bg-white/10 font-mono text-xs'>
            →
          </span>
          <span>Navegar</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='px-2 py-0.5 rounded bg-white/10 font-mono text-xs'>
            ESPAÇO
          </span>
          <span>Pausar/Retomar</span>
        </p>
      </div>
    </div>
  );
}
