import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import shoppingCart from '../images/shopping.png';

const Navbar = (props) => {
  return (
    <div className="nav">
      <nav>
        <h2 className="logo">The Star Emporium</h2>
        <div className="links">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/shop">
            <div>Shop</div>
          </Link>
          <Link to="/about">
            <div>About</div>
          </Link>
          <div className="navImage">
            <img src={shoppingCart} alt="" />
            {props.counter > 0 && (
              <Link to="/cart">
                <div className="counterCart">{props.counter}</div>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
