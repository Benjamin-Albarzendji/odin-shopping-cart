import { useEffect, useState } from 'react';
import backgroundImage from '../images/background.jpg';
import planet1 from '../images/planet1.jpg';
import planet2 from '../images/planet2.jpg';
import planet3 from '../images/planet3.jpg';
import planet4 from '../images/planet4.jpg';
import planet5 from '../images/planet5.jpg';
import planet6 from '../images/planet6.jpg';
import ItemComponent from './ItemComponent';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="image">
        <div className="left">
          <img src={planet1} alt="Planet Left" />
        </div>
        <div className="center">
          <img src={backgroundImage} alt="Middle BG" />
          <div className="lower">
            Expand your empire from the comforts of your home
          </div>
          <div className="upperRight">Certified Cruelty Free</div>
        </div>
        <div className="right">
          <img src={planet2} alt="Planet Right" />
        </div>
      </div>
      <div className="featured">
        <div className="header">Featured Planets</div>
        <div className="featuredItems">
          <Link
            to="/shop/planet3"
            state={{ img: planet3, title: 'New New York', price: '420$' }}
          >
            <ItemComponent
              img={planet3}
              price="420$"
              title="New New York"
            ></ItemComponent>
          </Link>
          <Link
            to="/shop/planet4"
            state={{
              img: planet4,
              title: 'Alpha Omega Poseidon',
              price: '1337$',
            }}
          >
            <ItemComponent
              img={planet4}
              price="1337$"
              title="Alpha Omega Poseidon"
            ></ItemComponent>
          </Link>
          <Link
            to="/shop/planet5"
            state={{ img: planet5, title: 'Udarvis', price: '3141$' }}
          >
            <ItemComponent
              img={planet5}
              price="3141$"
              title="Udarvis"
            ></ItemComponent>
          </Link>
          <Link
            to="/shop/planet6"
            state={{ img: planet6, title: 'Droutera 4IX', price: '9001$' }}
          >
            <ItemComponent
              img={planet6}
              price="9001$"
              title="Droutera 4IX"
            ></ItemComponent>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
