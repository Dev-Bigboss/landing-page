import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';

// import ContactUsPage from './ContactUsPage';
// import HelpCenterPage from './HelpCenterPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route path="/about" component={AboutUsPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/help" component={HelpCenterPage} />*/}
        
        {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
        {/* Additional routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
