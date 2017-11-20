import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookingServices } from '../../actions/booking';


class ChooseService extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBookingServices(this.props.values.barberID);
    }

    handleClick = (serviceID, serviceName) => {
        var values = { serviceID: serviceID }
        var stepData = { serviceName: serviceName }

        this.props.saveValues(values, stepData);
        this.props.nextStep();
    }

    renderServices = () => {
        let services = new Object(this.props.bookingServices);

        return Object.keys(services).map((key, index) => {
            return(
                <div key={index} className="column col-2 c-hand">
                    <div onClick={ () => this.handleClick(services[key].id, services[key].service_name) } className="card">
                        <div className="card-image">
                            <img src="http://fpoimg.com/500x500" className="img-responsive"/>
                        </div>
                        <div className="card-header">
                            <div className="card-title h5">{ services[key].service_name }</div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render(){
        return(
            <div className="container">
                <div className="columns">
                    { this.renderServices() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        bookingServices: state.booking.services
    };
}

export default connect(mapStateToProps, { fetchBookingServices })(ChooseService);
