import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        total: 0.00
    },
    reducers: {
        addToCart(state, action){
            const newItem = action.payload;
            console.log(newItem, '....about to add item to cart...');
            //check if a copy of the newItem already exist by comparing id
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            // state.total = existingItem.price;

            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    key: newItem.id,
                    name: newItem.name,
                    quantity: 1,
                    price: newItem.price,
                    total: newItem.price
                })
                state.total += newItem.price;
            } else{
                existingItem.quantity++;
                state.total += newItem.price;
            }
        },
        removeFromCart(state, action) {
           const newId = action.payload;
           const existingItem = state.items.find(item => item.id === newId);
            state.totalQuantity--;
            if(existingItem && existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== newId)
                state.total -= existingItem.price;

            } else{
                existingItem.quantity--;
                state.total -= existingItem.total;
                console.log(state.total, '-------test total-----');

            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;