import { axiosInstance as axios } from '../constants/axiosInstance';
import {
    FETCH_BOOKING_DETAILS
} from '../constants/actionTypes';

export const fetchBookingDetailsSuccess = (details) => {
    return {
        type: FETCH_BOOKING_DETAILS,
        payload: details
    }
};

export const fetchBookingDetails = (id) => {
    return (dispatch) => {
        return axios.get(`/booking/${id}`)
            .then(response => {
                dispatch( fetchBookingDetailsSuccess(response.data) );
            })
            .catch(error => {
                console.log("There was a fucking error");
            })
    }
}
