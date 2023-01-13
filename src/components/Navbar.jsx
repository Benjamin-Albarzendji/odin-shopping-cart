import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h2 className="logo">The Star Emporium</h2>
      <div className="links">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/shop">
          <div>Shop</div>
        </Link>
        <Link to="/About">
          <div>About</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
