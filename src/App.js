import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './errors/NotFound';

import ApplicationHome from './Pages/Aplication/Home/Home';

import Home from './Pages/Home/index';

import './App.css';
import './css/theme.css';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="aplications/" element={<ApplicationHome />} />
          <Route path="/" element={<Home />} />
          <Route component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;