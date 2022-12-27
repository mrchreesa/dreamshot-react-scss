import styles from "./basket.module.scss";
import React, { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Basket = ({ cartItems, setCartItems }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [active, setActive] = useState(false);
  const toggleClasses = () => {
    setActive(!active);
  };
  let total = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  function makeDecimal() {
    let n = total.toString();
    n = n.split(".");
    if (n[1] === undefined) {
      n[1] = "00";
    }
    if (n[1].length === 1) {
      n[1] = n[1] + "0";
    }
    return n[0] + "." + n[1];
  }

  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.item}>
            <button onClick={toggleClasses} className={styles.btnBasket}>
              <img
                className={styles.img}
                src="/shopping-basket.png"
                alt="shopping-basket"
              />
            </button>
            <p className={styles.input}> {makeDecimal()}$</p>
            <button className={styles.btn}>Order Now</button>
          </div>
          <div
            className={
              active
                ? `${styles.containerCart} ${styles.navActive}`
                : `${styles.containerCart}`
            }
          >
            <ShoppingCart
              cartItems={cartItems}
              setCartItems={setCartItems}
              totalAmount={totalAmount}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
