import React, { Component } from 'react';

class ChooseService extends Component{
    constructor(props){
        super(props);
    }

    nextStep = (service_id) => {
        var data = {
            service: service_id
        }

        this.props.saveValues(data);
        this.props.nextStep();
    }

    renderServices = () => {
        let services = new Object(this.props.services);

        return Object.keys(services).map((key, index) => {
            return(
                <div key={index} className="column col-2">
                    <div onClick={ () => this.nextStep(services[key].id) } className="card">
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

export default ChooseService;
