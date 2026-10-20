import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { propertiesData, Property } from '../data/properties';
import { CtaBanner } from '../components/CtaBanner';

export const PropertiesPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'custom' | 'renovation'>('all');

  const filteredProperties = propertiesData.filter((prop) => {
    if (filter === 'all') return true;
    if (filter === 'custom') {
      return (
        prop.title.includes('Ranch') ||
        prop.title.includes('Residence') ||
        prop.title.includes('Lodge')
      );
    }
    if (filter === 'renovation') {
      return (
        prop.title.includes('Cottage') ||
        prop.title.includes('Estate') ||
        prop.title.includes('Heritage')
      );
    }
    return true;
  });

  return (
    <div className="pt-28 pb-16 bg-black text-white">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
        >
          Project Catalog
        </motion.span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.05]"
          >
            EXPLORE OUR FINEST <br />
            RESIDENCES
          </motion.h1>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-6 border-b border-white/10 pb-2">
            {[
              { id: 'all', label: 'All Builds' },
              { id: 'custom', label: 'Custom Homes' },
              { id: 'renovation', label: 'Renovations' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`pb-1 text-xs font-semibold uppercase tracking-[0.2em] transition-all relative ${
                  filter === tab.id
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/80'
                }`}
              >
                {tab.label}
                {filter === tab.id && (
                  <motion.div
                    layoutId="filter-underline"
                    className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Property Grid (1-col mobile, 2-col tablet, 3-col desktop) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProperties.map((prop, idx) => (
              <motion.div
                key={prop.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="group relative rounded-none overflow-hidden bg-neutral-950 border border-white/10 hover:border-white/25 transition-all duration-500 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              >
                {/* Media Aspect Ratio Container */}
                <Link
                  to={`/properties/${prop.slug}`}
                  className="relative aspect-[16/11] overflow-hidden bg-neutral-900 block rounded-none"
                >
                  <motion.img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Link>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
                  <div className="space-y-2">
                    <Link to={`/properties/${prop.slug}`} className="block">
                      <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-neutral-200 transition-colors line-clamp-1">
                        {prop.title}
                      </h2>
                    </Link>
                    <p className="text-xs text-white/60 font-normal tracking-wide line-clamp-1">
                      {prop.address}
                    </p>
                  </div>

                  {/* Architecture Specs Counter */}
                  <div className="pt-2 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/[0.03] py-2 px-1 rounded-none border border-white/5">
                      <span className="block text-[10px] text-white/50 uppercase tracking-wider font-mono">Beds</span>
                      <span className="text-xs font-bold text-white tracking-wide">{prop.beds}</span>
                    </div>
                    <div className="bg-white/[0.03] py-2 px-1 rounded-none border border-white/5">
                      <span className="block text-[10px] text-white/50 uppercase tracking-wider font-mono">Baths</span>
                      <span className="text-xs font-bold text-white tracking-wide">{prop.baths}</span>
                    </div>
                    <div className="bg-white/[0.03] py-2 px-1 rounded-none border border-white/5">
                      <span className="block text-[10px] text-white/50 uppercase tracking-wider font-mono">Sq Ft</span>
                      <span className="text-xs font-bold text-white tracking-wide">{prop.sqft}</span>
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-1">
                    <Link
                      to={`/properties/${prop.slug}`}
                      className="framer-btn-hover w-full bg-white text-black py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200 text-center flex items-center justify-center rounded-none"
                    >
                      <span className="framer-btn-text-1">Explore Residence</span>
                      <span className="framer-btn-text-2">Explore Residence</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Consultation Banner */}
      <CtaBanner />
    </div>
  );
};
