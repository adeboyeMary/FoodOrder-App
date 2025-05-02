import React from 'react';

import styles from './MealsAvailable.module.css';
import Card from '../UI/Card.js';
import MealItem from '../Meals/MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'a1', 
        name: 'Sushi', 
        description: 'Finest fish and veggies',
        price: 22.99
    }, 
    {
        id: 'a2', 
        name: 'Schnitzel', 
        description: 'A german specialty!',
        price: 16.50
    },
    {
        id: 'a3',
        name:  'Barbecue and Burger',
        description: 'American, raw, meaty',
        price: 12.99
    },
    {
        id: 'a4',
        name:  'Green Bowl',
        description: 'Healthy... and green...',
        price: 18.99
    }
]

const MealsAvailable = () => {
    const mealsList = DUMMY_MEALS.map(item => 
        <MealItem
            id={item.id}
            key={item.id}
            name={item.name} 
            description={item.description}
            price={item.price} 
        />)

    return (
        <section className={styles.available}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default MealsAvailable;