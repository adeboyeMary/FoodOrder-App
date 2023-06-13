import React from 'react';


import styles from './MealsAvailable.module.css';
import Card from '../UI/Card.js';
// import MealItem from './MealItem';
import MealList from './MealList';

const DUMMY_MEALS = [
    {
        id: 'a1', 
        name: 'Sushi', 
        description: 'Finest fish and veggies',
        price: '$22.99'
    }, 
    {
        id: 'a2', 
        name: 'Schnitzel', 
        description: 'A german speciality!',
        price: '$16.50'
    },
    {
        id: 'a3',
        name:  'Barbecue and Burger',
        description: 'American, raw, meaty',
        price: '$12.99'
    },
    {
        id: 'a4',
        name:  'Green Bowl',
        description: 'Healtyh... and green...',
        price: '$18.99'
    }
]

const MealsAvailable = () => {
    // const meals = DUMMY_MEALS;

    // const onAddMeals = () => {
    //     setMeals((prevState)=>{
    //         return [...prevState];
    //     })
    // }

    // const mealslist = DUMMY_MEALS.map(meals => <li>{meals.name}</li>);
    // const mealslist = DUMMY_MEALS;

    return (
        <section className={styles.available}>
            <Card>
                <MealList item={DUMMY_MEALS} />
            </Card>
        </section>
    )
}

export default MealsAvailable;