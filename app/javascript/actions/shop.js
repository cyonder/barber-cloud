import { axiosInstance as axios } from '../constants/axiosInstance';
import {
    FETCH_SHOPS
} from '../constants/actionTypes';

export const fetchShopsSuccess = (shops) => {
    return {
        type: FETCH_SHOPS,
        payload: shops
    }
}

export const fetchShops = () => {
    return (dispatch) => {
        return axios.get('/shops')
            .then(response => {
                dispatch( fetchShopsSuccess(response.data) );
            })
            .catch(error => {
                throw(error);
            });
    };
};
