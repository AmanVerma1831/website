import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, ContactUsPage, TnC } from './components'
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={< ContactUsPage />} />
          <Route path="/terms" element={<TnC />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;