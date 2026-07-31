import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Components/Shared/navbar";
import LandingPage from "./Components/Pages/landingPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<AboutUsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}