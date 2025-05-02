import { useDispatch } from 'react-redux';

import classes from './CartItem.module.css';
import { cartActions } from '../../store/cartSlice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  
  const {name, quantity, price, id} = props;

  console.log(props, '------cart items props----');

  const addItemHandler = () => {
    dispatch(cartActions.addToCart({
      id,
      name,
      price
    }
    ))
   };

   const removeItemHandler =()=> {
    dispatch(cartActions.removeFromCart(id))
   };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price.toFixed(2)}{''}</span>
          <span className={classes.amount}>x{quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler} >+</button>
      </div>
    </li>
  );
};

export default CartItem;
