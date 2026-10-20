import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { propertiesData } from '../data/properties';
import { CtaBanner } from '../components/CtaBanner';

export const PropertyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = propertiesData.find((p) => p.slug === slug) || propertiesData[0];
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  const prevImage = () => {
    setActiveImageIdx((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const nextImage = () => {
    setActiveImageIdx((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="pt-28 pb-12 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16 space-y-8">
        {/* Back Link */}
        <Link
          to="/properties"
          className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>View all properties</span>
        </Link>

        {/* Title & Price Header */}
        <div className="space-y-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase"
          >
            {property.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl"
          >
            {property.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-3xl sm:text-4xl font-bold text-white pt-2"
          >
            {property.price}
          </motion.div>
        </div>

        {/* Main Gallery Display */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImageIdx}
              src={images[activeImageIdx]}
              alt={property.title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>

          {/* Gallery Controls */}
          {images.length > 1 && (
            <div className="absolute bottom-6 right-6 flex items-center space-x-2 z-10">
              <button
                onClick={prevImage}
                className="w-10 h-10 bg-black/70 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextImage}
                className="w-10 h-10 bg-black/70 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-white/10 text-center md:text-left">
          <div className="space-y-1">
            <div className="text-xs text-neutral-400 uppercase tracking-widest">Bedroom</div>
            <div className="text-lg font-bold text-white uppercase">{property.beds} Bedroom</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-neutral-400 uppercase tracking-widest">Bathroom</div>
            <div className="text-lg font-bold text-white uppercase">{property.baths} Bathroom</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-neutral-400 uppercase tracking-widest">Area</div>
            <div className="text-lg font-bold text-white uppercase">{property.sqft} sq ft</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-neutral-400 uppercase tracking-widest">Address</div>
            <div className="text-sm font-semibold text-white/90 truncate">{property.address}</div>
          </div>
        </div>

        {/* Private Consultation Inquiry Box */}
        <div className="bg-neutral-950 border border-white/10 p-8 md:p-12 rounded-[2px] flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold uppercase tracking-tight">Schedule a Private Viewing</h3>
            <p className="text-sm text-neutral-400">
              Our bespoke advisory team will coordinate an exclusive, private walkthrough of {property.title}.
            </p>
          </div>
          <Link
            to="/contact"
            className="framer-btn-hover bg-white text-black px-8 py-3.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200"
          >
            <span className="framer-btn-text-1">Inquire for Private Tour</span>
            <span className="framer-btn-text-2">Inquire for Private Tour</span>
          </Link>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
};
