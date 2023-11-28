import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart(state, action){
            const newItem = action.payload;
            //check if a copy of the newItem already exist by comparing id
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price
                })
            } else{
                existingItem.quantity++;
                existingItem.totalPrice =  existingItem.totalPrice + newItem.price;
            }
        },
        removeFromCart(state, action) {
           const newId = action.payload;
           const existingItem = state.items.find(item => item.id === newId)
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items.filter(item => item.id !== newId)
            } else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - newId.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;