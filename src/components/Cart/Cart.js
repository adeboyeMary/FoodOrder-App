import { useSelector, useDispatch } from 'react-redux';

import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { uiActions } from '../../store/ui-slice';


const Cart = (props) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalPrice);

    const closeCartHandler = () => {
        dispatch(uiActions.closeCart())
    };

    const cartItems = (<ul className={styles.cart}>
        {items.map((item) =>(
            <CartItem 
                key={item.id}
                item={{
                    id: item.id,
                    name: item.id,
                    amount: item.amount,
                    price: item.price }}
            />))}
        </ul>);

    return (
        <Modal onHideOverlay={closeCartHandler}>
            {cartItems}
            <div className={styles.tcontainer}>
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.close} 
                    onClick={closeCartHandler}>Close</button>
                <button className={styles.order}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;