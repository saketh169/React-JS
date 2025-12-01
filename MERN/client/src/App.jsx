import { Outlet, NavLink } from 'react-router-dom';
import './index.css';


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink> | 
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink> |
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink> 

      </nav>
      <Outlet />
    </div>
  );
}

export default App;