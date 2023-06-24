import React from 'react';

import HeaderButton from './HeaderButton';
import mealsimg from '../Media/meals.jpg';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <div className={styles.pagehead}>
            <header>
                <h1>ReactMeals</h1>
                <HeaderButton onClick={props.onShowOverlay} />
            </header>
            <div className={styles['img-container']}>
                <img src={mealsimg} alt="A table full of delicious meals" />
            </div>
        </div>
    )
}

export default Header;