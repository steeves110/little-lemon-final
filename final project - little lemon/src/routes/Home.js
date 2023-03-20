import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <main>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <Testimonials />
      <AboutSection />
      <Footer />
    </main>
  )
}

export default Home;
