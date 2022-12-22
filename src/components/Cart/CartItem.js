import React from 'react'
import classes from './CartItem.module.css'

function CartItem(props) {
  return (
    <li className={classes.cartItem}>
      <div className={classes.cartItemInfo}>
        <h2>{props.name}</h2>
        <div className={classes.cartItem_summary}>
          <span className={classes.cartItem_price}>${props.price}</span>
          <span className={classes.cartItem_amount}>x1</span>
        </div>
      </div>
      <div className={classes.cartItem_actions}>
      <button>-</button>
      <button>+</button>
      </div>
    </li>
  )
}

export default CartItem