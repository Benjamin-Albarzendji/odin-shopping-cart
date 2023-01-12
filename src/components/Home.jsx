import { useEffect, useState } from 'react';
import backgroundImage from '../images/background.jpg';
import planet1 from '../images/planet1.jpg';
import planet2 from '../images/planet2.jpg';
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
        </div>
        <div className="right">
        <img src={planet2} alt="Planet Right" />
        </div>
      </div>
    </div>
  );
};

export default Home;
