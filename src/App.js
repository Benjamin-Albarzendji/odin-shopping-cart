import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import ItemPage from './components/ItemPage';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
  const [shoppingList, setShoppinglist] = useState([]);
  const [counter, setCounter] = useState(0);

  const addPlanet = (planet, price, img) => {
    if (shoppingList.some((c) => c.title === planet)) {
      return 0;
    }

    const tempShoppingList = [
      ...shoppingList,
      { title: planet, price: price, img: img },
    ];
    setShoppinglist(tempShoppingList);
    setCounter((old) => old + 1);
  };

  const removePlanet = (planet, price, img) => {
    if (shoppingList.some((c) => c.title === planet)) {
      const tempShoppingList = [...shoppingList];

      const objectFound = tempShoppingList.find((c) => c.title === planet);
      const indexFound = tempShoppingList.indexOf(objectFound);
      tempShoppingList.splice(indexFound, 1);

      setShoppinglist(tempShoppingList);
      setCounter((old) => old - 1);
    }
  };

  return (
    <BrowserRouter basename="https://benjamin-albarzendji.github.io/odin-shopping-cart/">
      <div className="App">
        <Navbar counter={counter}></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop/:id"
            element={<ItemPage addPlanet={addPlanet} />}
          />
          <Route
            path="/cart"
            element={
              <Cart shoppingList={shoppingList} removePlanet={removePlanet} />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
