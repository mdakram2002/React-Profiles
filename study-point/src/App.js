import './App.css';
import Navbar from './components/Navbar';
import Deshboard from './pages/Deshboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Contect from './pages/Contect';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import About from './pages/About';
import Content from './pages/Content';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar
        className=""
        isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="about" element={<About />} />
        <Route path="content" element={<Content />} />
        <Route path="contect" element={<Contect setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="logout" element={<Logout />} />
        <Route path="deshboard" element={

          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Deshboard />
          </PrivateRoute>

        } />
      </Routes>
    </div>
  );
}

export default App;
