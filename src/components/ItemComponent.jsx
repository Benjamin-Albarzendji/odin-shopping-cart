import { useEffect, useState } from 'react';
import '../styles/itemComponent.css';

const ItemComponent = (props) => {
  return (
    <div className="itemComponent">
      <div className="componentImage">
        <img src={props.img} alt="Component" />
      </div>
      <div className="title">{props.title}</div>
      <div className="componentPrice">{props.price}</div>
    </div>
  );
};

export default ItemComponent;
