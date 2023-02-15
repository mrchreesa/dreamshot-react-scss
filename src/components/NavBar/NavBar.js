import React from "react";
import styles from "./navbar.module.scss";
import PropTypes from "prop-types";

const NavBar = ({ active }) => {
  return (
    <header
      className={
        active ? `${styles.container} ${styles.blur}` : `${styles.container}`
      }
    >
      <h1 className={styles.logo}>BRUNCHY</h1>
      <div className={styles.empty}></div>
      <div className={styles.buttons}>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.krisrahnev.com"
              target="_blank"
              rel="noreferrer"
              data-testid="about"
            >
              About
            </a>
          </button>
          <button className={styles.button}>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.krisrahnev.com"
              target="_blank"
              rel="noreferrer"
            >
              Call Us
            </a>
          </button>
        </div>
        <div className={styles.deliveryGroup}>
          <button className={`${styles.button} ${styles.delivery}`}>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.krisrahnev.com"
              target="_blank"
              rel="noreferrer"
            >
              Free Delivery
            </a>
          </button>
          <img className={styles.img} src="/delivery.png" alt="img" />
        </div>
      </div>
    </header>
  );
};

NavBar.propTypes = {
  active: PropTypes.bool,
};

export default NavBar;
