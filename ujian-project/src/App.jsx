import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './sections/Footer';
import Testimonials from './sections/Testimonials';
import Shop from './sections/Shop';
import Category from './sections/Category';
import Features from './sections/Features';
import Hero from './sections/Hero';
import Nav from './sections/Nav';
import BuyNowButton from './components/BuyNowButton';
import BuyPages from './pages/BuyPages'; // Ensure this is correctly imported

export default function App() {
  return (
    <Router>
      <div className="relative">
        <Nav />
        <Routes>
          <Route path="/" element={
            <div>
              <Hero />
              <Features />
              <Category />
              <Shop />
              <Testimonials />
              <Footer />
              <BuyNowButton />
            </div>
          } />
          <Route path="/buy" element={<BuyPages />} />
        </Routes>
      </div>
    </Router>
  );
}