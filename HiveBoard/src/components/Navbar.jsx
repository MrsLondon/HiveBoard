// src/components/Navbar.jsx
import { Link } from "react-router-dom";
function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
            <li><Link to={"/home"}>Home</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  

