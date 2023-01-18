import { useEffect, useState } from 'react';
import planet1 from '../images/planet1.jpg';
import planet2 from '../images/planet2.jpg';
import planet3 from '../images/planet3.jpg';
import planet4 from '../images/planet4.jpg';
import planet5 from '../images/planet5.jpg';
import planet6 from '../images/planet6.jpg';
import planet7 from '../images/planet7.jpg';
import planet8 from '../images/planet8.jpg';
import planet9 from '../images/planet9.jpg';
import planet10 from '../images/planet10.jpg';
import planet11 from '../images/planet11.jpg';
import planet12 from '../images/planet12.jpg';
import ItemComponent from './ItemComponent';
import { Link } from 'react-router-dom';
import '../styles/Shop.css';

const Shop = () => {
  return (
    <div className="shop">
      <div className="header">Available Planets</div>
      <div className="offerings">
        <Link
          to="/shop/planet3"
          state={{ img: planet3, title: 'New New York', price: '420  $' }}
        >
          <ItemComponent
            img={planet3}
            price="420  $"
            title="New New York"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet4"
          state={{
            img: planet4,
            title: 'Alpha Omega Poseidon',
            price: '1337 $',
          }}
        >
          <ItemComponent
            img={planet4}
            price="1337 $"
            title="Alpha Omega Poseidon"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet5"
          state={{ img: planet5, title: 'Udarvis', price: '3141 $' }}
        >
          <ItemComponent
            img={planet5}
            price="3141 $"
            title="Udarvis"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet6"
          state={{ img: planet6, title: 'Droutera 4IX', price: '9001 $' }}
        >
          <ItemComponent
            img={planet6}
            price="9001 $"
            title="Droutera 4IX"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet1"
          state={{ img: planet1, title: 'Corriban', price: '9999 $' }}
        >
          <ItemComponent
            img={planet1}
            price="9999 $"
            title="Corriban"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet2"
          state={{ img: planet2, title: 'Alpha Centauri', price: '620 $' }}
        >
          <ItemComponent
            img={planet2}
            price="620 $"
            title="Alpha Centauri"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet7"
          state={{ img: planet7, title: 'Beta Centauri', price: '123 $' }}
        >
          <ItemComponent
            img={planet7}
            price="123 $"
            title="Beta Centauri"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet8"
          state={{ img: planet8, title: 'The Cape', price: '321 $' }}
        >
          <ItemComponent
            img={planet8}
            price="321 $"
            title="The Cape"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet9"
          state={{ img: planet9, title: 'The Windy One', price: '456 $' }}
        >
          <ItemComponent
            img={planet9}
            price="456 $"
            title="The Windy One"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet10"
          state={{ img: planet10, title: 'The Gaas', price: '651 $' }}
        >
          <ItemComponent
            img={planet10}
            price="651 $"
            title="The Gaas"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet11"
          state={{ img: planet11, title: 'Fives', price: '555 $' }}
        >
          <ItemComponent
            img={planet11}
            price="555 $"
            title="Fives"
          ></ItemComponent>
        </Link>
        <Link
          to="/shop/planet12"
          state={{ img: planet12, title: 'Casino World', price: '999999 $' }}
        >
          <ItemComponent
            img={planet12}
            price="999999 $"
            title="Casino World"
          ></ItemComponent>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
