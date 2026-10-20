import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProperties } from '../components/FeaturedProperties';
import { AboutFounder } from '../components/AboutFounder';
import { Communities } from '../components/Communities';
import { Testimonials } from '../components/Testimonials';
import { PressMedia } from '../components/PressMedia';
import { CtaBanner } from '../components/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <AboutFounder />
      <Communities />
      <Testimonials />
      <PressMedia />
      <CtaBanner />
    </div>
  );
};
