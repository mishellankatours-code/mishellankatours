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
import AmbientAudio from "./components/AmbientAudio";

export default function App() {
  return (
    <Router>
      <Navbar />

      {/* Floating WhatsApp chat */}
      <WhatsAppButton
        phone="94762044065" // no +, spaces, or leading 0
        message="Hi Mishellanka Tours! I'd like to know more about your packages."
      />

      {/* Floating ambient music controller (MP3 only). 
          Starts after first user interaction and remembers user preference. */}
      <AmbientAudio
        src="/audio/SriLankan.mp3"
        defaultVolume={0.25}
        position="bottom-24 right-4" // or "bottom-4 left-4" etc.
        respectPreviousPause={false}  // set true if you want to remember user pause
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
