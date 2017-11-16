import {
    FETCH_BOOKING_DETAILS,
} from '../constants/actionTypes';

export default function bookingReducer(state = {}, action){
    switch(action.type){
        case FETCH_BOOKING_DETAILS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
