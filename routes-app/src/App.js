import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import Support from './components/Support';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">

      <nav>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Support">Support</NavLink>
        </li>
        <li>
          <NavLink to="/Labs">Labs</NavLink>
        </li>
        <li>
          <NavLink to="/NotFound">NotFound</NavLink>
        </li>
      </nav>

      <Routes>
        {/* Below Route is Perant Route */}
        <Route Path='/' element={<MainHeader />}>
          {/* this becomes default routes */}
          <Route index element={<Home />} />
          <Route path='/' element={<Support />} />
          <Route path='/' element={<About />} />
          <Route path='/' element={<Labs />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
