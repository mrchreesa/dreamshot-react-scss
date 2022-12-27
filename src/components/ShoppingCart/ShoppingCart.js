import React from "react";
import styles from "./shoppingcart.module.scss";

export default function ShoppingCart({ cartItems, setCartItems }) {
  return (
    <div className={styles.containerList}>
      {cartItems.map((item, index) => (
        <div key={index} className={styles.item}>
          <p>{item.name}</p>
          <p>
            <span className={styles.dollar}>$</span>
            {item.price}
          </p>
        </div>
      ))}
    </div>
  );
}
