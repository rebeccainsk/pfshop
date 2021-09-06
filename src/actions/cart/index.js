import {ADD_TO_CART, DELETE_CART_ITEM, FETCH_CART, GET_HOME_PRODUCTS} from "../../helper/costants";

export const actAddToCart = (deskObj) => {
    const {index, value, price, quantity} = deskObj
    let cartArr = JSON.parse(localStorage.getItem("cartArr"));
    if (cartArr) {
        let result = cartArr.find((item) => item.index === index)
        //no same index item
        if (!result) {
            cartArr.push(deskObj)
            localStorage.setItem("cartArr", JSON.stringify(cartArr))
        } else {
            //update quantity
            let tempArray = cartArr.map((item, id) => {
                if (id === index) {
                    item.quantity += 1
                    return item
                } else {
                    return item
                }
            })
            localStorage.setItem("cartArr", JSON.stringify(tempArray))
        }
    } else {
        //first item in the cart
        localStorage.setItem("cartArr", JSON.stringify([deskObj]))
    }
    return {
        type: ADD_TO_CART,
        payload: JSON.parse(localStorage.getItem("cartArr"))
    }

}

export const fetchCart = () => {
    return {
        type: FETCH_CART,
        payload: JSON.parse(localStorage.getItem("cartArr"))
    }
}

export const deleteCartItem = (index) => {
    let cartArr = JSON.parse(localStorage.getItem("cartArr"))
    let tempArray = cartArr.filter((ele, id) => parseInt(ele.index) !== index)
    localStorage.setItem("cartArr", JSON.stringify(tempArray))
    return {
        type: DELETE_CART_ITEM,
        payload: JSON.parse(localStorage.getItem('cartArr'))
    }
}