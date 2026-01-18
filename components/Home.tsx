
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import ServicesGrid from './ServicesGrid';
import Stats from './Stats';
import Features from './Features';
import Courses from './Courses';
import FAQ from './FAQ';
import CTA from './CTA';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Small timeout to allow DOM to render
      const timer = setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Stats />
      <ServicesGrid />
      <Features />
      <Courses />
      <FAQ />
      <CTA />
    </main>
  );
};

export default Home;
