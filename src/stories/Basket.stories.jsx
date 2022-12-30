import React, {useState} from "react";
import Basket from "../components/Basket/Basket";

export default {
  title: "Basket",
  component: Basket,
  parameters: {
    layout: "fullscreen",
  },
}

const Template = (args) => {
const [active, setActive] = useState(false);
const [cartItems, setCartItems] = useState([
    {
      caption: "With honey",
      image: "/Brunchy/Asset 13.png",
      name: "Butter Pancakes",
      price: 14.5,
    },
    {
      caption: "2 pieces",
      image: "/Brunchy/Asset 12.png",
      name: "Avocado Toast",
      price: 16.5,
    },
  ],);
return <Basket {...args} active={active} setActive={setActive} cartItems={cartItems} setCartItems={setCartItems}/>};
export const BasketComponent = Template.bind({});

BasketComponent.args = {
  cartItems: [
    {
      caption: "With honey",
      image: "/Brunchy/Asset 13.png",
      name: "Butter Pancakes",
      price: 14.5,
    },
    {
      caption: "2 pieces",
      image: "/Brunchy/Asset 12.png",
      name: "Avocado Toast",
      price: 16.5,
    },
  ],
};
