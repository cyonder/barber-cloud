import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
    fetchServices,
    deleteService,
    updateService
} from '../../actions/service';

class ServiceAccordion extends Component{
    constructor(){
        super();
        this.state = { accordionIsOpen: false };

        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    };

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

export default reduxForm({
    form: 'serviceForm',
    validate: validate,
})(
    connect(null, {
        fetchServices,
        deleteService,
        updateService
    })(ServiceAccordion)
);
