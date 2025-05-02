import React from 'react';

import HeaderButton from './HeaderButton';
import mealsImg from '../Media/meals.jpg';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <div className={styles.pageHead}>
            <header>
                <h1>ReactMeals</h1>
                <HeaderButton />
            </header>
            <div className={styles['img-container']}>
                <img src={mealsImg} alt="A table full of delicious meals" />
            </div>
        </div>
    )
}

export default Header;