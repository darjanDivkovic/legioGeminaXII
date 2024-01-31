import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Offer from './pages/Offer';
import './css/tailwind.css';
import './css/App.css';
import { useCallback } from "react";
import Particles from "react-particles";

function App() {
  return (
    <Router>
      <div className='App'>

        <Routes>
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;