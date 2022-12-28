import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";
import Carousel from "../Carousel/Carousel";
import Basket from "../Basket/Basket";
import styles from "./main.module.scss";

const Main = () => {
  const [cartItems, setCartItems] = useState([]);
  const [active, setActive] = useState(false);

  return (
    <div>
      {" "}
      <NavBar active={active} />
      <Title active={active} />
      <Carousel
        active={active}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Basket
        cartItems={cartItems}
        setCartItems={setCartItems}
        active={active}
        setActive={setActive}
      />
    </div>
  );
};

export default Main;
