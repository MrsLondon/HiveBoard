import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // Get current location to determine if we are on the home page

  return (
    <nav className="Navbar">
      <div className="logo">
        <img src="src/assets/logo2.png" alt="App Logo" />
        <span className="app-name"></span>
      </div>
      <ul>
        {/* Conditionally render Home link */}
        {location.pathname !== '/home' && (
          <li><Link to="/home">Home</Link></li>
        )}
        {/* Always show User Icon on Home page */}
        {location.pathname === '/home' && (
             <div className="right flex items-center space-x-4">
             <span> user </span>
             <img className='rounded-full' src="https://placehold.co/28x28/png" alt="" />
         </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
