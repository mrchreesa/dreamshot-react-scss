import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";
import Carousel from "../Carousel/Carousel";
import Basket from "../Basket/Basket";
import PropTypes from "prop-types";

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

Main.propTypes = {
  active: PropTypes.bool,
  cartItems: PropTypes.arrayOf(PropTypes.object),
  setCartItems: PropTypes.func,
};

export default Main;
