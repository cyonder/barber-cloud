import {
    FETCH_SERVICES,
    CREATE_SERVICE,
    DELETE_SERVICE,
    UPDATE_SERVICE
} from '../constants/actionTypes';

const initialState = {};

export default function serviceReducer(state = initialState, action){
    switch(action.type){
        case FETCH_SERVICES:
            return { ...state, ...action.payload }

        case CREATE_SERVICE:
            return [ ...state, ...action.payload ]

        case DELETE_SERVICE:
            return [ ...state, ...action.id ]

        case UPDATE_SERVICE:
            return [ ...state, ...action.payload ]

        default:
            return state;
    }
}
