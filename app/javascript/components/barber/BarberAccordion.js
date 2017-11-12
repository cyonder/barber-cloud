import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import {
    fetchBarbers ,
    deleteBarber,
    updateBarber
} from "../../actions/barber";

class BarberAccordion extends Component{
    constructor(){
        super();

        this.state = { accordionIsOpen: false };

        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    };

    toggleAccordion(){
        this.setState({ accordionIsOpen: !this.state.accordionIsOpen });
    }

    renderTextField(field){
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

    onDelete(id){
        this.props.deleteBarber(id, () => {
            this.props.fetchBarbers();
        });
    }

    onSubmit(values){
        this.props.updateBarber(values, () => {
            this.props.fetchBarbers();
        });
    }

    renderForm(){
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <div className="columns mb5">
                    <div className="column h80">
                        <Field
                            label="First Name"
                            name="first_name"
                            component={ this.renderTextField }
                        />
                    </div>
                    <div className="column h80">
                        <Field
                            label="Last Name"
                            name="last_name"
                            component={ this.renderTextField }
                        />
                    </div>
                </div>
                <div className="columns mb5">
                    <div className="column h80">
                        <Field
                            label="Phone Number"
                            name="phone"
                            component={ this.renderTextField }
                        />
                    </div>
                    <div className="column h80">
                        <Field
                            label="Email"
                            name="email"
                            component={ this.renderTextField }
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-brand mr10">Update</button>
                <button type="button" className="btn btn-info mr10">Freeze</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => this.onDelete(this.props.id) }
                    >Delete</button>
            </form>
        );
    }

    render(){
        const activeClass = this.state.accordionIsOpen ? "d-block" : "d-none";
        const headerClass = this.state.accordionIsOpen ? "opened" : "closed";

        return(
            <div className="accordion">
                <div className={`h6 accordion-header ${headerClass}`} onClick={ () => this.toggleAccordion() }>
                    { this.props.first_name + " " + this.props.last_name }
                </div>
                <div className={`p20 accordion-body ${activeClass}`}>
                    { this.renderForm() }
                </div>
            </div>
        );
    }
}

const validate = values =>{
    const errors = {};

    if(!values.first_name){
        errors.first_name = "This field is required!";
    }

    if(!values.last_name){
        errors.last_name = "This field is required!";
    }

    if(!values.phone){
        errors.phone = "This field is required!";
    }

    if(!values.email){
        errors.email = "This field is required!";
    }

    return errors;
};

export default reduxForm({
    form: 'barberForm',
    validate: validate,
})(
    connect(null, {
        fetchBarbers,
        deleteBarber,
        updateBarber
    })(BarberAccordion)
);
