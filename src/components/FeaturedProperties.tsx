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

  // Track scroll progress through this card's container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale down slightly and dim as the next card stacks over it
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const dimOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.55]);

  // Progressive sticky top offset creating the physical card-deck tab effect
  // Desktop: 80px base + 16px per card; Mobile: 70px base + 12px per card
  const topDesktop = 80 + index * 16;
  const topMobile = 70 + index * 12;

  return (
    <div
      ref={containerRef}
      className={`w-full flex justify-center px-4 sm:px-6 md:px-10 ${
        isLast ? 'mb-0' : 'mb-20 sm:mb-28 md:mb-36'
      }`}
      style={{
        position: 'sticky',
        top: `clamp(${topMobile}px, 6vw, ${topDesktop}px)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale: isLast ? 1 : scale,
        }}
        className="relative w-full max-w-[1400px] h-[65vh] sm:h-[72vh] md:h-[78vh] max-h-[760px] min-h-[480px] rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-950 border border-white/15 shadow-[0_-16px_50px_rgba(0,0,0,0.9)] group cursor-pointer flex items-center justify-center origin-top transition-shadow duration-500 hover:shadow-[0_-20px_60px_rgba(0,0,0,1)]"
      >
        {/* Full-bleed Architectural Photography */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35 transition-colors duration-500 group-hover:bg-black/40 z-[1]" />

        {/* Centered Property Meta */}
        <div className="relative z-20 text-center max-w-2xl px-6 space-y-3 sm:space-y-4 transition-transform duration-500 group-hover:-translate-y-1">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.05]">
            {prop.title}
          </h2>
          <p className="text-xs sm:text-sm text-white/80 font-normal tracking-wide">
            {prop.address}
          </p>
          <div className="text-[11px] sm:text-xs font-semibold text-white/90 tracking-widest pt-0.5">
            {prop.beds} BEDS • {prop.baths} BATHS • {prop.sqft} SQ FT
          </div>
          <div className="pt-3 sm:pt-4 flex items-center justify-center space-x-3">
            <Link
              to={`/properties/${prop.slug}`}
              className="framer-btn-hover bg-white text-black px-5 sm:px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200"
            >
              <span className="framer-btn-text-1">Explore Build</span>
              <span className="framer-btn-text-2">Explore Build</span>
            </Link>
            <Link
              to="/properties"
              className="framer-btn-hover border border-white/60 bg-transparent text-white px-5 sm:px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:border-white hover:bg-white/10"
            >
              <span className="framer-btn-text-1">View All Projects</span>
              <span className="framer-btn-text-2">View All Projects</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const FeaturedProperties: React.FC = () => {
  const featured = propertiesData.slice(0, 4);

  return (
    <section id="properties" className="relative w-full bg-black pt-16 pb-28 md:pt-24 md:pb-40">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
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

      {/* Stacking Card Deck Container */}
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
