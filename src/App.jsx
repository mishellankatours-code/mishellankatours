import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WelcomePage from "./components/WelcomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PackagesPage from "./pages/PackagesPage";
import ThingsToDoMap from "./components/ThingsToDoMap";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import WhatsAppButton from "./components/WhatsAppButton";
import TourDetailsPage from "./pages/TourDetailsPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <WhatsAppButton
        phone="94762044065" // ← your admin number (no +, spaces, or leading 0)
        message="Hi Mishellanka Tours! I'd like to know more about your packages."
      />
      <main className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <WelcomePage />
                <ThingsToDoMap />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/tour/:id" element={<TourDetailsPage />} />
        </Routes>
      </main>
    </Router>
  );
}
