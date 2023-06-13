import React from 'react';

import MealSummary from './MealSummary';
import MealsAvailable from './MealsAvailable';
// import MealList from './MealList';

const Meals = (props) => {
    return (
        <>
            <MealSummary />
            <MealsAvailable />
        </>
    )
}

export default Meals;