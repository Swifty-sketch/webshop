// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import ProductPage from './components/ProductPage'; // Import ProductPage component

function App() {
  return (
    <Router>
      <Navbar />
      {/* Add padding-top to the content area */}
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/productpage" element={<ProductPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
