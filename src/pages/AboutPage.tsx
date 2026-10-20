import React from 'react';
import { motion } from 'motion/react';
import { CtaBanner } from '../components/CtaBanner';

export const AboutPage: React.FC = () => {
  const stats = [
    { value: '10+', label: 'Years Building Experience' },
    { value: '4+', label: 'Master Builders QLD Awards' },
    { value: '100%', label: 'Dedicated Hands-On Supervision' },
  ];

  const values = [
    {
      title: 'Guided Process',
      desc: 'We walk with you every step of the way—from land assessment and architectural drafting to council permits and final handover.',
      image: '/assets/jsg/new-home-b_015.webp',
    },
    {
      title: 'Exceptional Communication',
      desc: 'Transparent site updates from Josh and seamless office coordination from Kimberley ensure you always know what is happening on-site.',
      image: '/assets/jsg/about-us_012.jpg',
    },
    {
      title: 'Uncompromising Quality',
      desc: 'Meticulous trades, precision joinery, and premium Australian materials guaranteed by Master Builders Queensland standards.',
      image: '/assets/jsg/home-renov_156.jpg',
    },
  ];

  const team = [
    { name: 'Josh Goodall', role: 'Director & Licensed Builder', image: '/assets/jsg/about-us_013.jpg' },
    { name: 'Kimberley Goodall', role: 'Administrator & Selections Coordinator', image: '/assets/jsg/about-us_014.jpg' },
    { name: 'Nick', role: 'Site Supervisor & Lead Carpenter', image: '/assets/jsg/about-us_012.jpg' },
  ];

  const awards = [
    { name: 'Rising Star Award', org: 'Master Builders Queensland' },
    { name: 'Best Residential Bathroom', org: 'Jameela Ranch Project' },
    { name: 'Individual Home $651K - $750K', org: 'The Hentschel Project' },
    { name: 'Excellence in Sustainable Living', org: 'Deuchar Views Estate' },
  ];

  return (
    <div className="pt-28 pb-12 bg-black text-white">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16 space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
        >
          About JSG Constructions
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.05]"
        >
          TRUSTED TOOWOOMBA <br />
          BUILDERS
        </motion.h1>
      </section>

      {/* Main Team Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10 shadow-2xl"
        >
          <img
            src="/assets/jsg/about-us_012.jpg"
            alt="Kimberley and Josh Goodall"
            className="w-full h-full object-cover object-center filter contrast-105"
          />
        </motion.div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="space-y-2"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Narrative Section: The Story of JSG */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 space-y-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          Our Foundation
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase">
          A PASSION FOR BESPOKE BUILDING
        </h2>
        <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
          Josh Goodall completed his apprenticeship in 2011 and continued to hone his craft as a qualified builder with meticulous attention to detail. In 2017 he founded JSG Constructions with a clear vision: to deliver boutique, stress-free architectural builds and heritage transformations across Toowoomba and the Darling Downs.
        </p>
        <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
          Josh loves to be on the tools working alongside his team and is renowned for his creative, outside-the-box problem solving. Together with Kimberley, they provide an unmatched, personal building journey.
        </p>
      </section>

      {/* Awards Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase mb-12">
          INDUSTRY RECOGNITION & AWARDS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((a, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 bg-neutral-950 border border-white/10 space-y-2"
            >
              <div className="text-xs text-neutral-400 uppercase tracking-widest">{a.org}</div>
              <div className="text-lg font-bold text-white uppercase">{a.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase mb-16">
          WHY BUILD WITH JSG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="space-y-4"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider">{v.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase mb-16">
          MEET OUR LEADERSHIP
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="space-y-3"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[2px] bg-neutral-900 border border-white/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div>
                <h4 className="text-base font-bold uppercase">{member.name}</h4>
                <p className="text-xs text-neutral-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
};
