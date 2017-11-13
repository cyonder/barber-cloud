import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthenticationReducer from './authenticationReducer';
import uiReducer from './uiReducer';
import barberReducer from './barberReducer';
import serviceReducer from './serviceReducer';

export default combineReducers({
    form: formReducer,
    authentication: AuthenticationReducer,
    ui: uiReducer,
    barbers: barberReducer,
    services: serviceReducer
})
