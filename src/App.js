import React, { useState } from "react";
import Collection from "./components/collection";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Collection handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  )
}
export default App