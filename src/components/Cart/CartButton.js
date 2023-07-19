import classes from './CartButton.module.css';
import { UiActions } from '../../ReduxStore/uiReducer';
import { useDispatch,useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartTotalQuantity=useSelector(state=>state.cart.totalQuantity);
  const cartHandler=()=>{
    dispatch(UiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
