import React, { useState } from "react";
import classes from "./HeaderCartButton.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../Cart/Cart";

function HeaderCartButton() {

const[modal, showModal] =  useState(false);

const modalHandler = () => {
  showModal(!modal);
}

  return (
    <>
      <button className={classes.cartButton} onClick={modalHandler}>
        <span className={classes.cartIcon}>
          <FaShoppingCart />
        </span>
        <span>Your Cart</span>
        <span className={classes.totalCartNum}>2</span>
      </button>
      {modal ? <Cart modalHandler ={modalHandler}/> : null}
    </>
  );
}

export default HeaderCartButton;
