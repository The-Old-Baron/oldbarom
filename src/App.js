import NotFound from './errors/NotFound';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ApplicationHome from './Pages/Aplication/Home/Home';
import ApplicationLogin from './Pages/Aplication/Login/Login';
import Home from './Pages/Home/index';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import './css/theme.css';
import { UserProvider } from './Pages/Aplication/Login/UserContext';
import MenuSuperior from './components/TopMenu/MenuSuperior';
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
    <UserProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/aplications"
              element={<ApplicationHome />}
            />
            <Route
              path="/login"
              element={
                <ApplicationLogin userHasAuthenticated={userHasAuthenticated} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;