import { axiosInstance as axios } from '../constants/axiosInstance';
import {
    FETCH_SERVICES,
    CREATE_SERVICE,
    DELETE_SERVICE,
    UPDATE_SERVICE
} from '../constants/actionTypes';
import { toggleModal } from "./ui"

export const fetchServicesSuccess = (services) => {
    return {
        type: FETCH_SERVICES,
        payload: services
    }
};

export const createServiceSuccess = (service) => {
    return {
        type: CREATE_SERVICE,
        payload: service
    }
};

export const deleteServiceSuccess = (id) => {
    return {
        type: DELETE_SERVICE,
        id: id
    }
};

export const updateServiceSuccess = (service) => {
    return {
        type: UPDATE_SERVICE,
        payload: service
    }
};

export const fetchServices = () => {
    return (dispatch) => {
        return axios.get(`/services`)
            .then(response => {
                dispatch( fetchServicesSuccess(response.data) );
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createService = (service, callback) => {
    // TODO: Clear form field after submit
    return (dispatch) => {
        return axios.post(`/services`, { service })
            .then(response => {
                dispatch( createServiceSuccess(response.data) );
            })
            .then( () => dispatch( toggleModal() ))
            .then( () => callback() )
            .catch(error => {
                throw(error);
            });
    }
};

export const deleteService = (id, callback) => {
    return (dispatch) => {
        return axios.delete(`/services/${id}`)
            .then( () => dispatch( deleteServiceSuccess(id) ))
            .then( () => callback() )
            .catch(error => {
                throw(error);
            });
    }
}

export const updateService = (service, callback) => {
    return (dispatch) => {
        return axios.put(`/services/${service.id}`, {service})
            .then(response => {
                dispatch( updateServiceSuccess(response.data) );
            })
            .then( () => callback() )
            .catch(error => {
                throw(error);
            })
    }
}
