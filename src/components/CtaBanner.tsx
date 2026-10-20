import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const CtaBanner: React.FC = () => {
  return (
    <section id="cta" className="w-full bg-black py-16 md:py-24 px-6 md:px-12 border-t border-white/10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="relative w-full max-w-7xl mx-auto h-[480px] md:h-[550px] overflow-hidden rounded-[2px] bg-neutral-950 flex items-center justify-center text-center px-6"
      >
        {/* Background Architectural Photo with Subtle Motion */}
        <img
          src="/assets/jsg/new-home-b_015.webp"
          alt="JSG Constructions Custom Home"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-45 contrast-110"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Start Your Dream Build
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-[1.15]">
            BRING YOUR VISION TO LIFE WITH TOOWOOMBA'S TRUSTED BUILDERS.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
            From initial site consultation and floor plan concepts through to turnkey handover, our family team ensures your building journey is completely stress-free.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="framer-btn-hover bg-white text-black px-8 py-3.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200"
            >
              <span className="framer-btn-text-1">Book an Initial Consultation</span>
              <span className="framer-btn-text-2">Book an Initial Consultation</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
