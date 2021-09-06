import {combineReducers} from "redux";
import {cartReducer as cart} from "./cart/cartreducer";
import {homeReducer as home} from "./home/homereducer"

export default combineReducers({
    home,
    cart,
})