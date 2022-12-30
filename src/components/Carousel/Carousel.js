import React from "react";
import styles from "./carousel.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import data from "../../data.json";
import PropTypes from "prop-types";

const Carousel = ({ setCartItems, cartItems, active }) => {
  const addToBasket = (item) => {
    setCartItems([...cartItems, item]);
  };
  // carousel breaking points
  let width = window.innerWidth;
  let paddingLeft;
  if (width < 512) {
    paddingLeft = 20;
  } else if (width < 900) {
    paddingLeft = 40;
  } else {
    paddingLeft = 100;
  }

  const responsive = {
    0: {
      items: 1.3,
      // itemsFit: "contain",
    },
    612: {
      items: 2,
    },
    908: {
      items: 3,
    },
    1224: {
      items: 4,
    },
    2048: {
      items: 7,
    },
  };
  const { items } = data;
  const carouselItems = items.map((item, i) => {
    return (
      <div key={i} className={styles.carouselItem}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={item.image} alt={item.name} />
        </div>
        <span className={styles.span}>
          <h4 className={styles.h4}>{item.name}</h4>
          <p className={styles.caption}>{item.caption}</p>
          <div style={{ display: "flex" }}>
            <p className={`${styles.price} ${styles.dollar}`}>$</p>
            <p className={styles.price}> {item.price}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              width: "100%",
              marginRight: "-20px",
            }}
          >
            <button onClick={() => addToBasket(item)} className={styles.button}>
              <img
                className={styles.buttonImg}
                src="/shopping-basket 2.png"
                alt="shopping-basket"
              />
            </button>
          </div>
        </span>
      </div>
    );
  });
  return (
    <div
      className={
        active ? `${styles.container} ${styles.blur}` : `${styles.container}`
      }
    >
      <AliceCarousel
        mouseTracking
        items={carouselItems}
        paddingLeft={paddingLeft}
        paddingRight={width < 512 ? 10 : 100}
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
        keyboardNavigation
      />
    </div>
  );
};
Carousel.propTypes = {
  active: PropTypes.bool,
  cartItems: PropTypes.arrayOf(PropTypes.object),
  setCartItems: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  AliceCarousel: PropTypes.element,
  responsive: PropTypes.objectOf(PropTypes.object),
};
export default Carousel;
