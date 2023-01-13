import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import shoppingCart from '../images/shopping.png';

const Navbar = (props) => {
  const test = () => {
    console.log(props);
  };

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
          <Link to="/About">
            <div>About</div>
          </Link>
          <div className="navImage">
            <img onClick={test} src={shoppingCart} alt="" />
            {props.counter > 0 && (
              <div className="counterCart">{props.counter}</div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
