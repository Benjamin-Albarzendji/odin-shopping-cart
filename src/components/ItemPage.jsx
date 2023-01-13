import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ItemPage.css';

const ItemPage = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const propsData = location.state;

  const addHolder = () => {
    if (props.addPlanet(location.state.title, location.state.price) === 0) {
      navigate('/shop');
    } else {
      navigate('/shop');
    }
  };

  return (
    <div className="itemPage">
      <div className="itemCard">
        <div className="image">
          <img src={location.state.img} alt="" />
        </div>
        <div className="title">{location.state.title}</div>
        <div className="componentPrice">{location.state.price}</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <button className="shopButton" onClick={addHolder}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
