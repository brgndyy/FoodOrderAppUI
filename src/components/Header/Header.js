import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealImg from "../../assets/meals.jpeg";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes.imgContainer}>
        <img src={mealImg} alt="mealImg"></img>
      </div>
    </>
  );
}

export default Header;
