'use client';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* Additional sections will be added here */}
      </main>
      <Footer />
    </div>
  );
}
