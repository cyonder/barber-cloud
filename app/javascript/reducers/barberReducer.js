import {
    FETCH_BARBERS,
    CREATE_BARBER,
    DELETE_BARBER,
    UPDATE_BARBER
} from '../constants/actionTypes';

const initialState = {};

export default function barberReducer(state = initialState, action){
    switch(action.type){
        case FETCH_BARBERS:
            return { ...state, ...action.payload };

        case CREATE_BARBER:
            return [ ...state, ...action.payload ];

        case DELETE_BARBER:
            return [ ...state, ...action.id ];

        case UPDATE_BARBER:
            return [ ...state, ...action.payload ];

        default:
            return state;
    }
}
