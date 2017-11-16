import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { axiosInstance as axios } from '../../constants/axiosInstance';
import { bindActionCreators } from 'redux';

import {
    fetchServices,
    deleteService,
    updateService,
    createBarberServices,
    deleteBarberServices
} from "../../actions/service";

class ServiceAccordion extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            accordionIsOpen: false,
            barbersForServices: []
        };

        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
    };

    componentDidMount(){
        axios.get(`/barber_services/${this.state.id}`)
            .then(response => {
                this.setState({
                    barbersForServices: [...this.state.barbersForServices, ...response.data]
                });
            })
            .catch(error => {
                console.log("fucking error");
            })
    }

    toggleAccordion = () => {
        this.setState({ accordionIsOpen: !this.state.accordionIsOpen });
    }

    renderTextField = (field) => {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;

        return(
            <div className={ className }>
                <label className="form-label">{ field.label }</label>
                <input
                    type="text"
                    className="form-input"
                    { ...field.input }
                />
                <div className="form-input-hint">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }

    renderBarberList = () => {
        let barbers = new Object(this.props.barbers);
        let barbersForServices = this.state.barbersForServices;

        return Object.keys(barbers).map((key, index) => {
            let isChecked = false;

            // TODO: After create_barber_services invoked, or moving between tabs
            // doesn't invoke fetching. Maybe need to fetch services list again.
            for(let i = 0; i < barbersForServices.length; i++){
                if(barbers[key].id === barbersForServices[i].barber_user_id){
                    isChecked = true;
                }
            }

            return(
                <div className="form-group" key={index}>
                    <label className="form-switch">
                        <input
                            type="checkbox"
                            defaultChecked={isChecked}
                            onChange={ (e) => this.toggleSwitch(e, barbers[key].id) } />
                        <i className="form-icon"></i>
                        <span>{`${barbers[key].first_name} ${barbers[key].last_name}`}</span>
                    </label>
                </div>
            );
        });
    };

    onDelete = (id) => {
        this.props.deleteService(id, () => {
            this.props.fetchServices();
        });
    }

    onSubmit = (values) => {
        this.props.updateService(values, () => {
            this.props.fetchServices();
        });
    }

    toggleSwitch = (event, barber_id) => {
        let isSwitchedOn = event.target.checked;
        let service_id = this.state.id;

        if(isSwitchedOn){
            this.props.createBarberServices(service_id, barber_id);
        }else{
            this.props.deleteBarberServices(service_id, barber_id);
        }
    }

    renderForm = () => {
        const { handleSubmit } = this.props;

        return(
            <div className="columns">
                <div className="column">
                    <form onSubmit={ handleSubmit(this.onSubmit) }>
                        <Field
                            label="Service Name"
                            name="service_name"
                            component={ this.renderTextField }
                        />
                        <Field
                            label="Time"
                            name="time"
                            component={ this.renderTextField }
                        />
                        <Field
                            label="Price"
                            name="price"
                            component={ this.renderTextField }
                        />
                        <button type="submit" className="btn btn-brand mr10">Update</button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={ () => this.onDelete(this.props.id) }
                            >Delete</button>
                    </form>
                </div>
                <div className="column">
                    <div className="h6 line-behind-text">
                        <span>Assign Barbers to Service</span>
                    </div>
                    <div className="">
                        { this.renderBarberList() }
                    </div>
                </div>
            </div>
        );
    }

    render(){
        const activeClass = this.state.accordionIsOpen ? "d-block" : "d-none";
        const headerClass = this.state.accordionIsOpen ? "opened" : "closed";

        return(
            <div className="accordion">
                <div
                    className={`h6 accordion-header ${headerClass}`}
                    onClick={ () => this.toggleAccordion() }>
                    { this.props.service_name }
                </div>
                <div className={`p20 accordion-body ${activeClass}`}>
                    { this.renderForm() }
                </div>
            </div>
        );
    }
}

const validate = (values) =>{
    const errors = {};

    if(!values.service){
        errors.service = "This field is required!";
    }

    if(!values.price){
        errors.price = "This field is required!";
    }

    if(!values.time){
        errors.time = "This field is required!";
    }

    return errors;
};

const mapStateToProps = (state) => {
    return {
        barbers: state.barbers
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchServices,
        deleteService,
        updateService,
        createBarberServices,
        deleteBarberServices
    }, dispatch)
}


export default reduxForm({
    form: 'serviceForm',
    validate: validate,
})(
    connect(mapStateToProps, mapDispatchToProps)(ServiceAccordion)
);
