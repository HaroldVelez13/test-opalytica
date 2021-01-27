import * as types from '../types';
import axios from 'axios'

export const fetchOrders = () => async dispatch =>{
    let url = 'http://127.0.0.1:8000/api/v1/orders/'
    const res = await axios.get(url);
    dispatch({
        type:types.GET_ORDERS,
        payload:res.data
    })
}