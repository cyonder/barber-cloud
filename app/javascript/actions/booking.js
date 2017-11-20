import { axiosInstance as axios } from '../constants/axiosInstance';
import {
    FETCH_BOOKING_BARBERS,
    FETCH_BOOKING_SERVICES
} from '../constants/actionTypes';

export const fetchBookingBarbersSuccess = (bookingBarbers) => {
    return {
        type: FETCH_BOOKING_BARBERS,
        payload: bookingBarbers
    }
};

export const fetchBookingServicesSuccess = (bookingServices) => {
    return {
        type: FETCH_BOOKING_SERVICES,
        payload: bookingServices
    }
};

export const fetchBookingBarbers = (shop_id) => {
    return (dispatch) => {
        return axios.get(`/booking/${shop_id}`)
            .then(response => {
                dispatch( fetchBookingBarbersSuccess(response.data) );
            })
            .catch(error => {
                console.log("Error");
            })
    }
}

export const fetchBookingServices = (barber_id) => {
    return (dispatch) => {
        return axios.get(`/booking/services/${barber_id}`)
            .then(response => {
                dispatch( fetchBookingServicesSuccess(response.data) );
            })
            .catch(error => {
                console.log("Error");
            })
    }
}
