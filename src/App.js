import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './Core/Home/Home';

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
