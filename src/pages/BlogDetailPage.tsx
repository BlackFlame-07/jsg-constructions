import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { blogsData } from '../data/blogs';
import { CtaBanner } from '../components/CtaBanner';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogsData.find((b) => b.slug === slug) || blogsData[0];

  return (
    <div className="pt-28 pb-12 bg-black text-white min-h-screen">
      <article className="max-w-4xl mx-auto px-6 md:px-12 pt-8 pb-16 space-y-8">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>View all articles</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
            <span className="text-white">{blog.tag}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1]"
          >
            {blog.title}
          </motion.h1>
        </div>

        {/* Hero Article Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-2xl"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Article Body Content */}
        <div className="space-y-6 pt-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
          {blog.paragraphs && blog.paragraphs.length > 0 ? (
            blog.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)
          ) : (
            <>
              <p>
                In the upper tiers of luxury real estate, design is no longer just about square footage or ornamental opulence. Modern buyers increasingly demand architectural clarity, organic materiality, and seamless harmony between indoor and outdoor sanctuaries.
              </p>
              <p>
                From floor-to-ceiling acoustic glass walls that maximize unobstructed natural vistas to hidden smart-home integration that elevates daily living without visual noise, contemporary minimalism represents the pinnacle of intentional luxury.
              </p>
              <p>
                Every bespoke property curated by Jacob Nolan and the Royal advisory team embodies this timeless design philosophy—ensuring each acquisition holds lasting emotional and investment value.
              </p>
            </>
          )}
        </div>
      </article>

      <CtaBanner />
    </div>
  );
};
