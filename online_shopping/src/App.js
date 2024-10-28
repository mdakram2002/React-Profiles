import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Cart from './page/Cart';

function App() {
  return (
    <div className='bg-slate-50'>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
