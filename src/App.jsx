// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productpage" element={<ProductPage />} /> {/* Add this line */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
