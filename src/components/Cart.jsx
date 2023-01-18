import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = (props) => {
  return (
    <div className="Cart">
      <div className="cartTitle">Planet Cart</div>
      <div className="shoppingListContainer">
        {props.shoppingList.map((e) => {
          return (
            <div className="shoppingItem" key={props.shoppingList.title}>
              <div className="left">
                <div className="shoppingImage">
                  <img src={e.img} alt="" />
                </div>
                <div className="itemTitle">{e.title}</div>
              </div>
              <div className="right">
                <div className="itemPrice">{e.price}</div>
                <button
                  onClick={() => props.removePlanet(e.title, e.price, e.title)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
