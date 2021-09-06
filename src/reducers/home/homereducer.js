import {GET_HOME_PRODUCTS} from "../../helper/costants";

const initState = {homeArray: []}

export const homeReducer = (state=initState, action) => {
    const {type, payload} = action
    switch (type){
        case GET_HOME_PRODUCTS:
            return {...state, homeArray: payload}
        default:
            return state
    }
}