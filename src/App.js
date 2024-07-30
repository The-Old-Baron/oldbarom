import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './errors/NotFound';

import ApplicationHome from './Pages/Aplication/Home/Home';
import ApplicationLogin from './Pages/Aplication/Login/Login';

import Home from './Pages/Home/index';

import './App.css';
import './css/theme.css';
function App() {
  return (
    <Router>
      <div>
        <Routes>
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