import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Offer from './pages/Offer';
import './css/tailwind.css';
import './css/App.css';

import ReactGA from 'react-ga';

const TRACKING_ID = "G-TG3BG6PPD1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

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