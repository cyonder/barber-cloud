import React, { Component } from 'react';

class Reserve extends Component{
    render(){
        return(
            <div className="reserve">
                <div className="datePicker-wrapper">
                    <h5>Barber Shop: { this.props.stepData.shopName } </h5>
                    <h5>Barber: { this.props.stepData.barberName } </h5>
                    <h5>Service: { this.props.stepData.serviceName } </h5>
                    <h5>Booked Date: { this.props.stepData.bookedDate }</h5>
                    <h5>Booked Time: { this.props.stepData.bookedTime }</h5>
                </div>
            </div>
        );
    }
}

export default Reserve;
