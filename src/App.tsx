import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import DemoReel from './components/DemoReel';
import TechnicalSpecs from './components/TechnicalSpecs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-400 text-black font-mono">
      <Header />
      <main>
        <Hero />
        <Experience />
        <DemoReel />
        <TechnicalSpecs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;