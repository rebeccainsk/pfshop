import {api} from "../../helper/api";
import {GET_HOME_PRODUCTS} from "../../helper/costants";

export const actFetchProducts =()=>async dispatch=>{
    const res = await api.get('/')
    dispatch({type: GET_HOME_PRODUCTS, payload: res.data})
}