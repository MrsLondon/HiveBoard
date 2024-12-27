// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="Navbar">
        <div className="logo">
          <img src="src/assets/hive.jpg" alt="App Logo" />
          <span className="app-name">Your App Name</span>
        </div>
        <ul>
            <li><Link to={"/home"}>Home</Link></li>
        </ul>
      </nav>
    );
}

export default Navbar;
