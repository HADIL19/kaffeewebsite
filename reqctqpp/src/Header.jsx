import React from 'react';
import { Coffee } from 'lucide-react';

const Header = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

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
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;