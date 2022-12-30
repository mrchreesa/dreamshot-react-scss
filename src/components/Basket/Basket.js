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

          <div
            ref={ref}
            style={{ width: breakingPoints, bottom, top }}
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
