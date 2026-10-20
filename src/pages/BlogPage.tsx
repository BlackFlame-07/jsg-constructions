import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { CtaBanner } from '../components/CtaBanner';

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-28 pb-12 bg-black text-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16 space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
        >
          Blog
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.05]"
        >
          REFINED REAL ESTATE <br />
          INSIGHTS
        </motion.h1>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogsData.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="group cursor-pointer space-y-4"
            >
              <Link to={`/blog/${post.slug}`} className="block space-y-4">
                {/* Thumbnail */}
                <div className="relative aspect-square overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-lg">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Meta */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    <span>{post.tag}</span>
                    <span className="font-normal text-neutral-500">{post.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-normal transition-colors group-hover:text-neutral-300">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};
