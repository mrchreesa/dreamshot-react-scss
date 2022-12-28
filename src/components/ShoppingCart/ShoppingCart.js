import React from "react";
import styles from "./shoppingcart.module.scss";

export default function ShoppingCart({
  cartItems,
  setCartItems,
  totalWithDecimal,
}) {
  const handleDelete = (index) => {
    let array = [...cartItems];
    array.splice(index, 1);
    console.log(index);
    setCartItems(array);
  };

  return (
    <div className={styles.containerList}>
      {cartItems.length ? (
        cartItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <button onClick={() => handleDelete(index)} className={styles.btn}>
              ✗
            </button>
            <p className={styles.name}>{item.name}</p>
            <p>
              <span className={styles.dollar}>$</span>
              {item.price}
            </p>
          </div>
        ))
      ) : (
        <div className={`${styles.item} ${styles.center}`}>
          <p>Your cart is empty</p>
        </div>
      )}
      <div className={styles.empty}></div>
      <div className={`${styles.item} ${styles.total}`}>
        <p>Total</p>
        <p>
          <span className={styles.dollar}>$</span>
          {totalWithDecimal}
        </p>
      </div>
    </div>
  );
}
