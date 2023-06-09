import React from 'react';

import Button from '../UI/Button';
import mealsimg from '../Media/meals.jpg';
import styles from './Header.module.css';

const PageHeader = () => {
    return (
        <div className={styles.pagehead}>
            <header>
                <h1>ReactMeals</h1>
                <Button>Your Cart</Button>
            </header>
            <div className={styles['img-container']}>
                <img src={mealsimg} alt="A table full of delicious meals" />
            </div>
        </div>
    )
}

export default PageHeader;