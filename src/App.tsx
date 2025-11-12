import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSection from './components/HomePage/HomeSection';
import Aboutpage from './components/AbboutPage/Aboutpage';
import ServicePage from './components/ServicePage/ServicePage';
import ScrollToTop from './components/ScrollToTop';
import TestimonialPage from './components/TestimonialPage/TestimonialPage';
import ContactPage from './components/ContactPage/ContactPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import AllDomainsPage from './components/ProfilePage/DomainePage/AllDomainsPage';
import AllProfilesPage from './components/ProfilePage/ProfilsSectionPage/AllProfilesPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/Profils" element={<ProfilePage />} />
          <Route path="/Profils/domains" element={<AllDomainsPage />} />
          <Route path="/Profils/profiles" element={<AllProfilesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
