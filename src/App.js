import React, { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Resources" element={<Resources />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
