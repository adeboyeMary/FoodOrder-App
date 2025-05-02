import { useSelector, useDispatch } from 'react-redux';

import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { uiActions } from '../../store/ui-slice';


const Cart = (props) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.total);


    const closeCartHandler = () => {
        dispatch(uiActions.closeCart())
    };

    console.log(items, '-----cart items-----')
    console.log(totalPrice, '------test total------');

    return (
        <Modal onHideOverlay={closeCartHandler}>
            <ul className={styles.cart}>
                {items.map(item => 
                    <CartItem  
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        amount={item.amount}
                        quantity={item.quantity}
                        price={item.price}
                        total={item.price}
                    />)
                }
            </ul>
           
            <div className={styles.container}>
                <span>Total Amount: </span>
                <span>${totalPrice.toFixed(2)}{''}</span>
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