import React from "react";
import styles from "./title.module.scss";

const Title = ({ active }) => {
  return (
    <div
      className={
        active ? `${styles.container} ${styles.blur}` : `${styles.container}`
      }
    >
      <h1 className={styles.title}>
        The fastest brunch delivery in{" "}
        <span className={` ${styles.titleOrange}`}>Your city </span>{" "}
      </h1>
      <p className={styles.text}>
        This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How
        about you ?
      </p>
    </div>
  );
};

export default Title;
