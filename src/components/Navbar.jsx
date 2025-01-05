// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="Navbar">
        <div className="logo">
          <img src="src/assets/logo2.png" alt="App Logo" />
          <span className="app-name"></span>
        </div>
        <ul>
            <li><Link to={"/home"}>Home</Link></li>
        </ul>
      </nav>
    );
}

export default Navbar;
