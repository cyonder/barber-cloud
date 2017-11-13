import { axiosInstance as axios } from '../constants/axiosInstance';
import {
    FETCH_BARBERS,
    CREATE_BARBER,
    DELETE_BARBER,
    UPDATE_BARBER
} from '../constants/actionTypes';
import { toggleModal } from "./ui"

export const fetchBarbersSuccess = (barbers) => {
    return {
        type: FETCH_BARBERS,
        payload: barbers
    }
};

export const createBarberSuccess = (barber) => {
    return {
        type: CREATE_BARBER,
        payload: barber
    }
};

export const deleteBarberSuccess = (id) => {
    return {
        type: DELETE_BARBER,
        id: id
    }
};

export const updateBarberSuccess = (barber) => {
    return {
        type: UPDATE_BARBER,
        payload: barber
    }
};

export const fetchBarbers = () => {
    return (dispatch) => {
        return axios.get(`/barbers`)
            .then(response => {
                dispatch( fetchBarbersSuccess(response.data) );
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createBarber = (barber, callback) => {
    // TODO: Clear form field after submit
    return (dispatch) => {
        return axios.post(`/barbers`, {barber})
            .then(response => {
                dispatch( createBarberSuccess(response.data) );
            })
            .then( () => dispatch( toggleModal() ))
            .then( () => callback() )
            .catch(error => {
                throw(error);
            });
    }
};

export const deleteBarber = (id, callback) => {
    return (dispatch) => {
        return axios.delete(`/barbers/${id}`)
            .then( () => dispatch( deleteBarberSuccess(id) ))
            .then( () => callback() )
            .catch(error => {
                throw(error);
            });
    }
}

export const updateBarber = (barber, callback) => {
    return (dispatch) => {
        return axios.put(`/barbers/${barber.id}`, {barber})
            .then(response => {
                dispatch( updateBarberSuccess(response.data) );
            })
            .then( () => callback() )
            .catch(error => {
                throw(error);
            })
    }
}
