import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {showCart: true, amountAuth : true},
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart;
        },
        closeCart(state) {
            state.showCart = {showCart: false};
        },
        amountAuthentication(state){
            state.amountAuth = {amountAuth: false};
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;