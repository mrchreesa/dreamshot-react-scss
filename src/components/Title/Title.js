import React from "react";
import styles from "./title.module.scss";
import PropTypes from "prop-types";

const Title = ({ active }) => {
  return (
    <section
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
    </section>
  );
};
Title.propTypes = {
  active: PropTypes.bool,
};

export default Title;
