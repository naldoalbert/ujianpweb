// import React from 'react';
// import Footer from './sections/Footer';
// import Testimonials from './sections/Testimonials';
// import Shop from './sections/Shop';
// import Category from './sections/Category';
// import Features from './sections/Features';
// import Hero from './sections/Hero';
// import Nav from './sections/Nav';

// export default function App() {
//   return (
//     <div className="relative">
//       <Nav />
//       <Hero />
//       <Features />
//       <Category />
//       <Shop />
//       <Testimonials />
//       <Footer />
//     </div>

//   );
// }



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './sections/Footer';
import Testimonials from './sections/Testimonials';
import Shop from './sections/Shop';
import Category from './sections/Category';
import Features from './sections/Features';
import Hero from './sections/Hero';
import Nav from './sections/Nav';
import BuyerDataPage from './pages/BuyerDataPage'; // Import your new page

export default function App() {
  return (
    <Router>
      <div className="relative">
        <Nav />
        <Hero />
        <Features />
        <Category />
        <Shop />
        <Testimonials />
        <Footer />
        {/* Add Routes */}
        <Routes>
          <Route path="/buyer-data" element={<BuyerDataPage />} />
        </Routes>
      </div>
    </Router>
  );
}