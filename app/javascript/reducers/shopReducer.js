import {
    FETCH_SHOPS,
} from '../constants/actionTypes';

export default function shopReducer(state = {}, action){
    switch(action.type){
        case FETCH_SHOPS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
