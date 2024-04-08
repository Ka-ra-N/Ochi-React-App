import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './output.css';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const OurWork = lazy(() => import('./pages/OurWork'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Insights = lazy(() => import('./pages/Insights'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

function App() {
  AOS.init();

  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>} />
        <Route path="/our-services" element={<Suspense fallback={<div>Loading...</div>}>
          <Services />
        </Suspense>} />
        <Route path="/our-work" element={<Suspense fallback={<div>Loading...</div>}>
          <OurWork />
        </Suspense>} />
        <Route path="/about-us" element={<Suspense fallback={<div>Loading...</div>}>
          <AboutUs />
        </Suspense>} />
        <Route path="/insights" element={<Suspense fallback={<div>Loading...</div>}>
          <Insights />
        </Suspense>} />
        <Route path="/contact-us" element={<Suspense fallback={<div>Loading...</div>}>
          <ContactUs />
        </Suspense>} />
      </Routes>
    </>
  );
}

export default App;
