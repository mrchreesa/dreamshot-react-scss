import styles from "./basket.module.scss";
import React, { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { makeDecimal } from "../../lib/makeDecimalFnc";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
  },
};

const Basket = ({ cartItems, setCartItems, active, setActive }) => {
  //Modal set up
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
    setCartItems([]);
    setActive(false);
  }
  const toggleClasses = () => {
    setActive(!active);
  };
  const handleClick = () => {
    setIsOpen(true);
  };

  // calculating total price
  let total = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  let totalWithDecimal = makeDecimal(total);

  // cart popup breaking points
  let width = window.innerWidth;
  let height = window.innerHeight;
  let breakingPoints;
  let bottom;
  let top;
  if (width < 380 && height < 670) {
    breakingPoints = "75%";
    bottom = "10vh";
    top = "25vh";
  } else if (width < 380 && height > 670) {
    breakingPoints = "75%";
    bottom = "18vh";
    top = "25vh";
  } else if (width < 400) {
    breakingPoints = "75%";
    bottom = "28vh";
    top = "25vh";
  } else if (width < 512) {
    breakingPoints = "75%";
    bottom = "35vh";
    top = "25vh";
  } else if (width < 769 && height > 1024) {
    breakingPoints = "49%";
    bottom = "35vh";
    top = "25vh";
  } else if (width < 769) {
    breakingPoints = "49%";
    bottom = "0vh";
    top = "40vh";
  } else if (width === 820 && height === 1180) {
    breakingPoints = "49%";
    bottom = "43vh";
    top = "25vh";
  } else if (width < 900) {
    breakingPoints = "49%";
    bottom = "0";
    top = "40vh";
  } else {
    breakingPoints = "29%";
    bottom = "0";
    top = "40vh";
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
            <p className={styles.input}> {totalWithDecimal}$</p>
            <button onClick={handleClick} className={styles.btn}>
              Order Now
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div className={styles.modal}>
              {cartItems.length ? (
                <>
                  <h1 className={styles.modalTitle}>Congratulations!</h1>
                  <p className={styles.modalText}>Your order is on it's way!</p>
                  <button onClick={closeModal} className={styles.modalBtn}>
                    OK
                  </button>{" "}
                </>
              ) : (
                <>
                  <p className={styles.modalText}>Please choose your meal</p>
                  <button onClick={closeModal} className={styles.modalBtn}>
                    {" "}
                    OK
                  </button>
                </>
              )}
            </div>
          </Modal>

          <div
            style={{ width: breakingPoints, bottom, top }}
            className={
              active
                ? `${styles.containerCart} `
                : `${styles.containerCart} ${styles.navActive}`
            }
          >
            <ShoppingCart
              cartItems={cartItems}
              setCartItems={setCartItems}
              totalWithDecimal={totalWithDecimal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
