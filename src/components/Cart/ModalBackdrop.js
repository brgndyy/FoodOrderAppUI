import React from 'react'
import classes from './ModalBackdrop.module.css'

function ModalBackdrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.modalHandler}>
      {props.children}
    </div>
  )
}

export default ModalBackdrop