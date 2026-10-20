import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const AboutFounder: React.FC = () => {
  return (
    <section id="about" className="w-full bg-black py-24 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
        {/* Row 1: Story & Founder Portrait */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="space-y-6 max-w-xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              The Story of JSG
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-[1.1]">
              MEET JOSH & KIMBERLEY GOODALL
            </h2>
            <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed">
              JSG Constructions is a boutique family-run building company based in Toowoomba, Queensland. Josh completed his carpentry apprenticeship in 2011, honing his craft with meticulous attention to detail before founding JSG Constructions in 2017.
            </p>
            <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed">
              Josh remains hands-on on the tools working alongside his trusted trade team, while Kimberley manages project administration and interior design selections, ensuring every build is seamless from initial sketch to final handover.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="framer-btn-hover bg-white text-black px-7 py-3 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200"
              >
                <span className="framer-btn-text-1">Read Our Story</span>
                <span className="framer-btn-text-2">Read Our Story</span>
              </Link>
            </div>
          </motion.div>

          {/* Right: Portrait Photo of Josh & Kimberley */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-2xl">
              <img
                src="/assets/jsg/about-us_012.jpg"
                alt="Kimberley and Josh Goodall - JSG Constructions"
                className="w-full h-full object-cover object-top filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-neutral-300 font-semibold">
                  Josh & Kimberley Goodall • Founders
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Craftsmanship in Action & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Project Transformation Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-xl">
              <img
                src="/assets/jsg/home-renov_156.jpg"
                alt="Queenslander Cottage Transformation"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right: Master Builders Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="order-1 md:order-2 max-w-xl space-y-6"
          >
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
              BUILT ON INTEGRITY, COMMUNICATION & PASSION
            </h3>
            <p className="text-sm md:text-base text-neutral-300 font-normal leading-relaxed">
              We care about your home as much as you do. When you choose to build with JSG Constructions, we combine your architectural vision with honest communication, transparent costing, and stress-free project management.
            </p>
            <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed">
              Whether reviving historic timber fretwork on a heritage workers cottage or engineering a modern sustainable pavilion across the Darling Downs, our award-winning standards ensure your home is built to endure for generations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
