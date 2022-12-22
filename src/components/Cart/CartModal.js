import React from "react";
import classes from "./CartModal.module.css";
import CartItem from "./CartItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

function CartModal(props) {
  return (
    <div className={classes.cartmodal}>
      <div className={classes.content}>
        <ul>
            {DUMMY_MEALS.map(mealItem => {return(
                <CartItem key={mealItem.id} id ={mealItem.id} name ={mealItem.name} price ={mealItem.price}/>
            )})}
        </ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>$0.00</span>
        </div>
        <div className={classes.actions}>
          <button className={classes.closeBtn} onClick ={props.modalHandler}>Close</button>
          <button className={classes.orderBtn} onClick ={props.modalHandler}>Order</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
