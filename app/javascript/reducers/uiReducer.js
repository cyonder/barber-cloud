import {
    TOGGLE_NAVIGATION,
    TOGGLE_MODAL
} from '../constants/actionTypes';

const initialState = {
    navigationIsOpen: false,
    modalIsOpen: false,
};

export default function uiReducer(state = initialState, action){
    switch(action.type){
        case TOGGLE_NAVIGATION:
            return Object.assign({}, state, {
                navigationIsOpen: !state.navigationIsOpen
            });
        case TOGGLE_MODAL:
            return Object.assign({}, state, {
                modalIsOpen: !state.modalIsOpen
            });
        default:
            return state;
    }
}
