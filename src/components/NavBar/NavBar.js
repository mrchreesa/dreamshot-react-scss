import React from "react";
import styles from "./navbar.module.scss";

const NavBar = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>BRUNCHY</h1>
      <div className={styles.empty}></div>
      <div className={styles.buttons}>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>About</button>
          <button className={styles.button}>Call Us</button>
        </div>
        <div className={styles.deliveryGroup}>
          <button className={`${styles.button} ${styles.delivery}`}>
            Free Delivery
          </button>
          <img className={styles.img} src="/delivery.png" alt="img" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
