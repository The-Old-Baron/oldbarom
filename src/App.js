import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Core/Home/Home';
import NotFound from './errors/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route component={NotFound} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;