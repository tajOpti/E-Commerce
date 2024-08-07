import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";

export const CartContext = createContext();


const initialState = { cartItems: [] };


const CartContextprovider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = payload => {
        console.log(payload);
        dispatch({ type: 'ADD', payload });
    }

    const contextValues = {
        addProduct,
        ...state
    }
    console.log(contextValues);
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextprovider;