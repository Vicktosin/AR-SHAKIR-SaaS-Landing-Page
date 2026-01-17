import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PaymentFlow from './components/PaymentFlow';
import Newsletter from './components/Newsletter';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import backgroundImage from './assets/UI background.png';
import './App.css';

function App() {
  return (
    <div 
      className="min-h-screen bg-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      <Hero />
      <Features />
      <PaymentFlow />
      <Newsletter />
      <Dashboard />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
