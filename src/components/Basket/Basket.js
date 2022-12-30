import styles from "./basket.module.scss";
import React, { useState, useRef, useEffect } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { makeDecimal } from "../../lib/makeDecimalFnc";
import Modal from "react-modal";
import PropTypes from "prop-types";

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
    // subtitle.style.color = "#f00";
    console.log("modal is open");
  }
  function closeModal() {
    setIsOpen(false);
    setCartItems([]);
    setActive(false);
  }

  const handleClick = () => {
    setIsOpen(true);
  };

  // toggle order review popup
  const toggleClasses = () => {
    setActive(!active);
  };

  // calculating total price
  let total;
  let totalWithDecimal = 0.0;

  console.log(cartItems);

  if (cartItems.length) {
    total = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    totalWithDecimal = makeDecimal(total);
  }
  // cart popup breaking points
  let width = window.innerWidth;
  let breakingPoints;

  if (width <= 500) {
    breakingPoints = "70%";
  } else if (width < 920) {
    breakingPoints = "49%";
  } else if (width < 1250) {
    breakingPoints = "26%";
  } else if (width < 1370) {
    breakingPoints = "27%";
  } else if (width < 1650) {
    breakingPoints = "27%";
  } else if (width < 1650) {
    breakingPoints = "27%";
  } else {
    breakingPoints = "27.5%";
  }

  // detecting clicks outside the order review and closing
  const ref = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // console.log("You clicked outside of me!");
          setActive(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(ref);

  return (
    <>
      <div>
        <div ref={ref} className={styles.container}>
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

            <div
              ref={ref}
              style={{ width: breakingPoints }}
              className={
                active
                  ? `${styles.containerCart} `
                  : `${styles.containerCart} ${styles.navActive}`
              }
            >
              <ShoppingCart
                setActive={setActive}
                cartItems={cartItems}
                setCartItems={setCartItems}
                totalWithDecimal={totalWithDecimal}
              />
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            appElement={document.getElementById("root")}
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
        </div>
      </div>
    </>
  );
};

Basket.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  cartItems: PropTypes.arrayOf(PropTypes.object),
  setCartItems: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  Modal: PropTypes.element,
  customStyles: PropTypes.object,
  modalIsOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  closeModal: PropTypes.func,
  toggleClasses: PropTypes.func,
  handleClick: PropTypes.func,
  ShoppingCart: PropTypes.element,
  totalWithDecimal: PropTypes.number,
};

export default Basket;
