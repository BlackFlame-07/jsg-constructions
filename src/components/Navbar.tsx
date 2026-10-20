import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '/about' },
    { label: 'PROJECTS', href: '/properties' },
    { label: 'INSIGHTS', href: '/blog' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex flex-col text-left group"
        >
          <span className="text-xl sm:text-2xl font-black italic tracking-wider text-white transition-opacity group-hover:opacity-85">
            JSG CONSTRUCTIONS
          </span>
          <span className="text-[9px] tracking-[0.25em] text-neutral-400 font-semibold uppercase -mt-0.5">
            Toowoomba • Master Builders QLD
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative text-[11px] font-medium tracking-[0.2em] transition-colors py-1 ${
                  location.pathname === link.href ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {(hoveredLink === link.label || location.pathname === link.href) && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Dual State Button */}
          <Link
            to="/contact"
            className="framer-btn-hover bg-white text-black px-5 py-2 text-[11px] font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200"
          >
            <span className="framer-btn-text-1">Start Your Build</span>
            <span className="framer-btn-text-2">Start Your Build</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-medium tracking-[0.2em] text-white/90 hover:text-white py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="framer-btn-hover block w-full text-center bg-white text-black py-2.5 text-xs font-semibold tracking-wider uppercase"
              >
                <span className="framer-btn-text-1">Start Your Build</span>
                <span className="framer-btn-text-2">Start Your Build</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
