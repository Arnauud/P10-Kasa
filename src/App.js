import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages (these should be separate components)
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Logements from './pages/Logement/Logement';

function App() {
  return (
    // The Router wraps all the routing logic
    <Router>
      <Routes>
        {/* Route for Home page */}
        <Route path="/" element={<Home />} />
        {/* Route for Logement page */}
        <Route path="/logements/:id" element={<Logements />} />
        {/* Route for About page */}
        <Route path="/about" element={<About />} />
        {/* Route for unmatched paths (404 Error page) */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;