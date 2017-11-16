import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthenticationReducer from './authenticationReducer';
import uiReducer from './uiReducer';
import barberReducer from './barberReducer';
import serviceReducer from './serviceReducer';
import shopReducer from './shopReducer';
import bookingReducer from './bookingReducer';

export default combineReducers({
    form: formReducer,
    authentication: AuthenticationReducer,
    ui: uiReducer,
    barbers: barberReducer,
    services: serviceReducer,
    shops: shopReducer,
    booking: bookingReducer
})
