import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { propertiesData } from '../data/properties';
import { CtaBanner } from '../components/CtaBanner';

export const PropertiesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-12 bg-black text-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16 space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
        >
          Properties
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.05]"
        >
          EXPLORE OUR FINEST <br />
          RESIDENCES
        </motion.h1>
      </section>

      {/* Full Listings Stack / Grid */}
      <section className="w-full space-y-6">
        {propertiesData.map((prop, idx) => (
          <motion.div
            key={prop.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.85, delay: idx * 0.05, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="group relative w-full h-[650px] md:h-[800px] overflow-hidden bg-neutral-950 flex items-center justify-center cursor-pointer"
          >
            {/* Background Property Image with Smooth Zoom */}
            <motion.img
              src={prop.image}
              alt={prop.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/35" />

            {/* Centered Property Meta */}
            <div className="relative z-10 text-center max-w-2xl px-6 space-y-4 transition-transform duration-500 group-hover:-translate-y-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
                {prop.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-normal tracking-wide">
                {prop.address}
              </p>
              <div className="text-sm font-semibold text-white/90 tracking-widest pt-1">
                {prop.price} • {prop.beds} BEDS • {prop.baths} BATHS • {prop.sqft} SQ FT
              </div>
              <div className="pt-3 flex items-center justify-center space-x-3">
                <Link
                  to={`/properties/${prop.slug}`}
                  className="framer-btn-hover bg-white text-black px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200"
                >
                  <span className="framer-btn-text-1">Learn more</span>
                  <span className="framer-btn-text-2">Learn more</span>
                </Link>
                <Link
                  to={`/properties/${prop.slug}`}
                  className="framer-btn-hover border border-white/60 bg-transparent text-white px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:border-white hover:bg-white/10"
                >
                  <span className="framer-btn-text-1">View details</span>
                  <span className="framer-btn-text-2">View details</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
};
