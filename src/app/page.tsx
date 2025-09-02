'use client';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        {/* Additional sections will be added here */}
      </main>
      <Footer />
    </div>
  );
}
