import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Cart from './page/Cart';

function App() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
