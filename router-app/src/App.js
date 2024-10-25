import React from 'react';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import Support from './Components/Support';



function App() {
  return (
    <div className='App'>

      <nav>
        <ul>
          <li>
            <NavLink to={Home}>Home</NavLink>
          </li>
          <li>
            <NavLink to={Support}>Support</NavLink>
          </li>
          <li>
            <NavLink to={About}>About Page</NavLink>
          </li>
          <li>
            <NavLink to={Labs}>Labs Page</NavLink>
          </li>
          <li>
            <NavLink to={NotFound}>Not Found</NavLink>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Support />} />
        <Route path='/' element={<About />} />
        <Route path='/' element={<Labs />} />
        <Route path='/' element={<NotFound />} />
      </Routes>
    </div>

  );
}
export default App;
