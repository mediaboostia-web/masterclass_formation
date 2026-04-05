import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cibles from './components/Cibles';
import Problemes from './components/Problemes';
import Solution from './components/Solution';
import Preuves from './components/Preuves';
import Programme from './components/Programme';
import Ebook from './components/Ebook';
import Editions from './components/Editions';
import Tarifs from './components/Tarifs';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';

function App() {
  return (
    <div className="font-sans min-h-screen bg-dark text-white">
      <Header />
      <Hero />
      <Cibles />
      <Problemes />
      <Solution />
      <Preuves />
      <Programme />
      <Ebook />
      <Editions />
      <Tarifs />
      <FAQ />
      <CTAFinal />
    </div>
  );
}

export default App;
