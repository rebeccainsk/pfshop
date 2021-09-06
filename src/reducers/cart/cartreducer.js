import {ADD_TO_CART, DELETE_CART_ITEM, FETCH_CART} from "../../helper/costants";

const initState = {cartArray:[]}

export const cartReducer = (state = initState, action) => {
    const {type, payload} = action
    switch (type){
        case ADD_TO_CART:
            return {...state, cartArray: payload}
        case FETCH_CART:
            return {...state, cartArray: payload}
        case DELETE_CART_ITEM:
            return {...state, cartArray: payload}
        default:
            return state
    }
}