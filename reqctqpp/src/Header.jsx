import { Coffee } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          {/* Logo and Title */}
          <div className="logo-container">
            <Coffee className="logo-icon" />
            <h1 className="logo-title">Coffee Shop</h1>
          </div>

          {/* Navigation Links */}
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="nav-link">Coffee Menu</Link> {/* ADDED LINK */}
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
