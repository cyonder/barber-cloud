import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
    createService,
    fetchServices
} from "../../actions/service";
import { toggleModal } from '../../actions/ui';

class ServiceModal extends Component{
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    renderTextField = (field) => {
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

    onSubmit = (values) => {
        this.props.createService(values, () => {
            this.props.fetchServices();
        });
    }

    renderForm = () => {
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <Field
                    label="Service Name"
                    name="service_name"
                    component={ this.renderTextField }
                />
                <Field
                    label="Price"
                    name="price"
                    component={ this.renderTextField }
                />
                <Field
                    label="Time"
                    name="time"
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
                        <div className="modal-title h5">Add Service</div>
                        <button
                            onClick={ () => this.props.toggleModal() }
                            className="btn btn-clear float-right"/>
                    </div>
                    <div className="modal-body">
                        { this.renderForm() }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ui: state.ui
    };
}

export default reduxForm({
    form: 'createServiceForm'
})(
    connect(mapStateToProps, { toggleModal, createService, fetchServices })(ServiceModal)
);
