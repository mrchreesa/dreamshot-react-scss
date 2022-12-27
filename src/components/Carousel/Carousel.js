import React from "react";
import styles from "./carousel.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { data } from "../../data";

const Carousel = ({ setCartItems, cartItems }) => {
  let width = window.innerWidth;
  let paddingLeft;
  if (width < 512) {
    paddingLeft = 20;
  } else if (width < 900) {
    paddingLeft = 40;
  } else {
    paddingLeft = 100;
  }
  const addToBasket = (item) => {
    setCartItems([...cartItems, item]);
  };
  const responsive = {
    0: {
      items: 1.3,
      // itemsFit: "contain",
    },
    512: {
      items: 2,
    },
    1024: {
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
        <img className={styles.img} src={item.image} alt={item.name} />
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
              marginRight: "-50px",
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
    <div className={styles.container}>
      <AliceCarousel
        mouseTracking
        items={carouselItems}
        paddingLeft={paddingLeft}
        paddingRight={width < 512 ? 10 : 100}
        // autoWidth
        // autoHeight
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
        keyboardNavigation
      />
    </div>
  );
};

export default Carousel;
