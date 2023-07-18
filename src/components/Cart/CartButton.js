import classes from './CartButton.module.css';
import { UiActions } from '../../ReduxStore/uiReducer';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartHandler=()=>{
    dispatch(UiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
