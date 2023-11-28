import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedTotal = state.totalAmount + action.item.price * action.item.amount;
        const updatedItems = state.items.concat(action.item);
        return {
            items: updatedItems,
            totalAmount: updatedTotal
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:'ADD', item: item}); //this sets action.
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});  //this sets action.
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;