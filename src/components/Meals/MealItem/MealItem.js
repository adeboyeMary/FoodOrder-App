import React from 'react';

import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';


const MealItem = (props) => {
    const {name, price, description} = props;


    return (
        <li className={styles['meal-li']}>
            <div>
                <h4  className={styles['meal-name']}>
                    {name}
                </h4>
                <div className={styles['description']}>
                    {description}
                </div>
                <div className={styles['meal-price']}>
                ${price.toFixed(2)} 
                </div>
            </div>
            <div>
                <MealItemForm  />
            </div>
        </li>
    );
};

export default MealItem;