import React from "react";
import styles from "./basket.module.scss";

const Basket = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img
          className={styles.img}
          src="/shopping-basket.png"
          alt="shopping-basket"
        />
        <p className={styles.input}> 0.00$</p>
        <button className={styles.btn}>Order Now</button>
      </div>
    </div>
  );
};

export default Basket;
