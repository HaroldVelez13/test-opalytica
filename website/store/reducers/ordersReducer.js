import * as types from '../types';

const initialState = {
    orders:[],
    order:{},
    loading:false,
    error:null
}

export const orderReducer = (state=initialState, action) =>{
    switch (action.type) {
        case types.GET_ORDERS:
            
            return {
                ...state,
                orders:action.payload,
                loading:false,
                error:null
            }
    
        default:
            return state;
    }
}