import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ChooseShop from './ChooseShop';
import ChooseBarber from './ChooseBarber';
import ChooseService from './ChooseService';
import ChooseTime from './ChooseTime';
import Reserve from './Reserve';

import moment from 'moment';

class Booking extends Component{
    constructor(){
        super();
        this.state = {
            step: 1,
            values: {
                shopID: null,
                barberID: null,
                serviceID: null,
                bookedDate: null,
                bookedTime: null
            },
            stepData: {
                shopName: null,
                barberName: null,
                serviceName: null,
                bookedDate: null,
                bookedTime: ""
            }
        }
        this.saveValues = this.saveValues.bind(this)
    }

    setStep = (step) => {
        this.setState({
            step: step
        })
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

    saveValues = (values, stepData) => {
        this.setState({
            values: { ...this.state.values, ...values },
            stepData: { ...this.state.stepData, ...stepData }
        })
    }

    renderAStep = () => {
        switch(this.state.step){
            case 1:
                return <ChooseShop    values     = { this.state.values }
                                      nextStep   = { this.nextStep     }
                                      saveValues = { this.saveValues   } />
            case 2:
                return <ChooseBarber  values     = { this.state.values }
                                      nextStep   = { this.nextStep     }
                                      saveValues = { this.saveValues   } />
            case 3:
                return <ChooseService values     = { this.state.values }
                                      nextStep   = { this.nextStep     }
                                      saveValues = { this.saveValues   } />
            case 4:
                return <ChooseTime    values     = { this.state.values }
                                      nextStep   = { this.nextStep     }
                                      saveValues = { this.saveValues   } />
            case 5:
                return <Reserve       stepData   = { this.state.stepData } />
        }
    }

    renderStepBar = () => {
        let activeClass = "step-item active";
        let step = this.state.step;

        return(
            <div id="step-bar">
                <button className="btn btn-brand" onClick={ this.previousStep }>Previous Step</button>
                <ul className="step">
                    <li className={step == 1 ? activeClass : "step-item"}>
                        <a onClick={ this.state.values.shopID ? () => this.setStep(1) : null }>
                           { this.state.values.shopID ? this.state.stepData.shopName : "Choose Shop" }
                        </a>
                    </li>
                    <li className={step == 2 ? activeClass : "step-item"}>
                        <a onClick={ this.state.values.barberID ? () => this.setStep(2) : null }>
                            { this.state.values.barberID ? this.state.stepData.barberName : "Choose Barber" }
                        </a>
                    </li>
                    <li className={step == 3 ? activeClass : "step-item"}>
                        <a onClick={ this.state.values.serviceID ? () => this.setStep(3) : null }>
                            { this.state.values.serviceID ? this.state.stepData.serviceName : "Choose Service" }
                        </a>
                    </li>
                    <li className={step == 4 ? activeClass : "step-item"}>
                        <a onClick={ this.state.values.timeID ? () => this.setStep(4) : null }>
                            { this.state.values.bookedDate ? this.state.stepData.bookedDate + " at " + this.state.stepData.bookedTime : "Choose Time" }
                        </a>
                    </li>
                    <li className={step == 5 ? activeClass : "step-item"}>
                        <a onClick={ () => this.setStep(5) }>Reserve</a>
                    </li>
                </ul>
            </div>
        );
    }

    renderSearchBar = () => {
        return(
            <div id="step-bar">
                <div className="input-group col-8">
                    <input type="text" className="form-input" placeholder="Search Barber Shop"/>
                    <select className="form-select">
                        <option>Toronto</option>
                        <option>Montreal</option>
                        <option>Vancouver</option>
                        <option>Ottawa</option>
                        <option>Quebec City</option>
                    </select>
                </div>
            </div>
        );
    }

    render(){
        let step = this.state.step;

        return(
            <div>
                { step === 1 ? this.renderSearchBar() : this.renderStepBar() }
                { this.renderAStep() }
            </div>
        );
    }
}

export default Booking;
