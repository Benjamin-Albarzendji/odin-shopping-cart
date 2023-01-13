import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import ItemPage from './components/ItemPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
  const [shoppingList, setShoppinglist] = useState([]);
  const [counter, setCounter] = useState(0);

  const addPlanet = (planet, price) => {
    if (shoppingList.some((c) => c.title === planet)) {
      return 0;
    }

    const tempShoppingList = [...shoppingList, { title: planet, price: price }];
    setShoppinglist(tempShoppingList);
    setCounter((old) => old + 1);
  };

  return (
    <BrowserRouter>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
