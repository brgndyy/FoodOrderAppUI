import React from "react";
import classes from "./MealItemForm.module.css";

function MealItemForm() {
  return (
    <div>
      <form className={classes.form}>
        <div className={classes.input}>
          <label>Amount</label>
          <input type={"number"} defaultValue="1" min="1" max="5"></input>
        </div>
        <div className={classes.button}>
        <button>+Add</button>
        </div>
      </form>
    </div>
  );
}

export default MealItemForm;
