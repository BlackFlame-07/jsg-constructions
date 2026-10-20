import React, { useState } from 'react';
import { motion } from 'motion/react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: 'New Build',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', projectType: 'New Build', message: '' });
    }, 4000);
  };

  return (
    <div className="pt-28 pb-16 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
          >
            Get In Contact With Your Local Builder
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.05]"
          >
            SPEAK WITH OUR <br />
            BUILDING TEAM
          </motion.h1>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          {/* Left Metadata (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-4 space-y-10"
          >
            <div className="space-y-2">
              <div className="text-xs font-semibold text-white tracking-widest uppercase">
                DIRECT INQUIRIES
              </div>
              <a
                href="mailto:admin@jsgconstructions.com.au"
                className="text-base text-neutral-300 font-medium hover:text-white transition-colors block break-all"
              >
                admin@jsgconstructions.com.au
              </a>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-white tracking-widest uppercase">
                LOCATION & SERVICE AREA
              </div>
              <div className="text-sm text-neutral-300 font-medium leading-relaxed">
                Toowoomba QLD 4350 & Darling Downs Region, Australia
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-white tracking-widest uppercase">
                SPECIALISATIONS
              </div>
              <div className="text-sm text-neutral-300 font-medium leading-relaxed">
                Bespoke New Homes • Heritage Queenslander Renovations • Architectural Extensions
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-white tracking-widest uppercase">
                ACCREDITATION
              </div>
              <div className="text-sm text-neutral-300 font-medium leading-relaxed">
                Master Builders Queensland Member • Licensed QBCC Builder
              </div>
            </div>
          </motion.div>

          {/* Right Form (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-white/90 tracking-widest uppercase">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter your first name"
                    className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs px-4 py-3.5 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-white/90 tracking-widest uppercase">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter your last name"
                    className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs px-4 py-3.5 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-white/90 tracking-widest uppercase">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs px-4 py-3.5 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-white/90 tracking-widest uppercase">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0400 000 000"
                    className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs px-4 py-3.5 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Project Type */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-white/90 tracking-widest uppercase">
                  PROJECT TYPE
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white text-xs px-4 py-3.5 focus:outline-none focus:border-white/50 transition-colors"
                >
                  <option value="New Build">Custom New Home Build</option>
                  <option value="Renovation">Home Renovation (Queenslander / Cottage)</option>
                  <option value="Extension">Home Extension & Second Storey Addition</option>
                  <option value="Commercial">Other Architectural Project</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-white/90 tracking-widest uppercase">
                  PROJECT DETAILS & LOCATION
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your land, vision, estimated timeline, or budget.."
                  className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-xs p-4 focus:outline-none focus:border-white/50 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="framer-btn-hover w-full bg-white text-black py-4 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-neutral-200 cursor-pointer"
                >
                  <span className="framer-btn-text-1">{submitted ? 'Inquiry Sent to Josh & Kimberley' : 'Submit Consultation Request'}</span>
                  <span className="framer-btn-text-2">{submitted ? 'Inquiry Sent to Josh & Kimberley' : 'Submit Consultation Request'}</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
