import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChooseBarber from './ChooseBarber';
import ChooseService from './ChooseService';
import ChooseTime from './ChooseTime';
import Reserve from './Reserve';

import { fetchBookingDetails } from '../../actions/booking';

class Booking extends Component{
    constructor(){
        super();
        this.state = {
            step: 1,
            values: {
                shop: null,
                barber: null,
                service: null,
                time: null
            }
        }
        this.saveValues = this.saveValues.bind(this)
    }

    componentDidMount(){
        this.props.fetchBookingDetails(this.props.match.params.id);
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    previousStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    saveValues = (values) => {
        this.setState({
            values: { ...this.state.values, ...values }
        })
    }

    render(){
        switch(this.state.step){
            case 1:
                return <ChooseBarber barbers = { this.props.bookingBarbers }
                                     values = { this.state.values }
                                     nextStep = { this.nextStep }
                                     previousStep = { this.previousStep }
                                     saveValues = { this.saveValues }/>
            case 2:
                return <ChooseService services = { this.props.bookingServices }
                                      values = { this.state.values }
                                      nextStep = { this.nextStep }
                                      previousStep = { this.previousStep }
                                      saveValues = { this.saveValues }/>
            case 3:
                return <ChooseTime />
            case 4:
                return <Reserve />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        bookingBarbers: state.booking.barbers,
        bookingServices: state.booking.services
    }
}

export default connect(mapStateToProps, { fetchBookingDetails })(Booking);
