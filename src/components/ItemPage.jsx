import { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom"

const ItemPage = (props) => {
  const location = useLocation();
  const propsData = location.state

  useEffect(() => {
    console.log(propsData);
  }, []);
  return <div>ItemPage


    <img src={location.state} alt="" />
  </div>;
};

export default ItemPage;
