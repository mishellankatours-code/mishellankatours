import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WelcomePage from "./components/WelcomePage";
import AboutUsPage from "./pages/AboutUsPage";

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
              </>
            }
          />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </main>
    </Router>
  );
}
