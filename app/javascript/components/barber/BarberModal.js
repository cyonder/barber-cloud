import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
    createBarber,
    fetchBarbers
} from "../../actions/barber";

import { toggleModal } from "../../actions/ui";

class BarberModal extends Component{
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    renderTextField(field){
        return(
            <div className="form-group">
                <label className="form-label">{ field.label }</label>
                <input
                    type="text"
                    className="form-input"
                    { ...field.input }
                />
            </div>
        );
    }

    onSubmit(values){
        this.props.createBarber(values, () => {
            this.props.fetchBarbers();
        });
    }

    renderForm(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <Field
                    label="First Name"
                    name="first_name"
                    component={ this.renderTextField }
                />
                <Field
                    label="Last Name"
                    name="last_name"
                    component={ this.renderTextField }
                />
                <Field
                    label="Email"
                    name="email"
                    component={ this.renderTextField }
                />
                <Field
                    label="Phone"
                    name="phone"
                    component={ this.renderTextField }
                />
                <button type="submit" className="btn btn-brand">Add</button>
            </form>
        );
    }

    render(){
        const activeClass = this.props.ui.modalIsOpen ? "active" : "";
        return(
            <div className={`modal ${activeClass} modal-sm`}>
                <div className="modal-overlay"></div>
                <div className="modal-container">
                    <div className="modal-header">
                        <div className="modal-title h5">Add Barber</div>
                        <button onClick={ () => this.props.toggleModal() } className="btn btn-clear float-right"/>
                    </div>
                    <div className="modal-body">
                        { this.renderForm() }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        ui: state.ui
    };
}

export default reduxForm({
    form: 'createBarberForm'
})(
    connect(mapStateToProps, { createBarber, fetchBarbers, toggleModal })(BarberModal)
);
