import { useEffect, useState } from 'react';
import backgroundImage from '../images/background.jpg';
import planet1 from '../images/planet1.jpg';
import planet2 from '../images/planet2.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="image">
        <img src={planet1} alt="Planet Left" />
        <img src={backgroundImage} alt="Middle BG" />
        <img src={planet2} alt="Planet Right" />
      </div>
    </div>
  );
};

export default Home;
