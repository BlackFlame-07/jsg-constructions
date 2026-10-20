import React from 'react';
import { motion } from 'motion/react';

const regions = [
  {
    title: 'East Toowoomba',
    sub: 'Heritage Queenslanders & Cottages',
    image: '/assets/jsg/home-renov_156.jpg',
  },
  {
    title: 'Rangeville',
    sub: 'Bespoke Architectural Residences',
    image: '/assets/jsg/new-home-b_016.jpg',
  },
  {
    title: 'Highfields',
    sub: 'Modern Acreage Lifestyle Builds',
    image: '/assets/jsg/new-home-b_015.webp',
  },
  {
    title: 'Mount Lofty',
    sub: 'Hillside Views & Contemporary Living',
    image: '/assets/jsg/home-exten_251.webp',
  },
  {
    title: 'Darling Downs',
    sub: 'Rural Luxury Estates & Ranches',
    image: '/assets/jsg/home-exten_252.webp',
  },
];

export const Communities: React.FC = () => {
  return (
    <section className="w-full bg-black py-24 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          Where We Build
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
        >
          OUR REGIONS ACROSS TOOWOOMBA
        </motion.h2>
      </div>

      {/* Horizontal Carousel Container */}
      <div className="w-full overflow-x-auto scrollbar-none px-6 md:px-12">
        <div className="flex gap-6 pb-6 min-w-max md:justify-center mx-auto">
          {regions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 350, damping: 30 },
              }}
              className="group relative w-72 sm:w-80 md:w-96 aspect-[4/5] overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/65" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 font-medium tracking-wide">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
