import React, {useState, useRef } from 'react';
import { useDispatch } from 'react-redux';


import styles from './MealItemForm.module.css';
import { cartActions } from '../../../store/cart-slice';



const MealItemForm = (props) => {
    const dispatch = useDispatch();

    const {name, price, id} = props;

    const [isAmountValid, setIsAmountValid] = useState(true);
    const amountInputRef = useRef();

    
    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(cartActions.addToCart(
            id,
            price,
            name
        ))

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5){
                setIsAmountValid(false);
                return;
            };

            props.addItemHandler(enteredAmountNumber);
    };

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.input}>
                <label htmlFor='amount'>Amount</label>
                <input 
                    type='number' id='amount'
                    step='1' min='1' 
                    max='5' defaultValue='1' 
                ></input>
            </div>
            

            {/* <Input 
                ref={amountInputRef} 
                label='Amount' 
                input={{
                    id: 'amount_' + props.id,  
                    type: 'number',
                    min: '1',
                    max:'5',
                    step: '1',
                    defaultValue: '1', 
            }} /> */}
            <button>+ Add</button>
            {!isAmountValid && <p>Enter a valid amount(1-5).</p>}
        </form>
    )
}

export default MealItemForm;