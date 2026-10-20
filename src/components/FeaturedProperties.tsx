import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { propertiesData, Property } from '../data/properties';

interface StackingCardProps {
  prop: Property;
  index: number;
  total: number;
}

const StackingCard: React.FC<StackingCardProps> = ({ prop, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;

  // Track scroll progress through this card's viewport range
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Dim the underlying card as the next full-bleed card covers it
  const dimOpacity = useTransform(scrollYProgress, [0, 0.9], [0, 0.6]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen min-h-[650px] md:min-h-[750px]"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: index + 10,
      }}
    >
      <div className="relative w-full h-full overflow-hidden bg-neutral-950 border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.95)] group cursor-pointer flex items-center justify-center">
        {/* Full-bleed Edge-to-Edge Architectural Photography */}
        <motion.img
          src={prop.image}
          alt={prop.title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Dynamic dimming overlay as following card slides over */}
        {!isLast && (
          <motion.div
            style={{ opacity: dimOpacity }}
            className="absolute inset-0 bg-black pointer-events-none z-10"
          />
        )}

        {/* Ambient Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 transition-colors duration-500 group-hover:bg-black/35 z-[1]" />

        {/* Centered Property Meta */}
        <div className="relative z-20 text-center max-w-3xl px-6 space-y-4 transition-transform duration-500 group-hover:-translate-y-1">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.05]">
            {prop.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/80 font-normal tracking-wide">
            {prop.address}
          </p>
          <div className="text-xs sm:text-sm font-semibold text-white/90 tracking-widest pt-1">
            {prop.beds} BEDS • {prop.baths} BATHS • {prop.sqft} SQ FT
          </div>
          <div className="pt-4 flex items-center justify-center space-x-3 sm:space-x-4">
            <Link
              to={`/properties/${prop.slug}`}
              className="framer-btn-hover bg-white text-black px-6 sm:px-8 py-3 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200"
            >
              <span className="framer-btn-text-1">Explore Build</span>
              <span className="framer-btn-text-2">Explore Build</span>
            </Link>
            <Link
              to="/properties"
              className="framer-btn-hover border border-white/60 bg-transparent text-white px-6 sm:px-8 py-3 text-xs font-semibold tracking-wider uppercase transition-colors hover:border-white hover:bg-white/10"
            >
              <span className="framer-btn-text-1">View All Projects</span>
              <span className="framer-btn-text-2">View All Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FeaturedProperties: React.FC = () => {
  const featured = propertiesData.slice(0, 4);

  return (
    <section id="properties" className="relative w-full bg-black">
      {/* Section Header */}
      <div className="w-full px-6 md:px-12 py-16 md:py-24 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-7xl mx-auto">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
          >
            Signature Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-white mt-2 leading-[1.05]"
          >
            Featured Residences
          </motion.h2>
        </div>
        <p className="text-xs sm:text-sm text-white/60 max-w-md font-normal tracking-wide">
          Custom architectural builds, full-scale renovations, and heritage extensions across Toowoomba and the Darling Downs.
        </p>
      </div>

      {/* Full-bleed Stacking Cards */}
      <div className="relative w-full">
        {featured.map((prop, idx) => (
          <StackingCard
            key={prop.slug}
            prop={prop}
            index={idx}
            total={featured.length}
          />
        ))}
      </div>
    </section>
  );
};
