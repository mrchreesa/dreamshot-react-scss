import React from "react";
import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";
import Carousel from "../Carousel/Carousel";
import Basket from "../Basket/Basket";

const Main = () => {
  return (
    <div>
      {" "}
      <NavBar />
      <Title />
      <Carousel />
      <Basket />
    </div>
  );
};

export default Main;
