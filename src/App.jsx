import { Routes, Route } from 'react-router-dom';
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";

import BusinessesPage from './pages/businesses/page.jsx';
import IndividualsPage from './pages/individuals/page.jsx';
import LearnPage from './pages/learn/page.jsx';
import AboutPage from './pages/about/page.jsx';
import Gateway from './pages/gateway/page.jsx';
import Custody from './pages/custody/page.jsx';
import BuySellCrypto from './pages/bscrypto/page.jsx';
import Login from './pages/login/page.jsx';
import Signup from './pages/signup/page.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
   </>
  );
};

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/businesses" element={<BusinessesPage />} />
        <Route path="/individuals" element={<IndividualsPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/about" element={<AboutPage /> } />
        <Route path="/gateway" element={<Gateway /> } />
        <Route path="/custody" element={<Custody /> } />
        <Route path="/buy-sell" element={<BuySellCrypto /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/signup" element={<Signup /> } />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;