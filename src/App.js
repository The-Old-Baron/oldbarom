import NotFound from './errors/NotFound';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ApplicationHome from './Pages/Aplication/Home/Home';
import ApplicationLogin from './Pages/Aplication/Login/Login';
import Home from './Pages/Home/index';

import './App.css';
import './css/theme.css';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userHasAuthenticated = authenticated => {
    setIsAuthenticated(authenticated);
  };

  const childProps = {
    isAuthenticated: isAuthenticated,
    userHasAuthenticated: userHasAuthenticated,
  };
  
  return (
    
    <Router>
      <div>
        <Routes childProps={childProps}>
          <Route path="/" element={<Home />} />
          <Route path="aplications/" element={<ApplicationHome />} />
          <Route path="/login" element={<ApplicationLogin />} />
          <Route component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;