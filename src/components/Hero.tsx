import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    image: '/assets/jsg/new-home-b_015.webp',
    title: 'CRAFTING YOUR DREAM HOME IN TOOWOOMBA',
    eyebrow: 'Boutique Toowoomba Builders',
    sub: 'Award-Winning Custom Builds • Master Builders QLD Member',
  },
  {
    image: '/assets/jsg/home-renov_156.jpg',
    title: 'TRANSFORMING LIVING SPACES WITH PURPOSE',
    eyebrow: 'Architectural Renovations',
    sub: 'High-End Queenslander Cottage Restorations & Interiors',
  },
  {
    image: '/assets/jsg/home-exten_251.webp',
    title: 'EXPANDING YOUR HORIZONS WITH ELEGANCE',
    eyebrow: 'Seamless Home Extensions',
    sub: 'Bespoke Additions Designed to Fit Your Existing Home',
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black flex items-end">
      {/* Background Images with AnimatePresence Crossfade & Ken Burns Zoom */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="absolute inset-0 z-0"
        >
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 7, ease: 'linear' }}
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Top & Bottom Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/75 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Main Hero Content Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-14 md:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        {/* Left: Eyebrow + Heading + CTA */}
        <div className="max-w-2xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="inline-flex items-center space-x-2 text-white/90 text-xs md:text-sm font-semibold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>{heroSlides[currentSlide].eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.08]"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-xs sm:text-sm text-neutral-300 font-normal max-w-lg"
          >
            {heroSlides[currentSlide].sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="pt-2 flex items-center space-x-3"
          >
            <Link
              to="/contact"
              className="framer-btn-hover bg-white text-black px-7 py-3 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200"
            >
              <span className="framer-btn-text-1">Consult Our Builders</span>
              <span className="framer-btn-text-2">Consult Our Builders</span>
            </Link>
            <Link
              to="/properties"
              className="framer-btn-hover border border-white/60 bg-transparent text-white px-6 py-3 text-xs font-semibold tracking-wider uppercase transition-colors hover:border-white hover:bg-white/10"
            >
              <span className="framer-btn-text-1">View Recent Projects</span>
              <span className="framer-btn-text-2">View Recent Projects</span>
            </Link>
          </motion.div>
        </div>

        {/* Center: Mouse Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:flex flex-col items-center justify-center pb-2"
        >
          <div className="w-[18px] h-[30px] rounded-full border border-white/60 flex items-start justify-center p-1">
            <motion.div
              animate={{
                y: [0, 9, 0],
                opacity: [1, 0.2, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-[2px] h-[6px] bg-white rounded-full mt-0.5"
            />
          </div>
        </motion.div>

        {/* Right: Slide Selector Thumbnails with Spring Active Ring */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center space-x-3 self-start md:self-end"
        >
          {heroSlides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="relative w-16 h-10 md:w-20 md:h-12 overflow-hidden rounded-[2px] cursor-pointer"
              aria-label={`Slide ${index + 1}`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                }`}
              />
              {index === currentSlide && (
                <motion.div
                  layoutId="active-hero-thumb"
                  className="absolute inset-0 border-2 border-white pointer-events-none"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
