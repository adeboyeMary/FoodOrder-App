import React from 'react';

import styles from './MealList.module.css'

const MealList = (props) => {
    return (
        <ul className={styles.meallist}>
            {props.item.map(meals => 
                <li key={meals.id} className={styles['meal-li']}>
                    <div className={styles['meal-name']}>
                        {meals.name}
                    </div>
                    <div className={styles['description']}>
                        {meals.description}
                    </div>
                    <div className={styles['meal-price']}>
                        {meals.price}
                    </div>
                    <hr />
                </li>)}
        </ul>
    )
}

export default MealList;