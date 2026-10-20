import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const navPages = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'PROJECTS', path: '/properties' },
    { label: 'INSIGHTS', path: '/blog' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const services = [
    'Custom New Home Builds',
    'Heritage Queenslander Renovations',
    'Architectural Home Extensions',
    'Bespoke Bathroom & Kitchen Remodels',
    'Sustainable Climate Design'
  ];

  return (
    <footer id="contact" className="w-full bg-black border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10"
        >
          {/* Left Column: Brand & Subscribe (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block text-2xl sm:text-3xl font-black italic tracking-wider text-white">
              JSG CONSTRUCTIONS
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 font-normal max-w-sm leading-relaxed">
              Boutique family builders crafting luxury custom homes, heritage Queenslander renovations, and architectural extensions across Toowoomba and the Darling Downs.
            </p>

            {/* Newsletter Subscription Box */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs px-4 py-3 focus:outline-none focus:border-white/40 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="framer-btn-hover bg-white text-black text-xs font-semibold px-6 py-3 tracking-wider uppercase whitespace-nowrap transition-colors hover:bg-neutral-200 mt-2 sm:mt-0 cursor-pointer"
              >
                <span className="framer-btn-text-1">{subscribed ? 'Registered' : 'Get Building Guide'}</span>
                <span className="framer-btn-text-2">{subscribed ? 'Registered' : 'Get Building Guide'}</span>
              </motion.button>
            </form>
          </div>

          {/* Right Columns: Links (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Pages Column */}
            <div className="space-y-4">
              <div className="text-xs font-semibold text-white tracking-widest uppercase">
                Navigation
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-400 tracking-wider font-medium">
                {navPages.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-4">
              <div className="text-xs font-semibold text-white tracking-widest uppercase">
                Services
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-400 tracking-wider font-medium">
                {services.map((item) => (
                  <li key={item}>
                    <Link to="/properties" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details Column */}
            <div className="col-span-2 sm:col-span-1 space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-white tracking-widest uppercase">
                  Service Area
                </div>
                <div className="text-xs text-neutral-400 font-medium tracking-wide">
                  Toowoomba & Darling Downs QLD
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <div className="text-xs font-semibold text-white tracking-widest uppercase">
                  Direct Email
                </div>
                <a
                  href="mailto:admin@jsgconstructions.com.au"
                  className="text-xs text-neutral-400 font-medium tracking-wide hover:text-white transition-colors break-all"
                >
                  admin@jsgconstructions.com.au
                </a>
              </div>

              <div className="space-y-1 pt-2">
                <div className="text-xs font-semibold text-white tracking-widest uppercase">
                  Accreditation
                </div>
                <div className="text-xs text-neutral-400 font-medium leading-relaxed tracking-wide">
                  Master Builders QLD Member • Licensed QBCC Builder
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sub-Footer Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div>JSG Constructions Pty Ltd • Toowoomba, Australia</div>
          <div>Master Builders Queensland Rising Star Award Winner</div>
          <div>© {new Date().getFullYear()} All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};
