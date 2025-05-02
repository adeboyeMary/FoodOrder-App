import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


import styles from './MealItemForm.module.css';
import { cartActions } from '../../../store/cartSlice';


const MealItemForm = (props) => {
    const dispatch = useDispatch();
    const [enteredQuality, setEnteredQuality] = useState(1);
    const [cart, setCart] = useState([]);

    const {name, price, id} = props;
    const inputChangeHandler = (event) => {
        setEnteredQuality(event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(props, "------items going into cart-----");

        dispatch(cartActions.addToCart({
            id,
            price,
            name
        }
        ))
        setCart([...cart, enteredQuality]);
        setEnteredQuality(1);
    };

    return(
        <form className={styles.form}>
            <div className={styles.input}>
                <label htmlFor='amount'>Quantity</label>
                <input 
                    type='number' id='amount'
                    step='1' min='1' max='5' 
                    defaultValue='1' 
                    onChange={inputChangeHandler}
                ></input>
            </div>
            <button onClick={submitHandler}>+ Add</button>
        </form>
    )
}

export default MealItemForm;