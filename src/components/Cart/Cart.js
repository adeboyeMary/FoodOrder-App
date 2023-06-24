import React from 'react';

import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = <ul className={styles.cart}>{[
        {id: 'a1', name:'Sushi', amount:'2', price:'22.99' },
    ].map( (item) => <li>{item.name}</li>)}</ul>;

    return (
        <Modal>
            {cartItems}
            <div className={styles.tcontainer} >
                <span>Total Amount</span>
                <span>12.23</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.close} 
                    onClick={props.onHideOverlay} >Close</button>
                <button className={styles.order}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;