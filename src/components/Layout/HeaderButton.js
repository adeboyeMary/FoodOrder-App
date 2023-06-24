import React from'react';

import styles from "./HeaderButton.module.css";
import CartIcon from '../Cart/cartIcon';

const HeaderButton = (props) => {
    return (
        <button className={styles['header-button']} 
            onClick={props.onClick} 
        >
            <span><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    )
}

export default HeaderButton;