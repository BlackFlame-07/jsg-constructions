import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'We engaged Josh from JSG Constructions to do a complete bathroom renovation for us. We are delighted with the finished result—aesthetically beautiful, with great form and function. Josh was excellent to work with from the very beginning, prompt and professional. His team of tradespeople are all terrific.',
    name: 'David & Sarah T.',
    role: 'Bathroom & Living Transformation • Toowoomba',
    image: '/assets/jsg/home-renov_156.jpg',
  },
  {
    quote:
      'Josh and his team completed an outstanding renovation for us on an old Queenslander workers cottage. Josh excels with his communication skills and the quality of work was second to none. His trades delivered high quality finishes and were an absolute pleasure to work with.',
    name: 'Mark & Rachel K.',
    role: 'Heritage Queenslander Renovation • East Toowoomba',
    image: '/assets/jsg/home-renov_157.jpg',
  },
  {
    quote:
      'Josh, Kimberley, Nick and the team did an amazing job turning my workers cottage into the perfect home. Josh completely understood the picture in my head, and Kimberley was the best design partner guiding me through tiles, cabinetry, and finishes. I love my home.',
    name: 'Amanda L.',
    role: 'Custom Cottage Transformation • Toowoomba',
    image: '/assets/jsg/new-home-b_015.webp',
  },
  {
    quote:
      'We would like to thank JSG Constructions for the amazing job transforming our home from a 3 bed 1 bath to an expansive 4 bedroom 2 bath residence. We love it and your workmanship is next level. Truly a great builder from start to finish.',
    name: 'Greg & Lisa M.',
    role: 'Architectural Extension Project • Darling Downs',
    image: '/assets/jsg/home-exten_251.webp',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const item = testimonials[currentIndex];

  return (
    <section className="w-full bg-black py-24 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col space-y-2 mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Client Experiences
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
          >
            WHAT OUR CLIENTS SAY
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Project Photography with AnimatePresence */}
          <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={item.image}
                src={item.image}
                alt={item.name}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Right: Stars, Quote, Name, Role, and Controls */}
          <div className="space-y-8 flex flex-col justify-between h-full py-4">
            <div className="space-y-6">
              {/* 5 Stars */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-1.5 text-white text-lg"
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </motion.div>

              {/* Animated Quote */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="space-y-6 min-h-[140px]"
                >
                  <p className="text-base sm:text-lg md:text-xl text-white font-normal leading-relaxed tracking-wide">
                    "{item.quote}"
                  </p>

                  {/* Author */}
                  <div className="pt-2">
                    <div className="text-base font-bold text-white uppercase tracking-wider">
                      {item.name}
                    </div>
                    <div className="text-xs text-neutral-400 font-medium tracking-wide">
                      {item.role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Arrow Controls */}
            <div className="flex items-center space-x-2 pt-6">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 border border-white/30 flex items-center justify-center text-white transition-colors hover:border-white hover:bg-white hover:text-black cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 border border-white/30 flex items-center justify-center text-white transition-colors hover:border-white hover:bg-white hover:text-black cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
