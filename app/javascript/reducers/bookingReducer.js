import {
    FETCH_BOOKING_BARBERS,
    FETCH_BOOKING_SERVICES
} from '../constants/actionTypes';

export default function bookingReducer(state = {}, action){
    switch(action.type){
        case FETCH_BOOKING_BARBERS:
            return { ...state, ...action.payload }
        case FETCH_BOOKING_SERVICES:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
