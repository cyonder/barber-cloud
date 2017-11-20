import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookingBarbers } from '../../actions/booking';

class ChooseBarber extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBookingBarbers(this.props.values.shopID);
    }

    handleClick = (barberID, barberName) => {
        var values = { barberID: barberID }
        var stepData = { barberName: barberName }

        this.props.saveValues(values, stepData);
        this.props.nextStep();
    }

    renderBarbers = () => {
        let barbers = new Object(this.props.bookingBarbers);

        return Object.keys(barbers).map((key, index) => {
            return(
                <div key={index} className="column col-2 c-hand">
                    <div onClick={ () => this.handleClick(barbers[key].id, barbers[key].first_name + " " + barbers[key].last_name) } className="card">
                        <div className="card-image">
                            <img src="http://fpoimg.com/500x500" className="img-responsive"/>
                        </div>
                        <div className="card-header">
                            <div className="card-title h5">{ barbers[key].first_name + " " + barbers[key].last_name }</div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div className="container">
                <div className="columns">
                    { this.renderBarbers() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        bookingBarbers: state.booking.barbers
    };
}

export default connect(mapStateToProps, { fetchBookingBarbers })(ChooseBarber);
