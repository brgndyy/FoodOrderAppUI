import ModalBackdrop from "./ModalBackdrop";
import CartModal from "./CartModal";

function Cart(props) {
  return (
    <>
      <ModalBackdrop modalHandler={props.modalHandler} />
      <CartModal modalHandler={props.modalHandler} />
    </>
  );
}

export default Cart;
