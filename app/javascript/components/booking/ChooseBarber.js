import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChooseBarber extends Component{
    constructor(props){
        super(props);
    }

    nextStep = (shop_id, barber_id) => {
        var data = {
            shop: shop_id,
            barber: barber_id
        }

        this.props.saveValues(data);
        this.props.nextStep();
    }

    renderBarbers = () => {
        let barbers = new Object(this.props.barbers);

        return Object.keys(barbers).map((key, index) => {
            return(
                <div key={index} className="column col-2">
                    <div onClick={ () => this.nextStep(barbers[key].id, barbers[key].shop_id) } className="card">
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

export default ChooseBarber;
