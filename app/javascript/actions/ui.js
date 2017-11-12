import {
    TOGGLE_NAVIGATION,
    TOGGLE_MODAL
} from '../constants/actionTypes';

export function toggleNavigation(){
    return{
        type: TOGGLE_NAVIGATION,
    };
}

export function toggleModal(){
    return{
        type: TOGGLE_MODAL
    }
}
