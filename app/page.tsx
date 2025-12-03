"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EasterEggHandler } from "@/components/effects/easter-egg-handler";
import { ContentRenderer } from "@/components/content-renderer";
import { FloatingEasterEggs } from "@/components/effects/floating-easter-eggs";
import { COLABORADORES, type Colaborador } from "@/lib/constants/collaborators";
import {
  STATISTICS_SLIDES,
  type StatisticSlide,
} from "@/lib/constants/statistics";

// Tipos para os slides
interface FirefightersData {
  title: string;
  emoji: string;
  mainStat: string;
  mainStatLabel: string;
  description: string;
  benefits: string[];
}

type SlideType =
  | { type: "colaborador"; data: Colaborador }
  | { type: "statistic"; data: StatisticSlide }
  | { type: "firefighters"; data: FirefightersData };

const ALL_SLIDES: SlideType[] = [
  ...COLABORADORES.flatMap((colab, index) => {
    const slides: SlideType[] = [{ type: "colaborador", data: colab }];
    if ((index + 1) % 2 === 0) {
      slides.push({
        type: "statistic",
        data: STATISTICS_SLIDES[Math.floor(index / 2)],
      });
    }
    return slides;
  }),
  ...STATISTICS_SLIDES.slice(Math.ceil(COLABORADORES.length / 2)).map(
    (stat) => ({
      type: "statistic" as const,
      data: stat,
    })
  ),
  {
    type: "firefighters" as const,
    data: {
      title: "Bombeiros Especializados",
      emoji: "🚒",
      mainStat: "0",
      mainStatLabel: "incêndios na produção",
      description:
        "Nosso time é como bombeiros altamente especializados. Quanto menos 'incêndios' (bugs e demandas urgentes) temos que apagar, mais eficiente é nossa operação.",
      benefits: [
        "Deploy bem-sucedido = incêndio evitado",
        "Bug prevenido = economia de tempo",
        "Demanda urgente evitada = trabalho estratégico",
        "Estamos construindo uma cultura de qualidade",
      ],
    },
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % ALL_SLIDES.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setCurrentSlide(
          (prev) => (prev - 1 + ALL_SLIDES.length) % ALL_SLIDES.length
        );
        setIsAutoPlay(false);
      } else if (e.key === "ArrowRight") {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % ALL_SLIDES.length);
        setIsAutoPlay(false);
      } else if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsAutoPlay(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isAutoPlay]);

  const slide = ALL_SLIDES[currentSlide];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <>
      <EasterEggHandler />
      <FloatingEasterEggs />

      <div className="relative w-full h-screen bg-black overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#1CBA89] via-[#064635] to-transparent opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#064635] to-[#1CBA89] opacity-10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Slides container */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 overflow-y-auto"
          >
            {slide?.type === "colaborador" ? (
              // Colaborador Slide
              <div className="w-full min-h-screen flex items-center justify-center">
                <div className="relative w-full h-screen max-w-7xl mx-auto px-8 flex items-center justify-between gap-16">
                  {/* Left side - Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex-1 flex justify-center flex-shrink-0"
                  >
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      {/* Outer glow layer */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1CBA89] via-[#064635] to-[#1CBA89] blur-2xl opacity-40 -z-10"></div>

                      {/* Main container with gradient border effect */}
                      <div className="relative w-96 h-[480px] rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl border-2 border-transparent bg-gradient-to-br from-[#1CBA89]/20 to-[#064635]/20 p-[2px]">
                        {/* Gradient border animation */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#1CBA89] via-transparent to-[#064635] opacity-60 animate-pulse z-0"></div>

                        {/* Image container */}
                        <div className="relative w-full h-full rounded-[28px] overflow-hidden z-10 bg-black">
                          <img
                            src={slide.data.foto || "/placeholder.svg"}
                            alt={slide.data.nome}
                            className="w-full h-full object-cover"
                          />

                          {/* Glossy shine effect */}
                          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 pointer-events-none"></div>

                          {/* Corner accents */}
                          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#1CBA89] opacity-50 rounded-tr-xl"></div>
                          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#1CBA89] opacity-50 rounded-bl-xl"></div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Right side - Information */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex-1 flex-shrink-0"
                  >
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="inline-block mb-4"
                    >
                      <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#064635] to-[#1CBA89] bg-opacity-20 border border-[#1CBA89] border-opacity-50">
                        <span className="text-sm font-bold text-white">
                          {slide.data.time}
                        </span>
                      </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                      className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#1CBA89] via-white to-[#064635] bg-clip-text text-transparent"
                    >
                      {slide.data.nome}
                    </motion.h1>

                    {/* Role */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-2xl font-semibold text-[#1CBA89] mb-4"
                    >
                      {slide.data.funcao}
                    </motion.p>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.55, duration: 0.6 }}
                      className="h-1 w-24 mb-4 bg-gradient-to-r from-[#064635] via-[#1CBA89] to-[#064635] rounded-full origin-left"
                    ></motion.div>

                    {/* Short description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="text-lg text-white mb-4 leading-relaxed max-w-lg italic"
                    >
                      "{slide.data.descricao}"
                    </motion.p>

                    {/* Full description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65, duration: 0.5 }}
                      className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg"
                    >
                      {slide.data.descricaoCompleta}
                    </motion.p>

                    {/* Decoration element */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="text-4xl"
                    >
                      🎄
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            ) : slide?.type === "statistic" ? (
              <div className="w-full h-screen flex items-center justify-center px-8">
                {/* Distinct container for statistics with elevated appearance */}
                <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-950/85 to-black/80 backdrop-blur-sm"></div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#1CBA89]/30 via-transparent to-[#064635]/30 pointer-events-none"></div>

                  {/* Main content */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-12">
                    {/* Title with emoji - discrete animation */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-4xl md:text-5xl font-bold mb-8 text-white"
                    >
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="inline-block mr-4"
                      >
                        {slide.data.emoji}
                      </motion.span>
                      {slide.data.title}
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="mb-6"
                    >
                      <ContentRenderer
                        content={slide.data.value}
                        className={`text-7xl font-black bg-gradient-to-r ${slide.data.color} bg-clip-text text-transparent`}
                        duration={2}
                      />
                    </motion.div>

                    {/* Unit */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className={`text-2xl font-semibold mb-4 bg-gradient-to-r ${slide.data.color} bg-clip-text text-transparent`}
                    >
                      {slide.data.unit}
                    </motion.p>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.45, duration: 0.6 }}
                      className="h-1 w-32 mx-auto mb-6 bg-gradient-to-r from-[#064635] via-[#1CBA89] to-[#064635] rounded-full"
                    ></motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                    >
                      {slide.data.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            ) : slide?.type === "firefighters" ? (
              // Firefighters Slide
              <div className="w-full h-screen flex items-center justify-center px-8">
                <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-950/85 to-black/80 backdrop-blur-sm"></div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-12">
                    {/* Large emoji with animation */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-7xl mb-6"
                    >
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        {slide.data.emoji}
                      </motion.span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent"
                    >
                      {slide.data.title}
                    </motion.h2>

                    {/* Main stat */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-8"
                    >
                      <div className="text-7xl font-black text-red-500 mb-2">
                        {slide.data.mainStat}
                      </div>
                      <div className="text-2xl font-bold text-orange-400">
                        {slide.data.mainStatLabel}
                      </div>
                    </motion.div>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.45, duration: 0.6 }}
                      className="h-1 w-40 mx-auto mb-8 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-full"
                    ></motion.div>

                    {/* Main description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-lg text-white mb-8 leading-relaxed max-w-2xl"
                    >
                      {slide.data.description}
                    </motion.p>

                    {/* Benefits list */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
                    >
                      {slide.data.benefits.map(
                        (benefit: string, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{
                              opacity: 0,
                              x: idx % 2 === 0 ? -20 : 20,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.65 + idx * 0.1,
                              duration: 0.5,
                            }}
                            className="p-3 rounded-xl bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 hover:border-red-500/60 transition-colors"
                          >
                            <p className="text-base font-semibold text-orange-300">
                              {benefit}
                            </p>
                          </motion.div>
                        )
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full min-h-screen flex items-center justify-center px-8">
                {/* Placeholder for unknown slide types */}
                <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-950/85 to-black/80 backdrop-blur-sm"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-20">
                    <motion.h2 className="text-6xl md:text-7xl font-bold mb-12 text-white">
                      Slide Type Not Supported
                    </motion.h2>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots at bottom */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-20 flex-wrap justify-center max-w-2xl">
          {ALL_SLIDES.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
                setIsAutoPlay(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-[#1CBA89] to-[#064635] w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        {isAutoPlay && (
          <div className="absolute top-6 right-6 flex items-center gap-2 text-white/60 text-sm z-20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Auto playing
          </div>
        )}

        {/* Controls info */}
        <div className="absolute top-6 left-6 text-white/60 text-sm z-20 bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
          <p className="font-semibold mb-2 text-white/80">⌨️ Controles:</p>
          <div className="space-y-1">
            <p className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-xs">
                ←
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-xs">
                →
              </span>
              <span>Navegar</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-xs">
                ESPAÇO
              </span>
              <span>Pausar/Retomar</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-xs">
                ESC
              </span>
              <span>Pausar</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
