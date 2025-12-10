'use client';

import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import type { VideoData } from '@/lib/types/slides';

interface VideoSlideProps {
    data: VideoData;
}

export function VideoSlide({ data }: VideoSlideProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Auto play quando disponível
        if (data.autoPlay) {
            video.play().catch(() => {
                // Ignora erro se autoplay não for permitido
            });
        }

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, [data.autoPlay]);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    return (
        <div className='w-full h-screen flex items-center justify-center px-8'>
            <div className='relative w-full max-w-6xl'>
                {/* Background glow */}
                <div className='absolute inset-0 bg-linear-to-br from-(--logae-primary)/20 via-(--logae-secondary)/10 to-transparent blur-3xl'></div>

                {/* Main container */}
                <div className='relative rounded-3xl overflow-hidden border-2 border-(--logae-primary)/30 backdrop-blur-xl bg-black/40'>
                    {/* Header */}
                    {(data.title || data.subtitle) && (
                        <div className='text-center py-6 px-6 border-b border-(--logae-primary)/20'>
                            {data.title && (
                                <motion.h2
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className='text-3xl md:text-4xl font-bold text-white mb-2'
                                >
                                    {data.title}
                                </motion.h2>
                            )}
                            {data.subtitle && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className='text-lg text-(--logae-primary) font-semibold'
                                >
                                    {data.subtitle}
                                </motion.p>
                            )}
                        </div>
                    )}

                    {/* Video container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className='relative group'
                    >
                        <video
                            ref={videoRef}
                            src={data.videoSrc}
                            loop={data.loop ?? true}
                            muted={data.muted ?? false}
                            playsInline
                            className='w-full h-auto max-h-[70vh] object-contain bg-black'
                            onClick={togglePlay}
                        />

                        {/* Play/Pause overlay */}
                        <button
                            onClick={togglePlay}
                            className='absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                            aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                        >
                            {!isPlaying && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className='w-20 h-20 rounded-full bg-white/90 flex items-center justify-center'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-10 h-10 text-black ml-1'
                                    >
                                        <path d='M8 5v14l11-7z' />
                                    </svg>
                                </motion.div>
                            )}
                        </button>
                    </motion.div>

                    {/* Decorative corner accents */}
                    <div className='absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-(--logae-primary)/30 rounded-tr-2xl'></div>
                    <div className='absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-(--logae-primary)/30 rounded-bl-2xl'></div>
                </div>
            </div>
        </div>
    );
}
