import React from "react";
import styles from "./title.module.scss";

const Title = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        The fastest brunch delivery in{" "}
        <span className={` ${styles.titleOrange}`}>Your city </span>{" "}
      </h1>
      {/* <h1 className={`${styles.title} ${styles.titleOrange}`}></h1> */}
      <p className={styles.text}>
        This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How
        about you ?
      </p>
    </div>
  );
};

export default Title;
