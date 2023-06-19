import React from 'react';

import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    return (
        <li className={styles['meal-li']}>
            <div>
                <h4  className={styles['meal-name']}>
                    {props.name}
                </h4>
                <div className={styles['description']}>
                    {props.description}
                </div>
                <div className={styles['meal-price']}>
                    {props.price}
                </div>
            </div>
            <div>
                <MealItemForm id={props.id} />
            </div>
        </li>
    );
};

export default MealItem;