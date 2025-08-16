import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WelcomePage from "./components/WelcomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PackagesPage from "./pages/PackagesPage";
import ThingsToDoMap from "./components/ThingsToDoMap";
import ContactUsPage from "./pages/ContactUsPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <WelcomePage />
                <ThingsToDoMap />
              </>
            }
          />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </main>
    </Router>
  );
}
