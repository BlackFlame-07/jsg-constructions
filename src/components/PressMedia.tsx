import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';

export const PressMedia: React.FC = () => {
  return (
    <section id="blog" className="w-full bg-black py-24 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with Title and View All */}
        <div className="flex items-center justify-between mb-16">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Expert Advice
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
            >
              BUILDING & DESIGN INSIGHTS
            </motion.h2>
          </div>
          <Link
            to="/blog"
            className="framer-btn-hover border border-white/60 bg-transparent text-white px-6 py-2 text-xs font-semibold tracking-wider uppercase transition-colors hover:border-white hover:bg-white/10"
          >
            <span className="framer-btn-text-1">View All Articles</span>
            <span className="framer-btn-text-2">View All Articles</span>
          </Link>
        </div>

        {/* 3 Column Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {blogsData.slice(0, 3).map((item, idx) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.75,
                delay: idx * 0.15,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="group cursor-pointer space-y-4"
            >
              <Link to={`/blog/${item.slug}`} className="block space-y-4">
                {/* Thumbnail with Smooth Hover Scale */}
                <div className="relative aspect-square overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-lg">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Meta */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    <span>{item.tag}</span>
                    <span className="font-normal text-neutral-500">{item.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-normal transition-colors group-hover:text-neutral-300">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
