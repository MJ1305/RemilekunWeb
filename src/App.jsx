import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./Components/Shared/navbar.jsx";
import Footer from "./Components/Shared/Footer.jsx";
import LandingPage from "./Components/Pages/landingPage.jsx";
import AboutUsPage from "./Components/Pages/aboutUsPage.jsx";
import "./App.css";

// Resets scroll position to top every time the route changes.
// Without this, navigating to a new page keeps your old scroll position,
// which can make leftover content from the previous page briefly show through.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        {/* Add more routes here as we build them, e.g. */}
        {/* <Route path="/schools" element={<SchoolsPage />} /> */}
        {/* <Route path="/admissions" element={<AdmissionsPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}