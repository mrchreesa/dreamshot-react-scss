import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";
import Carousel from "../Carousel/Carousel";
import Basket from "../Basket/Basket";

const Main = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      {" "}
      <NavBar />
      <Title />
      <Carousel cartItems={cartItems} setCartItems={setCartItems} />
      <Basket cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Main;
