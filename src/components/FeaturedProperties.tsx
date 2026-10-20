import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { propertiesData } from '../data/properties';

export const FeaturedProperties: React.FC = () => {
  return (
    <section id="properties" className="w-full bg-black py-4 space-y-4">
      {propertiesData.slice(0, 4).map((prop) => (
        <motion.div
          key={prop.slug}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="group relative w-full h-[650px] md:h-[800px] overflow-hidden bg-neutral-950 flex items-center justify-center cursor-pointer"
        >
          {/* Background Property Photography with Smooth Zoom */}
          <motion.img
            src={prop.image}
            alt={prop.title}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/40" />

          {/* Centered Property Meta with subtle hover lift */}
          <div className="relative z-10 text-center max-w-2xl px-6 space-y-4 transition-transform duration-500 group-hover:-translate-y-1">
            <span className="inline-block text-xs font-semibold text-neutral-300 uppercase tracking-[0.25em] bg-white/10 px-3.5 py-1 backdrop-blur-md">
              {prop.price}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              {prop.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 font-normal tracking-wide">
              {prop.address} • {prop.beds} BEDS • {prop.baths} BATHS • {prop.sqft} SQ FT
            </p>
            <div className="pt-2 flex items-center justify-center space-x-3">
              <Link
                to={`/properties/${prop.slug}`}
                className="framer-btn-hover bg-white text-black px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200"
              >
                <span className="framer-btn-text-1">Explore Build</span>
                <span className="framer-btn-text-2">Explore Build</span>
              </Link>
              <Link
                to="/properties"
                className="framer-btn-hover border border-white/60 bg-transparent text-white px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:border-white hover:bg-white/10"
              >
                <span className="framer-btn-text-1">View All Projects</span>
                <span className="framer-btn-text-2">View All Projects</span>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};
